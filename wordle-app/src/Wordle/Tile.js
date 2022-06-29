export default function TileRow({index, letter, array, displayProgress}) {

    const classNames = displayProgress(index, letter, array);
    
    return ( 
        <div className={`square ${classNames}`}>
            <p className="text">{letter}</p>
        </div>
    )
}