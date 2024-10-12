import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import { FieldGroupContainer, PalmyraEditForm } from "@palmyralabs/rt-forms";
import { MutableRefObject, useRef, useState } from "react";


interface IFormInput {
    children: React.ReactNode,
    formRef?: MutableRefObject<any>
}
const FormX = (props: IFormInput) => {
    const { children } = props;
    const [_isValid, setValid] = useState<boolean>(false);
    const formRef = props.formRef || useRef();
    const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/testdata/form' });


    return (
        <PalmyraEditForm onValidChange={setValid} ref={formRef} id="1.json" endPoint={""}
            storeFactory={storeFactory}>
            <FieldGroupContainer>
                <div className="formx-children-container">
                    {children}
                </div>
            </FieldGroupContainer>
        </PalmyraEditForm>
    )
}

export default FormX;
