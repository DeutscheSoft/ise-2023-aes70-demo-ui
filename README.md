## Development Environment Dependencies:

'Nodejs, Git, Websockify or Websocat (MacOS) and a Code Editor like Visual Code`

## Installation:

In a new directory, install dependencies using:

    npm ci

and then start the frontend in development by running

    npm run start
    
in a terminal.

## Websockets:

When running this application locally, the UI domain needs to match the device's domain to establish a websocket. This is because there are direct AES70 connections from the browser to the OCA Device. If you are relying on the DeusO virtual OCA device for this demo, you need to set up a local proxy to the remote virtual device. This proxy allows the 'same domain' policy for websockets to be fulfilled. There is a permanent OCA device available on the port described below.

For the websocket connection proxy, use `websockify` (Nodejs/Linux) or `websocat` MacOS (Homebrew).

Usage: 
  websockify 127.0.0.1:1058 eu.aes70x.net:65058

or:
  websocat -Eb ws-l:127.0.0.1:1058 tcp:eu.aes70x.net:65058

