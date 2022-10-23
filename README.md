# Learning JavaScript

## TL;DR

---

-   Install node.js [node.js website](https://nodejs.org/en/)
-   From VS Code Terminal, run `npm install`
-   Read the exercise comments
-   Look for hints in the challenges
-   Check your code into GitHub regularly

---

This project requires node.js to work properly. You can see if node is already
installed on your machine by running the following command in a terminal:

```
npm --version
```

If node is installed, you should see a version number, otherwise you will see
a message indicating the command is not recognized. You can install node on
Windows or Mac, by visiting the [node.js website](https://nodejs.org/en/). If you
are using a ChromeBook, you can install node by running the following commands
in a terminal:

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
source .bashrc
nvm install node
```

Once node is installed, run the following command from a Visual Studio Code
terminal to install the npm dependencies:

```
npm install
```

## Running the Exercise Unit Tests

This project uses the [jest](https://jestjs.io/) JavaScript testing framework
to help you verify that you have completed the exercises properly. You have a
couple of options to run the tests automatically as you make changes to your code.

The easiest option, is to follow the instructions in the exercise file that
you are working in, this typically entails running a command that looks like
this in a VS Code terminal:

```
npm run test-watch -- 1.01
```

This command will run the unit tests for the exercise code file that starts with
"1.01" and automatically watch it for files changes, running the tests for you
each time you save your file.

The second option is to install the Jest extension in VS Code. This gives you
the ability to explore all the tests, and see failing tests directly in VS
Code.

Although it is not required, you can install jest globally with npm using the
following command: `npm install -g jest`

## Project Structure

### Exercises

Checkout the exercises to learn the basics of JavaScript. These files contain
unit tests to help you complete each task. Make sure to checkout the _Resources
to Enhance Your Learning_ section at the top of each exercise. These resources
should help guide you in completing the exercises with ease.

### Challenges

The challenges are meant to be tackled at your own pace. The challenges range
in difficulty, so some will be easier to complete than others. Some of the
challenges contain hints that can help you complete them. Each challenge
will typically have its own HTML and JavaScript file, that you can feel free
to edit in any way you please. Challenges do not have unit tests, so you are free
to explore you options in completing each one.

## Checking In Your Progress

Make sure you regularly stage, commit and push your changes up to GitHub on a
regular basis. I will continue to add exercises and challenges to my repository
overtime, and you can get these changes by syncing your fork in GitHub. I will
do my best not to change any of the core exercises or challenges to keep this
syncing process as smooth as possible for you.

Happy Coding!!
