#!/usr/bin/env python3
"""
Auto-update README.md with latest repository information from GitHub API.
"""

import os
import re
import requests
from datetime import datetime, timezone

GITHUB_USERNAME = "tn3w"
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")

HEADERS = {
    "Accept": "application/vnd.github.v3+json",
    "Authorization": f"Bearer {GITHUB_TOKEN}" if GITHUB_TOKEN else None
}

# Projects to track with their categories
TRACKED_REPOS = {
    "tor_protocol": ["stem-rs", "vanguards-rs", "OnionDock"],
    "ip_security": ["IPSet", "ProtonVPN-IPs", "TunnelBear-IPs", "IPApi", "flask-realip"],
    "bot_protection": ["flask-Humanify", "TrueClick", "flask_AuthGenius"],
    "music_media": ["lyriq", "lyrics-prompter", "youtube_music_unbound"],
    "browser_extensions": ["YouTube-LevelUp", "YouTube-Shorts-Blocker"],
    "other": ["cloudflare-ddns", "Redux", "ytbpy", "repo", "plymouth-theme-arch-ascii"]
}


def get_repo_info(repo_name: str) -> dict | None:
    """Fetch repository information from GitHub API."""
    url = f"https://api.github.com/repos/{GITHUB_USERNAME}/{repo_name}"
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code == 200:
            return response.json()
    except requests.RequestException:
        pass
    return None


def format_stars(stars: int) -> str:
    """Format star count for display."""
    if stars >= 1:
        return f" &nbsp; ⭐ {stars}"
    return ""


def update_last_updated(content: str) -> str:
    """Update the last updated timestamp in README."""
    now = datetime.now(timezone.utc)
    formatted_date = now.strftime("%B %d, %Y")
    
    pattern = r"<!-- LAST_UPDATED -->.*?<!-- /LAST_UPDATED -->"
    replacement = f"<!-- LAST_UPDATED -->{formatted_date}<!-- /LAST_UPDATED -->"
    
    return re.sub(pattern, replacement, content)


def update_repo_stars(content: str, repo_name: str, stars: int) -> str:
    """Update star count for a specific repository."""
    # Pattern to match repo link with optional star badge
    pattern = rf"(\[{re.escape(repo_name)}\]\(https://github\.com/{GITHUB_USERNAME}/{re.escape(repo_name)}\))(\s*&nbsp;\s*⭐\s*\d+)?"
    
    star_text = format_stars(stars)
    replacement = rf"\1{star_text}"
    
    return re.sub(pattern, replacement, content)


def main():
    """Main function to update README."""
    readme_path = "README.md"
    
    with open(readme_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Update star counts for all tracked repos
    all_repos = []
    for repos in TRACKED_REPOS.values():
        all_repos.extend(repos)
    
    for repo_name in all_repos:
        info = get_repo_info(repo_name)
        if info:
            stars = info.get("stargazers_count", 0)
            content = update_repo_stars(content, repo_name, stars)
            print(f"✓ Updated {repo_name}: {stars} stars")
        else:
            print(f"✗ Could not fetch {repo_name}")
    
    # Update last updated timestamp
    content = update_last_updated(content)
    
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    print("\n✅ README.md updated successfully!")


if __name__ == "__main__":
    main()
