import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.ips.state.nc.us/ips/BidList.aspx', {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const html = await response.text();

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    console.error('Fetch failed:', error);
    res.status(500).json({ error: 'Failed to fetch IPS data.' });
  }
}

