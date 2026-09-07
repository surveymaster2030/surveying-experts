import {RichAbout} from '@/components/site/RichPages';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('ar',"عن خبراء المساحة","أجهزة وحلول مساحية مع التدريب والصيانة والمعايرة والدعم الفني في السعودية.",'/about');
export default function Page(){return <RichAbout locale="ar"/>}
