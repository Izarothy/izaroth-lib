import React, {type ReactNode} from 'react';
import SideBar from './SideBar';
import SearchPrompt from './SearchPrompt';

type Props = {
  children?: ReactNode;
  slugList?: string[];
};

const Layout = ({children}: Props) => {
  return (
    <div className="flex min-h-screen text-white">
      <SideBar />
      <SearchPrompt />
      <main className="w-full bg-dark px-8 py-16">{children}</main>
    </div>
  );
};

export default Layout;
