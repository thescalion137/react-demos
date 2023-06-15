import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconArticle,
  IconCalendarEvent,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },

  {
    id: uniqueId(),
    title: "Blogs",
    icon: IconArticle,
    href: "/blogs",
  },

  {
    id: uniqueId(),
    title: "Events",
    icon: IconCalendarEvent,
    href: "/events",
  },

  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    id: uniqueId(),
    title: "Admin",
    icon: IconUserPlus,
    href: "/admin",
  },
];

export default Menuitems;
