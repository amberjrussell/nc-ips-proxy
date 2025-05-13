import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.ips.state.nc.us/ips/BidList.aspx", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
        "Accept": "text/html",
      },
    });

    const html = await response.text();
    res.status(200).send(html);

  } catch (error) {
    console.error("Proxy fetch error:", error.message);
    res.status(500).json({ error: "Failed to fetch IPS data." });
  }
}


