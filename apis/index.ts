import axios, { AxiosInstance } from 'axios';

export interface IApi extends AxiosInstance {
  setToken?: (tokenType?: string, accessToken?: string) => void;
}

export const notionApi: IApi = axios.create({
  // baseURL: `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE}/query`,
  baseURL: `https://api.notion.com/v1`,
});

notionApi.setToken = function setToken(
  tokenType?: string,
  accessToken?: string,
): void {
  if (accessToken) {
    notionApi.defaults.headers.common.authorization = `${tokenType} ${accessToken}`;
  } else {
    delete notionApi.defaults.headers.common.authorization;
  }
};

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
