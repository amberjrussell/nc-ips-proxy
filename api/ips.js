import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.ips.state.nc.us/ips/BidList.aspx", {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Connection": "keep-alive",
      },
    });

    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.statusText}`);
    }

    const html = await response.text();
    res.status(200).send(html);
  } catch (error) {
    console.error("Error fetching IPS page:", error.message);
    res.status(500).json({ error: "Failed to fetch IPS data." });
  }
}



