import { DefaultPage } from '@/components/default';
import { PostCard } from '@/components/PostCard';
import { getAllFrontmatters } from '@/lib/mdx';
import { FrontmatterWithPath } from '@/types/fromtmatter';
import { Pagination, Stack } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { ChangeEvent, useEffect } from 'react';

type Props = {
  frontmatters: FrontmatterWithPath[];
  pagesCount: number;
};

export default function Page({ frontmatters, pagesCount }: Props) {
  const router = useRouter();

  const slug = router.query.slug as string;

  const handleChange = (e: ChangeEvent<unknown>, page: number) => {
    router.push(`/blog/page/${page}`);
  };

  useEffect(() => {
    const currentPage = Number(slug);
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;

    if (previousPage >= 1) {
      router.prefetch(`/blog/page/${previousPage}`);
    }
    if (nextPage <= pagesCount) {
      router.prefetch(`/blog/page/${nextPage}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultPage>
      <Stack spacing={4}>
        {frontmatters.map((frontmatter) => {
          const { title, description, author, image, date, path } =
            frontmatter;

          return (
            <PostCard
              key={path}
              title={title}
              description={description}
              author={author}
              date={date}
              image={image}
              href={path}
            />
          );
        })}
        <Stack direction="row" justifyContent="center">
          <Pagination count={pagesCount} onChange={handleChange} />
        </Stack>
      </Stack>
    </DefaultPage>
  );
}

const BASE_PATH = 'blog/posts';

const POSTS_PER_PAGE = 4;

type Params = NextParsedUrlQuery & {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const postsCount = getAllFrontmatters(BASE_PATH).length;
  const pagesCount = Math.ceil(postsCount / POSTS_PER_PAGE);
  const pages = Array.from({
    length: pagesCount,
  }).map((_, idx) => idx + 1);

  return {
    paths: pages.map((page) => ({
      params: {
        slug: String(page),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const page = Number(params!.slug);
  const frontmatters = getAllFrontmatters(BASE_PATH);
  const postsCount = frontmatters.length;
  const pagesCount = Math.ceil(postsCount / POSTS_PER_PAGE);

  return {
    props: {
      frontmatters: frontmatters.slice(
        POSTS_PER_PAGE * (page - 1),
        POSTS_PER_PAGE * page,
      ),
      pagesCount,
    },
  };
};
