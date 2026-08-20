function Test1(){
    const arr = ["Anupriya", "Soniya", "Munakshi"]
    const obj = {
        "name":"pallavi",
        "age":21
    }
    const arrObj = [
        {"name":"Aashuriya", "age":23},
        {"name":"Juli", "age":28},
        {"name":"Thukurayan", "age":25},

    ]
    return(
        <>
        <h1>Fruit List</h1>
            <ul>{
                arr.map((fruit,index)=>(
                    <li>{index} : {fruit}</li>
                ))
            }</ul>

            <br/>
            <p style={{fontFamily:"'Times New Roman', Times, serif"}}>My name is {obj.name} and {obj.age} year old</p>
            <br />
            <ul>{
                arrObj.map((name,index)=>(
                    <li>{index} :- My name is {name.name} and {name.age} year old</li>
                ))
            }</ul>
            
        </>
    )
}
export default Test1