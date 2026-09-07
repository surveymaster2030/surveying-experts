// Read-only smoke checks against the running local website; never sends enquiries.
const fs=require('fs');
const base=process.env.SITE_URL||'http://127.0.0.1:3100';
const slugs=['gnss','total-station','scanning','machine-control','gpr','marine','drone'];
const pages=['','/solutions','/advanced-solutions','/maintenance-calibration','/rental','/about','/media','/contact','/privacy','/story','/referral-program',...slugs.map(s=>'/solutions/'+s),...['construction','surveying','consulting','infrastructure'].map(s=>'/sectors/'+s)];
const findings=[];
const check=(ok,note)=>{if(!ok)findings.push(note)};
const assets=new Set(),links=new Set();
(async()=>{
 for(const prefix of ['','/ar'])for(const page of pages){
  const url=prefix+page||'/en';const response=await fetch(base+url);const html=await response.text();
  check(response.status===200,`${url}: ${response.status}`);
  check(new RegExp(`<html[^>]+lang="${prefix?'ar':'en'}"`).test(html),`${url}: wrong document language`);
  check(new RegExp(`<html[^>]+dir="${prefix?'rtl':'ltr'}"`).test(html),`${url}: wrong direction`);
  check((html.match(/<h1(?:\s|>)/g)||[]).length===1,`${url}: expected exactly one H1`);
  check(html.includes('rel="canonical"'),`${url}: missing canonical`);
  check(html.includes('hrefLang="ar"')||html.includes('hrefLang="en"'),`${url}: missing language alternate`);
  for(const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const link=m[1].replaceAll('&amp;','&');if(link.startsWith('/images/')||link.startsWith('/_next/image'))assets.add(link);else if(link.startsWith('/')&&!link.startsWith('/_next/'))links.add(link.split('#')[0])}
 }
 for(const link of links){const response=await fetch(base+link,{redirect:'manual'});check(response.status<400,`Internal link ${link}: ${response.status}`)}
 for(const asset of assets){const response=await fetch(base+asset);check(response.status===200,`Image ${asset}: ${response.status}`)}
 for(const prefix of ['','/ar'])for(const old of ['high-solutions','certifications-approvals']){const response=await fetch(base+prefix+'/'+old,{redirect:'manual'});check(response.status===308,`Legacy ${prefix}/${old}: expected 308, got ${response.status}`)}
 for(const file of ['/sitemap.xml','/robots.txt'])check((await fetch(base+file)).status===200,`${file}: unavailable`);
 const missing=await fetch(base+'/solutions/does-not-exist');check(missing.status===404,'Unknown solution should return 404');
 const result={checkedAt:new Date().toISOString(),pageCount:pages.length*2,internalLinks:links.size,images:assets.size,failures:findings};
 fs.mkdirSync('qa',{recursive:true});fs.writeFileSync('qa/route-checks.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));if(findings.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
