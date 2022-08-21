import logo from './images/infrareth.png';
import './App.css';
import { WorldIDWidget } from "@worldcoin/id";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <center>
        <WorldIDWidget
          actionId="wid_staging_4db13c23fedfa06c8302b5ebca787c2e" // obtain this from developer.worldcoin.org
          signal="infra_reth_inclusive_mvmt_for_equality"
          enableTelemetry
          onSuccess={(verificationResponse) => console.log(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
          onError={(error) => console.error(error)}
        />
      </center>
      
    </div>
  );
}

export default App;
