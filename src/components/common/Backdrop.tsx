export interface BackdropProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ children, onClose }) => {
  return (
    <section
      className="fixed inset-0 z-10 h-screen w-screen overflow-hidden bg-transparent"
      onClick={onClose}
    >
      {children}
    </section>
  );
};

export default Backdrop;
