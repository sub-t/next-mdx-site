export type Frontmatter = {
  title: string;
  description: string;
  image?: string;
  author: string;
  date: string;
  tags: string[];
};

export type FrontmatterWithPath = Frontmatter & {
  path: string;
};
