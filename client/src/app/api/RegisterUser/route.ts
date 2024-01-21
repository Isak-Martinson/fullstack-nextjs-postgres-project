import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  // const response = await axios.post('http://localhost:9000/api/register');
  const body = await req.json();
  console.log(body);
  return new Response(body);
  //   return new Response(JSON.stringify(data));
}
