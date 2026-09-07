import {MediaPage} from '@/components/site/MediaPage';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('en','Media','Surveying Experts videos, equipment demonstrations and official social channels.','/media');
export default function Page(){return <MediaPage locale="en"/>}
