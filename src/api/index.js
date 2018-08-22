import axios from "axios";

const getErrorMessage = errCode => {
  switch (errCode) {
    case "wrong_email_or_password":
      return "Invalid email or password";
    default:
      return errCode;
  }
};

const instance = axios.create({
  baseURL: "https://mysterious-reef-29460.herokuapp.com/api/v1/"
});

export const auth = (email, password) =>
  instance
    .post("/validate", {
      email,
      password,
      "content-type": "application/json"
    })
    .then(response => {
      /*
      response.data: {
        "status": "ok",
        "data": {
          "id": 1
        }
      }
      */
      const { status, data, message } = response.data;
      if (status === "ok") return data;
      throw Error(getErrorMessage(message));
    });
