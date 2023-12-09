const App = ({ initialButtonText, intialButtonColor }) => {
  const [buttonText, setbuttonText] = React.useState(initialButtonText);
  const [buttonColor, setbuttonColor] = React.useState(intialButtonColor);

  const onButtonClick = () => {
    setbuttonText('Hello from React!!!');
    setbuttonColor('green-btn');
  };

  return (
    <div className="app">
      <button className={buttonColor} onClick={onButtonClick}>
        {buttonText}
      </button>
      {/*
    - в JSX классы подключаются при помощи className
    - внутри JSX используются двойные кавычки
    - при добавлении JS внутри JSX необходимо использовать {}
    */}
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" intialButtonColor="" />);

// const App = (props) => {
//   console.log(props);

//   //const { initialButtonText, intialButtonColor } = props;
//   const [buttonText, setbuttonText] = React.useState(props.initialButtonText);
//   const [buttonColor, setbuttonColor] = React.useState(props.intialButtonColor);

//   const onButtonClick = () => {
//     setbuttonText('Hello from React!!!');
//     setbuttonColor('green-btn');
//   };

//   return (
//     <div className="app">
//       <button className={buttonColor} onClick={onButtonClick}>
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// const container = document.getElementById('app');
// const root = ReactDOM.createRoot(container);
// root.render(<App initialButtonText="Click me" intialButtonColor="" />);
