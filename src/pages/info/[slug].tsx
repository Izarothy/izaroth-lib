import {getAllPosts, getPostBySlug} from '~/utils/api';
import markdownToHtml from '~/utils/markdownToHtml';
import React from 'react';
import {type TPage} from '~/utils/types';
import Head from 'next/head';
type Props = {
  post: TPage;
  content: string;
};

const Page = ({post, content}: Props) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>{content}</article>
    </>
  );
};

export default Page;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({params}: Params) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post?.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts?.map(post => {
      return {
        params: {
          slug: post?.slug,
        },
      };
    }),
    fallback: false,
  };
}
