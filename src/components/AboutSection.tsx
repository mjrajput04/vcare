import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import medicalCenterExterior from "@/assets/medical-center-exterior.jpg";
import { Award, Users, Heart, Building } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
        {/* Left Column - Image and Stats */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/image-6.png"
            alt="Vcare Multispecialty Hospital exterior"
            className="w-full rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />

        </motion.div>

        {/* Right Column - Content */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span style={{color: '#0071b9'}}>About Vcare Multispecialty Hospital</span>
            </motion.h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Vcare Multispecialty Hospital has been providing exceptional healthcare services since 2005. 
                Our state-of-the-art facility combines advanced medical technology with compassionate care, 
                creating a healing environment that prioritizes patient comfort and recovery. Our modern 
                infrastructure includes specialized treatment areas, advanced diagnostic equipment, and 
                comfortable patient accommodations.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                With 400 inpatient beds and comprehensive emergency services, Vcare Hospital offers 
                specialized care across multiple departments including cardiology, neurology, orthopedics, 
                pediatrics, and oncology. Our multi-disciplinary approach ensures coordinated care with 
                cutting-edge treatments. Each department is equipped with the latest medical technology 
                and staffed by experienced specialists.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Recognized for our excellence in patient care and medical innovation, Vcare Hospital 
                serves over 40,000 emergency patients annually. We are accredited by leading healthcare 
                organizations and consistently ranked among the top hospitals for quality care, patient 
                satisfaction, and medical outcomes.
              </motion.p>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;