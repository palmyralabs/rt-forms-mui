import { KeyboardArrowDown } from "@mui/icons-material"
import { Button, ClickAwayListener } from "@mui/material"
import { forwardRef, MutableRefObject, useImperativeHandle, useRef, useState } from "react"

import './DropDownButton.css'

interface IDropdownButtonOptions {
    title: string,
    className?: string,
    disabled?: boolean,
    PrefixAdornment?: JSX.Element,
    arrowStyle?: React.CSSProperties,
    children?: any
}

interface IDropdown {
    open: () => void
    close: () => void
}

const DropdownButton = forwardRef(function DropDownButton(props: IDropdownButtonOptions, ref: MutableRefObject<IDropdown>) {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const currentRef = ref || useRef<IDropdown>();

    useImperativeHandle(currentRef, () => {
        return {
            open() {
                setDropdownOpen(true);
            },
            close() {
                setDropdownOpen(false);
            }
        }
    }, [])

    const arrowStyle = props.arrowStyle || {
        transform: dropdownOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
    };

    const PrefixAdornment = props.PrefixAdornment || <></>
    const SuffixAdornment = <KeyboardArrowDown style={arrowStyle} />

    return <><ClickAwayListener onClickAway={() => { setDropdownOpen(false) }}>
        <div className='py-dropdown-button' >
            <div style={{ position: "relative" }}>
                <Button className={props.className} disableRipple
                    disabled={props.disabled}
                    style={{ display: "flex", alignItems: "center", gap: "5px" }}
                    fullWidth={false}
                    onClick={() => setDropdownOpen(!dropdownOpen)}>
                    {PrefixAdornment}
                    <span>{props.title}</span>
                    {SuffixAdornment}
                </Button>

                {dropdownOpen && (
                    <div className="py-dropdown-content" style={{ position: "absolute" }}>
                        {props.children}
                    </div>
                )}
            </div>
        </div>
    </ClickAwayListener></>
});

export { DropdownButton }
export type { IDropdownButtonOptions, IDropdown }