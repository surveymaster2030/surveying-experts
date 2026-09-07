import {Locale,whatsapp} from '@/lib/site';

export function FloatingWhatsApp({locale}:{locale:Locale}) {
 const label=locale==='ar'?'تواصل معنا على واتساب':'Chat with us on WhatsApp';
 return <a className="floating-whatsapp" href={whatsapp(locale==='ar'?'مرحبًا، أود التواصل مع فريق خبراء المساحة.':'Hello, I would like to speak with the Surveying Experts team.')} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.5A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="m8.2 7.2 1.5 2.5-1 1.1c.8 1.7 1.8 2.6 3.5 3.4l1.1-1 2.5 1.4c-.2 1.5-1.2 2.1-2.5 1.8-3.6-.8-6.6-3.8-7-6.8-.2-1.2.5-2.2 1.9-2.4Z"/></svg><span>{locale==='ar'?'خلينا نتكلم':'Let’s talk'}</span></a>;
}
