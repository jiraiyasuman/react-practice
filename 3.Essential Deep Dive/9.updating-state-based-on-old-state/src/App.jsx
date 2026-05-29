import Player from './components/Player.jsx';

export default function App(){
  return (
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="PLayer 1" symbol="X"/>
            <Player name="PLayer 2" symbol="0"/>
          </ol>
          GAME BOARD
        </div>
        LOG
      </main>
  )
}