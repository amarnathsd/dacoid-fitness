import React, { useState } from "react";
import { Link } from "react-router-dom";
import TrackYourGoalImg from "../assets/TrackYourGoal.png";
import GetBurnImg from "../assets/GetBurn.png";
import { FaChevronRight } from "react-icons/fa";
import RenderStep from "../components/HomePage/RenderStep";
import { useNavigate } from "react-router-dom";
import MobileTab from "../components/MobileTab";
import Group1 from "../assets/Group.png";
const Home = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  function clickHandler() {
    if (step <= 1) {
      setStep(step + 1);
    } else {
      navigate("/signup");
    }
  }
  return (
    <>
      <MobileTab />
      <div className="flex p-4 min-h-screen flex-col justify-between gap-[50px] ">
        <p className="underline text-right text-[#9FB2FF] font-montserrat text-base font-medium ">
          <Link to={"/signup"}>Skip</Link>
        </p>
        <RenderStep step={step} />
        <button
          onClick={clickHandler}
          className="ml-auto rounded-full w-fit"
        >
          <div className="flex justify-center items-center p-[13px]">
            {/* <FaChevronRight size={24} color='white'/> */}
            <img src={Group1} alt="img" />
          </div>
        </button>
      </div>
    </>
  );
};

export default Home;