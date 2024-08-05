import { useEffect, useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";
import { Game, Position } from "./Game";
import Piece from "./Piece";

export interface BoardProps {
	game: Game
}

export default function Board({game}: BoardProps) {

    const [[pieceX, pieceY], setPiecePost] = useState<Position>(
		game.piecePosition,
	)
	useEffect(() => game.observe(setPiecePost))

    function renderSquare(i: number) {

		const x = i % 5
		const y = Math.floor(i / 5)

		return (
			<StyledCell key={i}>
				<Cell x={x} y={y} game={game}>
					<Piece isStudent={x === pieceX && y === pieceY} />
				</Cell>
			</StyledCell>
		)
	}

    const cells = []
    for (let i = 0; i < 25; i += 1) {
		cells.push(renderSquare(i))
	}

    return (
        <Grid>
            {cells}
        </Grid>
    )
}

const Grid = styled.div`    
    display: grid;
    grid-template-rows: repeat(5, 100px);
    grid-template-columns: repeat(5, 100px);
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
`

const StyledCell = styled.div`
    border: 2px solid;
    position: relative;
    margin: -1px;
    width: 100%;
    height: 100%
`