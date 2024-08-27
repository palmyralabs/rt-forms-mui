import { IServerLookupDefinition } from './types';
import { IServerLookupField } from '@palmyralabs/rt-forms';
import { AutocompleteProps } from '@mui/material';

declare const MuiServerLookup: import('react').ForwardRefExoticComponent<Omit<IServerLookupDefinition & Partial<AutocompleteProps<any, any, any, any, "div">>, "ref"> & import('react').RefAttributes<IServerLookupField>>;
export { MuiServerLookup };
