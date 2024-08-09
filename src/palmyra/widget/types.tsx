import { ReactNode } from "react";

interface IDecoratedTitle {
    title: string,
    toolTip?: string
}

type widgetFn = () => ReactNode;

type ITitle = string | IDecoratedTitle | widgetFn;

export type { ITitle }