import { getNotionPageList } from '#pages/api/notion';

export default async function sitemap() {
  const baseUrl = 'https://woo1031.vercel.app';

  const posts = await getNotionPageList({
    pages: 100,
  });
  const postUrls = posts?.results.map((post) => ({
    url: `${baseUrl}/blog/${post.path}`,
    lastModified: new Date(post.last_edited_time as string),
  }));
  return postUrls;
}
