
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
