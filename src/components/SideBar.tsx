import Link from 'next/link';
import React from 'react';
import SideBarCategory from './SideBarCategory';

const SideBar = () => {
  return (
    <aside className="flex min-h-full flex-col gap-4 bg-lighterdark px-4 py-8 text-white lg:w-1/6">
      <p className="text-xl font-bold">
        <Link href="/">Home</Link>
      </p>
      <SideBarCategory title="Category 1" />
    </aside>
  );
};

export default SideBar;
