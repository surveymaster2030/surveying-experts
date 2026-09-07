import {notFound} from 'next/navigation';
import {SolutionPage} from '@/components/site/Pages';
import {solutions,pageMeta,text} from '@/lib/site';
export function generateStaticParams(){return solutions.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const solution=solutions.find(s=>s.slug===slug);if(!solution)return {};return pageMeta('ar',text('ar',solution.title),text('ar',solution.short),'/solutions/'+slug);}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const solution=solutions.find(s=>s.slug===slug);if(!solution)notFound();return <SolutionPage locale="ar" solution={solution}/>;}
