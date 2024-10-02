import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Shield, Target, Users, Award, Clock, ChartBar } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-hanmaxBlue mb-4">HANMAX SECURITY</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pioneering advanced security solutions with a commitment to excellence and innovation.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-hanmaxBlue mb-8 text-center">Our Core Objectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Uncompromising Protection", description: "Ensuring the highest level of security for our clients' assets and personnel." },
              { icon: Target, title: "Tailored Solutions", description: "Customizing our services to meet the unique needs of each client." },
              { icon: Users, title: "Professional Excellence", description: "Maintaining a team of highly trained and dedicated security professionals." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-500 hover:shadow-xl hover:scale-105">
                <item.icon className="w-16 h-16 text-hanmaxBlue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-hanmaxBlue mb-8 text-center">Our Proven Effectiveness</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "99.9% Client Satisfaction", description: "Consistently exceeding client expectations with our services." },
              { icon: Clock, title: "24/7 Rapid Response", description: "Always ready to respond to security concerns, anytime, anywhere." },
              { icon: ChartBar, title: "30% Reduction in Incidents", description: "Helping our clients significantly reduce security incidents." }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <stat.icon className="w-12 h-12 text-hanmaxGold mb-4" />
                <h3 className="text-2xl font-bold text-hanmaxBlue mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-hanmaxBlue mb-8 text-center">Our Journey of Excellence</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-hanmaxBlue"></div>
            {[
              { year: "2010", title: "Founded", description: "HANMAX SECURITY established with a vision to revolutionize the security industry." },
              { year: "2015", title: "Expansion", description: "Expanded operations nationwide, serving a diverse range of clients." },
              { year: "2020", title: "Innovation", description: "Introduced AI-powered surveillance systems, setting new industry standards." },
              { year: "2024", title: "Global Reach", description: "Expanded services internationally, becoming a global security solutions provider." }
            ].map((event, index) => (
              <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'md:ml-auto md:mr-24' : 'md:mr-auto md:ml-24'} md:w-5/12`}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="absolute top-6 -left-12 w-9 h-9 rounded-full bg-hanmaxGold border-4 border-white flex items-center justify-center">
                    <span className="text-hanmaxBlue font-bold">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-hanmaxBlue mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-hanmaxBlue mb-4">Ready to Experience Unparalleled Security?</h2>
          <p className="text-xl text-gray-600 mb-8">Join us as a security professional or let us safeguard your interests.</p>
          <div className="space-x-4">
            <Link to="/register" className="inline-block bg-hanmaxBlue text-white py-3 px-6 rounded-full hover:bg-hanmaxGold hover:text-hanmaxBlue transition-colors text-lg font-semibold">
              Join Our Team
            </Link>
            <Link to="/request-service" className="inline-block bg-hanmaxGold text-hanmaxBlue py-3 px-6 rounded-full hover:bg-hanmaxBlue hover:text-white transition-colors text-lg font-semibold">
              Request Our Services
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-hanmaxBlue text-hanmaxGold py-8 mt-16">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; 2024 HANMAX SECURITY. All rights reserved.</p>
          <p>Committed to your safety, dedicated to excellence.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

