import { IServerLookupDefinition } from './types';
import { AutocompleteProps } from '@mui/material';
import { IServerLookupField } from '@palmyralabs/rt-forms';

declare const MuiServerLookup: import('react').ForwardRefExoticComponent<Omit<IServerLookupDefinition & AutocompleteProps<any, any, any, any, "div">, "ref"> & import('react').RefAttributes<IServerLookupField>>;
export { MuiServerLookup };
