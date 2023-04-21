import { githubApi } from '#apis/index';

export const getGithubCommitList = async (id: string) => {
  if (!id) return;
  try {
    return await githubApi
      .get(`/users/${id}/events`, {
        params: {
          per_page: 5,
          event_type: 'PushEvent',
        },
      })
      .then((response) => response.data);
  } catch (error) {
    console.error(error);
  }
};
