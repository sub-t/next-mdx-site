import { theme } from '@/styles/theme';
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Image } from './Image';
import { Link } from './Link';

type Props = {
  title: string;
  image: string | undefined;
  description: string;
  href: string;
  date?: string;
  author?: string;
};

export const PostCard = ({
  title,
  image,
  description,
  href,
  date,
  author,
}: Props) => {
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Card variant="outlined">
      <Link href={href}>
        <Stack sx={{ py: 3, px: 6 }}>
          {date && (
            <Typography component="time" fontSize="0.8rem" fontWeight={900}>
              {date}
            </Typography>
          )}
          <Stack direction={matches ? 'row' : 'column'}>
            <Box
              sx={{
                flexShrink: 0,
                width: matches ? '180px' : 'auto',
                height: matches ? 'auto' : '120px',
              }}
            >
              <Image src={image} alt={`${title} image`} />
            </Box>
            <CardContent>
              <Stack spacing={2}>
                <div>
                  <Typography gutterBottom variant="h3" component="div">
                    {title}
                  </Typography>
                  <Typography fontSize="0.8rem" color={theme.palette.grey[700]}>
                    {description}
                  </Typography>
                </div>
                {author && (
                  <Typography fontSize="0.8rem">Author: {author}</Typography>
                )}
              </Stack>
            </CardContent>
          </Stack>
        </Stack>
      </Link>
    </Card>
  );
};
