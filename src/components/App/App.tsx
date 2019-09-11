import * as React from "react";
import { 
    TableRightContainer,
    TableLeftContainer
} from '../../containers';

import "../../assets/scss/App.scss";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <TableLeftContainer />
                <TableRightContainer />
            </div>
        );
    }
}
