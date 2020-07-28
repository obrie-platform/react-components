import * as React from "react";
import {MapProps} from "@obrie/sdk";

export interface ReactMapViewProps extends MapProps {
}

const mapView = (props: any): any => null;
export function MapViewField(props: ReactMapViewProps): React.ReactNode {
    return <mapView {...props} />
}
