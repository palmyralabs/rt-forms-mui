import { ServerCardLayoutInput } from '@palmyralabs/rt-forms';
import { JSX } from 'react';
import { PageQueryPluginOptions } from '../grid';
interface IPageableCardInput extends ServerCardLayoutInput, PageQueryPluginOptions {
    CardPagination?: (props: any) => JSX.Element;
}
declare const PageableCardLayout: (props: IPageableCardInput) => import("react/jsx-runtime").JSX.Element;
export { PageableCardLayout };
