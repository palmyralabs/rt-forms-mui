import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import { PalmyraForm } from "@palmyralabs/rt-forms";
import { useState } from "react";
import { FieldGroupContainer } from "../../../src/palmyra";


interface IFormInput {
    children: React.ReactNode
}
const FormX = (props: IFormInput) => {
    const { children } = props;
    const [_isValid, setValid] = useState<boolean>(false);

    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/testdata/form' });


    return (
        <PalmyraForm formData={{}} onValidChange={setValid}
            storeFactory={storeFactory}>
            <FieldGroupContainer>
                <div className="formx-children-container">
                    {children}
                </div>
            </FieldGroupContainer>
        </PalmyraForm>
    )
}

export default FormX;
