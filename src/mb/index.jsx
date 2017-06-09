import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import RouterMap from './router/RouterMap'


render(
    
        <RouterMap />
    ,
    document.getElementById('mbMountPoint')
);

