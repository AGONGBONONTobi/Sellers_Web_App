import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET : Récupérer tous les vendeurs (pour tester dans le navigateur)
export async function GET() {
  try {
    const vendors = await prisma.vendor.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, vendors });
  } catch (error) {
    console.error('Erreur GET:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST : Créer un nouveau vendeur
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const vendor = await prisma.vendor.create({
      data: {
        businessName: body.businessName,
        whatsapp: body.whatsapp,
        location: body.location,
        category: body.category,
        exported: body.exported,
      },
    });
    
    return NextResponse.json({ success: true, vendor }, { status: 201 });
  } catch (error) {
    console.error('Erreur POST:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}