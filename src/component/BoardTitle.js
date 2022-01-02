
export const BoardTitle = ({
    title,
    handleBoardClick,
}) => (
    <div
        role="button"
        tabIndex="0"
        onKeyDown={() => {}}
        onClick={() => handleBoardClick()}
        className={""}
    >
        <div className={""}>{title}</div>
            <div
                role="button"
                tabIndex="-1"
                className=""
                onClick={(e) => {
                    e.stopPropagation();
                }}
                onKeyDown={() => {}}
            >
            </div>
    </div>
);
