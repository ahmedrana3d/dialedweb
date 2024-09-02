"use client";
import React from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import { useAnimateText } from "../ScrollAnimations";


export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  useAnimateText(".two-title");
  const springConfig = { stiffness: 100};
  const transfromConfig = { ease: easeInOut};

  const translateX = useTransform(scrollYProgress, [0, 1], [0, 1000], transfromConfig) 
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -1000] , transfromConfig) 
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0] , transfromConfig) 
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1] , transfromConfig) 
  const rotateZ = useTransform(scrollYProgress, [0, 0.2], [20, 0] , transfromConfig) 
  const translateY = useTransform(scrollYProgress, [0, 0.2], [-700, 700] , transfromConfig) 
  return (
    (<div
      ref={ref}
      className="h-[250vh] py-52 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>)
  );
};

export const Header = () => {
  return (
    (<div
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 z-50 pointer-events-none">
      <h1 className="headline two-title py-3">
        Featured Projects
      </h1>
      <p className="one-description text-neutral-200 ">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>)
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    (<motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0">
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-2xl"
          alt={product.title} />
      </a>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>)
  );
};
