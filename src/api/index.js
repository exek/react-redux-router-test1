import axios from "axios";

const instance = axios.create({
  baseURL: "https://mysterious-reef-29460.herokuapp.com/api/v1/"
});

export const auth = (email, password) =>
  instance.post("/validate", {
    email,
    password,
    "content-type": "application/json"
  });
