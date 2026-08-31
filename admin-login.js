export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { username, password } = req.body;

  // Sıfır Veri Sızıntısı: Doğrulama sunucu tarafında yapılır
  if (username === 'alman3547' && password === 'alman3547') {
    return res.status(200).json({ success: true, token: 'SESSION_TOKEN_AHMETBEY_SECURE_2026' });
  }

  return res.status(401).json({ success: false, message: 'Hatalı Yetkili Bilgisi' });
}
