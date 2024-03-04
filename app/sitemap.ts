import getPathFromTitle from '#utils/notion/getPathFromTitle';
import { getArticlesDataFromDB } from 'app/apis/notion/notion';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://woo1031.vercel.app';

  const originData = await getArticlesDataFromDB({
    page_size: 100,
  });

  const articles = originData?.results.map((item) => {
    const path = getPathFromTitle(
      item.properties?.Name?.title?.[0]?.plain_text ?? '',
    );
    return { ...item, path };
  });

  const postUrls = [
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/article`,
      lastModified: new Date(),
    },
    ...(articles?.map((post) => ({
      url: `${baseUrl}/article/${post.path}`,
      lastModified: new Date(post.last_edited_time as string),
    })) ?? []),
  ];

  return postUrls;
}
