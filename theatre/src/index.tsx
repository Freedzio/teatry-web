import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/StatefulHello';

ReactDOM.render(
  <Hello name="Tomaszek" enthusiasmLevel={20} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
