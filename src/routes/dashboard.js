// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Work from "@material-ui/icons/Work";

// core components/views
import DashboardPage from "../views/Dashboard";
import UserProfile from "../views/UserProfile";
import JobPage from "../views/Jobs";

const dashboardRoutes = [
  {
    path: "/jobs",
    sidebarName: "Jobs",
    navbarName: "Jobs",
    icon: Work,
    component: JobPage
  },
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  
  { redirect: true, path: "/", to: "/jobs", navbarName: "Redirect" }
];

export default dashboardRoutes;
