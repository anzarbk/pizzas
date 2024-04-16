import {S3Client} from '@aws-sdk/client-s3'

export async function POST(req){
    const data = await req.formData();
   if(data.get('file')){
    const file = data.get('file');
    const s3Client = new S3Client({
        region: 'us-east-1',
        credentials: {
          accessKeyId: process.env.MY_AWS_ACCESS_KEY,
          secretAccessKey: process.env.MY_AWS_SECRET_KEY,
        },
      });
   }
    return Response.json({ message: "User created" }, { status: 200 });
}