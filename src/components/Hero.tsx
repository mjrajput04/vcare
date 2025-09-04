import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden" style={{background: '#0071b9'}}>
      {/* Background with healthcare professionals image */}
      <motion.div 
        className="absolute right-0 top-0 w-full sm:w-[60%] lg:w-[55%] h-full overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.img 
          src="src\assets\reagan-medical-center-hero.jpg" 
          alt="Healthcare professionals" 
          className="w-full h-full object-cover object-center sm:object-left"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Emergency Text - Vertical */}
      <div className="absolute left-0 top-0 h-full flex items-center hidden sm:flex">
        <div className="bg-red-500 h-full w-4 sm:w-6 flex items-center justify-center">
          <span className="text-white text-xs font-bold tracking-wider transform -rotate-90 whitespace-nowrap">
            EMERGENCY
          </span>
        </div>
      </div>

      <div className="relative z-10 h-full flex items-center px-4 sm:px-6">
        <motion.div 
          className="ml-0 sm:ml-6 lg:ml-10 max-w-full sm:max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-white text-xs sm:text-sm mb-2 sm:mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Caring for Your Health, Every Step of the Way
          </motion.p>
          <motion.h1 
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 lg:mb-10 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Committed To Your Health
          </motion.h1>
          
          <motion.h2 
            className="text-sm sm:text-lg lg:text-xl text-white mb-4 sm:mb-6 lg:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            How can we help you?
          </motion.h2>
          
          {/* Contact Form */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Input 
              placeholder="Enter your name" 
              className="w-full sm:w-32 lg:w-44 bg-white/95 border-0 h-8 sm:h-9 text-xs sm:text-sm rounded-sm transition-all duration-300 focus:scale-105"
            />
            <Input 
              placeholder="Enter your mobile no." 
              className="w-full sm:w-32 lg:w-44 bg-white/95 border-0 h-8 sm:h-9 text-xs sm:text-sm rounded-sm transition-all duration-300 focus:scale-105"
            />
            <Input 
              placeholder="I am looking for...." 
              className="w-full sm:w-40 lg:w-56 bg-white/95 border-0 h-8 sm:h-9 text-xs sm:text-sm rounded-sm transition-all duration-300 focus:scale-105"
            />
            <Button className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 h-8 sm:h-9 text-xs sm:text-sm font-medium rounded-sm transition-all duration-300 hover:scale-105">
              Submit ›
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;