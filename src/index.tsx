import * as React from 'react'
import {ElementType} from "react";

declare const window: Record<any, any>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            screen: {};
            tableView: {};
            tableRowView: {};
            safeAreaView: {};
            touchableView: {};
            sizedBoxView: {};
            overflowBoxView: {};
            mapView: {};
            webView: {};
            stackView: {};
            positionedView: {};
            rowView: {};
            columnView: {};
            listView: {};
            expandedView: {};
            textFieldView: {};
            buttonView: {};
            textView: {};
            containerView: {};
            formView: {
                onSubmit?: (data: any) => any
            };
        }
    }
}

export * from './renderer'
export * from './hooks/useForm'
export * from './hooks/usePermission'
export * from './widgets/Column'
export * from './widgets/Row'
export * from './widgets/Button'
export * from './widgets/Container'
export * from './widgets/Form'
export * from './widgets/Expanded'
export * from './widgets/ListView'
export * from './widgets/Text'
export * from './widgets/Screen'
export * from './widgets/TextField'
export * from './widgets/Positioned'
export * from './widgets/SafeArea'
export * from './widgets/Touchable'
export * from './widgets/Stack'
export * from './widgets/SizedBox'
export * from './widgets/OverflowBox'
export * from './widgets/Table'
export * from './widgets/TableRow'
export * from './widgets/MapView'
export * from './widgets/WebView'
