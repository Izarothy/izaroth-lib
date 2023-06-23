import getLinkNames from './getLinkNames';
import {type TKeyword, type TPage} from './types';

const getKeywords = (pages: TPage[]) => {
  const keywords: TKeyword[] = [];
  pages?.forEach(page => {
    keywords.push({type: 'Page', title: page.title, path: page.slug});

    const linkNames = getLinkNames(page.content);
    linkNames.forEach(linkName => {
      if (linkName.length > 1) {
        keywords.push({type: 'Link', title: page.title, linkName, path: page.slug});
      }
    });
  });

  return keywords;
};

export default getKeywords;
