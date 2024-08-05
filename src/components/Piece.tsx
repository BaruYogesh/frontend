import Student from "./Student"

export interface PieceProps {
	isStudent: boolean
}

export default function Piece({ isStudent }: PieceProps){
    return (
        isStudent ? <Student/> : <div></div>
    )
}
