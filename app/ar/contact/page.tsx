import {ContactPage} from '@/components/site/Pages';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('ar','تواصل مع فريقنا','ناقش جهازك أو مشروعك مع فريق خبراء المساحة.','/contact');
export default async function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const query=await searchParams;const initial:Record<string,string>={};for(const key of ['intent','solution','branch','plan','service','sector']){const value=query[key];if(typeof value==='string')initial[key]=value;}return <ContactPage locale="ar" initial={initial}/>;}
