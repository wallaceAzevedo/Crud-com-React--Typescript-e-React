interface Iprops {
    text:string;
}

export const Status: React.FC<Iprops> = ({ text }) => {
    return(
        <div className="status">
            <span className="status-text">{text}</span>
        </div>
    )
}