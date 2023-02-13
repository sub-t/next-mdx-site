import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { FrontmatterWithPath } from './fromtmatter';

export type MdxSource = Omit<MDXRemoteSerializeResult, 'scope'> & {
  scope: FrontmatterWithPath;
};
