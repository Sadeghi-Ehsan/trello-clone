export const Column = ({
           items,
           title,
           create,
           drop,
           drag,
           ondragover
       }) => (
        <div className="column">
            <div className="header">
                {title}{" "}
                <button onClick={() => create()}>+</button>
            </div>
            <div className="dragZone" onDrop={drop} onDragOver={ondragover}>
                {items.map((item, key) => {
                    return <div id={key} key={key} className="card" draggable="true"
                                onDragStart={drag}>{item}</div>
                })}
            </div>
        </div>
);