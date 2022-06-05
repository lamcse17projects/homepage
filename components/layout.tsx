import Footer from "./layout/footer";
import Navbar from "./layout/navbar";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const pageMotionVariant = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <motion.main
        variants={pageMotionVariant}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
        className="w-full h-full flex-1 my-10 py-5"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
