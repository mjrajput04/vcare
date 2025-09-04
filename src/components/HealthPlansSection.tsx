import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const HealthPlansSection = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "Rs. 1,199/-",
      image: "/image.png"
    },
    {
      title: "Full Body Check up",
      price: "Rs. 3,199/-",
      image: "/image-1.png"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4" style={{color: '#0071b9'}}>Health Checkup Packages</h2>
          <p className="text-gray-600 text-lg">HCG Hospitals, Rajkot</p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-2 sm:left-4 lg:left-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-400 text-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-teal-500">
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button className="absolute right-2 sm:right-4 lg:right-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-400 text-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-teal-500">
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 lg:px-12">
            {plans.map((plan, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm relative transition-all duration-300 hover:shadow-lg hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Stethoscope Icon Overlay */}
                  <motion.div 
                    className="absolute bottom-4 right-4 bg-teal-500 text-white p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Stethoscope className="w-6 h-6" />
                  </motion.div>
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
                  <p className="text-base sm:text-lg font-medium text-gray-600 mb-3 sm:mb-4">{plan.price}</p>
                  <Button className="bg-white border-2 px-4 sm:px-6 py-2 text-sm sm:text-base transition-all duration-300 hover:scale-105" style={{borderColor: '#0071b9', color: '#0071b9'}}>
                    Book Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPlansSection;