import express from 'express';
import { PrismaClient } from '@prisma/client';

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
      data: {
        businessName,
        whatsapp,
        location,
        category,
        exported: exported === 'yes',
      },
    });

    res.status(201).json(vendor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(3001, () => {
  console.log('API running on http://localhost:3001');
});