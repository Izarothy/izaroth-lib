import React from 'react';
import SideBarLink from './SideBarLink';

type Props = {
  title: string;
  postNames: string[];
};

const SideBarCategory = ({title, postNames}: Props) => {
  return (
    <section className="my-2">
      <span className="text-xs font-bold text-gray">{title}</span>
      <span className="my-3">
        {postNames?.length &&
          postNames.map(postName => {
            const postPath = `/${title.toLowerCase()}/${postName.toLowerCase().replace(' ', '-')}`;

            return <SideBarLink name={postName} path={postPath} category={title} key={postName} />;
          })}
      </span>
    </section>
  );
};

export default SideBarCategory;
