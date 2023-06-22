import React from 'react';
import {type TPageLink} from '~/utils/types';
import SideBarLink from './SideBarLink';

type Props = {
  title: string;
};

const SideBarCategory = ({title}: Props) => {
  // const filteredPages: TPageLink[] = pagesData.filter((page: TPageLink) => {
  //   return page.category === title;
  // });
  return (
    <section className="my-8">
      <span className="text-sm font-bold text-gray">{title}</span>
      <span className="my-3">
        {/* {filteredPages.map((page: TPageLink) => {
          return <SideBarLink {...page} key={page.name} />;
        })} */}
      </span>
    </section>
  );
};

export default SideBarCategory;
