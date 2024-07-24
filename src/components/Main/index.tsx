import { Box } from "@mui/material";
import styles from './main.module.css';
import SideNavbar from "../SideNavBar";


const Main : React.FC = () => {
    return (
        <Box className = {styles.container} sx={{ backgroundColor: 'background.default' }}>
            <SideNavbar />
        </Box>
    )
}

export default Main;