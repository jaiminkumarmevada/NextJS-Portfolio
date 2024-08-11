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
         Web development 101
        <span className="text-textGreen tracking-wide">@pupilfirst @LITE</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2021 - Dec 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Certificate : <a href="https://www.linkedin.com/posts/jaimin-mevada-a46b06213_webdevelopment-achievementunlocked-activity-7159153359348756480-0EhG?utm_source=share&utm_medium=member_desktop"> Click here to checkout certificate </a>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          In the Pupilfirst by LITE Web Development 101 course, I deepened my understanding of JavaScript. The course covered essential topics and advanced concepts, allowing me to build a strong foundation and apply JavaScript effectively in web development. 
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
