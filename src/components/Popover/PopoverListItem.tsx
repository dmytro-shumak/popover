import { ComponentPropsWithoutRef, FC, MouseEvent } from "react";
import { usePopoverContext } from "./PopoverProdiver";
import { classNames } from "../../helpers";

interface PopoverListItemProps extends ComponentPropsWithoutRef<"button"> {}

const PopoverListItem: FC<PopoverListItemProps> = ({ children, className, ...rest }) => {
  const { onClose } = usePopoverContext();
  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    rest.onClick?.(e);
    onClose();
  };

  return (
    <button onClick={handleClick} className={classNames("", className)}>
      {children}
    </button>
  );
};

export default PopoverListItem;
