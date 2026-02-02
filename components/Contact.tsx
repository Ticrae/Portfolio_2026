"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    hCaptchaToken: "",
  });

  const onHCaptchaChange = (token: string) => {
    setFormData({ ...formData, hCaptchaToken: token });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.hCaptchaToken) {
      alert("Please complete the captcha.");
      return;
    }
    // Handle form submission
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        "h-captcha-response": formData.hCaptchaToken,
      }),
    });
    const result = await res.json();
    if (result.success) {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "", hCaptchaToken: "" });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-32 bg-linear-to-br from-gray-900 to-purple-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300">
            Have a project in mind? Let's talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>

            <div className="space-y-6 mb-8">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a
                    href="mailto:hello@example.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    ukoboutibe@yahoo.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +1 (647) 207-6928
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-purple-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Location</div>
                  <div className="text-gray-300">London, CA</div>
                </div>
              </motion.div>
            </div>

            <div className="text-gray-400">
              <p className="mb-4">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg flex items-center justify-center gap-2 hover:shadow-xl transition-shadow cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_ACCESS_KEY || "sitekey"}
                reCaptchaCompat={false}
                onVerify={onHCaptchaChange}
              />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
