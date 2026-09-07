import {NextRequest,NextResponse} from 'next/server';
import {EMAIL} from '@/lib/site';

export async function POST(request:NextRequest) {
 let origin:URL;
 try {origin=new URL(request.headers.get('origin')||'');}catch{return NextResponse.json({error:'Forbidden'},{status:403});}
 if(!['http:','https:'].includes(origin.protocol)||origin.host!==request.headers.get('host'))return NextResponse.json({error:'Forbidden'},{status:403});
 if(Number(request.headers.get('content-length')||0)>24000)return NextResponse.json({error:'Too large'},{status:413});
 let data;
 try {const raw=await request.text();if(raw.length>24000)return NextResponse.json({error:'Too large'},{status:413});data=JSON.parse(raw);}catch{return NextResponse.json({error:'Invalid request'},{status:400});}
 if(!data||typeof data!=='object'||data.website||typeof data.email!=='string'||data.email.length>254||!/^\S+@[^\s@]+\.[^\s@]+$/.test(data.email)||/[\r\n]/.test(data.email)||typeof data.message!=='string'||data.message.length<10||data.message.length>6000||!['ar','en'].includes(data.locale)||typeof data.requestId!=='string'||!/^[\da-f-]{36}$/i.test(data.requestId))return NextResponse.json({error:'Invalid fields'},{status:400});
 const key=process.env.RESEND_API_KEY,from=process.env.ENQUIRY_FROM_EMAIL;
 if(!key||!from)return NextResponse.json({error:'Email unavailable'},{status:503});
 try {
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json','Idempotency-Key':`enquiry/${data.requestId}`},body:JSON.stringify({from,to:[EMAIL],reply_to:data.email,subject:data.locale==='ar'?'طلب جديد من الموقع الرسمي':'New website enquiry',text:`${data.message}\n\nReply email: ${data.email}`}),signal:AbortSignal.timeout(15000)});
  const result=await response.json();
  if(!response.ok||!result.id)return NextResponse.json({error:'Email unavailable'},{status:502});
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:'Email unavailable'},{status:502});}
}
