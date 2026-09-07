import {notFound} from 'next/navigation';
import {SectorPage} from '@/components/site/SectorPage';
import {sectors} from '@/lib/sectors';
import {pageMeta,text} from '@/lib/site';
export function generateStaticParams(){return sectors.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const sector=sectors.find(s=>s.slug===slug);if(!sector)return {};return pageMeta('en',text('en',sector.title),text('en',sector.intro),'/sectors/'+slug);}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const sector=sectors.find(s=>s.slug===slug);if(!sector)notFound();return <SectorPage locale="en" sector={sector}/>;}
