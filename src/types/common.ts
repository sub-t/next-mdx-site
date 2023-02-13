import { PropsWithChildren } from 'react';

export type WithChildren<T = {}> = T & PropsWithChildren<{}>;

export type WithClassName<T = {}> = T & {
  className?: string;
};

export type CommonProps<T = {}> = WithChildren<T> & WithClassName<T>;
