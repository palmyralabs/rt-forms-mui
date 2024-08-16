import { DataGridPluginOptions } from '../../types';

interface FilterOptions extends DataGridPluginOptions {
    onClose?: (filter: any) => void;
    defaultFilter?: Record<string, any>;
}
declare const FilterForm: (o: FilterOptions) => import("react/jsx-runtime").JSX.Element;
export { FilterForm };
