# ISE 2023 - Build AES70 Controller UIs with Open Source Software

This repository contains the completed user interface code from the OCA Alliance Booth presentation at Barcelona, ISE 2023.

The project uses the React library, AUX Control Widgets and AES70.js to build a 3rd party AES70 control user interface for a Smartpi DSP - https://www.smart-pi.info/products/smartpi-dsp/

The final UI connects to a Virtual OCA Cloud Device modelled on the Smart Pi DSP.

The project website is: http://ise2023.aes70x.net/

## Development Environment Dependencies:

'Nodejs, Git, Websockify or Websocat (MacOS) and a Code Editor like Visual Code`

## Installation:

In the project directory, install dependencies using:

    npm ci

and then start the frontend in development by running

    npm run start
    
in a terminal.

## Websockets:

When running this application locally, the UI domain needs to match the device's domain to establish a websocket. This is because there are direct AES70 connections from the browser to the OCA Device. To run the application locally you need to set up a websocket proxy to the remote virtual device. This proxy allows the 'same domain' policy for websockets to be fulfilled. For convenience, use the permanent OCA device available on the port described below.

For the websocket connection proxy, use `websockify` (Nodejs/Linux) or `websocat` MacOS (Homebrew).

Usage: 

    websockify 127.0.0.1:1058 eu.aes70x.net:65058

or:

    websocat -Eb ws-l:127.0.0.1:1058 tcp:eu.aes70x.net:65058

