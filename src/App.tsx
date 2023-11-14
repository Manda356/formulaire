import React, {useState} from 'react';
import {RecoilRoot} from "recoil";
import AppRoute from "./component/Routes/AppRoute";
import Plateform from "./component/Plateform";
import Dialogue from "./component/Dialogue";

const App = () => {

    return (
        <React.Fragment>
            <Plateform />
        </React.Fragment>
    );

};

export default App;