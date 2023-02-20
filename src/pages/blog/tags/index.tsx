import { DefaultPage } from '@/components/default';
import { PostTag } from '@/components/PostTag';
import { getAllFrontmatters } from '@/lib/mdx';
import { distinct } from '@/utils/distinct';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { GetStaticProps } from 'next';

type Props = {
  tags: string[];
};

export default function Page({ tags }: Props) {
  return (
    <DefaultPage>
      <Stack spacing={6}>
        <Typography variant="h1">Tags</Typography>
        <Stack direction="row" flexWrap="wrap" spacing={2}>
          {tags.map((tag) => (
            <PostTag key={tag} href={`/blog/tags/${tag}`} label={tag} />
          ))}
        </Stack>
      </Stack>
    </DefaultPage>
  );
}

const BASE_PATH = 'blog/posts';

export const getStaticProps: GetStaticProps<Props> = async () => {
  const frontmatters = getAllFrontmatters(BASE_PATH);
  const tags = distinct(
    frontmatters.flatMap((frontmatter) => frontmatter.tags),
  );

  return {
    props: {
      tags,
    },
  };
};
