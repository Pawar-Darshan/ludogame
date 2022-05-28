import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <LudoGame />
    </div>
  );
}

const ludogame1 = () => {
  const play1 = Math.floor(Math.random() * 6) + 1;
  const img = `/assets/Images/Dice_${play1}.png`;
  return img;
};

const ludogame2 = () => {
  const play2 = Math.floor(Math.random() * 6) + 1;
  const img = `/assets/Images/Dice_${play2}.png`;
  return img;
};

function refreshPage() {
  window.location.reload(false);
}

const LudoGame = () => {
  return (
    <div className="container">
      <h1>Ludo Game</h1>
      <div className="dice">
        <p>Player 1</p>
        <img src={ludogame1()} alt={ludogame1()} />
        {console.log()}
      </div>
      <div className="dice">
        <p>Player 2</p>
        <img src={ludogame2()} alt={ludogame2()} />
      </div>
      <div>
        <button onClick={refreshPage}>Click Me</button>
      </div>
    </div>
  );
};

export default App;
