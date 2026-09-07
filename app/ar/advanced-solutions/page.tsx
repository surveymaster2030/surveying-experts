import {SolutionsPage} from '@/components/site/Pages';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('ar',"الحلول المتقدمة","أجهزة وحلول مساحية مع التدريب والصيانة والمعايرة والدعم الفني في السعودية.",'/advanced-solutions');
export default function Page(){return <SolutionsPage locale="ar" advanced/>}
