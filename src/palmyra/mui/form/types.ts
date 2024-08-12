
import { InputType } from "zlib";

import { AutocompleteRenderOptionState } from "@mui/material";
import { FieldOptions, IServerLookupOptions } from "@palmyralabs/rt-forms";


interface IFieldProps {
    size?: 'small' | 'medium' | 'large'
}


interface ILayoutOptions {
    customContainerClass?: string,
    customLabelClass?: string,
    customFieldClass?: string,
    colspan?: number,
    className?: string,
    fieldProps?: IFieldProps
}

interface MuiInputFieldOptions extends FieldOptions {
    label?: string,
    labelMode?: "label" | "title"
    attribute: string
}

type IRadioGroupOptions = Record<any, any> | Record<string, any> | { value: any, label: string }[];

type FlexDirection = 'column' | 'row'

interface ValueLabel {
    value: number,
    label: string
}

interface ITextFieldDefinition extends MuiInputFieldOptions, ILayoutOptions {

}

interface IDatePickerDefinition extends MuiInputFieldOptions, ILayoutOptions {
    serverPattern?: string,
    displayPattern?: string,
    disableFuture?: boolean,
    disablePast?: boolean,
    disableHighlightToday?: boolean,
    displayWeekNumber?: boolean,
    disableOpenPicker?: boolean
    variant?: 'standard' | 'outlined' | 'filled'
}

interface IServerLookupDefinition extends MuiInputFieldOptions, ILayoutOptions, IServerLookupOptions {
    displayAttribute?: string,
    defaultValue?: InputType | any,
    multiple?: boolean,
    renderOption?: (
        props: React.HTMLAttributes<HTMLLIElement> & { key: any },
        option: any,
        state: AutocompleteRenderOptionState,
        ownerState: any,
    ) => React.ReactNode
}

interface ISelectDefinition extends MuiInputFieldOptions, ILayoutOptions {
    options?: Record<any, any> | Record<string, any>
}

interface ISwitchDefinition extends MuiInputFieldOptions, ILayoutOptions {
    options?: Record<any, any> | Record<string, any>
    switch?: 'MaterialUISwitch' | 'Android12Switch' | 'IOSSwitch' | 'Switch';
}

interface IRadioGroupDefinition extends MuiInputFieldOptions, ILayoutOptions {
    options: IRadioGroupOptions
    flexDirection?: FlexDirection
}

interface ICheckBoxDefinition extends MuiInputFieldOptions, ILayoutOptions {
    icon?: any,
    checkedIcon?: any
}

interface ICheckBoxGroupDefinition extends MuiInputFieldOptions, ILayoutOptions {
    options: Record<any, any> | Record<string, any>
    flexDirection?: FlexDirection
}

interface ISliderDefinition extends MuiInputFieldOptions, ILayoutOptions {
    minDistance?: number,
    range?: never
}

interface IServerCheckboxDefinition extends MuiInputFieldOptions, ILayoutOptions, IServerLookupOptions {
    hideSelectAll?: boolean,
    showSelectedOnly?: boolean,
    flexDirection?: FlexDirection
}

interface IEventListeners {
    onBlur: (data: any) => void,
    onFocus: (data: any) => void,
    onValueChange: (data: any) => void,
    onSearch?: (searchKey: string, limt?: number, offset?: number) => void
}

export type {
    ITextFieldDefinition, ISelectDefinition, IDatePickerDefinition, IServerLookupDefinition,
    ISwitchDefinition, IRadioGroupDefinition, ICheckBoxDefinition, ICheckBoxGroupDefinition,
    ISliderDefinition, IServerCheckboxDefinition
}

export type { MuiInputFieldOptions, IEventListeners, ValueLabel }