import { ButtonProps } from '@mui/material';
import { DataGridPluginOptions } from '../types';
import { IPluginBtnControl } from './types';
interface ActionButtonProps extends Omit<ButtonProps, 'onClick'>, IPluginBtnControl, Pick<DataGridPluginOptions, 'topic'> {
    label: string;
    name: string;
}
declare const ActionButton: (o: ActionButtonProps) => import("react/jsx-runtime").JSX.Element;
interface CUDButtonProps extends Omit<ButtonProps, 'onClick'>, IPluginBtnControl, Pick<DataGridPluginOptions, 'topic'> {
    label: string;
}
declare const NewButton: (o: CUDButtonProps) => import("react/jsx-runtime").JSX.Element;
declare const EditButton: (o: CUDButtonProps) => import("react/jsx-runtime").JSX.Element;
declare const DeleteButton: (o: CUDButtonProps) => import("react/jsx-runtime").JSX.Element;
export { ActionButton, NewButton, EditButton, DeleteButton };
