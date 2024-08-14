import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { ServerCardLayout } from "@palmyralabs/rt-forms";

const ServerCardPage = () => {

    const storeFactory = new PalmyraStoreFactory({ baseUrl: "/testdata" })
    const store = storeFactory.getGridStore({}, '/cardData.json', 'id')

    const serverCard = (props: any) => {
        return <>
            <div className="card-view-x4">
                <div style={{ backgroundColor: "rgb(220, 220, 220)", padding: '10px' }}>
                    {props.data.name}
                </div>
            </div>
        </>
    }

    return <>
        <ServerCardLayout Child={serverCard} store={store} />
    </>
}

export default ServerCardPage;
