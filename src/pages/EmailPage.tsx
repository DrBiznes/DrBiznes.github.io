import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Water } from '../components/Water/Water';

const ASCII = {
  topLeft: '┌',
  topRight: '┐',
  bottomLeft: '└',
  bottomRight: '┘',
  horizontal: '─',
  vertical: '│',
};

type FormField = 'name' | 'email' | 'subject' | 'message';

export const EmailPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.name.trim() || !formData.email.trim() || 
        !formData.subject.trim() || !formData.message.trim()) {
      setStatus('Please fill out all fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address');
      return;
    }

    setStatus('Sending...');

    emailjs.send(
      'service_cp2p2ra',
      'template_k6p959k',
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'DFA3thP5-HZdnQOEV'
    )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full flex flex-col items-center pt-20 font-mono text-white relative"
    >
      <motion.div
        className="w-[500px] p-8"
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <pre className="mb-4">
          {`${ASCII.topLeft}${ASCII.horizontal.repeat(50)}${ASCII.topRight}
${ASCII.vertical}                Send me an email!                 ${ASCII.vertical}
${ASCII.bottomLeft}${ASCII.horizontal.repeat(50)}${ASCII.bottomRight}`}
        </pre>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 pl-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {(['name', 'email', 'subject', 'message'] as FormField[]).map((field) => (
            <motion.div
              key={field}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {field !== 'message' ? (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  value={formData[field]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  className="w-full bg-transparent border border-white p-2 text-white font-mono"
                  required
                />
              ) : (
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-white p-2 text-white font-mono h-32 resize-y max-h-[50vh]"
                  required
                />
              )}
            </motion.div>
          ))}
          <motion.button
            type="submit"
            className="w-full border border-white px-4 py-2 hover:bg-white/10 transition-colors"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            [Send Message]
          </motion.button>
        </motion.form>

        {status && (
          <div className="mt-4 text-center pl-6">
            {status}
          </div>
        )}
      </motion.div>
      <Water />
    </motion.div>
  );
};

export default EmailPage; 