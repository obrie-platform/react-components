import * as React from "react";
import {TextFieldController, TextFieldProps} from "@obrie/sdk";

export interface ReactTextFieldProps extends TextFieldProps {
    ref: React.RefObject<TextFieldController>
}

const textFieldView = (props: any): any => null;
export function TextField(props: ReactTextFieldProps): JSX.Element {
    return <textFieldView {...props} />
}

export { TextFieldController }