import {onRequest} from "firebase-functions/v2/https";

export const helloWorld = onRequest((request, response) => {
  const name = request.query.name || "Guest";
  response.send(`Hello ${name}!`);
});

