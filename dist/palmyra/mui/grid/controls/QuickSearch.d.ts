import { TextField } from '@mui/material';
import { DataGridPluginOptions } from '../types';
import { IPluginBtnControl } from './types';

interface IQuickSearchOptions extends Pick<DataGridPluginOptions, 'queryRef' | 'columns'>, IPluginBtnControl {
    width: string;
}
export type TextFieldVariants = 'outlined' | 'standard' | 'filled';
type TextFieldProps = React.ComponentProps<typeof TextField>;
declare const QuickSearch: (o: IQuickSearchOptions & TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export { QuickSearch };
