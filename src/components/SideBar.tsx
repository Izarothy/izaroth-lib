import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import SideBarCategory from './SideBarCategory';
import {api} from '~/utils/trpc';

const SideBar = () => {
  const [postNames, setPostNames] = useState<string[]>([]);
  const res = api.posts.getPostNames.useQuery();
  useEffect(() => {
    if (res.status === 'success') {
      setPostNames(res.data);
    }
  }, [res.status, res.data]);

  return (
    <aside className="flex min-h-full flex-col gap-4 bg-lighterdark px-4 py-8 text-white lg:w-1/6">
      <p className="text-xl font-bold">
        <Link href="/">Home</Link>
      </p>
      <SideBarCategory title="Tools" postNames={['Main Tools']} />
      {postNames.length && <SideBarCategory title="Info" postNames={postNames} />}
    </aside>
  );
};

export default SideBar;
