const { downloadFile } = require("../../src/services/box/downloadFile");

exports.handler = async (event, context) => {
  const fileId = event.queryStringParameters.fileId;

  const data = await downloadFile(fileId);

  return {
    statusCode: 200,
    body: data,
  };
};
