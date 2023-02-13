import { css } from '@emotion/react';

export const HEADER_HEIGHT = '4rem';

export const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  height: ${HEADER_HEIGHT};
`;
