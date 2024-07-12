import { NavItemType } from "./sideNavbar.types";

export const NAV_ITEMS : NavItemType[] = [
  {
    id: 1,
    text : 'Tasks',
    icon : '/NavbarIcons/tasks.svg',
    isActive : true,
    dataCount : 4,
  },
  {
    id: 2,
    text : 'Notification',
    icon : '/NavbarIcons/notifications.svg',
    isActive : false,
    dataCount : 7,
  },
  {
    id: 3,
    text : 'Analytics',
    icon : '/NavbarIcons/analytics.svg',
    isActive : false,
  },
  {
    id: 4,
    text : 'Team',
    icon : '/NavbarIcons/team.svg',
    isActive : false,
    dataCount : 2,
  }
]