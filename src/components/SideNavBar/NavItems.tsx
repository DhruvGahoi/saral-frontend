import React from 'react';
import { Box, Typography } from '@mui/material';
import { NavItemType } from './sideNavbar.types';
import styles from './sideNavbar.module.css';

const NavItem : React.FC<NavItemType> = ({
    icon, 
    dataCount, 
    text,
    isActive
}) => {
    return (
        <Box
        sx={{background : isActive ? 'background.default' : 'none'}} 
        className={styles.nav_item}>
            <img
                src={icon}
                className={styles.icon}
                alt='arrow down'
            />
            <Typography 
                sx={{ color: isActive ? 'text.primary' : 'text.secondary' }}
                variant="h4"
            >
                {text}
            </Typography>
            <Box className = {styles.spacer} />
            
        </Box>
    )
}
