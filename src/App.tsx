import React from 'react';
import Platform from "./component/Platform";
import {RecoilRoot} from "recoil";

const App = () => {

    return (
        <React.Fragment>
            <RecoilRoot>
                <Platform />
            </RecoilRoot>
        </React.Fragment>
    );

};

export default App;