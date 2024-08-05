import { ReactNode } from "react"
import { useDrop } from "react-dnd"
import { Game } from "./Game"
import { ItemTypes } from "./ItemTypes"
import { Overlay, OverlayType } from "./Overlay"

export interface CellProps {
	x: number
	y: number
	children?: ReactNode
	game: Game
}

export default function Cell({x, y, children, game}: CellProps) {
    const [{ isOver, canDrop }, drop] = useDrop(
		() => ({
			accept: ItemTypes.STUDENT,
			canDrop: () => game.canMovePiece(x, y),
			drop: () => game.movePiece(x, y),
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
				canDrop: !!monitor.canDrop(),
			}),
		}),
		[game],
	)
    return (
		<div
			ref={drop}
			role="Space"
			data-testid={`(${x},${y})`}
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
			}}
		>
            {children}
			{isOver && !canDrop && <Overlay type={OverlayType.IllegalMoveHover} />}
			{!isOver && canDrop && <Overlay type={OverlayType.PossibleMove} />}
			{isOver && canDrop && <Overlay type={OverlayType.LegalMoveHover} />}
		</div>
	)
}