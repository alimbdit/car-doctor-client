import React from "react";

import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col items-start justify-center lg:flex-row w-full">
       <div className="w-full relative pl-24 mt-10">
       <img
          src={person}
          className="max-w-sm rounded-lg shadow-2xl w-3/4"
        />
       <img
          src={parts}
          className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute left-72 top-40 border-8 border-white"
        />
       </div>
        <div className="w-full">
            <h2 className="text-3xl font-bold text-red-400 mb-6">About Us</h2>
          <h1 className="text-5xl font-bold ">We are qualified <br/> & of experience <br/> in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable
          </p>
          <p className="pb-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. 
          </p>
          <button className="btn btn-error text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
