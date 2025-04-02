import { NextResponse } from 'next/server';
import categories from '@/data/categories.json';

export async function GET() {
  try {
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
