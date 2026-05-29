import Player from './components/Player.jsx';

export  default function App() {
  return (
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName ="Player1" symbol="X"/>
            <Player initialName ="Player2" symbol="0"/>
          </ol>
          GAME BOARD
        </div>
        LOG
      </main>
  );
}