import { ComponentPropsWithoutRef, FC, useState } from "react";
import { classNames } from "../../helpers";
import { PopoverContext } from "./PopoverProdiver";
import PopoverButton from "./PopoverButton";
import PopoverList from "./PopoverList";
import PopoverListItem from "./PopoverListItem";

interface PopoverProps extends ComponentPropsWithoutRef<"div"> {}

const PopoverComponent: FC<PopoverProps> = ({ className, children, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <PopoverContext.Provider value={{ isOpen, onOpen, onClose }}>
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
