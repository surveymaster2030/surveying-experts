import {RentalPage} from '@/components/site/Pages';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('en',"Equipment rental","Surveying equipment and solutions with training, maintenance, calibration and technical support in Saudi Arabia.",'/rental');
export default function Page(){return <RentalPage locale="en"/>}
