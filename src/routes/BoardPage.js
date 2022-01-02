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
            await fetchBoard();
            setLoading(false);
        })();
    }, []);

    const fetchBoard = () => {
        const data = ( JSON.parse(sessionStorage.getItem('Boards')));
        data&&setColumns(data);
    };

    const addTask = (id) => {
        const newItem = prompt('add a new card');
        if(!newItem){
            alert('task name should not be empty!')
            return;
        }
        let newTask ={...columns,...columns[id].items.push(newItem)}
        setColumns(newTask)
        sessionStorage.setItem('Boards', JSON.stringify(newTask));
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
        setColumns(newColumn);
        sessionStorage.setItem('Boards', JSON.stringify(newColumn));
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
