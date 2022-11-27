import { useState } from "react";
import Backdrop from "./Backdrop";

interface MenuProps {
  children: React.ReactNode;
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ children, className }) => {
  return (
    <div
      className={`absolute right-0 h-screen w-fit bg-white p-7 shadow-xl ${className}`}
      onClick={(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        ev.stopPropagation();
      }}
    >
      {children}
    </div>
  );
};

interface CustomMenuProps {
  triggerElement: (handleClickOpen: () => void) => JSX.Element;
  className?: string;
  children: React.ReactNode;
}

const CustomMenu: React.FC<CustomMenuProps> = ({
  triggerElement,
  children,
  className,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {triggerElement(() => {
        setOpen(true);
      })}
      {!!open && (
        // TODO: Add animation
        <Backdrop
          onClose={() => {
            setOpen(false);
          }}
        >
          <Menu className={className}>{children}</Menu>
        </Backdrop>
      )}
    </>
  );
};

export default CustomMenu;
