import {CalendarDays, Users, HardHat, MapPin} from 'lucide-react';
import {Locale} from '@/lib/site';

// Figures restored from the original StatsSection/StatsSectionAr, without extrapolation.
export function CompanyNumbers({locale}:{locale:Locale}) {
 const ar=locale==='ar';
 const numbers=[
  {value:'7',label:ar?'سنوات خبرة':'Years of experience',icon:CalendarDays},
  {value:'3,000+',label:ar?'عميل من قطاع الأعمال':'B2B clients served',icon:Users},
  {value:'2,000+',label:ar?'مشروع إنشائي':'Construction projects',icon:HardHat},
  {value:'5',label:ar?'فروع في المملكة':'Branches across Saudi Arabia',icon:MapPin},
 ];
 return <section className="company-numbers" aria-labelledby="company-numbers-title"><div className="wrap"><div className="numbers-heading"><span className="eyebrow">{ar?'خبراء المساحة بالأرقام':'SURVEYING EXPERTS IN NUMBERS'}</span><h2 id="company-numbers-title">{ar?'وراء كل رقم، علاقة وثقة.':'Behind every number, a relationship.'}</h2></div><div className="numbers-grid">{numbers.map(({value,label,icon:Icon})=><div className="number-card" key={label}><Icon size={26} aria-hidden="true"/><strong dir="ltr">{value}</strong><span>{label}</span></div>)}</div></div></section>;
}
