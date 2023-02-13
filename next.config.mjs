import mdx from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  compiler: {
    emotion: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX(nextConfig);
