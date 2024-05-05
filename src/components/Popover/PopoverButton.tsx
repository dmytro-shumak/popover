import { ComponentPropsWithRef, FC, MouseEvent } from "react";
import { usePopoverContext } from "./PopoverProdiver";
import { classNames } from "../../helpers";

interface PopoverButtonProps extends ComponentPropsWithRef<"button"> {}

const PopoverButton: FC<PopoverButtonProps> = ({ children, className, ...rest }) => {
  const { onOpen } = usePopoverContext();

  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
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
