import { MdxSource } from '@/types/mdx';
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { Frontmatter, FrontmatterWithPath } from '../types/fromtmatter';
import { DATA_PATH, resolvePath } from './path';

const getFilePath = (basePath: string, slug: string[]) =>
  resolvePath(DATA_PATH, basePath, ...slug) + '.mdx';

export const getMdxBySlug = async (basePath: string, slug: string[]) => {
  const filePath = getFilePath(basePath, slug);
  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
    scope: data,
  });
  return mdxSource as MdxSource;
};

export const getAllFrontmatters = (basePath: string) => {
  const PATH = resolvePath(DATA_PATH, basePath);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths
    .map((filePath) => {
      const source = fs.readFileSync(resolvePath(filePath), 'utf8');
      const { data } = matter(source);

      return {
        ...(data as Frontmatter),
        path: filePath.replace(`${DATA_PATH}`, '').replace('.mdx', ''),
      } as FrontmatterWithPath;
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
};

export const getAllPaths = (basePath: string) => {
  const frontmatters = getAllFrontmatters(basePath);

  return frontmatters.map((frontmatter) => ({
    params: {
      slug: frontmatter.path.replace(`/${basePath}/`, '').split('/'),
    },
  }));
};
