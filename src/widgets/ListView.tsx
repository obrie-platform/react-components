import * as React from "react";
import {ListViewProps} from "@obrie/sdk";

export interface ReactListViewProps extends ListViewProps {
    children?: React.ReactNode
}

const listView = (props: any): any => null;
export function ListView(props: ReactListViewProps): any {
    return <listView {...props} />
}
