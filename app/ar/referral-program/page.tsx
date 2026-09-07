import {RichReferral} from '@/components/site/RichPages';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('ar','برنامج رشّح عميلًا','خبراء المساحة: تقنيات عالمية وخبرة محلية.','/referral-program');
export default function Page(){return <RichReferral locale="ar"/>}
