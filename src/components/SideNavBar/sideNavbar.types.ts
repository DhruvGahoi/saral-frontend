export type OrganizationComponentProps = {
    organizationName : string;
};

export type SideNavbarPresentationProps = OrganizationComponentProps & {
    navItems : NavItemType[];
};

export type NavItemType = {
    icon : string;
    text : string;
    dataCount? : number;
    isActive : boolean;
    id? : number;
}