import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Feel free to contact me for any inquiries.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: tal_alon@msn.com</li>
              <li className="contact-item">Phone: +436763504925</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
