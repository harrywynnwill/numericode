Numericode

#Installation 

Prerequistites

Have Node installed, i'm using `v9.3.0`.
clone repo
cd in 
npm install








#We would like to see a single-page web application that decodes Numericode into its original message.

##I've bootstrapped the app with Create React App which is buying served by an Express backend.


I decided with the light weight express server with lambda.
The server is an object that takes the `substitution cypher algorithm` as an argument in the constructor. This made mocking easier and allows the implementatiomn of the algorithm to be easily changed.

The numericodeutil is functional and holds no state. Could maybe run on AWS Lambda to save costs when numericode scales!


#The user interface should include a text box (for inputting the Numericode) and a display for the original message.


The frontend is written in React which is a little heavy weight for the task. However it is quick to prototype and abstracts lots of config. I decided to persist the decoded message in `local storage` in the browser. It seemed like the quickest option to deliver all the requirements. However this could be moved down the stack and persisted with sessions and a DB.


Proposed Road Map

Add Https! 
Improve error handling - large ints, only integers - add regex serverside.
Backend Persistance?
Refactor unused deps out of App pulled in with Create React App


We would like to see a single-page web application that decodes Numericode into its original message.
The user interface should include a text box (for inputting the Numericode) and a display for the original message.
Numericode is supplied as numbers seperated by spaces. Your tool should handle errors gracefully.
We don't want to give away the secret decoding algorithm, so the decoding process should be done in the backend.
The user's state should be saved. (When I refresh the page, I should see the same Numericode.)


Numericode
When passing secret messages around the Trussle offices, we use our in-house cipher which we call Numericode. To make
life easier for us, we'd like you to build a Numericode message decoder.
What Is Numericode?
A substitution cipher is an algorithm that maps a letter onto something else - a letter, number or symbol. For example, you
may have seen a numeric substitution cipher, where A = 1, B = 2, ..., Y = 25, Z = 26. In this example, HELLO would
become 8 5 12 12 15.
Numericode is very similar to the numeric substitution cipher, except that the numbers given can be larger than 26 (the
number of letters in the alphabet). If a number is 27 or larger, it needs to be divided by 27 until it is 26 or less. To give an
example, 8 5 12 12 15 is still a valid encoding of HELLO, but so is 216 3645 12 324 405 (because it is 8*27 5*27*27
12 12*27 15*27).
If a number is not an integer after being divided by 27, it should be presented as a space. For example, the message
FOO BAR can be encoded as 6 15 15 28 2 1 18 (because 28 / 27 is not an integer, it is shown as a space).
The Numericode Decoder
We would like to see a single-page web application that decodes Numericode into its original message.
The user interface should include a text box (for inputting the Numericode) and a display for the original message.
Numericode is supplied as numbers seperated by spaces. Your tool should handle errors gracefully.
We don't want to give away the secret decoding algorithm, so the decoding process should be done in the backend.
The user's state should be saved. (When I refresh the page, I should see the same Numericode.)
You are free to use any tools and frameworks you want to complete this exercise, but remember that we will be running your
solution on our machines.
Create a private Git repository or zipped folder to send your work to us. Please don't make submissions public: making
these exercises isn't straightforward and we'd like to avoid writing another.
Here are some sample messages we'd like decoding:
13 27 26 5
432 21 19 5832 5 135 14 6561 59049 15 486 275562
20 486 21 513 19 324 5 21924 540 135 3 8
8 5 324 8748 295245 730 23 405 13122 12 108
Please include these as tests in your solution.
What We'll Do
When we get your solution, we will look at your README for instructions on how to set up, run and test your solution.
We'll be assessing your solution on how well the code, error handling, tests and documentation have been written.
Have fun and let us know if you have any feedback on the test!