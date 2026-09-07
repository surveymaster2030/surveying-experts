'use client';
import {useState} from 'react';
import Image from 'next/image';
import {Play,ArrowUpRight} from 'lucide-react';
import {Locale} from '@/lib/site';

// Videos verified on the official channel on 6 September 2026.
const videos=[
 {id:'lRQYCH4Tmw4',ar:'E800 وE800 Pro في الميدان',en:'E800 vs E800 Pro in the field',tag:'GNSS'},
 {id:'aTukGOekhUA',ar:'نظرة فنية على E800 Pro',en:'A technical look at E800 Pro',tag:'GNSS'},
 {id:'oTEygcqyV3A',ar:'فتح صندوق E800 Pro',en:'Unboxing E800 Pro',tag:'UNBOXING'},
 {id:'kxOR2lfkpAM',ar:'عملاؤنا يحكون تجربتهم',en:'Our customers share their experience',tag:'PEOPLE'},
 {id:'lcK7-NLkHZM',ar:'استعراض مكونات OmniSLAM R8+',en:'Inside the OmniSLAM R8+ kit',tag:'3D SCANNING'},
 {id:'592lr0Jzbgc',ar:'تصدير البيانات من SM102',en:'Exporting data from SM102',tag:'TOTAL STATION'},
];
export function MediaGallery({locale}:{locale:Locale}){
 const ar=locale==='ar', [active,setActive]=useState<string|null>(null);
 return <div className="media-video-grid">{videos.map((v,i)=><article className={i===0?'media-video featured-video':'media-video'} key={v.id}><div className="media-video-frame">{active===v.id?<iframe src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`} title={ar?v.ar:v.en} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>:<button className="video-cover" onClick={()=>setActive(v.id)} aria-label={(ar?'شغّل الفيديو: ':'Play video: ')+(ar?v.ar:v.en)}><Image unoptimized src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" fill sizes="(max-width:760px) 100vw, 60vw"/><span className="video-play"><Play size={26} fill="currentColor"/></span><span className="video-watch">{ar?'شاهد الفيديو':'PLAY VIDEO'}</span></button>}</div><div className="media-video-caption"><span className="eyebrow">{v.tag}</span><h2>{ar?v.ar:v.en}</h2><a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer">{ar?'افتح على يوتيوب':'Watch on YouTube'}<ArrowUpRight size={16}/></a></div></article>)}</div>;
}
