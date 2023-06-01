const BoxSDK = require("box-node-sdk");

const sdk = new BoxSDK({
  clientID: "o03bh2q24duys557pw9lm49h0hf2ok2o",
  clientSecret: "dh2vsaFLi8JkAhEefJkW39d91hyhn1uj",
  appAuth: {
    keyID: "nyewgulu",
    privateKey:
      "-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIIONaXKiBW3sCAggA\nMBQGCCqGSIb3DQMHBAiPW0V+heZV5gSCBMgJKKQt796QGw6L0rB6DviND2bQ+35I\neAWRK5hTv4N10wPet2nv8d5KPbSGG/Jp3QsLa0/ysVT4rNhiwja10JUT5qLxI6FX\nV/QkTPjie06zwWgIQmZA4Yit44IsUowPGolXzyuCHMEbGoHA5tD7SH1pZpbhjYN4\nPDafsyVM07Vn27P/SJ7QzYBMPwJjjMmMj5CTmWrFIKYRo4Z/eZ4m0LuxbbHIJWUV\nu3jQ+AU80UAR1dJ8njo1eSVUD9wDPyDNQAEz3YW9Kr3iPUa8R6azDWQa0WTLBre4\nojxD9w6Ztm0daa9fL07n27UjjE7O8zqIwXTB2O6id47NFyOOX06006IGEPmv/VGQ\n7JrooVAU+vvkuxsOH6KhyieMM5ayzTWEtKUT/ET98j8AtzTcccna8dWyiLXzP3r3\n7wmx5tFGEFcvwshzoBJnSJjBcsDah/pIkISObFErbvc0j7WpUWDpSI41lgIYHoW8\n6k8mPcYjvoHqJhDIr6xyx/eVeKmM5gdvVoYMyY/jE2JQFebhkwz6A+yaMFMA/z/Q\n9XfKNfcS7RJK8YqSVzBs/R8KljmhSsY6Gj6/HM6kHFHoZp8E11+4MKDGvwwUi0M0\nbqSqvoYRQl6FDvPHsrSveAZx4cxCDKfnFjqJ1+Hag6cQcXOUIa/a3cBpgDXDjfbi\ndQRvKb5g9OLtFbov0uQlP02xAP8vCnUkTk2AWQancUFqt3kAzz6F65hgeYjI5nTa\nfLnJmtWY4/ASdltqEm5NneVb09cXrrZlFWcAhn6bOJfBuXFXJRr7cyi6PM9eBLhd\nnE8Xj4Wdn64heOGy24jZPy3GoHOxtPIfMlSLas2FWiAF3iWCu9NkNShATpjh0gnS\nXHgqQzvwiBq+iXsqTgAqpPnTC0gIAe79TCtZHzWvS6wc6zPjjIPEZuA/iqGga8cl\nL1ceBLqpu7dN3U6y2A44G/1t2+DKw9M9ab3fWWOG/xgf31yGY0xoHYx15pc9xX3g\nHqy8NkemnECLZqy8aRPkM1OyO2Z3sbkxtYBjk1JgXLSrHUiO+/RmW2Oph6S4kJqQ\nuEwA7opnOqZ22/XCGgy0Nxl6cyEdM+l+lvdPVvA40Xmy7UoG4SOyh57YnwbWmyt+\nwv9cDuBgDd396yX5tH72SuszLkuHfBj5ONx0hGZb9bmxEmqkkvbKULI+cMQkRA7G\nqVE4rd3WoWn3NjTuaVza9FxO//92BWsr3fs7SDVoFphAuZVu/v8U/usVtCehR6Z4\ne6z/k/qFQGnDM6k6IHIyAG47TA3T4p67Z3sLx9uDd0wX9Sh5QtTYTA2kw6M9xPCA\nYLQMmBQhWfUg5IB/ArIunh4kqieT72Cf9rbhtzzfjHVVroWZLhdukfnU8noPOekC\nBPjjMvrGXaoAgOBS+p5ElrG36aIO7NK9iIgxsYjNwnhdAbUa0pmQMVL42ELx8+9+\nuHzaWUzQCmSm/v1rWWkrd5CIq++4nYbUcN4L1C7o1DsFFNWNUgc0jYrfEABKUwOY\nNUnNqExy2T4a6l9X0YTetvjNmZpp3KPszsVDcXFr0lLWdPjP5U2obkPmZWxNpvxq\nvmGkdRPNP4Ks+AvDdsoMUqM+9oJhZ18FbmPpnGefk8yFiS2ClUhv/ayyAVZiXkkE\nWXg=\n-----END ENCRYPTED PRIVATE KEY-----\n",
    passphrase: "8bfc196ea45de872e1d94faad8bc5fbd",
  },
});

const adminAPIClient = sdk.getAppAuthClient("enterprise", "1043894477");

/**
 * Admin user: 26026687277
 * Normal user: 26033366785
 */

const client = sdk.getAppAuthClient("user", "26033366785");

exports.handler = async (event, context) => {
  let rootFolderId = "0";

  await listFoldersAndFiles(rootFolderId);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

async function listFoldersAndFiles(folderId, prefix = "") {
  try {
    const items = await client.folders.getItems(folderId);

    items.entries.forEach((item) => {
      if (item.type === "folder") {
        console.log(`${prefix}Folder: ${item.name}`);

        listFoldersAndFiles(item.id, `${prefix}  `); // Recursively call the function for subfolders
      } else if (item.type === "file") {
        console.log(`${prefix}File: ${item.name}`);
      }
    });
  } catch (err) {
    console.error(err);
  }
}
