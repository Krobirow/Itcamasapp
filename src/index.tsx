import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './Components/App/App';


const container:HTMLElement | null = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)


