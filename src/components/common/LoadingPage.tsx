import { BiLoaderAlt } from "react-icons/Bi";

const LoadingPage = () => {
  return (
    <section className="h-screen w-screen">
      <section className="flex h-full w-full items-center justify-center">
        <BiLoaderAlt className="h-16 w-16 animate-spin text-sky-600" />
      </section>
    </section>
  );
};

export default LoadingPage;
