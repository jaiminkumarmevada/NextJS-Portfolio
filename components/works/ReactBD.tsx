import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend developer
        <span className="text-textGreen tracking-wide">@OctaNet Services Pvt Ltd.</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2024 - Fab 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
       Improved Skills in : HTML,CSS & Javascript
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          During my internship at Tech Octanet Services, I significantly enhanced my skills in HTML, CSS, and JavaScript. I worked on creating and refining user interfaces, where I applied advanced HTML and CSS techniques to develop responsive and visually appealing designs. Additionally, I utilized JavaScript to implement interactive features and improve functionality.
        </li>
        
      </ul>
    </motion.div>
  );
};

export default ReactBD;
