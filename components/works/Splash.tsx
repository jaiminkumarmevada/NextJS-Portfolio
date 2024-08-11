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
        ReactJS
        <span className="text-textGreen tracking-wide">@Youtube_Playlists</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2021 - Dec 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>

          <span className="text-textGreen mt-1">
          Hitesh Choudhary’s “Chai aur Code” React JS YouTube Playlist </span>


          

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            
          </span>
          <p style={{ marginLeft: '17px' }}>Hitesh Choudhary’s “Chai aur Code” React JS YouTube playlist is an exceptional resource that has significantly enhanced my development skills. This comprehensive series covers everything from React fundamentals to advanced concepts, making it an invaluable tool for any aspiring React developer.</p>
        </li>


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
      </ul>
    </motion.div>
  );
};

export default Splash;
