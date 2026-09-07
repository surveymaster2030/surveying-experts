'use client';
import {Suspense,useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname,useSearchParams} from 'next/navigation';
import {ArrowUpRight, Menu, X, Phone, ArrowRight} from 'lucide-react';
import {Locale, pathFor, PHONE, STORE} from '@/lib/site';

function LanguageLink({locale,clean}:{locale:Locale;clean:string}) {
 const query=useSearchParams().toString(),other=locale==='ar'?'en':'ar';
 return <a href={pathFor(other,clean)+(query?'?'+query:'')} hrefLang={other} lang={other} className="language">{other==='en'?'English':'العربية'}</a>;
}

export function Navigation({locale}:{locale:Locale}) {
 const ar=locale==='ar',pathname=usePathname();
 const [open,setOpen]=useState(false);
 const toggle=useRef<HTMLButtonElement>(null);
 const clean=(pathname==='/en'?'':pathname).replace(/^\/ar(?=\/|$)/,'');
 useEffect(()=>{setOpen(false)},[pathname]);
 useEffect(()=>{if(!open)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus()}};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[open]);
 const links=[['/solutions',ar?'الحلول والأجهزة':'Solutions & equipment'],['/maintenance-calibration',ar?'الصيانة والخدمات':'Service & support'],['/media',ar?'الميديا':'Media'],['/about',ar?'عن خبراء المساحة':'About us'],['/contact',ar?'تواصل معنا':'Contact']];
 return <>
  <a className="skip-link" href="#main">{ar?'انتقل إلى المحتوى':'Skip to content'}</a>
  <div className="utility"><div className="wrap utility-inner"><span>{ar?'خبرة محلية. تقنيات عالمية.':'LOCAL EXPERTISE. GLOBAL TECHNOLOGY.'}</span><div><a href={`tel:${PHONE}`}><Phone size={12}/><bdi>+966 54 064 6245</bdi></a><Suspense fallback={<a className="language" href={pathFor(ar?'en':'ar',clean)}>{ar?'English':'العربية'}</a>}><LanguageLink locale={locale} clean={clean}/></Suspense></div></div></div>
  <header className="site-header"><div className="wrap header-inner">
   <Link href={pathFor(locale)} className="brand" aria-label={ar?'خبراء المساحة: الرئيسية':'Surveying Experts: Home'}><Image className="brand-logo" src="/images/logo-on-light.png" alt={ar?'خبراء المساحة':'Surveying Experts'} width={230} height={90} priority/></Link>
   <nav className="desktop-nav" aria-label={ar?'القائمة الرئيسية':'Main navigation'}>{links.map(([url,label])=><Link key={url} href={pathFor(locale,url)} aria-current={clean===url||clean.startsWith(url+'/')?'page':undefined}>{label}</Link>)}</nav>
   <a href={STORE} className="store-link" data-action="store_visit">{ar?'المتجر':'Store'}<ArrowUpRight size={16}/></a>
   <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?(ar?'إغلاق القائمة':'Close menu'):(ar?'فتح القائمة':'Open menu')} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<nav id="mobile-navigation" className="mobile-nav wrap" aria-label={ar?'قائمة الهاتف':'Mobile navigation'}>{links.map(([url,label])=><Link key={url} href={pathFor(locale,url)} onClick={()=>setOpen(false)}>{label}<ArrowRight className="direction-arrow" size={18}/></Link>)}<Link href={pathFor(locale,'/contact')} className="button yellow" onClick={()=>setOpen(false)}>{ar?'اطلب عرض سعر':'Request a quote'}</Link></nav>}
  </header>
 </>;
}
