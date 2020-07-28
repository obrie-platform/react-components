import * as React from "react";
import {ExpandedProps} from "@obrie/sdk";

export interface ReactExpandedProps extends ExpandedProps {
    children?: React.ReactNode
}

const expandedView = (props: any): any => null;
export function Expanded(props: ReactExpandedProps): React.ReactNode {
    return <expandedView {...props} />
}
