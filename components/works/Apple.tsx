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
         .NET Trainee
        <span className="text-textGreen tracking-wide">@Corextrime Consulting Service</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Dec 2024 - Apr 2025
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
          During my internship at Corextrime-Ahemedabad, I honed my skills in logic building using C, C++, and JavaScript. This experience laid the groundwork for my transition into .NET development, where I further refined my programming abilities and tackled real-world challenges.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Under the expert guidance of trainer Abhishek Vyas, with 12 years of teaching experience at CoreXtrime, I learned .NET, gaining valuable knowledge and skills for my career development.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
