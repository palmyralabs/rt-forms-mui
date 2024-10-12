import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { IPageQueryable } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import { PageableCardLayout } from "../../src/palmyra/mui/card";

const PageableCardPage = () => {

    const storeFactory = new PalmyraStoreFactory({ baseUrl: "/api/palmyra" })
    const store = storeFactory.getGridStore({}, '/userManagement', 'id')

    const serverCard = (props: any) => {
        return <>
            <div className="card-view-x4">
                <div style={{ backgroundColor: "rgb(220, 220, 220)", padding: '10px' }}>
                    {props.data.displayName}
                </div>
            </div>
        </>
    }

    const queryRef = useRef<IPageQueryable>();
    const topicName = 'sdfsdf';

    return <>
        <PageableCardLayout Child={serverCard} queryRef={queryRef} topic={topicName} store={store} pageSize={[10, 20]} />
    </>
}

export default PageableCardPage;
