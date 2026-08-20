// function PropsBasic(props) {
function PropsBasic({ name, field, age, hobies }) {
    return (
        <>
            <h3>
                {/* Myself {props.name} and i'm a {props.field} i'm {props.age} years old </h3> */}
                Myself {name} and i'm a {field} i'm {age} years old </h3>
            <ul>
                {hobies.map((name, index) => (
                    <li key={name}>
                        {name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default PropsBasic;
