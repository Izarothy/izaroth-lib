import {getAllPosts, getPostBySlug} from '~/utils/api';
import markdownToHtml from '~/utils/markdownToHtml';

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({params}: Params) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

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
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}