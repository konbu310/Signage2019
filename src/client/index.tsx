
import * as React from "react";
import * as ReactDOM from "react-dom";
import axios, {AxiosResponse} from "axios";
import MainFrame from "./components/signage/MainFrame";

window.onload = async () => {
    console.log("hello!");

    if (location.pathname.includes("mobile")) {
        /*モバイルページ用コンポーネントを読み込む*/
    } else if (location.pathname.includes("signage")) {
        /*サイネージ用コンポーネントを読み込む*/
        const json = await axios.get("osusume.json").catch(e => console.error(e)) as AxiosResponse;
        console.dir(json.data);
        ReactDOM.render((
            <MainFrame dataArray={json.data} />
        ),document.getElementById("root"));
    }
};