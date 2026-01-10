import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('for-whom')}
              className="text-foreground hover:text-accent"
            >
              Для кого?
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('program')}
              className="text-foreground hover:text-accent"
            >
              Программа курса
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20 pt-32 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,160,101,0.08),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="z-10 fade-in-up">
              <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <span className="text-accent font-semibold text-sm tracking-wider uppercase">НОВАЯ ШКОЛА ГРУДНИЧКОВОГО ПЛАВАНИЯ</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                <span className="text-foreground">Купание и уход</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">ЗА НОВОРОЖДЕННЫМ</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 font-light text-muted-foreground leading-relaxed">
                4 способа купания без слёз и боли в спине<br />с максимальной пользой для развития ребёнка
              </p>
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-12 h-16 text-lg rounded-md shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/30 w-full md:w-auto"
                  onClick={() => window.open('https://t.me/AntonOchagov', '_blank')}
                >
                  Получить доступ
                </Button>
                <p className="text-muted-foreground text-center md:text-left">
                  старт сразу после оплаты
                </p>
              </div>
            </div>
            <div className="fade-in-up relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-2xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-accent/10">
                <img 
                  src="https://cdn.poehali.dev/files/1111.jpg"
                  alt="Мама с малышом в воде"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
