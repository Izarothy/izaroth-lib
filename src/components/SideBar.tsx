import Link from 'next/link';
import React from 'react';
import pagesData from 'src/data/pages.json';
import SideBarLink from './SideBarLink';
import {type TPageLink} from '~/utils/types';
const SideBar = () => {
  return (
    <aside className="flex min-h-full flex-col gap-4 bg-lighterdark py-8 text-white lg:w-1/6">
      <p className="px-4 text-xl font-bold">
        <Link href="/">Home</Link>
      </p>
      {pagesData.map(({name, path}: TPageLink) => {
        return <SideBarLink path={path} name={name} key={name}></SideBarLink>;
      })}
    </aside>
  );
};

export default SideBar;
