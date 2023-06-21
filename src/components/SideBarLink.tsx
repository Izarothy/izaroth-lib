import Link from 'next/link';
import React from 'react';
import {type TPageLink} from '~/utils/types';

type Props = TPageLink;

const SideBarLink = ({path, name}: Props) => {
  return (
    <p className="px-4 text-lg">
      <Link href={path}>{name}</Link>
    </p>
  );
};

export default SideBarLink;
