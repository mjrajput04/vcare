import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const DoctorsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const doctors = [
    {
      name: "Dr. Nilesh Makadia",
      qualification: "MD, DNB Cardiology (Gold Medalist)",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Satyam Udhreia",
      qualification: "MD, DM Cardiology (Gold Medalist), FACC",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Shrenik Doshi",
      qualification: "MD, DM Cardiology (Gold Medalist) (AIIMS), FESC, FSCAI",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Madhav Upadhyay",
      qualification: "MS, M.Ch, CVTS (AIIMS), FACVS (Canada)",
      image: "https://images.unsplash.com/photo-1594824694996-d5785cff4cc9?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Divyesh Rathod",
      qualification: "MS, M.Ch, CVTS",
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Priya Sharma",
      qualification: "MD, DM Neurology (AIIMS), FAAN",
      image: "https://images.unsplash.com/photo-1594824694996-d5785cff4cc9?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Rajesh Kumar",
      qualification: "MS, MCh Orthopedics (Gold Medalist)",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Anita Patel",
      qualification: "MD, DM Gastroenterology, FACG",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Vikram Singh",
      qualification: "MS, MCh Urology (AIIMS), FACS",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Meera Joshi",
      qualification: "MD, DM Endocrinology, FACE",
      image: "https://images.unsplash.com/photo-1594824694996-d5785cff4cc9?w=300&h=400&fit=crop&crop=face"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = 280; // width + gap
      
      if (container.scrollLeft <= 0) {
        // Jump to end without animation, then scroll back
        container.scrollTo({ left: container.scrollWidth / 2, behavior: 'auto' });
        setTimeout(() => {
          container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }, 10);
      } else {
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = 280; // width + gap
      
      if (container.scrollLeft >= container.scrollWidth / 2) {
        // Jump to beginning without animation, then scroll forward
        container.scrollTo({ left: 0, behavior: 'auto' });
        setTimeout(() => {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }, 10);
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{color: '#0071b9'}}>Get to Know Our Team of Experts</h2>
          <div className="flex justify-center mb-8">
            <svg className="w-16 h-8 text-teal-400" viewBox="0 0 100 40" fill="currentColor">
              <path d="M10 20 Q25 5 40 20 T70 20 Q85 5 100 20" stroke="currentColor" strokeWidth="3" fill="none"/>
              <circle cx="20" cy="15" r="2"/>
              <circle cx="30" cy="25" r="2"/>
              <circle cx="50" cy="15" r="2"/>
              <circle cx="60" cy="25" r="2"/>
              <circle cx="80" cy="15" r="2"/>
            </svg>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-400 text-white p-2 rounded-full shadow-lg hover:bg-teal-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-400 text-white p-2 rounded-full shadow-lg hover:bg-teal-500"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-6 px-12 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicate doctors for infinite scroll */}
            {[...doctors, ...doctors].map((doctor, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex-shrink-0 w-64">
                <div className="aspect-[3/4] relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1" style={{color: '#0071b9'}}>{doctor.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{doctor.qualification}</p>
                  
                  <div className="space-y-2">
                    <Button className="w-full text-white text-sm py-2" style={{backgroundColor: '#0071b9'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#005a94'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0071b9'}>
                      View Complete Profile
                    </Button>
                    <Button className="w-full bg-teal-400 hover:bg-teal-500 text-white text-sm py-2">
                      Request An Appointment
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;