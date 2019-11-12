import React from "react";
import Caption from "../Caption/Caption";
import Header from "../Header/Header";
import TableBody from "../Body/TableBody"
import "./Main.sass";
import fillerData from "../../../data/filler.json";

class Main extends React.Component {
    render() {
        return (
            <table>
                <Caption captionIncluded="This is the decription"/>
                <Header fillerData={fillerData}/>
                <TableBody fillerData={fillerData}/>
            </table>
        )
    }
}

export default Main