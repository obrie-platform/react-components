import * as React from "react";
import {OverflowBoxProps} from "@obrie/sdk";

export interface ReactOverflowBoxProps extends OverflowBoxProps {
}

const overflowBoxView = (props: any): any => null;
export function OverflowBoxField(props: ReactOverflowBoxProps): React.ReactNode {
    return <overflowBoxView {...props} />
}
