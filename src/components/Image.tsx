import { getImageUrl } from '@/lib/url';

type Props = JSX.IntrinsicElements['img'];

export const Image = ({ alt, src, ...props }: Props) => {
  const imageUrl = getImageUrl(src);

  return (
    <img
      alt={alt}
      src={imageUrl}
      {...props}
      css={{
        userSelect: 'none',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  );
};
