type Link = {
  title: string;
  url: string;
};

const getLinkNames = (content: string) => {
  const linkNames: Link[] = [];
  content.split('\n').forEach(line => {
    if (line.trim().length < 2) return;

    let linkTitle = line.replace('[', '').replace(']', '');
    linkTitle = linkTitle.slice(0, linkTitle.indexOf('('));
    let linkUrl = line.replace('(', '').replace(')', '');
    linkUrl = linkUrl.slice(linkUrl.indexOf(']') + 1, -1);
    linkNames.push({title: linkTitle, url: linkUrl});
  });
  return linkNames;
};

export default getLinkNames;
