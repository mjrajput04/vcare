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
            src={medicalCenterExterior}
            alt="Vcare Multispecialty Hospital exterior"
            className="w-full rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="medical-card p-3 sm:p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardContent className="p-0">
                  <Building className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-primary">400</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Inpatient Beds</div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="medical-card p-3 sm:p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardContent className="p-0">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-primary">40,000+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">ER Patients/Year</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{color: '#0071b9'}}>
              Why Choose Vcare Multispecialty Hospital?
            </h3>
            <p className="text-foreground mb-4">
              When patients and their families choose our hospital, they access:
            </p>
            
            <div className="space-y-3">
              {[
                { icon: Award, text: "Award-winning medical care and patient-centered excellence" },
                { icon: Heart, text: "24/7 emergency services with advanced trauma care" },
                { icon: Building, text: "Modern facilities with cutting-edge medical technology" },
                { icon: Users, text: "Highly qualified medical professionals and nursing staff" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-6 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="bg-accent/10 text-accent-foreground transition-all duration-300 hover:scale-105 text-xs sm:text-sm">
                Advanced Trauma Care
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent-foreground transition-all duration-300 hover:scale-105 text-xs sm:text-sm">
                Multispecialty Excellence
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent-foreground transition-all duration-300 hover:scale-105 text-xs sm:text-sm">
                Patient-Centered Care
              </Badge>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;