import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'data');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {data, content} = matter(fileContents);

  const pageContents = {
    slug: realSlug,
    title: String(data.title),
    content,
  };

  return pageContents;
}

export function getAllPosts() {
  fs;
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug));
  return posts;
}
