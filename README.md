Numericode

#Installation

Prerequistites

Have Node installed, i'm running `v9.3.0`.

`git clone https://github.com/harrywynnwill/numericode.git`

`cd numericode`

`npm install`

`npm run test:unit`  - run unit tests

`npm run test:component` - run React component tests

`npm run start:server`  - builds the react app and starts the server...

You can now curl the backend … 

`curl http://localhost:3000/decode/8%205%20324%208748%20295245%20730%2023%20405%2013122%2012%20108`

&& view the fronte end 

`http://localhost:3000`

# Requirements
We would like to see a single-page web application that decodes Numericode into its original message.
The user interface should include a text box (for inputting the Numericode) and a display for the original message.

Numericode is supplied as numbers seperated by spaces. Your tool should handle errors gracefully.

We don't want to give away the secret decoding algorithm, so the decoding process should be done in the backend.

The user's state should be saved. (When I refresh the page, I should see the same Numericode.)





# Architecture

The single-page app is served by an Express Server. I bootstrapped it with Create React App for speed (and easy config).

`Numericode-util` contains the logic for the numericode algorithm.
 I wrote the logic for the numericode substitution cipher as a lambda with no mutable state. Could maybe run on AWS Lambda to save costs when numericode scales!

`server.js` serves the React App and `decode` lambda endpoint.
The server is an object that takes the `substitution cypher algorithm` as an argument in the constructor. This made mocking easier and allows the implementation of the algorithm to be easily changed.

The Frontend is written in React which is a little heavy weight for the task. However it is quick to prototype and abstracts lots of config. I decided to persist the decoded message in `local storage` in the browser. It seemed like the quickest option to deliver all the requirements. However this could be moved down the stack…

The app has good unit test coverage, however it could do with some integration tests

I TDDed the algo, the server is unit tested and I used Enzyme to test the React components.

# Roadmap

Add HTTPS! 

Extract the deserialisation logic from the server.

Add tail recursion to the recursive function.

E2e Selenium tests

Improve error handling

Refactor unused deps out of App pulled in with Create React App

Backend Persistence













