import style from "./Test.module.css"

function Test() {
    // function getname(getname){
    //     return getname;
    // }
    // const design={
    //     color:"red",
    //     textAlign:"center",
    //     backgroundColor:"Black"
    // }
    function alertfu(){
        alert("Function Based called!")
    }

    function inp(evnt){
        console.clear()
        console.log("value : " , event.target.value)
    }
    const name = "anushkha"
    const name1 = "anupriya"
    return (
    <>
        {/* <h1 style={design}>{name}</h1> */}
        <h1 style={{color:"green" , textAlign:"right",fontSize:"50px"}}>{name1}</h1>
        <h1 className={style.test}>Happy Independent Day!✪ ω ✪</h1>
        <button onClick={alertfu}>Click Me!</button>
        <button onClick={()=> alert("function inline Called!")}>Inline Called!</button>
        <br />
        <input type="text" placeholder="Enter Something!" onChange={inp} />
    </>
    );
}
export default Test