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
        B.Tech in Information Technology
        <span className="text-textGreen tracking-wide">@Sankalchand Patel College of Engineering</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2021 - Apr 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have completed my B.Tech with an 8.0 CGPA.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          During my college journey, I focused on developing moral values, enhancing English proficiency, and mastering basic computer programming concepts. These experiences have shaped my character, improved my communication skills, and provided a strong foundation for my technical growth.
        </li>
        
      </ul>
    </motion.div>
  );
};

export default ReactBD;
