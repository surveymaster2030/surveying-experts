import {RichService} from '@/components/site/RichPages';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('ar',"الصيانة والدعم","أجهزة وحلول مساحية مع التدريب والصيانة والمعايرة والدعم الفني في السعودية.",'/maintenance-calibration');
export default function Page(){return <RichService locale="ar"/>}
