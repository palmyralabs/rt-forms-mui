import { PiFilePdf, PiFileXls, PiFileCsv, PiFileDoc } from "react-icons/pi";
import { DropdownButton, IDropdown } from "../../widget";
import { TbTableExport } from "react-icons/tb";
import { DataGridPluginOptions } from "../types";
import { EXPORT_FORMAT, ExportRequest } from "@palmyralabs/palmyra-wire";
import { IPageQueryable } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import { IPluginBtnControl } from "./types";

interface IExportDataOptions extends Pick<DataGridPluginOptions, 'queryRef'>, IPluginBtnControl {
    exportOption: Partial<Record<EXPORT_FORMAT, string>>
}
const ExportDataButton = (props: IExportDataOptions) => {
    const { exportOption } = props;
    const dropDownRef = useRef<IDropdown>();
    const visible = props.visible != false;


    const exportData = (format: EXPORT_FORMAT) => {
        const queryRef: IPageQueryable = props.queryRef.current;
        const p = queryRef.getQueryRequest();
        const params: ExportRequest = { ...p, format, limit: -1 };
        queryRef.export(params);
        dropDownRef.current.close();
    }

    const optionHandlers = {
        csv: () => exportData('csv'),
        pdf: () => exportData('pdf'),
        excel: () => exportData('excel'),
        doc: () => exportData('doc')
    };
    const optionIcons = {
        csv: <PiFileCsv className='density-icon grid-button-icon' />,
        pdf: <PiFilePdf className='density-icon grid-button-icon' />,
        excel: <PiFileXls className='density-icon grid-button-icon' />,
        doc: <PiFileDoc className='density-icon grid-button-icon' />
    };
    return (<>{visible &&
        <DropdownButton title='Export' ref={dropDownRef} disabled={props.disabled}
            PrefixAdornment={<TbTableExport className='grid-button-icon' />}>
            <div onClick={(e) => e.stopPropagation()}>
                <ul>
                    {Object.entries(exportOption).map(([key, label]) => (
                        <li key={key} onClick={optionHandlers[key]}>
                            {optionIcons[key]}
                            <span className='drodown-content-text'>{label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </DropdownButton>
    }</>
    )
}

export { ExportDataButton };
export type { IExportDataOptions }
