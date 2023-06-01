const {
  listFoldersAndFiles,
} = require("../../src/services/box/listFoldersAndFiles");

exports.handler = async (event, context) => {
  const rootFolderId = "0";

  const data = await listFoldersAndFiles(rootFolderId);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
