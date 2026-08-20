export default function Counter(){
    let count =0
    function change(){
        console.log("Clicked");
        count+=1
        let h2 = document.querySelector("h2")
        h2.innerHTML=`Counter :${count}`;

    }
    return(
        <>
            <h2>Counter :{count}</h2>
            <button onClick={change}>Click here!</button>
        </>
    )
}