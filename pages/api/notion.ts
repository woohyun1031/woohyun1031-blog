import axios from 'axios';

export const getNotionData = async () => {
  try {
    const response = await axios.request({
      method: 'POST',
      url: `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE}/query`,
      headers: {
        accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      },
      data: { page_size: 4 },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
