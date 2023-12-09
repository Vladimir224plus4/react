function Person(props) {
    const { firstNAme, lastName, email, img } = props;
    return (
        <div>
            <img src={img} />
            <h3>
                {firstNAme} {lastName}
            </h3>
            <h4>{email}</h4>
        </div>
    );
}

export default Person;


