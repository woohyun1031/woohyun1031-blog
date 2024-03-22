import axios, { AxiosInstance } from 'axios';

export const notionApi: AxiosInstance = axios.create({
  baseURL: process.env.NOTION_PUBLIC_URL,
});

notionApi.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${process.env.NOTION_TOKEN}`;
      config.headers.Accept = 'application/json';
      config.headers['Notion-Version'] = '2022-06-28';
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
