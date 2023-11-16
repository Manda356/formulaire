import React, {useState} from 'react';
import {RecoilRoot} from "recoil";
import AppRoute from "./component/Routes/AppRoute";
import Platform from "./component/Platform";
import Dialogue from "./component/Dialogue";

const App = () => {

    return (
        <React.Fragment>
            <Platform />
        </React.Fragment>
    );

};

export default App;