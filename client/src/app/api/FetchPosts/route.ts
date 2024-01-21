import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await axios.get('http://localhost:9000/api/get-posts');
  const data = response.data;
  return new Response(JSON.stringify(data));
}
