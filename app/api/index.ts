import axios, { AxiosInstance } from 'axios';

export const notionApi: AxiosInstance = axios.create({
  baseURL: process.env.NOTION_PUBLIC_URL,
  headers: {
    Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    Accept: 'application/json',
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json',
  },
});

export const githubApi = axios.create({
  baseURL: process.env.GITHUB_PUBLIC_URL,
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});
