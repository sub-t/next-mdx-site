import { HomePage } from '@/components/home';
import { getAllFrontmatters } from '@/lib/mdx';
import { FrontmatterWithPath } from '@/types/fromtmatter';
import { GetStaticProps } from 'next';

type Props = {
  frontmatters: FrontmatterWithPath[];
};

export default function Page({ frontmatters }: Props) {
  return <HomePage frontmatters={frontmatters} />;
}

const BASE_PATH = 'blog/posts/';

export const getStaticProps: GetStaticProps<Props> = async () => {
  const frontmatters = getAllFrontmatters(BASE_PATH);

  return {
    props: {
      frontmatters: frontmatters.slice(0, 3),
    },
  };
};
