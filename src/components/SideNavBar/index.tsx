import SideNavbarPresentation from './Presentation';
import { NAV_ITEMS } from './sidenavbar.constants';

const SideNavbar: React.FC = () => {
  return (
    <SideNavbarPresentation organizationName="Saral" navItems={NAV_ITEMS} />
  );
};

export default SideNavbar;
