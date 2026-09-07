import {RichService} from '@/components/site/RichPages';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('en',"Service & support","Surveying equipment and solutions with training, maintenance, calibration and technical support in Saudi Arabia.",'/maintenance-calibration');
export default function Page(){return <RichService locale="en"/>}
