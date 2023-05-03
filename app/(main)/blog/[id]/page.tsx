import {
  getNotionBlockChildrenData,
  getNotionPageData,
  notionClient,
} from '#pages/api/notion';
import { NotionToMarkdown } from 'notion-to-md';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import Tag from '#components/Tag';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default async function Page(props: any) {
  const page = await getNotionPageData(props.params.id);
  const data = await getNotionBlockChildrenData(props.params.id);
  const n2m = new NotionToMarkdown({ notionClient: notionClient });
  const mdData = await n2m.blocksToMarkdown(data.results);
  const mdString = n2m.toMarkdownString(mdData);

  const htmlText = await unified()
    .use(remarkParse)
    .use(remarkGfm) // remark가 GFM도 지원 가능하도록
    .use(remarkBreaks) // remark가 line-break도 지원 가능하도록
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(mdString)
    .catch((error) => {
      console.log(error);
    });
  if (!page) return;
  if (!htmlText) return;

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="min-h-screen w-full max-w-innerContainer px-8">
          <div className="flex flex-col items-center">
            {(page.cover?.file?.url || page.cover?.external?.url) && (
              <div className="relative my-6 h-64 w-full font-sansB text-4xl text-gray-800 dark:text-white">
                <Image
                  src={
                    page.cover?.file?.url ??
                    page.cover?.external?.url ??
                    'https://toss.tech/wp-content/uploads/2023/03/00017-3291509353.png'
                  }
                  style={{ objectFit: 'contain' }}
                  alt="blog image"
                  fill
                />
              </div>
            )}
            <div className="my-6 w-full font-sansB text-4xl leading-relaxed text-gray-800 dark:text-white">
              <span>{page.properties.Name.title[0].plain_text}</span>
            </div>
            <div className="my-6 flex w-full flex-col justify-start sm:flex-row">
              <span className="mr-4 mb-4 inline-block font-sansM text-xl text-gray-600 dark:text-gray-400">
                {dayjs(page.created_time).format('YYYY-MM-DD')}
              </span>
              <div>
                {page.properties.Type.multi_select.map(
                  (type: { id: string; name: string; color: string }) => {
                    return (
                      <Link href={`/blog?type=${type.name}`}>
                        <Tag title={type.name} />
                      </Link>
                    );
                  },
                )}
              </div>
            </div>
            <article
              className="
                prose  
                prose-gray 
                mt-8 
                w-full 
                max-w-container 
                dark:prose-dark                
                md:prose-lg 
                lg:prose-xl 
                prose-img:w-full 
                "
              dangerouslySetInnerHTML={{ __html: htmlText.value as string }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
