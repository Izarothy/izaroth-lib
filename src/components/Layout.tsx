import React, {useEffect, type ReactNode} from 'react';
import SideBar from './SideBar';
import SearchPrompt from './SearchPrompt';
import {useDispatch} from 'react-redux';
import {setHidden} from '~/utils/slices/searchPromptSlice';

type Props = {
  children?: ReactNode;
  slugList?: string[];
};

const Layout = ({children}: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHidden());
  });
  return (
    <div className="flex min-h-screen text-white">
      <SideBar />
      <SearchPrompt />
      <main className="w-full bg-dark px-8 py-16">{children}</main>
    </div>
  );
};

export default Layout;
