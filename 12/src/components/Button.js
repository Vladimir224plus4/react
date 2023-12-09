function Button({ countProps, onClick}) {
    return <button onClick={() => onClick(countProps + 1)}>Click me!</button>;
}
export default Button;