import Link from 'next/link';
import React from 'react';

const SideBar = () => {
  return (
    <aside className="flex min-h-full flex-col items-center bg-lighterdark py-8 text-white lg:w-1/6">
      <p className="text-lg ">
        <Link href="/">Home</Link>
      </p>
    </aside>
  );
};

export default SideBar;
