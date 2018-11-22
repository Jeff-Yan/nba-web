import React from 'react';
import {PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX} from "../constants";

export class Profile extends React.Component {
    render() {
        const {playerId, displayerFirstLast, teamAbbreviation} = this.props.playerInfo;
        return (
          <div className="profile">
              <img
                  className="player-image"
                  src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                  alt={displayerFirstLast}
              />
              <img
                  className="team-logo"
                  src={`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
                  alt={displayerFirstLast}
              />
          </div>
        );
    }
}