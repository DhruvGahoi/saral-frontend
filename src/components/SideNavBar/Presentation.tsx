import { Box } from '@mui/material';
import styles from './sideNavbar.module.css';
import { NavItemType, SideNavbarPresentationProps } from './sideNavbar.types';
import OrganizationComponent from './OrganizationComponent';
import NavItem from './NavItems';

const SideNavbarPresentation : React.FC<SideNavbarPresentationProps> = ({
    organizationName,
    navItems
}) => {
    const navbarItems = navItems.map((navItems : NavItemType) => (
        <NavItem
          key={navItems.id}
          text={navItems.text}
          icon={navItems.icon}
          dataCount={navItems?.dataCount}
          isActive={navItems.isActive}
        />
    ))
    return (
        <Box className = {styles.side_navbar} sx={{ backgroundColor: 'common.white' }}>
            <OrganizationComponent organizationName={organizationName}/>
            <Box className = {styles.nav_items}>
                {navbarItems}
                <Box className = {styles.spacer_horizontal} />
                <NavItem text={'Settings'} icon={'/NavbarIcons/settings.svg'} isActive={false}/>
            </Box>
        </Box>
    )
}

export default SideNavbarPresentation;