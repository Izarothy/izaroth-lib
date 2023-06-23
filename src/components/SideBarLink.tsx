import Link from 'next/link';
import React from 'react';
import {type TPageLink} from '~/utils/types';

type Props = TPageLink;

const SideBarLink = ({path, name}: Props) => {
  return (
    <p className="hover:font-bold hover:text-blue">
      <Link href={`/info/${path}`}>{name}</Link>
    </p>
  );
};

export default SideBarLink;
