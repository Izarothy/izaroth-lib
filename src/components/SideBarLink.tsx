import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import {type TPageLink} from '~/utils/types';

type Props = TPageLink;

const SideBarLink = ({path, name}: Props) => {
  const router = useRouter();
  return (
    <p
      className={`${
        router.query.slug == path ? `font-bold text-blue` : ``
      } hover:font-bold hover:text-blue`}
    >
      <Link href={`/info/${path}`}>{name}</Link>
    </p>
  );
};

export default SideBarLink;
