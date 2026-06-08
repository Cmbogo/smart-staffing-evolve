import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white section-padding" aria-label="Contact section">
      <div className="site-container">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left: contact info */}
          <div>
            <span className="section-label">Get In Touch</span>
            <h2 className="font-display text-[#0D0D0D] mb-8">Let's talk.</h2>

            <p className="font-sans text-lg text-[#6B7063] leading-relaxed mb-12">
              Whether you have a specific HR challenge or are thinking through where to begin,
              we are straightforward to reach. No long intake forms.
            </p>

            <div className="flex flex-col gap-10">
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#C9B99A] mb-2">
                  Phone
                </p>
                <p className="font-sans text-[#0D0D0D] text-lg">0716 857 000</p>
              </div>

              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#C9B99A] mb-2">
                  Email
                </p>
                <a
                  href="mailto:Info@smartstaffingke.com"
                  className="font-sans text-[#0D0D0D] text-lg hover:text-[#1A3A2A] transition-colors"
                >
                  Info@smartstaffingke.com
                </a>
                <br />
                <a
                  href="mailto:EMwangi@smartstaffingke.com"
                  className="font-sans text-[#6B7063] hover:text-[#1A3A2A] transition-colors"
                >
                  EMwangi@smartstaffingke.com
                </a>
              </div>

              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#C9B99A] mb-2">
                  Office
                </p>
                <p className="font-sans text-[#0D0D0D] leading-relaxed">
                  Riverside Close, opposite Oyster Paradise<br />
                  Riverside Drive, Nairobi
                </p>
              </div>

              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#C9B99A] mb-2">
                  Web
                </p>
                <a
                  href="https://www.smartstaffingke.com"
                  className="font-sans text-[#0D0D0D] hover:text-[#1A3A2A] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.smartstaffingke.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col justify-center">
                <div className="pt-12 border-t-2 border-[#1A3A2A]">
                  <h3 className="font-display font-bold text-[#1A3A2A] mb-3"
                    style={{ fontSize: '1.5rem' }}>
                    Message received.
                  </h3>
                  <p className="font-sans text-[#6B7063]">
                    We will be in touch within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-first-name"
                      className="block font-sans text-sm font-medium text-[#0D0D0D] mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="contact-first-name"
                      type="text"
                      required
                      className="ss-input"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-last-name"
                      className="block font-sans text-sm font-medium text-[#0D0D0D] mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="contact-last-name"
                      type="text"
                      required
                      className="ss-input"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-sans text-sm font-medium text-[#0D0D0D] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="ss-input"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-organisation"
                    className="block font-sans text-sm font-medium text-[#0D0D0D] mb-2"
                  >
                    Organisation
                  </label>
                  <input
                    id="contact-organisation"
                    type="text"
                    className="ss-input"
                    placeholder="Your organisation name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-sans text-sm font-medium text-[#0D0D0D] mb-2"
                  >
                    What are you working on?
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className="ss-input resize-none"
                    placeholder="Describe the challenge or what you'd like to discuss."
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="btn-primary self-start"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
