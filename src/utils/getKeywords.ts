import getLinkNames from './getLinkNames';
import {type TKeyword, type TPage} from './types';

const getKeywords = (pages: TPage[]) => {
  const keywords: TKeyword[] = [];
  pages?.forEach(page => {
    keywords.push({type: 'Page', title: page.title, path: page.slug});

    const linkNames = getLinkNames(page.content);
    linkNames.forEach(linkName => {
      keywords.push({
        type: 'Link',
        title: page.title,
        linkName: linkName.title,
        path: linkName.url,
      });
    });
  });

  return keywords;
};

export default getKeywords;
