import React from 'react';
import {ShotChart} from "./ShotChart";
import {Profile} from "./Profile";

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Profile/>
                <ShotChart playerId={2544}/>
            </div>
        );
    }
}
