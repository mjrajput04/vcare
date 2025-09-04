import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="text-white py-12 px-6" style={{backgroundColor: '#0071b9'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Vcare Hospital Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-bold text-lg">
                Vcare
              </div>
              <span className="text-2xl font-light">Hospital</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Excellence in healthcare with compassionate, comprehensive medical services for our community.
            </p>
          </div>

          {/* Patient Care */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Patient Care</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Find a Doctor</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Locations</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Emergency Services</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Patient Portal</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Medical Specialties</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Clinical Trials</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Health Library</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Wellness Programs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-primary-foreground/80">123 Healthcare Boulevard</p>
                <p className="text-primary-foreground/80">Medical District, NY 10001</p>
              </div>
              <p className="text-primary-foreground/80">Phone: (555) 123-4567</p>
              <p className="text-primary-foreground/80">Emergency: (555) 911-CARE</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
            <span>© 2024 Vcare Hospital</span>
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Use</a>
          </div>
          <div className="text-sm text-primary-foreground/60">
            Vcare Multispecialty Hospital
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;