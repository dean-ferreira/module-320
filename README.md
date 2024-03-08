# GLAB-320H.3.1

## Objectives

1. The layout and styling of the site is left up to your discretion. There are no layout or styling requirements, but you should always make sure your web applications are neat, sensible, and provide a good user experience.

2. Use the provided array of "learner" data below to initialize state as an object with a `learners` key in the `<App>` component.

3. Code the `<App>` component to display a `<Learner>` component for each learner object in the `learners` array being held in state.

4. Code the `<Learner>` component so that it:

   - Renders the learners's `name` & `bio` properties.
   - Renders a `<Score>` component for each score object in the learner's `scores` property.

5. Code the `<Score>` component so that it renders the score object's `date` & `score` properties.

## Built With

- JavaScript
- Node
- npm
- React

## Getting Started

### Prerequisites

- npm (Node Packet Manager)

  - To install npm, you need to install Node.js, which includes npm
  - Install Node.js via installer: https://nodejs.org/en/download/current
  - Verify installation by running

    ```sh
    node -v
    npm -v
    ```

  - If installed correctly, these commands will display the versions of Node.js and npm installed on your system

### Instructions to create a React app

1. Create a project, run the following command:
   ```sh
   npm create vite@latest .
   ```
2. Use arrow-keys, select React framework.
3. Select JavaScript.

### Installation

1. Clone the repo and then navigate to the new directory
   ```sh
   git clone https://github.com/dean-ferreira/module-320.git
   cd module-320
   git checkout glab/320H.3.1
   ```
2. Install all Development Dependencies listed in package.json
   ```sh
   npm install
   ```

## Usage

- Start a server:
  ```sh
  npm run dev
  ```
