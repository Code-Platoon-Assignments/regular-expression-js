# Initialize a new Node.js project (if you haven't already)
by navigating to your project's directory in the terminal
and running the command:


`npm init --y`

# Install the dependencies by running the following command:

Install Jest
Next, you need to install Jest as a development dependency.

Run the following command:

`npm install --save-dev jest`

This will download and install Jest in your project, and add it as a devDependency in your package.json file.

# Testing
This project includes a test suite using Jest. The tests are defined in the fibonacci.test.js file.

To run the tests, you can execute the following command in your terminal:

`npx jest regexp.test.js`


Jest will automatically discover and execute the test files
that match the naming convention (*.test.js or *.spec.js)
in your project directory.


Note: If you're using an older version of Node.js (pre-v10.2.0),
you may need to use a different command to execute Jest.

In that case, you can add a test script to your package.json file like this:

` "scripts": {
"test": "jest"
}
`

Then, you can run the tests using the command
`npm test`.

Jest will execute the tests and display the test results in the terminal.


