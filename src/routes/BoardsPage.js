import React, { useEffect, useState } from 'react';
import { BoardTitle } from '../component/BoardTitle';
import {useHistory} from "react-router-dom";

export const BoardsPage =(() => {
    const [boards, setBoards] = useState({});
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        (async () => {
            await fetchBoards();
        })();
    }, []);

    const fetchBoards = () => {
        setBoards([])
        setLoading(false);
    };

    const addBoard = (board) => {
        setBoards(objectToArray(board||{}))
    };

    const objectToArray = (data) => !data ? [] : [{...data,'key': Math.random()}];

    if (loading) {
        return <h1>Loading</h1>;
    }

    const setConfirmVisible = () => {
        const newItem = prompt('Add a new Board');
        if(!newItem){
            alert('board name should not be empty!')
            return;
        }
        addBoard({title:`${newItem}` })
    };
    return (
        <div className="">
            <h1 className="">
                Personal Boards
            </h1>
            <div className="trello">
                {boards.map((board) => (
                    <BoardTitle
                        key={board?.key}
                        title={board.title}
                        handleBoardClick={() => history.push(`boards/${board?.key}`)}
                    />
                ))}
                <BoardTitle
                    title="Add new board"
                    addition={true}
                    handleBoardClick={() => setConfirmVisible()}
                />
            </div>
        </div>
    );
});
