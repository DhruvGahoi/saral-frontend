import { Box, Modal, Typography } from '@mui/material';
import { ModalStandardProps } from './modalStandard.types';
import styles from './modalStandard.module.css';

const ModalStandard: React.FC<ModalStandardProps> = ({
  open,
  onClose,
  children,
  heading,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className={styles.modal}>
        <Box className={styles.header}>
          <Typography sx={{ color: 'common.black' }} variant="h3">
            {heading}
          </Typography>
        </Box>
        <Box className={styles.children}>{children}</Box>
      </Box>
    </Modal>
  );
};

export default ModalStandard;
