import { Phone, Mail, MapPin, Award } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Hospital Image and Details */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=250&fit=crop"
                alt="HCG Hospitals, Rajkot"
                className="w-64 h-48 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">HCG Hospitals, Rajkot</h3>
              <p className="text-gray-600 mb-6">
                Ayodhya Chowk, HCG Hospital Road, Nr. Astha Avenue, Off 150Ft Ring Road, Rajkot – 360005
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 text-white p-2 rounded-full">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">635 88888 17</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 text-white p-2 rounded-full">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">info.ao@hcgel.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 text-white p-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Get Directions</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-pink-500 text-white p-2 rounded-full">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Certificate No. H-2022-0918</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-80 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5089!2d70.7833!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64e4!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HCG Hospitals Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;