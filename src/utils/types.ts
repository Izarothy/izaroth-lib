export type TPageLink = {
  name: string;
  path: string;
  category: string;
};

export type TPage = {
  slug: string;
  title: string;
  content: string;
};
export type TKeyword = {
  type: 'Page' | 'Link';
  title: string;
  path: string;
  linkName?: string;
};
