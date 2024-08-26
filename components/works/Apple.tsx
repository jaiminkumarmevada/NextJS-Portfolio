import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
         Complete ReactJS course
        <span className="text-textGreen tracking-wide">@infosys</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2021 - Dec 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Certificate : <a href="https://www.linkedin.com/posts/jaimin-mevada-a46b06213_certificate-by-infosys-activity-7232604043183845377-JZ5m?utm_source=share&utm_medium=member_desktop"> Click here to checkout certificate </a>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Completed the Infosys Springboard EdTech Certification Course, which provided in-depth training on industry-relevant technologies and skills. The program included production-level assignments and an online assessment to validate proficiency in applying concepts to real-world scenarios. 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          This comprehensive learning experience significantly enhanced my skills and confidence in using JavaScript for creating dynamic and interactive web applications.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
