import { createContext, useContext } from "react";

interface PopoverContextProps {
  isOpen: boolean;
  isUpdating: boolean;
  toggleUpdate: () => void;
  onOpen: () => void;
  onClose: () => void;
}

export const PopoverContext = createContext<PopoverContextProps | null>(null);

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error("usePopoverContext must be used within a PopoverProvider");
  }
  return context;
};
