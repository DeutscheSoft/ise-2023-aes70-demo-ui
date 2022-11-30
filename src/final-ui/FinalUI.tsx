import React from 'react';
import { AES70Backend } from '@deutschesoft/awml/src/backends/aes70';
import { useBackend } from '@deutschesoft/use-aux-widgets';
import Channel from './Channel';
import DeviceModel from './DeviceModel';

import './Channel.css';

function connectSmartpiBackend() {
  return connectDevicesBackends(1058);
}

// add console info if path fails
function connectDevicesBackends(port:number) {
  return new AES70Backend({
    url: `ws://${window.location.hostname}:${port}`, 
  });
}

function FinalUI() {
  const [ backend, ] = useBackend('Smartpi', connectSmartpiBackend); 

  const connected = !!backend;

  const model = ( connected ) ? DeviceModel : [];

  return (
    <div className="App">
      { model.map((model) => <Channel key={ model.index } model={ model }/>) }
      { ( !connected ) && <div>Websocket Connection Not Found - Is the proxy running?</div> }
    </div>
  );
}

export default FinalUI;
