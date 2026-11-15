<div align="center">

# I build privacy tools and apps that don't phone home.

Offline-first, free and open source, from Germany.<br>
[www.tn3w.dev](https://www.tn3w.dev/) · [tn3w@protonmail.com](mailto:tn3w@protonmail.com)

</div>

---

### [Shelf](https://shelf.tn3w.dev/) · Your books, offline.

A book catalogue that lives on your phone: typo-tolerant search in airplane mode, an
on-device cover scanner, shelves, streaks, goals and a reader for EPUB, MOBI, PDF and comics.
No account, no ads, no trackers. [Download APK](https://github.com/tn3w/Shelf/releases/latest/download/shelf.apk)
· [F-Droid](https://f-droid.org/packages/dev.tn3w.shelf/)

<p>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://www.tn3w.dev/img/shelf-library-dark.webp"><img src="https://www.tn3w.dev/img/shelf-library-light.webp" width="200" alt="Shelf library"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://www.tn3w.dev/img/shelf-home-dark.webp"><img src="https://www.tn3w.dev/img/shelf-home-light.webp" width="200" alt="Shelf home"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://www.tn3w.dev/img/shelf-explore-dark.webp"><img src="https://www.tn3w.dev/img/shelf-explore-light.webp" width="200" alt="Shelf explore"></picture>
</p>

### [iplore](https://github.com/tn3w/iplore) · Every IP address, answered locally.

Location, operator and abuse reputation for any IPv4 or IPv6 address out of one small file,
rebuilt weekly from 479 open sources. No API key, no rate limit.
[Try it in the browser](https://iplore.tn3w.dev/).

```console
$ iplore iplore-full.ipl 1.1.1.1
{"place": {"city": {"name": "Sydney"}}, "network": {"asn": 13335, "operator": {"company": "Cloudflare, Inc."}}}
```

### [ProtonVPN-IPs](https://github.com/tn3w/ProtonVPN-IPs) · Every exit, every day.

Every IP address ProtonVPN exits and enters from, refreshed daily as plain text and JSON.
[Check an address](https://is-protonvpn.tn3w.dev/). Same idea for
[TunnelBear](https://github.com/tn3w/TunnelBear-IPs) and
[Windscribe](https://github.com/tn3w/Windscribe-IPs), plus abuse contacts per ASN in
[asn-abuse](https://github.com/tn3w/asn-abuse).

<picture><source media="(prefers-color-scheme: dark)" srcset="https://www.tn3w.dev/img/protonvpn-dark.svg"><img src="https://www.tn3w.dev/img/protonvpn-light.svg" width="640" alt="ProtonVPN exit and entry IP counts, exit IPs by country"></picture>

### [flask-Vouch](https://flask-vouch.tn3w.dev/) · Bots get a challenge, people get through.

Bot-challenge middleware for Flask: unknown visitors solve a proof of work once and get a
signed cookie. Bot checks without puzzles for any stack live in
[libcaptcha](https://github.com/libcaptcha).

```python
vouch = Vouch(app, secret="change-me")
```

### [YouTube LevelUp](https://addons.mozilla.org/en-US/firefox/addon/youtube-levelup/) · YouTube, the way it should work.

No Shorts, dislikes back, sponsors skipped, original audio, background playback and no
members-only clutter. Only want Shorts gone?
[Shortsless](https://addons.mozilla.org/en-US/firefox/addon/shortsless/).

### [uaid](https://github.com/tn3w/uaid) · Know your bots.

Identifies 4,500+ crawlers by user agent with plain substring matching, and publishes daily
[robots.txt stats](https://github.com/tn3w/uaid/releases/tag/robots) for the top 25,000
sites. Also as [is-crawler](https://github.com/tn3w/is-crawler) (Python) and
[iscrawl](https://github.com/tn3w/iscrawl) (Rust).

```python
uaid.identify("Mozilla/5.0 (compatible; Googlebot/2.1)")["tags"]  # ['search-engine']
```

### More

| | |
| --- | --- |
| [stem](https://stem.tn3w.dev/) | Tor control protocol for Rust, type-safe and async |
| [vanguards-rs](https://vanguards.tn3w.dev/) | Guard-discovery protection for Tor onion services |
| [OnionDock](https://github.com/tn3w/OnionDock) | Deploy any web app as a hardened Tor onion service |
| [genom](https://genom.tn3w.dev/) | Fast reverse geocoding with enriched location data |
| [rshield](https://github.com/tn3w/rshield) | Actix-web middleware: proof of work or CAPTCHA for bad IPs |
| [IP2X](https://github.com/tn3w/IP2X) | Public IP intel repacked for fast offline use |
| [OpenAge](https://tn3w.github.io/OpenAge/) | Age check that keeps face processing on the device |
| [cloudflare-skip](https://github.com/tn3w/cloudflare-skip) | Solve a Cloudflare challenge once, reuse it over HTTP |
| [plymouth-theme-arch-ascii](https://github.com/tn3w/plymouth-theme-arch-ascii) | Rainbow Arch Linux ASCII boot splash |

<div align="center">

---

[PyPI](https://pypi.org/user/tn3w.dev/) · [crates.io](https://crates.io/users/tn3w) ·
[Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/user/18866191/) ·
[Docker Hub](https://hub.docker.com/u/tn3w) · [Buy me a coffee](https://buymeacoffee.com/tn3w)

</div>
