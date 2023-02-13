import { SITE_DESCRIPTION, SITE_NAME } from '@/config/app';
import { getImageUrl, resolveUrl } from '@/lib/url';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

export const Seo = ({
  title,
  description = SITE_DESCRIPTION,
  image,
}: Props) => {
  const router = useRouter();

  const url = resolveUrl(router.asPath);
  const imageUrl = getImageUrl(image);

  const titleText = title ? `${title} - ${SITE_NAME}` : SITE_NAME;

  return (
    <NextSeo
      title={titleText}
      description={description}
      openGraph={{
        title: titleText,
        description,
        url,
        images: [
          {
            url: imageUrl,
            width: 512,
            height: 512,
            alt: 'Og Image Alt',
            type: 'image/png',
          },
        ],
      }}
    />
  );
};
