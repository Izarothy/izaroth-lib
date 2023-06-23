import {getAllPosts, getPostBySlug} from '~/utils/api';
import markdownToHtml from '~/utils/markdownToHtml';
import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  content: string;
};

const Page = ({title, content}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="text-center text-3xl font-bold">{title}</h1>
      <article
        className="font-semibold leading-relaxed"
        dangerouslySetInnerHTML={{__html: content}}
      ></article>
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
      ...post,
      content,
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
