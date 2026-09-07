import {sectors} from '@/lib/sectors';
import type {MetadataRoute} from 'next';
import {SITE,solutions,pathFor} from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{const routes=['','/solutions','/advanced-solutions','/maintenance-calibration','/rental','/about','/media','/contact','/privacy','/referral-program',...solutions.map(s=>'/solutions/'+s.slug),...sectors.map(s=>'/sectors/'+s.slug)];return routes.flatMap(route=>(['en','ar'] as const).map(locale=>({url:SITE+pathFor(locale,route),alternates:{languages:{en:SITE+pathFor('en',route),ar:SITE+pathFor('ar',route)}}})));}
