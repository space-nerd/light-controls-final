import './App.css';
var Govee = require("node-govee-led");

var Client = new Govee({
	apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
	mac: "1d:e7:7c:a6:b0:13:b8:e9",
	model: "H6003"
});

function turnRed() {
  Client.setColor("#ff0000");
}

function turnGreen() {
  Client.setColor("#00ff00");
}

function turnBlue() {
  Client.setColor("#0000ff");
}

function turnPurple() {
  Client.setColor("#ff00ff");
}

function turnAqua() {
  Client.setColor("#00ffff");
}

function turnGoodBlue() {
  Client.setColor("#0070f3");
}

function turnWhite() {
  Client.setColor("#ffffff");
}

function turnOn() {
  Client.turnOn();
}

function turnOff() {
  Client.turnOff();
}

function brightness100() {
  Client.setBrightness(100);
}

function brightness75() {
  Client.setBrightness(75);
}

function brightness50() {
  Client.setBrightness(50);
}

function brightness25() {
  Client.setBrightness(25);
}

function App() {
  return (
    <div className="App">
    <div className="container">

      <main className="main">
        <header className="header">
          <h1 className="title">On/Off Control</h1>
        </header>
        
        <div className="grid">
        
          <button className="card" onClick={turnOn}>
            <h3>Turn On &rarr;</h3>
            <p>This turns the light on.</p>
          </button>

          <button className="card" onClick={turnOff}>
            <h3>Turn Off &rarr;</h3>
            <p>This turns the light off.</p>
          </button></div>

          <h1>Color Control</h1>

          <div className="grid">

          <button className="card" onClick={turnWhite}>
            <h3>White &rarr;</h3>
            <p>This changes the color to White.</p>
          </button>

          <button className="card" onClick={turnRed}>
            <h3>Red &rarr;</h3>
            <p>This changes the color to red.</p>
          </button>

          <button className="card" onClick={turnGreen}>
            <h3>Green &rarr;</h3>
            <p>This changes the color to green.</p>
          </button>

          <button className="card" onClick={turnBlue}>
            <h3>Blue &rarr;</h3>
            <p>This changes the color to blue.</p>
          </button>

          <button className="card" onClick={turnPurple}>
            <h3>Purple &rarr;</h3>
            <p>This changes the color to purple.</p>
          </button>

          <button className="card" onClick={turnAqua}>
            <h3>Aqua &rarr;</h3>
            <p>This changes the color to aqua.</p>
          </button>

          <button className="card" onClick={turnGoodBlue}>
            <h3>Light Blue &rarr;</h3>
            <p>This changes the color to light blue.</p>
          </button>
          </div>

          <h1>Brightness Control</h1>

          <div className="grid">

          <button className="card" onClick={brightness100}>
            <h3>Brightness 100% &rarr;</h3>
            <p>This changes the brightness to 100%.</p>
          </button>

          <button className="card" onClick={brightness75}>
            <h3>Brightness 75% &rarr;</h3>
            <p>This changes the brightness to 75%.</p>
          </button>

          <button className="card" onClick={brightness50}>
            <h3>Brightness 50% &rarr;</h3>
            <p>This changes the brightness to 50%.</p>
          </button>

          <button className="card" onClick={brightness25}>
            <h3>Brightness 25% &rarr;</h3>
            <p>This changes the brightness to 25%.</p>
          </button>

        </div>
      </main>
    </div>
    </div>
  );
}

export default App;
