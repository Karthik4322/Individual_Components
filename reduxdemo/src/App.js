import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import CustomerAdd from './Components/CustomerAdd';
import { store } from './Store/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <CustomerAdd/>
      </Provider>
    </div>
  );
}

export default App;
