import Home from "./Home";
import Login from "./Login";
import Logout from "./logout";
import News from "./News";
import Profile from "./Profile";

const routes = [
  {
    title: "Home",
    path: "/",
    component: Home,
    isPublic: true,
    showInNav: true
  },
  {
    title: "News",
    path: "/news",
    component: News,
    isPublic: true,
    showInNav: true
  },
  {
    title: "Profile",
    path: "/profile",
    component: Profile,
    isPublic: false,
    showInNav: true
  },
  {
    title: "Login",
    path: "/login",
    component: Login,
    isPublic: true,
    showInNav: isAuth => !isAuth
  },
  {
    title: "Logout",
    path: "/logout",
    component: Logout,
    isPublic: true,
    showInNav: isAuth => isAuth
  }
];

export default routes;
