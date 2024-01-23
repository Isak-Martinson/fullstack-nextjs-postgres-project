import axios, { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const response = await axios.post(
    'http://localhost:9000/api/register',
    data.body,
    { validateStatus: () => true }
  );
  return new Response(JSON.stringify(response.data));
}
