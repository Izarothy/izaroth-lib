import React from 'react';
import SideBarLink from './SideBarLink';

type Props = {
  title: string;
  postNames: string[];
};

const SideBarCategory = ({title, postNames}: Props) => {
  return (
    <section className="my-8">
      <span className="text-xs font-bold text-gray">{title}</span>
      <span className="my-3">
        {postNames.map(postName => {
          return (
            <SideBarLink
              name={postName}
              path={postName.toLowerCase().replace(' ', '-')}
              category="Info"
              key={postName}
            />
          );
        })}
      </span>
    </section>
  );
};

export default SideBarCategory;
