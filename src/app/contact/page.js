"use client"
import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Send } from 'lucide-react';
import styles from './Contact.module.css';
import { useToast } from '@/components/common/Toast/Toast';
import Newsletter from '@/components/home/Newsletter/Newsletter';

export default function ContactPage() {
    const { addToast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addToast(`Thank you ${formData.name}! Our luxury consultants will respond within 24 hours.`, 'success', 5000);
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.contactPage}>
            {/* Banner */}
            <section className={styles.banner}>
                <div className={styles.bannerBg}></div>
                <div className={styles.bannerContent}>
                    <h1>Get In <span>Touch</span></h1>
                    <p>Contact our luxury consultants</p>
                </div>
            </section>

            {/* Main Content */}
            <div className={`container ${styles.contactContainer}`}>
                <div className={styles.mainGrid}>
                    {/* Info Side */}
                    <aside className={styles.infoSide}>
                        <div className={styles.infoBlock}>
                            <h3>Our Signature Boutique</h3>
                            <div className={styles.detail}>
                                <div className={styles.iconWrapper}><MapPin size={22} /></div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>123 Luxury Avenue, Maison Lumière<br />75001 Paris, France</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.infoBlock}>
                            <h3>Concierge Services</h3>
                            <div className={styles.detail}>
                                <div className={styles.iconWrapper}><Phone size={22} /></div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+33 (0) 1 23 45 67 89</p>
                                </div>
                            </div>
                            <div className={styles.detail}>
                                <div className={styles.iconWrapper}><Mail size={22} /></div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>concierge@lumiere.com</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.infoBlock}>
                            <h3>Connect</h3>
                            <div className={styles.socialGrid}>
                                <a href="#" className={styles.socialLink} aria-label="Instagram"><Instagram size={20} /></a>
                                <a href="#" className={styles.socialLink} aria-label="Twitter"><Twitter size={20} /></a>
                                <a href="#" className={styles.socialLink} aria-label="Facebook"><Facebook size={20} /></a>
                            </div>
                        </div>
                    </aside>

                    {/* Form Side */}
                    <div className={styles.formSide}>
                        <div className={styles.formHeader}>
                            <h2>Send a <span>Message</span></h2>
                            <p>Our consultants will respond within 24 hours.</p>
                        </div>

                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Julian Lumière"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="julian@lumiere.com"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Subject</label>
                                <select name="subject" value={formData.subject} onChange={handleChange}>
                                    <option>General Inquiry</option>
                                    <option>Order Status</option>
                                    <option>Bespoke Services</option>
                                    <option>Press & Media</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we assist you today?"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Send Message <Send size={16} style={{ marginLeft: '10px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <section className={styles.mapSection}>
                <iframe
                    title="Lumière Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615674389!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca973b71569!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647230461234!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>

            <Newsletter />
        </div>
    );
}
