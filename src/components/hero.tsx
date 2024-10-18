import React from 'react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Video } from 'lucide-react';
import { TwitterLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="text-gray-900 py-5 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-[40vw] mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl leading-tight font-bold mb-6">
            Harapay: Your trusted mobile money partner
            </h1>
            <p className="text-xl mb-6 text-gray-600">
              Bridging The Gap Between Blockchain and Traditional Services in Africa. We provide financial service through USSD, low costs on transaction fees and seemless integration into your local banks.
            </p>
            <div className="flex space-x-4">
              <Link href="/login" className="px-4 py-2 rounded-full bg-brand text-white hover:bg-brand/80 text-center flex items-center justify-center space-x-2">
                <Video className="h-5 w-5" />
                <span>Live Demo</span>
              </Link>
              <Link href="/login" className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 text-center flex items-center justify-center space-x-2">
                <TwitterLogoIcon className="h-5 w-5" />
                <span>Follow us</span>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className=" relative w-full lg:w-[50vw] h-[calc(100vh-80px)] overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image 
        src="/images/mockup.png" 
          alt="Harapay" 
      layout="fill"
      objectFit="contain"
      className="w-full h-auto"
    />
          </motion.div>
        </div>
      </div>
      <FloatingCircles />
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 text-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="absolute bottom-10 flex flex-col items-center">
          <svg className="w-6 h-6 mb-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className='text-xl font-semibold'>Scroll down to explore features</span>
        </div>
      </motion.div>
    </section>
  );
};

const PhoneMockup: React.FC = () => {
  return (
    <div className="relative">
      <Card className="w-[300px] h-[600px] mx-auto bg-gray-900 border-gray-800 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl"></div>
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-2">9:41</div>
          <div className="text-lg font-semibold mb-4">Harapay</div>
          <div className="space-y-4">
            <Card className="bg-blue-100 p-3">
              <div className="text-sm font-medium text-blue-800">Complete quests, win rewards!</div>
            </Card>
            <Card className="bg-green-100 p-3">
              <div className="text-sm font-medium text-green-800">Daily challenge: Engage with community</div>
            </Card>
            <Card className="bg-gray-100 p-3">
              <div className="text-sm font-medium">Your rewards: 500 tokens</div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

const FloatingCircles: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-green-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </>
  );
};

export default Hero;
