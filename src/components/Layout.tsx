import React, {useEffect, type ReactNode} from 'react';
import SideBar from './SideBar';
import SearchPrompt from './SearchPrompt';
import {useDispatch} from 'react-redux';
import {setSidebarList} from '~/utils/slices/sidebarSlice';

type Props = {
  children?: ReactNode;
  slugList?: string[];
};

const Layout = ({children, slugList}: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    slugList && dispatch(setSidebarList(slugList));
  }, [dispatch, slugList]);
  return (
    <div className="flex min-h-screen text-white">
      <SideBar />
      <SearchPrompt />
      <main className="w-full bg-dark">{children}</main>
    </div>
  );
};

export default Layout;
