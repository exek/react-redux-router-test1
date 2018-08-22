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

/*
{
  "status": "ok",
  "data": [
    {
      "id": 1,
      "title": "Не слишком ли быстро мы переходим на беспилотные автомобили",
      "text": "Автопроизводители и высокотехнологичные компании, тратящие миллиарды долларов на развитие беспилотных автомобилей и грузовиков, вовсю рекламируют автоматический транспорт, который, по их мнению, будет безопаснее, чище и сделает общество более мобильным."
    },
    {
      "id": 2,
      "title": "Интеллектуальная собственность: где заканчивается цитирование и начинается плагиат",
      "text": "Компьютерная программа или роман — это в первую очередь идея, творческий замысел. Но человек, купивший книгу, хоть и стал собственником её обложки и страниц, не может присвоить себе то, что написал или нарисовал автор, и продавать романы под своим именем. Иными словами, интеллектуальная собственность — это придуманный и созданный человеком результат. И одновременно с этим — права на него."
    }
  ]
}
*/
export const getNews = () => instance.get(`/news`).then(onResponse);
