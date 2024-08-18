import { forwardRef, MutableRefObject, useEffect, useRef } from "react";
import { IPalmyraGrid, PalmyraGridOptions } from "./types";
import { GridX } from "./GridX";
import { topic } from "@palmyralabs/ts-utils";
import { IPageQueryable, StoreFactoryContext } from "@palmyralabs/rt-forms";
/**
 * 
 * Emitters 
 * ${topic}/data -- onDataChange event
 * 
 * Listeners
 * ${topic}/refresh - Refresh dataset / fetch from server
 * ${topic}/filter - apply filter based on the incoming data
 * 
 */
const PalmyraGrid = forwardRef(function PalmyraGrid(props: PalmyraGridOptions, ref: MutableRefObject<IPalmyraGrid>) {

    const gridTopic = props.topic;
    const queryRef = ref || useRef<IPageQueryable>();

    useEffect(() => {
        if (props.topic) {
            const refreshHandle = topic.subscribe(gridTopic + '/refresh', () => {
                if (queryRef.current) {
                    queryRef.current.refresh();
                }
            });

            const filterHandle = topic.subscribe(gridTopic + '/filter', (_topic, filter: any) => {
                if (queryRef.current) {
                    queryRef.current.setFilter(filter);
                }
            })

            return () => {
                topic.unsubscribe(refreshHandle);
                topic.unsubscribe(filterHandle);
            }
        }
    }, [gridTopic])


    return <>
        <StoreFactoryContext.Provider value={props.store}>
            <GridX {...props} ref={queryRef} />
        </StoreFactoryContext.Provider>
    </>
})


export { PalmyraGrid }