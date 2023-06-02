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

5. Execute this command to create test token:
   ```shel
   curl --request POST \
   --url https://dev-cv8aw3p0ut5ee3ll.us.auth0.com/oauth/token \
   --header 'content-type: application/json' \
   --data '{"client_id":"ampEXlxrblBAyWikD6MGXamBNOcgtu8I","client_secret":"ru54WXeRfQ1lCrlf8b2uAy22NlimwW4AANAyUb4zNf7vCBU2L0RM_2LyXcbIvF7L","audience":"https://admirable-cupcake-248354.netlify.app","grant_type":"client_credentials"}'
   ```

6. Test the function by sending a GET request with the token to:

   List forlders and files
   ```shell
   curl --request GET \
   --url http://localhost:8888/.netlify/functions/listFoldersAndFiles \
   --header 'Authorization: Bearer <token>' \
   --cookie connect.sid=s%253AAh-7Zdu4uPy8aER03kQs0ayyrXv_bh8_.p4FJkcW7u7sS98OmywkRLb3Dy98Bb5EdS3chRd1q83s
   ```
   
   Download file
   ```shell
   curl --request GET \ 
   --url http://localhost:8888/.netlify/functions/downloadFile?fileId=<fileId> \
   --header 'Authorization: Bearer <token>' \
   --cookie connect.sid=s%253AAh-7Zdu4uPy8aER03kQs0ayyrXv_bh8_.p4FJkcW7u7sS98OmywkRLb3Dy98Bb5EdS3chRd1q83s
   ```






