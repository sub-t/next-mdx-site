import { WithClassName } from '@/types/common';
import { Chip } from '@mui/material';
import { Link } from './Link';

type Props = WithClassName & {
  href: string;
  label: string;
};

export const PostTag = ({ href, label, className }: Props) => {
  return (
    <Link href={href} className={className}>
      <Chip label={label} sx={{ cursor: 'pointer' }} />
    </Link>
  );
};
