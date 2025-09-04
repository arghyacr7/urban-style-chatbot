import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Urban Style fashion collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/90 text-neutral-800 text-sm font-medium rounded-full mb-4 backdrop-blur-sm">
              New Urban Collection
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Urban&nbsp;
            <span className="text-brand-sage-light">Style</span>
            <br />
            For the Modern Individual
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
            Timeless fashion for the modern individual. Discover our curated 
            collection of sustainable and ethically-made clothing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-neutral-900 hover:bg-white/90 font-semibold px-8 py-3 h-auto"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-neutral-900 font-semibold px-8 py-3 h-auto backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-white/60"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
