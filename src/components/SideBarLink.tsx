import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import {type TPageLink} from '~/utils/types';

type Props = TPageLink;

const SideBarLink = ({path, name}: Props) => {
  const router = useRouter();

  return (
    <p className={`${router.asPath == path ? ` text-blue` : ``} font-semibold  hover:text-blue`}>
      <Link href={path}>{name}</Link>
    </p>
  );
};

export default SideBarLink;
