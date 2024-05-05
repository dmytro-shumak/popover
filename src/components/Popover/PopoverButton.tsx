import { ComponentPropsWithRef, FC, MouseEvent } from "react";
import { usePopoverContext } from "./PopoverProvider";
import { classNames } from "../../helpers";

interface PopoverButtonProps extends ComponentPropsWithRef<"button"> {}

const PopoverButton: FC<PopoverButtonProps> = ({ children, className, ...rest }) => {
  const { isUpdating, onOpen, toggleUpdate } = usePopoverContext();

  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    if (isUpdating) {
      // prevent opening when popover is already opened
      toggleUpdate();
      return;
    }
    rest.onClick?.(e);
    onOpen();
  };

  return (
    <button {...rest} onClick={handleClick} className={classNames("", className)}>
      {children}
    </button>
  );
};

export default PopoverButton;
