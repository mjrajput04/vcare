import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";

const DepartmentsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const departments = [
    {
      image: "/department/image-1.png",
      name: "Cardiothoracic and Vascular Surgery"
    },
    {
      image: "/department/image-2.png",
      name: "Cardiovascular and Thoracic Surgery"
    },
    {
      image: "/department/image-3.png",
      name: "Gastroenterology"
    },
    {
      image: "/department/image-4.png",
      name: "Urology"
    },
    {
      image: "/department/image-5.png",
      name: "Critical Care Medicine"
    },
    {
      image: "/department/image-6.png",
      name: "Neurology"
    },
    {
      image: "/department/image-7.png",
      name: "Pediatrics"
    },
    {
      image: "/department/image-8.png",
      name: "Orthopedics"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = 300;
      
      if (container.scrollLeft <= 0) {
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
      const cardWidth = 300;
      
      if (container.scrollLeft >= container.scrollWidth / 2) {
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
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8" style={{color: '#0071b9'}}>Specialties and Departments</h2>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-600 p-2 rounded-full shadow-lg hover:bg-gray-50 border"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-600 p-2 rounded-full shadow-lg hover:bg-gray-50 border"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-8 px-12 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...departments, ...departments].map((dept, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center flex-shrink-0 w-60 h-44 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition-all duration-300 border border-gray-100 flex flex-col justify-center items-center cursor-pointer group">
                <div className="mb-4 p-4 rounded-full transition-colors duration-300" style={{backgroundColor: '#e6f3ff'}}>
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-12 h-12 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 leading-tight px-2 transition-colors duration-300 group-hover:text-[#0071b9]">{dept.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;