import { useState } from "react";
import Backdrop from "./Backdrop";

interface TooltipProps {
  anchorEl: MouseEvent;
  children: React.ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, anchorEl, className }) => {
  return (
    <div
      style={{ top: anchorEl.pageY + 20, left: anchorEl.pageX }}
      className={`relative w-fit rounded-sm bg-white p-3 shadow ${className}`}
      onClick={(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        ev.stopPropagation();
      }}
    >
      {children}
    </div>
  );
};

interface CustomTooltipProps {
  triggerElement: (
    handleClickOpen: (event: React.MouseEvent<HTMLElement>) => void
  ) => JSX.Element;
  className?: string;
  children: React.ReactNode;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  triggerElement,
  children,
  className,
}) => {
  const [anchorEl, setAnchorEl] = useState<MouseEvent | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.nativeEvent);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {triggerElement(handleClick)}
      {!!anchorEl && (
        <Backdrop onClose={handleClose}>
          <Tooltip anchorEl={anchorEl} className={className}>
            {children}
          </Tooltip>
        </Backdrop>
      )}
    </>
  );
};

export default CustomTooltip;
