import { SITE_NAME } from '@/config/app';
import { theme } from '@/styles/theme';
import { FrontmatterWithPath } from '@/types/fromtmatter';
import { css } from '@emotion/react';
import { Box, Stack, Typography } from '@mui/material';
import { PostCard } from '../PostCard';
import { Seo } from '../Seo';
import { LinkButton } from './LinkButton';

type Props = React.ComponentPropsWithoutRef<typeof Seo> & {
  frontmatters: FrontmatterWithPath[];
};

export const HomePage = ({
  frontmatters,
  title,
  description,
  image,
}: Props) => {
  return (
    <>
      <Seo title={title} description={description} image={image} />
      <Box sx={{ userSelect: 'none', py: 24 }}>
        <Stack alignItems="flex-start" spacing={8}>
          <Stack>
            <Typography
              component="span"
              fontSize="3.5rem"
              fontWeight={900}
              lineHeight={1}
            >
              {SITE_NAME}
            </Typography>
            <Typography
              component="span"
              fontSize="3rem"
              fontWeight={900}
              lineHeight={1}
            >
              Site Template
            </Typography>
          </Stack>
          <Typography component="span" css={paragraphStyles}>
            Next.js と MDX を使用したサイトを手軽に作りましょう。
          </Typography>
          <LinkButton href="/docs/quick-start">Quick Start</LinkButton>
        </Stack>
        {spacer}
        <Stack alignItems="flex-start" spacing={8}>
          <Typography variant="h2">ブログ</Typography>
          <Typography css={paragraphStyles}>
            MDXを使えばサクッとリッチなブログサイトが構築できます。
            <br />
          </Typography>
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
          </Stack>
          <LinkButton href="/blog/page/1">See More Posts</LinkButton>
        </Stack>
        {spacer}
        <Stack alignItems="flex-start" spacing={8}>
          <Typography variant="h2">ドキュメント</Typography>
          <Typography css={paragraphStyles}>
            このサイトテンプレートの使い方や拡張方法はこちらからご覧になれます。
            <br />
            チュートリアル形式の解説も掲載しております。
          </Typography>
          <LinkButton href="/docs/overview">Get Started</LinkButton>
        </Stack>
      </Box>
    </>
  );
};

const spacer = (
  <Box
    sx={{
      width: '100px',
      height: '1px',
      my: 16,
      background: theme.palette.grey[400],
    }}
  />
);

const paragraphStyles = css`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.3;
  color: ${theme.palette.grey[700]};
`;
