
interface IDropdownButtonOptions {
    title: string;
    className?: string;
    disabled?: boolean;
    PrefixAdornment?: JSX.Element;
    arrowStyle?: React.CSSProperties;
    children?: any;
}
declare const DropdownButton: (props: IDropdownButtonOptions) => import("react/jsx-runtime").JSX.Element;
export { DropdownButton };
