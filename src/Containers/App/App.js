import './App.css';
import TodoRedux from '../../Components/TodoRedux';
import { Provider } from 'react-redux';
import store from '../../redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="contain">
          <div className="row my-5 justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6">
              <TodoRedux />
            </div>
          </div>
        </div>
      </div>
    </Provider>

  );
}

export default App;
