import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        ReactJS development
        <span className="text-textGreen tracking-wide"></span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
       
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>

          <span className="text-textGreen mt-1">
         Google Gemini Replica </span>


          

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            
          </span>
          <p style={{ marginLeft: '17px' }}>The Google Gemini replica project aims to fetch data using Gemini API and present it in a user-friendly manner. It focuses on creating a seamless experience by displaying data efficiently.</p>
        </li>
{/*
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>

          <span className="text-textGreen mt-1">
          Code with Harry’s React Playlist </span>


          

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            
          </span>
          <p style={{ marginLeft: '17px' }}>Code with Harry’s React playlist is a comprehensive and engaging resource for learning React JS, especially for Hindi-speaking developers. This playlist covers a wide range of topics, from basic to advanced concepts, making it an excellent choice for both beginners and experienced developers.</p>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>

          <span className="text-textGreen mt-1">
          Web3 Mantra’s React Playlist </span>


          

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            
          </span>
          <p style={{ marginLeft: '17px' }}>Web3 Mantra’s React playlist is a fantastic resource for developers aiming to enhance their React JS skills. This series is particularly beneficial for Hindi-speaking learners, offering a thorough exploration of React from the ground up.</p>
        </li>








        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et
          corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt
          sequi?
        </li>
        */}
      </ul>
    </motion.div>
  );
};

export default Splash;
