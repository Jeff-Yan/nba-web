import React from 'react';
import {ShotChart} from "./ShotChart";
import {Profile} from "./Profile";
import nba from 'nba';

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,

    }

    componentDidMount() {
        nba.stats.playerInfo({ PlayerID: this.state.playerId })
            .then((response) => {
                console.log(response);
            })
            .catch((e) => console.log(e))
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
