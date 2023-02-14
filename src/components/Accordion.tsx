import { theme } from '@/styles/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion as AccordionRoot,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { CommonProps } from '../types/common';

type Props = CommonProps & {
  summary: string;
};

export const Accordion = ({ summary, children, className }: Props) => {
  return (
    <AccordionRoot
      disableGutters
      elevation={0}
      sx={{
        overflow: 'hidden',
        borderRadius: 8,
        backgroundColor: theme.palette.grey[100],
      }}
      className={className}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${summary}-content`}
        id={`${summary}-header`}
      >
        <Typography
          fontSize="0.85rem"
          fontWeight={500}
          color={theme.palette.grey[800]}
        >
          {summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionRoot>
  );
};
