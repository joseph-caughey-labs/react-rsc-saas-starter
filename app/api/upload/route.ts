import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function POST(_req: NextRequest) {
  const bucket = process.env.AWS_S3_BUCKET;
  const region = process.env.AWS_REGION;
  if (!bucket || !region) return NextResponse.json({ error: 'S3 not configured' }, { status: 500 });

  const client = new S3Client({ region });
  const key = `uploads/${Date.now()}-${Math.random().toString(36).slice(2)}.bin`;
  const cmd = new PutObjectCommand({ Bucket: bucket, Key: key, ContentType: 'application/octet-stream' });
  const url = await getSignedUrl(client, cmd, { expiresIn: 60 });
  return NextResponse.json({ url, key, bucket, method: 'PUT' });
}
