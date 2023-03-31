import {
  getNotionBlockChildrenData,
  getNotionPageData,
  notionClient,
} from '#pages/api/notion';
import Form from './form';
import { NotionToMarkdown } from 'notion-to-md';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

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
  console.log(page);

  return <Form contents={htmlText} page={page} />;
}
