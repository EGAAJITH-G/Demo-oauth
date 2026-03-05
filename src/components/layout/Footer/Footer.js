import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>

                {/* Brand */}
                <div className={styles.brandInfo}>
                    <div className={styles.logo}>LUMIÈRE</div>
                    <p className={styles.description}>
                        Elevate your lifestyle with our curated collection of premium essentials.
                        Quality meets elegance in every piece we offer.
                    </p>
                    <div className={styles.socials}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={18} className={styles.socialIcon} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={18} className={styles.socialIcon} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter size={18} className={styles.socialIcon} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <Youtube size={18} className={styles.socialIcon} />
                        </a>
                    </div>
                </div>

                {/* Collections */}
                <div className={styles.linksColumn}>
                    <h3>Collections</h3>
                    <ul>
                        <li><Link href="/category/men">Men</Link></li>
                        <li><Link href="/category/women">Women</Link></li>
                        <li><Link href="/category/kids">Kids</Link></li>
                        <li><Link href="/category/accessories">Accessories</Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className={styles.linksColumn}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/cart">Shopping Cart</Link></li>
                        <li><Link href="/wishlist">Wishlist</Link></li>
                        <li><Link href="/dashboard">My Account</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className={styles.linksColumn}>
                    <h3>Contact</h3>
                    <ul className={styles.contactList}>
                        <li>
                            <MapPin size={16} />
                            <span>123 Elegance St, Beverly Hills, CA</span>
                        </li>
                        <li>
                            <Phone size={16} />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li>
                            <Mail size={16} />
                            <span>care@lumiere.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container">
                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} LUMIÈRE. All Rights Reserved.</p>
                    <div className={styles.footerLinks}>
                        <Link href="/collections">Collections</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
