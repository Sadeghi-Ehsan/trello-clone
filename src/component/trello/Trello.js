import {Column} from "./column/Column";

const allowDrop = (ev) => {
    ev.preventDefault();
};
const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
};
const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
export const Trello =({
    columns,
    addTask,
    addColumn
  }) =>(
    <div className="trello">
        {Object.keys(columns).map((item, key) => (
            <Column
                key={key}
                title={columns[item].title}
                drag={drag}
                drop={drop}
                ondragover={allowDrop}
                create={(event) => addTask(item, event)}
                items={columns[item].items}
            />
        ))}
        <div>
            <button onClick={() => addColumn()}>Add new Lane</button>
        </div>
    </div>
)

