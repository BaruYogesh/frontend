import { useMemo } from 'react';
import './App.css';
import Board from './components/Board';
import { Game } from './components/Game';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const game = useMemo(() => new Game(), [])

	return (
    <DndProvider backend={HTML5Backend}>
			<Board game={game} />

    </DndProvider>
	)
}



export default App;
