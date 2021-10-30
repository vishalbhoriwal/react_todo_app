import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>{renderRoutes(routes)}</Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
