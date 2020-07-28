import * as React from "react";
import {SizedBoxProps} from "@obrie/sdk";

export interface ReactSizedBoxProps extends SizedBoxProps {
}

const sizedBoxView = (props: any): any => null;
export function SizedBoxField(props: ReactSizedBoxProps): React.ReactNode {
    return <sizedBoxView {...props} />
}
