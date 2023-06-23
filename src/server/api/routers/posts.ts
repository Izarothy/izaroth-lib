import {TRPCError} from '@trpc/server';
import {createTRPCRouter, publicProcedure} from '~/server/api/trpc';
import {getAllPosts} from '~/utils/api';

export const postRouter = createTRPCRouter({
  getPostNames: publicProcedure.query(() => {
    const postNames = getAllPosts().map(post => post?.title);

    if (!postNames?.length) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'No posts found',
      });
    }
    return postNames;
  }),

  getAllPosts: publicProcedure.query(() => {
    const posts = getAllPosts();
    if (!posts?.length) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'No posts found',
      });
    }
    return posts;
  }),
});
