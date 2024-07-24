export type DialogPropTypes = {
    title : string;
    subTitle : string;
    handleClose : () => void;
    handleConfirm : () => void;
    open : boolean
}