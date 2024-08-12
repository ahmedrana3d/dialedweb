import React, { useEffect, useRef } from "react";
import transition from "../Transition";
import LearnApp from "./LearnApp";
import './LearnIndex.css'
import { NextUIProvider } from '@nextui-org/react'

const LearnMain = () => {

  return (
    <>
        <LearnApp />
    </>
  );
};

export default transition(LearnMain);