import * as RemixIcon from "react-icons/ri";
import * as BootstrapIcon from "react-icons/bs";
import * as IonicIcon from "react-icons/io5";
import * as FeatherIcon from "react-icons/fi";

export const MenuNames = [
  {
    id: 960,
    title: 'My Dashboard',
    path: '/dashboard',
    exact: true,
    icon: <RemixIcon.RiDashboardLine />,
    anchor: <FeatherIcon.FiPlay />,
    cText: 'nav-text',
    cItem: "nav-item"

  },
  {
    id: 137,
    title: 'Advisors',
    path: '/advisors',
    exact: true,
    icon: <BootstrapIcon.BsPersonCheck />,
    cText: 'nav-text',
    cItem: "nav-item"
  },
  {
    id: 1157,
    title: 'My Documents',
    path: '/documents',
    exact: true,
    icon: <IonicIcon.IoDocumentTextOutline />,
    cText: 'nav-text',
    cItem: "nav-item"
  },
  {
    id: 1219,
    title: 'News Feed',
    path: '/feed',
    exact: true,
    icon: <RemixIcon.RiWirelessChargingFill />,
    cText: 'nav-text',
    cItem: "nav-item"
  },
  {
    id: 1693,
    title: 'Support',
    path: '/support',
    exact: true,
    icon: <FeatherIcon.FiPhone />,
    cText: 'nav-text',
    cItem: "nav-item"
  }
];