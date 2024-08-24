import { Button, ButtonProps } from "@mui/material";
import { topic } from "@palmyralabs/ts-utils";
import { DataGridPluginOptions } from "../types";
import { IPluginBtnControl } from "./types";

interface ActionButtonProps extends Omit<ButtonProps, 'onClick'>, IPluginBtnControl,
    Pick<DataGridPluginOptions, 'topic'> {
    label: string,
    name: string
}

const publish = (key, subTopic) => {
    topic.publish(key + "/" + subTopic, {});
}

const ActionButton = (o: ActionButtonProps) => {
    const visible = o.visible != false;

    return <>{visible &&
        <Button  {...o} onClick={() => publish(o.topic, o.name)}>
            <span>{o.label}</span>
        </Button>
    }</>
}

interface CUDButtonProps extends Omit<ButtonProps, 'onClick'>, IPluginBtnControl,
    Pick<DataGridPluginOptions, 'topic'> {
    label: string
}

interface ActionBtnProps {
    props: CUDButtonProps
    name: string
}

const ActionBtn = (o: ActionBtnProps) => {
    const visible = o.props.visible != false;
    return <>{visible &&
        <Button  {...o.props} onClick={() => publish(o.props.topic, o.name)} className="py-action-button"
            disableRipple>
            <span>{o.props.label}</span>
        </Button>
    }</>
}

const NewButton = (o: CUDButtonProps) => <ActionBtn props={o} name='new' />
const EditButton = (o: CUDButtonProps) => <ActionBtn props={o} name='edit' />
const DeleteButton = (o: CUDButtonProps) => <ActionBtn props={o} name='delete' />

export { ActionButton, NewButton, EditButton, DeleteButton }