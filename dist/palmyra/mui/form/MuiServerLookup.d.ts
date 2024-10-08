import { IServerLookupDefinition } from './types';
import { IServerLookupField } from '@palmyralabs/rt-forms';

interface IServerLookupInput extends IServerLookupDefinition {
    onChange?: any;
}
declare const MuiServerLookup: import('react').ForwardRefExoticComponent<IServerLookupInput & import('react').RefAttributes<IServerLookupField>>;
export { MuiServerLookup };
