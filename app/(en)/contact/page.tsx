import {ContactPage} from '@/components/site/Pages';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('en','Contact our team','Discuss your equipment or project with Surveying Experts.','/contact');
export default async function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const query=await searchParams;const initial:Record<string,string>={};for(const key of ['intent','solution','branch','plan','service','sector']){const value=query[key];if(typeof value==='string')initial[key]=value;}return <ContactPage locale="en" initial={initial}/>;}
