# SBA-320 - [Visit Live Deployment](https://sba-320.onrender.com/)

## Built With

-   JavaScript
-   Node
-   npm
-   React

## Getting Started

### Prerequisites

-   npm (Node Packet Manager)

    -   To install npm, you need to install Node.js, which includes npm
    -   Install Node.js via installer: https://nodejs.org/en/download/current
    -   Verify installation by running

        ```sh
        node -v
        npm -v
        ```

    -   If installed correctly, these commands will display the versions of Node.js and npm installed on your system

### Installation

1. Clone the repo and then navigate to the new directory
    ```sh
    git clone https://github.com/dean-ferreira/module-320.git
    cd module-320
    git checkout sba-320
    ```
2. Install all Development Dependencies listed in package.json
    ```sh
    npm install
    ```
3. Configure .env file
    ```sh
    VITE_API_KEY=your_api_key
    ```

## Usage

-   Start a server:
    ```sh
    npm run dev
    ```
