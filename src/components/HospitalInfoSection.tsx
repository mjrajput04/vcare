import { motion } from "framer-motion";

const HospitalInfoSection = () => {
  const sections = [
    {
      title: "About Vcare Multispecialty Hospital: Redefining Healthcare in Rajkot",
      content: "Vcare Multispecialty Hospital is a top multispecialty hospital in Rajkot that provides many medical services in one place. Our hospital is dedicated to delivering patient-centric care, ensuring that each individual receives personalised treatment based on their specific medical needs. The availability of leading professionals and state-of-the-art facilities has positioned Vcare Multispecialty Hospital as the benchmark for quality healthcare in its region."
    },
    {
      title: "Advanced Multispeciality Services",
      content: "Vcare Multispecialty Hospital is a multispeciality hospital in Rajkot and it provides a variety of medical services. The hospital attends to different kinds of illnesses such as cancer, heart problems, bone diseases, kidney diseases, and brain disorders, among others. Our multidisciplinary approach ensures that patients receive comprehensive treatment plans tailored to their unique health needs, enabling better outcomes."
    },
    {
      title: "24/7 Emergency and Critical Care",
      content: "Emergencies require immediate attention, and Vcare Multispecialty Hospital is always prepared. As one of the best hospitals in Rajkot, we have a well-equipped emergency department offering round-the-clock services. In such cases, our well-trained medical personnel collaborate effectively with sophisticated apparatus to guarantee fast and effective treatment."
    },
    {
      title: "Cutting-Edge Infrastructure",
      content: "At Vcare Multispecialty Hospital, we invest in state-of-the-art infrastructure to provide world-class medical care. The hospital is installed with current operating rooms, high-tech laboratories, and inpatient wings that speed up the recovery process for patients. This has been facilitated through the use of the most recent equipment in the diagnosis and treatment of diseases, thus setting us apart as a multispeciality hospital in Rajkot."
    },
    {
      title: "Expert Medical Professionals",
      content: "The cornerstone of Vcare Multispecialty Hospital is our team of dedicated and highly skilled professionals. The hospital has the most experienced doctors, nurses, and support personnel who are dedicated to giving the best services. With several years in practice within Rajkot, our medical team tops the list as far as offering total healthcare solutions, hence positioning us as the best hospital in Rajkot."
    },
    {
      title: "Patient-Centric Approach",
      content: "Everything we do is defined by our patient-first philosophy. At Vcare Multispecialty Hospital, we guarantee that each patient receives the best care, empathy, and dignity. The moment you step into our facility, be it for a minor medical examination or a major therapeutic procedure, you will experience a smooth and seamless healthcare journey. We are committed to providing personalised care that caters to the physical, emotional, and mental well-being of our patients."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-gray-400 p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="space-y-10 sm:space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold" style={{color: '#0071b9'}}>
                  {section.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalInfoSection;