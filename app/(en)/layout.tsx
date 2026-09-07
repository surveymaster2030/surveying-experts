import {Document} from '@/components/site/Document';
import type {Metadata} from 'next';
export const metadata:Metadata={metadataBase:new URL('https://www.surveyingexperts-sa.com'),title:{default:'Surveying Experts',template:'%s | Surveying Experts'}};
export default function Layout({children}:{children:React.ReactNode}){return <Document locale="en">{children}</Document>}
