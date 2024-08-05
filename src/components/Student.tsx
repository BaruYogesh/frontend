import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

export default function Student(){

    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: ItemTypes.STUDENT,
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        }),
        [],)
    
    return (
        <>
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: '5em',
                    color: 'blue',
                    textAlign: 'center',
                }}
            >
                ♟
            </div>
        </>
    )
    
}

