import { DataGridPluginOptions } from '../types';
import { EXPORT_FORMAT } from '@palmyralabs/palmyra-wire';

interface IExportDataOptions extends Pick<DataGridPluginOptions, 'queryRef'> {
    exportOption: Partial<Record<EXPORT_FORMAT, string>>;
}
declare const ExportDataButton: (props: IExportDataOptions) => import("react/jsx-runtime").JSX.Element;
export { ExportDataButton };
export type { IExportDataOptions };
