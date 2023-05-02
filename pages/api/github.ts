import { githubApi } from '#apis/index';

export interface ICommitData {
  sha: string;
  author: { email: string; name: string }[];
  message: string;
  distinct: boolean;
  url: string;
}

export interface IPushEventPayload {
  repository_id: number;
  push_id: number;
  size: number;
  distinct_size: number;
  ref: string;
  head: string;
  before: string;
  commits: ICommitData[];
}
export interface IActionEventPayload {
  action: string;
}
export interface IEventData<T> {
  id: string;
  type: 'PushEvent' | 'WatchEvent';
  actor: {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: T;
  public: boolean;
  created_at: string;
  org: {
    id: number;
    login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
  };
}

export const getGithubCommitList = async (id: string) => {
  if (!id) return;
  try {
    return await githubApi
      .get<IEventData<IPushEventPayload>[]>(`/users/${id}/events`, {
        params: {
          per_page: 5,
          type: 'PushEvent',
        },
      })
      .then((response) => response.data);
  } catch (error) {
    console.error(error);
  }
};
