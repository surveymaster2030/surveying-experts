import {RentalPage} from '@/components/site/Pages';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('ar',"تأجير الأجهزة","أجهزة وحلول مساحية مع التدريب والصيانة والمعايرة والدعم الفني في السعودية.",'/rental');
export default function Page(){return <RentalPage locale="ar"/>}
