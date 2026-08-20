export default function ButtonBasic(props){
    return(
        <>
            <button onClick={props.handleButton}>{props.lable}</button>
        </>
    )
}