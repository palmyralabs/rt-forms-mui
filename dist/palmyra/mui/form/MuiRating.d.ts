import { RatingProps } from '@mui/material';
import { IRatingDefinition } from './types';
import { IRatingField } from '@palmyralabs/rt-forms';

declare const MuiRating: import('react').ForwardRefExoticComponent<Omit<IRatingDefinition & RatingProps, "ref"> & import('react').RefAttributes<IRatingField>>;
export { MuiRating };
