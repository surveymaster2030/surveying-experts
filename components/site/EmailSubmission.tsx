'use client';
import {useRef,useState} from 'react';
import {Locale} from '@/lib/site';

export function EmailSubmission({locale,message}:{locale:Locale;message:string}) {
 const ar=locale==='ar';
 const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');
 const [email,setEmail]=useState('');
 const requestId=useRef('');
 async function submit(event:React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  if(status==='sending'||status==='sent')return;
  const fields=new FormData(event.currentTarget);
  requestId.current ||= crypto.randomUUID();
  setStatus('sending');
  try {
   const response=await fetch('/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:fields.get('email'),website:fields.get('website'),message,locale,requestId:requestId.current})});
   if(!response.ok)throw new Error('Submission failed');
   setStatus('sent');
  } catch {setStatus('error');}
 }
 return <div className="email-submission">
  <h3>{ar?'إرسال الطلب بالبريد الإلكتروني':'Submit your enquiry by email'}</h3>
  {status==='sent'?<p role="status">{ar?'تم إرسال طلبك لفريقنا بنجاح. سنتواصل معك على بيانات التواصل التي أرسلتها.':'Your enquiry has been sent to our team. We will use your contact details to get back to you.'}</p>:<form onSubmit={submit}>
   <div><label htmlFor="reply-email">{ar?'بريدك الإلكتروني للرد *':'Your email for our reply *'}</label><input id="reply-email" name="email" type="email" autoComplete="email" dir="ltr" required maxLength={254} value={email} disabled={status==='sending'} onChange={event=>{setEmail(event.target.value);requestId.current='';}}/></div>
   <div hidden><label htmlFor="enquiry-website">Website</label><input id="enquiry-website" name="website" tabIndex={-1} autoComplete="off"/></div>
   <p className="form-note">{ar?'سيُرسل الطلب مباشرة من الموقع. لا تحتاج فتح تطبيق البريد.':'Submit directly from this website without opening an email app.'}</p>
   <button className="button navy" type="submit" disabled={status==='sending'}>{status==='sending'?(ar?'جارٍ الإرسال…':'Sending…'):(ar?'إرسال الطلب':'Submit enquiry')}</button>
   {status==='error'&&<p role="alert">{ar?'تعذّر إرسال الطلب الآن. تفاصيلك محفوظة هنا؛ حاول مجددًا أو استخدم خيار واتساب.':'We could not send your enquiry. Your details are still here; try again or use WhatsApp.'}</p>}
  </form>}
 </div>;
}
