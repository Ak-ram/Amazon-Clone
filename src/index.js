import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './stateProvider';
import reducer, {initialState} from './reducer'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer = {reducer}> {/* Every component can get access to the layer data*/}
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

