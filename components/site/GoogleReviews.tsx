import {Star,ArrowUpRight,Quote} from 'lucide-react';
import {Locale} from '@/lib/site';
const maps='https://www.google.com/maps?cid=6784170565390753318';
// Manually verified on the Riyadh Google Maps listing, 6 September 2026.
// Original Arabic excerpts; English translations are labelled in the UI.
const reviews=[
  {
    "name": "Emad Sheekaan",
    "ar": "خدمة ممتازة وضمان ممتاز",
    "en": "Excellent service and an excellent warranty",
    "url": "https://maps.app.goo.gl/3pXEEDcKBvQMBo4u5"
  },
  {
    "name": "Azim Khan",
    "ar": "شركة ممتازة في التعامل أجهزة علي اعلي مستوي",
    "en": "Excellent company to deal with, with top-quality equipment",
    "url": "https://maps.app.goo.gl/kU9suhn3soA9dwR66"
  },
  {
    "name": "Hamo Mohammed",
    "ar": "شركة ممتازة تلبي معظم احتياجات المساحة و التعامل ممتاز و الاسعار معقولة",
    "en": "An excellent company meeting most surveying needs, with excellent service and reasonable prices",
    "url": "https://maps.app.goo.gl/Zdq6YNPghz2z5vKM8"
  }
];
export function GoogleRatingLink({locale}:{locale:Locale}){return <a className="google-rating-link" href="#google-reviews"><Star size={17} fill="currentColor"/><bdi>4.9 / 5</bdi><span>{locale==='ar'?'Google Maps · فرع الرياض':'Google Maps · Riyadh branch'}</span></a>}
export function GoogleReviews({locale}:{locale:Locale}){const ar=locale==='ar';return <section className="section google-reviews" id="google-reviews"><div className="wrap"><div className="reviews-heading"><div><span className="eyebrow">{ar?'الدعم الحقيقي، بكلام عملائنا':'REAL SUPPORT. IN OUR CUSTOMERS’ WORDS.'}</span><h2>{ar?'تجاربهم تتكلم.':'Their experience says it.'}</h2><p>{ar?'مقتطفات مختارة من مراجعات عملاء فرع الرياض على Google Maps.':'Selected excerpts from Google Maps reviews of our Riyadh branch.'}</p></div><a className="google-score" href={maps} target="_blank" rel="noopener noreferrer"><strong><bdi>4.9</bdi><small>/ 5</small></strong><span className="review-stars" aria-label={ar?'التقييم 4.9 من 5':'Rated 4.9 out of 5'}>{[0,1,2,3,4].map(i=><Star key={i} size={18} fill="currentColor" aria-hidden="true"/>)}</span><span>{ar?'504 مراجعات · فرع الرياض':'504 reviews · Riyadh branch'}</span><b>Google Maps <ArrowUpRight size={16}/></b></a></div><div className="review-cards">{reviews.map(r=><article key={r.name}><span className="review-stars" aria-label={ar?'5 من 5':'5 out of 5'}>{[0,1,2,3,4].map(i=><Star key={i} size={16} fill="currentColor" aria-hidden="true"/>)}</span><Quote className="quote-icon" size={30} aria-hidden="true"/><blockquote>{ar?r.ar:r.en}</blockquote><div className="review-author"><strong dir="auto">{r.name}</strong><span>{ar?'مقتطف من المراجعة الأصلية':'Excerpt translated from Arabic'}</span></div><a className="text-link" href={r.url} target="_blank" rel="noopener noreferrer">{ar?'اقرأ المراجعة الأصلية':'Read the original review'}<ArrowUpRight size={16}/></a></article>)}</div><p className="reviews-date">{ar?'آخر تحقق: 6 سبتمبر 2026. التقييم وعدد المراجعات قد يتغيران على Google Maps.':'Last checked: 6 September 2026. The rating and review count may change on Google Maps.'}</p></div></section>}
