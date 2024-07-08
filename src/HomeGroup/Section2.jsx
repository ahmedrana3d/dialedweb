import React, { useEffect, useRef, useState } from "react";
import { useAnimateText } from "../ScrollAnimations";
import { motion, AnimatePresence } from "framer-motion";

export const Section2 = () => {

    useAnimateText(".two-title");

  return (
    <>
      <section className="two">
        <div className="two-content">
            <h1 className="headline two-title">Featured Projects</h1>
            <div className="two-images-container">
                <div className="two-images-container-row">
                    <div className="two-images-box-big two-images-box-image-1">
                        <div className="two-images-box-content">
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                <h1 className="two-images-box-content-item-text" >Wellness</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Branding</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Websites</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Consulting</h1>
                            </motion.div>
                        </div>
                    </div>
                    <div className="two-images-box-small two-images-box-image-3">
                        <div className="two-images-box-content">
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                <h1 className="two-images-box-content-item-text" >Wellness</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Branding</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Websites</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Consulting</h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="two-images-container-row">
                    <div className="two-images-box-small two-images-box-image-2">
                        <div className="two-images-box-content">
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                <h1 className="two-images-box-content-item-text" >Wellness</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Branding</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Websites</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Consulting</h1>
                            </motion.div>
                        </div>
                    </div>
                    <div className="two-images-box-big two-images-box-image-4">
                        <div className="two-images-box-content">
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                <h1 className="two-images-box-content-item-text" >Wellness</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Branding</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Websites</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Consulting</h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};