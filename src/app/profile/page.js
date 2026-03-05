"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
    User, Mail, Smartphone, Globe, Camera,
    ShieldCheck, Award, MapPin, Calendar,
    Edit3, ArrowLeft, Instagram, Twitter, Linkedin
} from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Profile.module.css';

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') return null;
    if (status === 'unauthenticated') {
        router.push('/login');
        return null;
    }

    const userData = {
        name: session?.user?.name || "Lumière Member",
        email: session?.user?.email || "member@lumiere.com",
        role: "Platinum Member",
        memberSince: "2024",
        location: "New York, USA",
        bio: "Curator of fine aesthetics and luxury lifestyle. Dedicated to the pursuit of excellence in every detail of the maison.",
        avatar: session?.user?.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
    };

    return (
        <div className={styles.profilePage}>
            {/* Ambient Background */}
            <div className={styles.ambientGlow}></div>

            <div className="container">
                <Link href="/home" className={styles.backBtn}>
                    <ArrowLeft size={18} />
                    Back to Maison
                </Link>

                <div className={styles.profileHeader}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={styles.avatarSection}
                    >
                        <div className={styles.avatarWrapper}>
                            <div className={styles.avatarRing}></div>
                            <Image
                                src={userData.avatar}
                                alt={userData.name}
                                width={200}
                                height={200}
                                className={styles.avatar}
                                unoptimized
                            />
                            <button className={styles.cameraBtn}>
                                <Camera size={18} />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={styles.identitySection}
                    >
                        <div className={styles.badgeLine}>
                            <ShieldCheck size={14} />
                            Verified Identity
                        </div>
                        <h1 className={styles.userName}>{userData.name}</h1>
                        <p className={styles.userRole}>{userData.role}</p>

                        <div className={styles.quickStats}>
                            <div className={styles.stat}>
                                <Calendar size={14} />
                                <span>Member Since {userData.memberSince}</span>
                            </div>
                            <div className={styles.stat}>
                                <MapPin size={14} />
                                <span>{userData.location}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className={styles.profileGrid}>
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className={styles.card}
                    >
                        <div className={styles.cardHeader}>
                            <h3>Personal Manifesto</h3>
                            <button className={styles.editBtn}><Edit3 size={16} /></button>
                        </div>
                        <p className={styles.bioText}>{userData.bio}</p>

                        <div className={styles.socialLinks}>
                            <Link href="#" className={styles.socialIcon}><Instagram size={20} /></Link>
                            <Link href="#" className={styles.socialIcon}><Twitter size={20} /></Link>
                            <Link href="#" className={styles.socialIcon}><Linkedin size={20} /></Link>
                        </div>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className={styles.card}
                    >
                        <div className={styles.cardHeader}>
                            <h3>Contact Information</h3>
                        </div>
                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}><Mail size={18} /></div>
                                <div>
                                    <label>Email Address</label>
                                    <p>{userData.email}</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}><Smartphone size={18} /></div>
                                <div>
                                    <label>Phone Number</label>
                                    <p>+1 (555) 000-1234</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}><Globe size={18} /></div>
                                <div>
                                    <label>Preferred Language</label>
                                    <p>English (United States)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Achievements/Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className={`${styles.card} ${styles.fullWidth}`}
                    >
                        <div className={styles.cardHeader}>
                            <h3>Maison Achievements</h3>
                        </div>
                        <div className={styles.badgeGrid}>
                            <div className={styles.achievementBadge}>
                                <div className={styles.badgeIcon}><Award size={24} /></div>
                                <span>Founding Member</span>
                            </div>
                            <div className={styles.achievementBadge}>
                                <div className={styles.badgeIcon}><User size={24} /></div>
                                <span>Style Icon</span>
                            </div>
                            <div className={styles.achievementBadge}>
                                <div className={styles.badgeIcon}><ShieldCheck size={24} /></div>
                                <span>Trust Level 10</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
