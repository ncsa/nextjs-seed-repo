import { NextResponse } from 'next/server';

export interface HealthMessageResponse {
  message: string;
}

export async function GET(): Promise<NextResponse<HealthMessageResponse>> {
  return NextResponse.json({ message: 'Healthy v1!' });
}