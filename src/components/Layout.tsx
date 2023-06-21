import React, {type PropsWithChildren} from 'react';
import SideBar from './SideBar';

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main className="w-full bg-dark">{props.children}</main>
    </div>
  );
};

export default Layout;
