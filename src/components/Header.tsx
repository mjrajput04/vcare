import { Button } from "@/components/ui/button";
import { Phone, Globe, Search, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownMenus = {
    "Find Care": [
      "Find a Doctor",
      "Find a Location", 
      "Virtual Care",
      "Make an Appointment",
      "Second Opinion Consults",
      "Medical Services",
      "Cancer Medical Services",
      "Outpatient Locations"
    ],
    "Patient Resources": [
      "Prepare for Your Visit",
      "Visitor Guidelines",
      "Billing & Insurance",
      "Medical Records",
      "Community Resources",
      "Support & Information",
      "Patient Financial Assistance Program",
      "International Services",
      "Patient Scam Alert"
    ],
    "Treatment Options": [
      "Medical Services",
      "Wellness & Routine Care",
      "Clinical Trials",
      "COVID-19 Info"
    ],
    "Specialities": [
      "Anaesthesia",
      "Arthroscopy & Sports Medicine",
      "Cardiology",
      "Cardiothoracic & Vascular Surgery",
      "Critical Care & Pulmonology",
      "Gastroenterology",
      "Gastrosurgery",
      "General Surgery",
      "Nephrology",
      "Neuro Surgeons",
      "Neurology",
      "Oncology",
      "Orthopaedic Surgeons",
      "Pathology",
      "Plastic Surgery",
      "Radiology",
      "Rheumatologist and Clinical Immunology",
      "Urology and Andrology"
    ],
    "Services": [
      "Health Checkup Plans",
      "Clinical Excellence",
      "Home Care Services"
    ]
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-1 hover:text-accent transition-colors">
              <span>Explore Vcare Health</span>
            </button>
            <span>myVcareHealth</span>
            <span>News & Insights</span>
            <span>Community & Equity</span>
            <span>Contact Us</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span>310-825-2631</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe size={16} />
              <span>Translate</span>
            </div>
            <Search size={16} className="hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-background border-b border-border py-3 sm:py-4 px-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded font-bold text-base sm:text-lg">
              Vcare
            </div>
            <span className="text-lg sm:text-2xl font-light text-foreground">Hospital</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 relative">
            {Object.keys(dropdownMenus).map((menu) => (
              <div
                key={menu}
                className="relative group"
              >
                <button 
                  className="flex items-center space-x-1 text-foreground hover:text-primary cursor-pointer transition-colors"
                  onMouseEnter={() => setActiveDropdown(menu)}
                >
                  <span>{menu}</span>
                  <ChevronDown size={16} />
                </button>
                
                <div 
                  className={`absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-[60] transition-all duration-200 ${
                    activeDropdown === menu ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setActiveDropdown(menu)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    {dropdownMenus[menu as keyof typeof dropdownMenus].map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0071b9] transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Mobile & Desktop Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
              Find a Doctor
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-50">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Contact Info */}
              <div className="flex flex-col space-y-2 pb-4 border-b border-border">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone size={16} />
                  <span>310-825-2631</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Search size={16} />
                  <span>Search</span>
                </div>
              </div>
              
              {/* Mobile Navigation */}
              {Object.keys(dropdownMenus).map((menu) => (
                <div key={menu} className="border-b border-border pb-2">
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setActiveDropdown(activeDropdown === menu ? null : menu)}
                  >
                    <span>{menu}</span>
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${activeDropdown === menu ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeDropdown === menu && (
                    <div className="mt-2 pl-4 space-y-2">
                      {dropdownMenus[menu as keyof typeof dropdownMenus].map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;