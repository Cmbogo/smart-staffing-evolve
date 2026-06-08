import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Reality from '@/components/Reality';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowWeWork from '@/components/HowWeWork';
import Insights from '@/components/Insights';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Reality />
        <Services />
        <WhyChooseUs />
        <HowWeWork />
        <Insights />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
