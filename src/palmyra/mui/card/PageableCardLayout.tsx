import { IPageQueryable, ServerCardLayout, ServerCardLayoutInput } from "@palmyralabs/rt-forms"
import { useRef, JSX } from "react";
import { PageQueryPluginOptions, SelectablePagination } from "../grid";
import { topic } from "@palmyralabs/ts-utils";

interface IPageableCardInput extends ServerCardLayoutInput, PageQueryPluginOptions {
    CardPagination?: (props) => JSX.Element
}

const PageableCardLayout = (props: IPageableCardInput) => {

    const queryRef = props.queryRef || useRef<IPageQueryable>(null);

    const onDataChange = (newData: any[], oldData?: any[]) => {
        if (props.onDataChange) {
            try {
                props.onDataChange(newData, oldData)
            } catch (error) {
                console.error(error);
            }
        }

        if (props.topic) {
            try {
                topic.publish(props.topic + "/data", newData);
            } catch (error) {
                console.error(error);
            }
        }
    }

    const Pagination = props.CardPagination || SelectablePagination;

    return <>
        <ServerCardLayout Child={props.Child} store={props.store} ref={queryRef} onDataChange={onDataChange} {...props} />
        <Pagination pageSize={props.pageSize} queryRef={queryRef} topic={props.topic} {...props} />
    </>
}
export { PageableCardLayout }