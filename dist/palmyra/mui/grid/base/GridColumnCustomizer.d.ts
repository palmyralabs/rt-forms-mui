import { GridCustomizer } from '@palmyralabs/rt-forms';
import { CellGetter } from '../types';

declare const gridColumnCustomizer: (config: Record<string, ((d: CellGetter) => CellGetter)>, factory?: {
    header?: Record<string, Function>;
    footer?: Record<string, Function>;
}) => GridCustomizer;
export { gridColumnCustomizer };
