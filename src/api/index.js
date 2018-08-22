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
  baseURL: "https://mysterious-reef-29460.herokuapp.com/api/v1/"
});

const onResponse = response => {
  const { status, data, message } = response.data;
  if (status === "ok") return data;
  throw Error(getErrorMessage(message));
};

/*
{
  "status": "ok",
  "data": {
    "id": 1
  }
}
*/
export const auth = (email, password) =>
  instance
    .post("/validate", {
      email,
      password,
      "content-type": "application/json"
    })
    .then(onResponse);

/*
{
  "status": "ok",
  "data": {
    "userId": 1,
    "city": "Москва",
    "languages": [
      "English",
      "Русский"
    ],
    "social": [
      {
        "label": "vk",
        "link": "vk.com/maxpfrontend"
      },
      {
        "label": "telegram",
        "link": "t.me/maxpfrontend"
      },
      {
        "label": "web",
        "link": "https://maxpfrontend.ru"
      },
      {
        "label": "youtube",
        "link": "https://www.youtube.com/channel/UCqJyAVWwIqPWKEkfCSP1y4Q"
      },
      {
        "label": "twitter",
        "link": "https://twitter.com/MaxPatsiansky"
      },
      {
        "label": "twitch",
        "link": "http://twich.tv/maxpfrontend"
      }
    ]
  }
}
*/
export const getUserById = id =>
  instance.get(`/user-info/${id}`).then(onResponse);
