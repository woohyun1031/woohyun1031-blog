import { getNotionPageList } from '#pages/api/notion';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://woo1031.vercel.app';

  const posts = await getNotionPageList({
    pages: 100,
  });
  const postUrls = [
    {
      url: `${baseUrl}/article`,
      lastModified: new Date(),
    },
    ...(posts?.results?.map((post) => ({
      url: `${baseUrl}/article/${post.path}`,
      lastModified: new Date(post.last_edited_time as string),
    })) ?? []),
  ];

  return postUrls;
}
