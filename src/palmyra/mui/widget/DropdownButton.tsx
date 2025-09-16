import { KeyboardArrowDown } from "@mui/icons-material"
import { Button, ClickAwayListener } from "@mui/material"
import { forwardRef, JSX, RefObject, useImperativeHandle, useRef, useState } from "react"

import './DropDownButton.css'

interface IDropdownButtonOptions {
    title: string,
    className?: string,
    disabled?: boolean,
    PrefixAdornment?: JSX.Element,
    children?: any
}

interface IDropdown {
    open: () => void
    close: () => void
}

const DropdownButton = forwardRef(function DropDownButton(props: IDropdownButtonOptions, ref: RefObject<IDropdown>) {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const currentRef = ref || useRef<IDropdown>(null);
    const className = props.className || "py-dropdown-button"

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

    const PrefixAdornment = props.PrefixAdornment || <></>
    const SuffixAdornment = <KeyboardArrowDown
        className={`py-dropdown-button-arrow ${dropdownOpen ? 'open' : ''} `}
    />

    return <><ClickAwayListener onClickAway={() => { setDropdownOpen(false) }}>
        <div className="py-dropdown-button-container">
            <Button className={className} disableRipple
                disabled={props.disabled}
                fullWidth={false}
                onClick={() => setDropdownOpen(!dropdownOpen)}>
                {PrefixAdornment}
                <span>{props.title}</span>
                {SuffixAdornment}
            </Button>

            {dropdownOpen && (
                <div className="py-dropdown-content">
                    {props.children}
                </div>
            )}
        </div>
    </ClickAwayListener></>
});

export { DropdownButton }
export type { IDropdownButtonOptions, IDropdown }