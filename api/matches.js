export default async function handler(req, res) {
  // C'est ici que Vercel va injecter ta variable d'environnement de manière sécurisée
  const apiKey = process.env.FOOTBALL_DATA_API_KEY; 
  
  try {
    const response = await fetch('https://api.football-data.org/v4/competitions/WC/matches', {
      headers: { 'X-Auth-Token': apiKey }
    });
    
    const data = await response.json();
    
    // On renvoie les données au format JSON à ton index.html
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
