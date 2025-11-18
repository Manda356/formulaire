import {atom} from "recoil";

export const songsState = atom({
    key: 'songsState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});