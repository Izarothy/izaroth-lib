import React, {type PropsWithChildren} from 'react';
import SideBar from './SideBar';
import SearchPrompt from './SearchPrompt';

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen text-white">
      <SideBar />
      <SearchPrompt />
      <main className="w-full bg-dark">{props.children}</main>
    </div>
  );
};

export default Layout;
