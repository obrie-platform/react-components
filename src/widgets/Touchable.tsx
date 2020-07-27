import * as React from "react";
import {TouchableProps} from "@obrie/sdk";

export interface ReactTouchableProps extends TouchableProps {
    children?: React.ReactNode
}

const touchableView = (props: any): any => null;
export function Touchable(props: ReactTouchableProps): any {
    return <touchableView {...props} />
}