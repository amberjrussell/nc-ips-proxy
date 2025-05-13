export default async function handler(req, res) {
  const fetch = (await import('node-fetch')).default;

  const r = await fetch('https://www.ips.state.nc.us/ips/BidList.aspx', {
    headers: {
      'User-Agent': 'Mozilla/5.0'
    }
  });

  const html = await r.text();
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
