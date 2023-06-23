const getLinkNames = (content: string) => {
  const linkNames: string[] = [];
  content.split('\n').forEach(line => {
    let formattedLine = line.replace('[', '').replace(']', '');
    formattedLine = formattedLine.slice(0, formattedLine.indexOf('('));
    linkNames.push(formattedLine);
  });
  return linkNames;
};

export default getLinkNames;
