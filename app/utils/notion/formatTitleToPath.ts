const getPathFromTitle = (title: string): string => {
  return (title || '')
    .replace(/ /g, '-')
    .replace(/[^a-zA-Z0-9가-힣-]/g, '')
    .replace(/--/g, '-')
    .replace(/-$/, '')
    .replace(/^-/, '')
    .replace(/--/g, '-')
    .trim()
    .toLowerCase();
};

export default getPathFromTitle;
