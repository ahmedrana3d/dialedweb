import React, { useEffect, useRef, useState } from "react";
import Accordion from "../Accordion";

export const Section5 = () => {

    return (
      <>
        <section className="five">
            <div className="five-content">
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
            </div>
        </section>
      </>
    )
}