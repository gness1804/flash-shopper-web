import React from 'react';
import { render } from 'react-dom';

import Application from './components/Application.jsx';

require('./styles.scss');

render(<Application />, document.getElementById('application'));
