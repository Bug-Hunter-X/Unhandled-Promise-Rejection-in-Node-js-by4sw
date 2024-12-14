# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  Unhandled promise rejections occur when a promise is rejected, but there's no `.catch()` block to handle the error. This can lead to unexpected crashes or silent failures, making debugging difficult.

## The Problem

The `bug.js` file contains an example of code that uses the `fs.promises.readFile()` method to read a file. If the file does not exist, the promise will be rejected and, without error handling, the application will crash.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle promise rejections.  By adding a `.catch()` block, the code gracefully handles the error, preventing the application from crashing.

## How to Run

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the unhandled rejection error (ensure that the file './file.txt' does not exist). 
4. Run `node bugSolution.js` to see the corrected version handling the promise rejection.