import { ComponentPropsWithoutRef, FC, useState } from "react";
import { classNames } from "../../helpers";
import PopoverButton from "./PopoverButton";
import PopoverList from "./PopoverList";
import PopoverListItem from "./PopoverListItem";
import { PopoverContext } from "./PopoverProvider";

interface PopoverProps extends ComponentPropsWithoutRef<"div"> {}

const PopoverComponent: FC<PopoverProps> = ({ className, children, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const toggleUpdate = () => setIsUpdating((prev) => !prev);

  return (
    <PopoverContext.Provider value={{ isOpen, onOpen, onClose, isUpdating, toggleUpdate }}>
      <div className={classNames("relative", className)} {...rest}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

const Popover = Object.assign(PopoverComponent, {
  Button: PopoverButton,
  List: PopoverList,
  ListItem: PopoverListItem,
});

export default Popover;
