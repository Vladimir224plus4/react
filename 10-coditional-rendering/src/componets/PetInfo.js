function PetInfo({animal, years, hasPet}) {
    return hasPet ? (
        <h1> 
            My {animal} is {years} years old
        </h1>
    ) : (
        <h1>I don`t have name animal</h1>
    );
}


export default PetInfo;


