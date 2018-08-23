import axios from "axios";

const getErrorMessage = errCode => {
  switch (errCode) {
    case "wrong_email_or_password":
      return "Invalid email or password";
    case "user_not_found":
      return "Uer not found";
    default:
      return errCode;
  }
};

const instance = axios.create({
  baseURL: "https://mysterious-reef-29460.herokuapp.com/api/v1/",
  headers: { "content-type": "application/json" }
});

const onResponse = response => {
  const { status, data, message } = response.data;
  if (status === "ok") return data;
  throw Error(getErrorMessage(message));
};

export const auth = (email, password) =>
  instance.post("/validate", { email, password }).then(onResponse);

export const getUserById = id =>
  instance.get(`/user-info/${id}`).then(onResponse);

export const getNews = () => instance.get(`/news`).then(onResponse);
