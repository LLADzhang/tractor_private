import * as React from 'react';
import { VALUES, PLUS } from '../../lib/cards';
import './gameInfoPanel.css';

/**
 * A panel that displays info relevant to the entire game (multiple rounds):
 * each player's overall score.
 */
export class GameInfoPanel extends React.Component {

    // [EditByRan] Implement must-play-rank feature.
    // [EditByRan] Implement the "Chao-Di-Pi" feature.
    render() {
        const {
            playerNames,
            myPlayerId,
            playerIds,
            numDecks,
            findAFriend,
            mustPlay5,
            mustPlay10,
            mustPlayK,
            chaoDiPi,
            playerRankScores,
            playerRankCycles,
        } = this.props;

        return (
            <div className='game_info_panel'>
                <div>
                    {`${numDecks} ${numDecks > 1 ? 'decks' : 'deck'}`}
                    {findAFriend ? ' · FAF' : undefined}
                    {chaoDiPi ? ' · CDP' : undefined}
                </div>
                <div>
                    {mustPlay5 || mustPlay10 || mustPlayK ? 'Must play' : undefined}
                    {mustPlay5 ? ' 5' : undefined}
                    {mustPlay10 ? ' 10' : undefined}
                    {mustPlayK ? ' K' : undefined}
                </div>
                <ul>
                    {playerIds.map((playerId) => {
                        const name = playerId === myPlayerId ?
                            <span className='me'>{'You'}</span> : playerNames[playerId];
                        return <li
                            key={playerId}
                        >
                            {name}{`: ${VALUES[playerRankScores[playerId]]}${PLUS[playerRankCycles[playerId]]}`}
                        </li>;
                    })}
                </ul>
            </div>
        );
    }
}
