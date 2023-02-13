import { css } from '@emotion/react';
import NextLink from 'next/link';

type Props = Omit<React.ComponentPropsWithoutRef<typeof NextLink>, 'href'> & {
  href: string;
};

const styles = css`
  color: black;
  text-decoration: none;
`;

export const Link = ({ children, href, ...props }: Props) => {
  return href.startsWith('http') ? (
    <NextLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      css={styles}
      {...props}
    >
      {children}
    </NextLink>
  ) : (
    <NextLink href={href} css={styles} {...props}>
      {children}
    </NextLink>
  );
};
