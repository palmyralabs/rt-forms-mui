import { RatingProps } from '@mui/material';
import { IRatingDefinition } from './types';
import { IRatingField } from '@palmyralabs/rt-forms';

interface MuiRatingDefn extends IRatingDefinition {
    muiProps?: RatingProps;
}
declare const MuiRating: import('react').ForwardRefExoticComponent<MuiRatingDefn & import('react').RefAttributes<IRatingField>>;
export { MuiRating };
