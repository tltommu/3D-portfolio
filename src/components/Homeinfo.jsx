import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage, moveIsland }) => {
  const handleMoveButtonClick = () => {
    moveIsland(); // Call the moveIsland function passed as a prop
  };
  

  if (currentStage === 1)
    return (
      <button onClick={handleMoveButtonClick}><h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Tommy</span>
        👋
        <br />
        A Software Engineer from Hong Kong.
      </h1>
      </button>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <button onClick={handleMoveButtonClick}><p className='font-medium sm:text-xl text-center'>
          Devoted to becoming a Software Engineer<br /> and diligently following the self-learning path.
        </p></button>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <button onClick={handleMoveButtonClick}><p className='font-medium text-center sm:text-xl'>
          Have diverse exposure in different field of Software Engineering. <br /> Such as game developing, web developing and machine learning model developing.
        </p></button>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <button onClick={handleMoveButtonClick}><p className='font-medium sm:text-xl text-center'>
        Looking for an opporturnity to kick-start my career in software engineering. <br/> Please contact me if you find me suitable for a position
      </p></button>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;