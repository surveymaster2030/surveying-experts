export interface YouTubeVideo {
  id: string;
  title: string;
  published: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const CHANNEL_ID = "UCeRPAp5j0kn700VnQpE33KA";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

function decodeHtml(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export async function getLatestVideos(count = 6): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();

    const entries = xml.split("<entry>").slice(1);
    return entries.slice(0, count).map((entry) => {
      const videoId =
        (entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) ?? [])[1] ?? "";
      const title =
        (entry.match(/<title>([^<]+)<\/title>/) ?? [])[1] ?? "";
      const published =
        (entry.match(/<published>([^<]+)<\/published>/) ?? [])[1] ?? "";
      return {
        id: videoId,
        title: decodeHtml(title),
        published,
        thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });
  } catch {
    return [];
  }
}
