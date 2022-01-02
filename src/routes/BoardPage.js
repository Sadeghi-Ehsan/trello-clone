import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {Trello} from "../component/trello/Trello";

export const BoardPage = withRouter(((props) => {
    const [loading, setLoading] = useState(false);
    const [columns , setColumns] = useState({
        "todo": {
            title: "todo",
            items: ["create task 1","create task 2", ]
        }
    })
    useEffect(() => {
        (async () => {
            setLoading(true);
            // await fetchBoard();
            setLoading(false);
        })();
    }, []);

    const addTask = (id) => {
        debugger;
        const newItem = prompt('add a new card');
        if(!newItem){
            alert('task name should not be empty!')
            return;
        }
        debugger;
        let newTask ={...columns,...columns[id].items.push(newItem)}
        setColumns(newTask)
    };

    const addColumn = ()=>{
        const newItem = prompt('Add a new column!!');
        if(!newItem){
            alert('Lane name should not be empty!')
            return
        }
        let newCol = {
            [`${newItem}`]: {
                title: `${newItem}`,
                items: []
            }
        }
        let newColumn = {...columns ,...newCol }
        setColumns(newColumn)
    }

        if (loading) {
            return <h1>Loading</h1>;
        }
        return (<Trello
                    columns={columns}
                    addTask={(id)=>addTask(id)}
                    addColumn={()=>addColumn()}
        />);
    })
);
