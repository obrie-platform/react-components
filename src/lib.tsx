import * as React from 'react'

declare global {
    const window: Record<any, any>;

    namespace JSX {
        interface IntrinsicElements {
            screen: {};
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
