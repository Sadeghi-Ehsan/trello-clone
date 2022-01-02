
export const BoardTitle = ({
    title,
    handleBoardClick,
    addition
}) => (
    <div

        onKeyDown={() => {}}
        onClick={() => handleBoardClick()}
        className={"container"}>
        <div className={addition?'button':'board'}>{title}</div>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                onKeyDown={() => {}}>
            </div>
    </div>
);
