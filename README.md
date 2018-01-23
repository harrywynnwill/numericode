Numericode

#Installation

Prerequistites

Have Node installed, i'm using `v9.3.0`.
clone repo
cd in
npm install
Npm run start:server  - builds the react and starts the server
You can now curl the backend …

Curl command


Requirements
We would like to see a single-page web application that decodes Numericode into its original message.
The user interface should include a text box (for inputting the Numericode) and a display for the original message.
Numericode is supplied as numbers seperated by spaces. Your tool should handle errors gracefully. 
There is some error on the server side.
We don't want to give away the secret decoding algorithm, so the decoding process should be done in the backend.
The user's state should be saved. (When I refresh the page, I should see the same Numericode.)





Architecture
The single-page app is served by an Express Server. I bootstrapped it with Create React App for speed (and easy config). It is probably a bit heavyweight and slightly over engineering for the job…

`Numericode-util` contains the logic for the numericode algorithm.
 I wrote the logic for the numericode substitution cipher as a lambda with no mutable state. Could maybe run on AWS Lambda to save costs when numericode scales!

`server.js` serves the React App and `decode` lambda endpoint.
The server is an object that takes the `substitution cypher algorithm` as an argument in the constructor. This made mocking easier and allows the implementation of the algorithm to be easily changed.

The Frontend is written in React which is a little heavy weight for the task. However it is quick to prototype and abstracts lots of config. I decided to persist the decoded message in `local storage` in the browser. It seemed like the quickest option to deliver all the requirements. However this could be moved down the stack…

The app has good unit test coverage, however it could do with some integration tests
I TDDed the algo
Server is unit tested
And used Enzyme to tests the components

Roadmap
Add HTTPS! 
Extract the deserialisation logic from the server.
Add tail recursion to the recursive function.
E2e Selenium tests
Improve error handling - large ints, only integers - add regex serverside.
Refactor unused deps out of App pulled in with Create React App
Backend Persistence













