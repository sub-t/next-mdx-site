import { DefaultPage } from '@/components/default';
import { PostTag } from '@/components/PostTag';
import { getAllFrontmatters } from '@/lib/mdx';
import { GetStaticProps } from 'next';

type Props = {
  tags: string[];
};

export default function Page({ tags }: Props) {
  return (
    <DefaultPage>
      {tags.map((tag) => (
        <PostTag key={tag} href={`/blog/tags/${tag}`} label={tag} />
      ))}
    </DefaultPage>
  );
}

const BASE_PATH = 'blog/posts';

export const getStaticProps: GetStaticProps<Props> = async () => {
  const frontmatters = getAllFrontmatters(BASE_PATH);
  const tags = Array.from(
    new Set(frontmatters.flatMap((frontmatter) => frontmatter.tags)),
  );

  return {
    props: {
      tags,
    },
  };
};
