import { Box, Typography } from '@mui/material';
import styles from './sideNavbar.module.css';
import { OrganizationComponentProps } from "./sideNavbar.types";

const OrganizationComponent : React.FC<OrganizationComponentProps> = ({
  organizationName,
}) => {
    return (
        <Box className = {styles.organization_component}>
            <Box 
              className = {styles.organization_box}
              sx = {{backgroundColor : 'text.primary'}}
            />
            <Typography sx = {{color : 'text-primary'}} variant='h4'>
                {organizationName}
            </Typography>
            <Box component='span' className={styles.spacer} />
            <img src='/icons/keyboardDown.svg' className={styles.keyboard_down} alt='keyboard down icon'/>
        </Box>
    )
}

export default OrganizationComponent