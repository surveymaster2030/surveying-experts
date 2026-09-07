import {MediaPage} from '@/components/site/MediaPage';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('ar','الميديا','فيديوهات خبراء المساحة من يوتيوب، تجارب الأجهزة وروابط حساباتنا الرسمية.','/media');
export default function Page(){return <MediaPage locale="ar"/>}
