# Box Serverless Function

This is a serverless function built with Netlify that connects to Box using the box-node-sdk and returns all the folders.

## Prerequisites

Before running this project, ensure you have the following prerequisites:

- Node.js installed (version 14 or higher)
- Netlify CLI installed (`npm install -g netlify-cli`)

## Getting Started

Follow the steps below to set up and run the project locally:

1. Clone the repository:
   ```shell
   git clone <repository-url>
   cd netlify-serverless

2. Install the dependencies:
   ```shell
   npm install

3. Create a .env file in the root directory of the project and add the following lines:
    ```shell
    CLIENT_ID==<your-client-id>
    CLIENT_SECRET==<your-client-secret>
    PUBLIC_KEY_ID==<your-public-key>
    PRIVATE_KEY==<your-private-key>
    PASSPHRASE==<your-passphrase>
    ENTERPRISE_ID==<your-enterprise-id>
    ```
    You can find the values for these variables in your Box Developer Console.

4. Run the project locally:
   ```shell
    netlify dev
    ```
    This will start a local server at http://localhost:8888.

5. Test the function by sending a GET request to:
   
   http://localhost:8888/.netlify/functions/listFoldersAndFiles
   http://localhost:8888/.netlify/functions/downloadFile?fileId=0






