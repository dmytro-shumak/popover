import { ComponentPropsWithoutRef, FC, useRef } from "react";
import { classNames } from "../../helpers";
import useClickOutside from "../../hooks/useClickOutside";
import { usePopoverContext } from "./PopoverProvider";

interface PopoverListProps extends ComponentPropsWithoutRef<"div"> {}

const PopoverList: FC<PopoverListProps> = ({ children, className }) => {
  const { isOpen, onClose, toggleUpdate } = usePopoverContext();
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {
    toggleUpdate();
    onClose();
  });
  if (!isOpen) return null;

  return (
    <div ref={ref} className={classNames("", className)}>
      {children}
    </div>
  );
};

export default PopoverList;
