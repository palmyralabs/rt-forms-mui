import { IPalmyraGrid, PalmyraGridOptions } from './types';

/**
 *
 * Emitters
 * ${topic}/data -- onDataChange event
 *
 * Listeners
 * ${topic}/refresh - Refresh dataset / fetch from server
 * ${topic}/filter - apply filter based on the incoming data
 *
 */
declare const PalmyraGrid: import('react').ForwardRefExoticComponent<PalmyraGridOptions & import('react').RefAttributes<IPalmyraGrid>>;
export { PalmyraGrid };
