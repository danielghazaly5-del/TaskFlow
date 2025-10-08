import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Star, Twitter, Facebook, Mail } from "lucide-react";
import "./App.css";

/*h*/
const Section = ({ children }) => (
  <motion.section
    className="section"
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.section>
);

export default function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <h1>TaskFlow</h1>
        <p>
          Simplify your day and stay productive. Manage all your tasks with ease — anytime,
          anywhere.
        </p>
        <button className="primary-btn">Get Started</button>
      </section>

      {/* Features Section */}
      <Section>
        <h2 className="section-title">Features</h2>
        <div className="features">
          <div className="feature-item">
            <Clock size={50} className="icon" />
            <h3>Smart Scheduling</h3>
            <p>Automatically organize your day and never miss a deadline.</p>
          </div>
          <div className="feature-item">
            <CheckCircle size={50} className="icon" />
            <h3>Task Tracking</h3>
            <p>Track your progress and celebrate completed goals easily.</p>
          </div>
          <div className="feature-item">
            <Users size={50} className="icon" />
            <h3>Team Collaboration</h3>
            <p>Share tasks, assign responsibilities, and work as one team.</p>
          </div>
        </div>
      </Section>

      {/* Reviews Section */}
      <Section>
        <h2 className="section-title">What Users Say</h2>
        <div className="reviews">
          {[
            {
              name: "Sophie L.",
              quote: "TaskFlow completely changed how I plan my days. Simple yet powerful!",
            },
            {
              name: "Daniel M.",
              quote: "I love how organized I feel. It’s my daily productivity companion!",
            },
            {
              name: "Lara T.",
              quote: "Perfect for my team! Everyone stays on the same page effortlessly.",
            },
          ].map((r, i) => (
            <motion.div
              key={i}
              className="review-card"
              whileHover={{ scale: 1.03 }}
            >
              <Star className="star-icon" />
              <p className="quote">“{r.quote}”</p>
              <p className="reviewer">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing Section */}
      <Section>
        <h2 className="section-title">Pricing</h2>
        <div className="pricing">
          {[
            { title: "Free", price: "$0", features: ["Basic features", "1 user", "Limited tasks"] },
            {
              title: "Pro",
              price: "$9/mo",
              features: ["All features", "Unlimited tasks", "Priority support"],
            },
            {
              title: "Team",
              price: "$19/mo",
              features: ["Collaboration tools", "Admin panel", "Unlimited members"],
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              className="pricing-card"
              whileHover={{ y: -5 }}
            >
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>
              <button className="secondary-btn">Choose Plan</button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 TaskFlow. All rights reserved.</p>
        <div className="socials">
          <Twitter className="social-icon" />
          <Facebook className="social-icon" />
          <Mail className="social-icon" />
        </div>
      </footer>
    </div>
  );
}
