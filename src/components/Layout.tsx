import React, {type PropsWithChildren} from 'react';
import SideBar from './SideBar';

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex ">
      <SideBar />
      <main className="w-full">{props.children}</main>
    </div>
  );
};

export default Layout;
