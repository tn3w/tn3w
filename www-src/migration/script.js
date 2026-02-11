const migrationReasons = {
    Humanitarian: 329120,
    Family: 108500,
    Work: 72400,
    Education: 58775,
};

const topCountries = {
    Ukraine: 260817,
    Romania: 175294,
    Syria: 125447,
    Turkey: 121444,
    Poland: 100429,
    Afghanistan: 56818,
    India: 54664,
    Bulgaria: 57960,
    'Russian Federation': 40573,
    Moldova: 32637,
};

const countryColors = {
    Ukraine: '#FF6B7A',
    Romania: '#FFE066',
    Syria: '#FFE066',
    Turkey: '#FFE066',
    Poland: '#FFE066',
    Afghanistan: '#FFA94D',
    India: '#90D96F',
    Bulgaria: '#B794F6',
    'Russian Federation': '#66C7F4',
    Moldova: '#66C7F4',
};

const countryNameMap = {
    Ukraine: 'Ukraine',
    Romania: 'Romania',
    Syria: 'Syrian Arab Republic',
    Turkey: 'Turkey',
    Poland: 'Poland',
    Afghanistan: 'Afghanistan',
    India: 'India',
    Bulgaria: 'Bulgaria',
    'Russian Federation': 'Russia',
    Moldova: 'Moldova',
};

const createChart = () => {
    const ctx = document.getElementById('reasonsChart').getContext('2d');
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(migrationReasons),
            datasets: [
                {
                    data: Object.values(migrationReasons),
                    backgroundColor: ['#E3000F', '#64A12D', '#FFED00', '#009EE0'],
                    borderWidth: 0,
                    spacing: 2,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { family: "'DM Mono', monospace", size: 11 },
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        generateLabels: (chart) => {
                            const { labels, datasets } = chart.data;
                            return labels.map((label, i) => ({
                                text: `${label}: ${datasets[0].data[i].toLocaleString('en-US')}`,
                                fillStyle: datasets[0].backgroundColor[i],
                                hidden: false,
                                index: i,
                            }));
                        },
                    },
                },
                tooltip: {
                    backgroundColor: '#1A1A1A',
                    titleFont: {
                        family: "'Syne', sans-serif",
                        size: 13,
                        weight: 700,
                    },
                    bodyFont: {
                        family: "'DM Mono', monospace",
                        size: 12,
                    },
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: (context) => {
                            const value = context.parsed.toLocaleString('en-US');
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return ` ${value} (${percentage}%)`;
                        },
                    },
                },
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1200,
                easing: 'easeOutQuart',
                delay: 600,
            },
        },
    });
};

const getCountryColor = (countryName) => {
    for (const [key, mappedName] of Object.entries(countryNameMap)) {
        if (countryName === mappedName) return countryColors[key];
    }
    return '#E8E8E8';
};

const isHighlighted = (countryName) => Object.values(countryNameMap).includes(countryName);

const getCountryTooltip = (countryName) => {
    for (const [key, mappedName] of Object.entries(countryNameMap)) {
        if (countryName === mappedName) {
            return `${key}: ${topCountries[key].toLocaleString('en-US')} 
arrivals`;
        }
    }
    return countryName;
};

const getLabelPosition = (d, centroid) => {
    const countryName = d.properties.name;
    const offsets = {
        Russia: [-600, 200],
        India: [-25, -45],
    };
    const [xOffset = 0, yOffset = 0] = offsets[countryName] || [0, 0];
    return `translate(${centroid[0] + xOffset}, ${centroid[1] + yOffset})`;
};

const addCountryLabel = (text, d) => {
    const countryName = d.properties.name;
    for (const [key, mappedName] of Object.entries(countryNameMap)) {
        if (countryName !== mappedName) continue;

        text.append('tspan')
            .attr('x', 0)
            .attr('dy', '-0.3em')
            .style('font-weight', '700')
            .text(key);

        text.append('tspan')
            .attr('x', 0)
            .attr('dy', '1.2em')
            .style('font-size', '10px')
            .style('font-weight', '600')
            .style('fill', '#1A1A1A')
            .text(topCountries[key].toLocaleString('en-US'));
    }
};

const createMap = () => {
    const mapElement = document.getElementById('map');
    const width = mapElement.clientWidth;
    const height = mapElement.clientHeight;

    const svg = d3.select('#map').append('svg').attr('width', width).attr('height', height);

    const projection = d3
        .geoMercator()
        .center([35, 45])
        .scale(width * 0.65)
        .translate([width / 2.5, height / 2]);

    const path = d3.geoPath().projection(projection);

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        .then((world) => {
            const countries = topojson.feature(world, world.objects.countries);

            const paths = svg
                .selectAll('path')
                .data(countries.features)
                .enter()
                .append('path')
                .attr('class', 'country')
                .attr('d', path)
                .style('fill', (d) => getCountryColor(d.properties.name))
                .classed('highlighted', (d) => isHighlighted(d.properties.name))
                .style('opacity', 0);

            paths.append('title').text((d) => getCountryTooltip(d.properties.name));

            paths
                .transition()
                .duration(800)
                .delay((d, i) => i * 2)
                .style('opacity', 1);

            const highlightedCountries = countries.features.filter((d) =>
                isHighlighted(d.properties.name)
            );

            const labels = svg
                .selectAll('.country-label')
                .data(highlightedCountries)
                .enter()
                .append('g')
                .attr('class', 'country-label');

            labels
                .append('text')
                .attr('transform', (d) => getLabelPosition(d, path.centroid(d)))
                .style('text-anchor', 'middle')
                .style('font-family', "'DM Mono', monospace")
                .style('font-size', '10px')
                .style('font-weight', '500')
                .style('fill', '#1A1A1A')
                .style('pointer-events', 'none')
                .style('opacity', 0)
                .each(function (d) {
                    addCountryLabel(d3.select(this), d);
                })
                .transition()
                .duration(600)
                .delay(1000)
                .style('opacity', 1);
        })
        .catch((error) => {
            console.error('Error loading map:', error);
            mapElement.innerHTML = `<div style="display:flex;
align-items:center;justify-content:center;height:100%;color:#666;">
Map could not be loaded</div>`;
        });
};

createChart();
createMap();
