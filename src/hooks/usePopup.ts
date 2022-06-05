import { useState } from "react";

interface ReturnInterface {
  isOpen: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
}

export const usePopup = (): ReturnInterface => {
  const [isOpen, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    isOpen,
    handleClickOpen,
    handleClose,
  };
};
