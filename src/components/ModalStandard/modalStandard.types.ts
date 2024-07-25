import { ReactNode } from 'react';

export type ModalStandardProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  heading: string;
};
