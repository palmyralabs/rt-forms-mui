import { ITitle } from "../types"

interface Parent {
    children?: any
}

interface Titleable {
    name?: string,
    title?: ITitle
    hideTitle?: boolean
}

interface SectionContainerInput extends Titleable, Parent {
    customButton?: React.ReactNode[]
}

export type { Titleable, SectionContainerInput }