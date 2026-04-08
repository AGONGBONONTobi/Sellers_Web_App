import express from 'express';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post('/api/vendors', async (req, res) => {
  try {
    const { businessName, whatsapp, location, category, exported } = req.body;

    if (!businessName || !whatsapp) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }

    const vendor = await prisma.vendor.create({
      data: { businessName, whatsapp, location, category, exported: exported === 'yes' },
    });

    res.status(201).json(vendor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Sert le frontend buildé
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));