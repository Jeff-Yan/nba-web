import React from 'react';
import {PROFILE_PIC_URL_PREFIX} from "../constants";

export class Profile extends React.Component {
    render() {
        const {playerId, displayerFirstLast} = this.props.playerInfo;
        return (
          <div className="profile">
              <img
                  className="player-image"
                  src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                  alt={displayerFirstLast}/>
          </div>
        );
    }
}