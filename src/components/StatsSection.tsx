import { Calendar, Stethoscope, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      icon: Calendar,
      number: "43,800",
      label: "JOURNEY STARTS FROM"
    },
    {
      icon: Stethoscope,
      number: "115",
      label: "CLINICAL SERVICES"
    },
    {
      icon: Users,
      number: "25",
      label: "OUR DOCTORS"
    },
    {
      icon: Heart,
      number: "525",
      label: "HAPPY PATIENTS"
    }
  ];

  return (
    <section className="py-16" style={{backgroundColor: '#0071b9'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="flex justify-center mb-2 sm:mb-4"
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </motion.div>
                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs sm:text-sm font-medium tracking-wider px-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;