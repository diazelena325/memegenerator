import React from 'react'
import boxes from './boxes'

function Squares(props) {
    const [squares, setSquares] = React.useState(boxes)

    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    const squareElements = squares.map(square => (
        <div  style={styles} className="box" key={square.id}></div>
    ))

    

    return (
        <main>
            {squareElements}
        </main>
    )
}

export default Squares