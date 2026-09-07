import {RichAbout} from '@/components/site/RichPages';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('en',"About Surveying Experts","Surveying equipment and solutions with training, maintenance, calibration and technical support in Saudi Arabia.",'/about');
export default function Page(){return <RichAbout locale="en"/>}
