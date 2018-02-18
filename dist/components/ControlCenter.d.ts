/// <reference types="react" />
import * as React from "react";
import { SplitInfo } from "./Split";
import { Editor, View } from "./editor";
export declare class ControlCenter extends React.Component<{}, {
    /**
     * Split state.
     */
    splits: SplitInfo[];
    /**
     * Visible pane.
     */
    visible: "output" | "problems";
}> {
    constructor(props: any);
    onOutputChanged: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    outputView: View;
    refs: {
        container: HTMLDivElement;
    };
    outputViewEditor: Editor;
    setOutputViewEditor(editor: Editor): void;
    updateOutputViewTimeout: any;
    updateOutputView(): void;
    createPane(): JSX.Element;
    render(): JSX.Element;
}
