import Home from "./Home";
import Login from "./Login";
import News from "./News";
import Profile from "./Profile";

const routes = [
  {
    title: "Home",
    path: "/",
    component: Home,
    isPublic: true
  },
  {
    title: "News",
    path: "/news",
    component: News,
    isPublic: true
  },
  {
    title: "Login",
    path: "/login",
    component: Login,
    isPublic: true
  },
  {
    title: "Profile",
    path: "/profile",
    component: Profile,
    isPublic: false
  }
];

export default routes;
