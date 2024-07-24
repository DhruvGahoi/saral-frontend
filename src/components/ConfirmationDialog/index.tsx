import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { DialogPropTypes } from "./dialog.types";

const ConfirmationDialog : React.FC<DialogPropTypes> = ({
    title,
    subTitle,
    handleClose,
    handleConfirm,
    open
}) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{subTitle}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button data-testid='cancel-button' variant='text' onClick={handleClose}>Cancel</Button>
                <Button data-testid='continue-button' variant='text' onClick={handleConfirm}>Continue</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationDialog;