import React from 'react';
import {ShotChart} from "./ShotChart";
import {Profile} from "./Profile";

export class Main extends React.Component {
    state = {
        playerId: 201939,
    }
    render() {
        return (
            <div className="main">
                <Profile playerId={this.state.playerId}/>
                <ShotChart playerId={this.state.playerId}/>
            </div>
        );
    }
}
