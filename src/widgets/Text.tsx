import * as React from "react";
import {TextProps} from "@obrie/sdk";

export interface ReactTextProps extends TextProps {
    children?: React.ReactNode
}

const textView = (props: any): any => null;
export function Text(props: ReactTextProps): React.ReactNode {
    return <textView {...props} />
}
