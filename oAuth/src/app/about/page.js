import Image from 'next/image';
import { Award, Compass, Heart, ShieldCheck } from 'lucide-react';
import styles from './About.module.css';
import Newsletter from '@/components/home/Newsletter/Newsletter';

export const metadata = {
    // ... existing metadata ...
    title: 'Our Story',
    description: 'Founded in 2024, Lumière is a global symbol of quiet luxury. Discover our heritage, values, and the artisans behind every piece.',
    openGraph: {
        title: 'Our Story | LUMIÈRE',
        description: 'Founded in 2024, Lumière is a global symbol of quiet luxury.',
    },
};

export default function AboutPage() {
    // ... existing code ...
    const team = [
        {
            name: "Julian Lumière",
            role: "Founder & Creative Director",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
        },
        {
            name: "Elena Vance",
            role: "Head of Design",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
        },
        {
            name: "Marcus Thorne",
            role: "Master Artisan",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
        },
        {
            name: "Sophia Chen",
            role: "Sustainability Lead",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <div className={styles.aboutPage}>
            {/* Full-height Banner with Image */}
            <section className={styles.banner}>
                <Image
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
                    alt="Lumière Heritage"
                    fill
                    className={styles.bannerImage}
                    priority
                    sizes="100vw"
                />
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <p>Since 2024</p>
                    <h1>Our <span>Heritage</span></h1>
                </div>
            </section>

            {/* Our Story */}
            <section className={styles.storySection}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={styles.storyText}>
                            <h2>The <span>Lumière</span> Story</h2>
                            <p>
                                Founded in 2024, Lumière began as a small artisan workshop in the heart of Paris,
                                driven by a singular vision: to create timeless pieces that bridge the gap
                                between traditional craftsmanship and modern elegance.
                            </p>
                            <p>
                                Our journey has always been about more than just fashion. It&apos;s about the stories
                                woven into every thread, the precision of every stitch, and the enduring beauty
                                of quality over quantity.
                            </p>
                            <p>
                                Today, Lumière stands as a global symbol of quiet luxury, serving a community
                                that values authenticity, sustainability, and the art of fine living.
                            </p>

                            <div className={styles.statRow}>
                                <div className={styles.stat}>
                                    <h3>50K+</h3>
                                    <p>Happy Members</p>
                                </div>
                                <div className={styles.stat}>
                                    <h3>320+</h3>
                                    <p>Curated Pieces</p>
                                </div>
                                <div className={styles.stat}>
                                    <h3>18</h3>
                                    <p>Countries Served</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.storyImage}>
                            <Image
                                src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000&auto=format&fit=crop"
                                alt="Lumière Atelier"
                                fill
                                className={styles.image}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={styles.missionSection}>
                <div className="container">
                    <div className={styles.sectionCenter}>
                        <h2>Our <span>Values</span></h2>
                    </div>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionCard}>
                            <div className={styles.iconCircle}><Award size={32} /></div>
                            <h3>Excellence</h3>
                            <p>We never compromise on quality. Every material is ethically sourced and every design is meticulously tested.</p>
                        </div>
                        <div className={styles.missionCard}>
                            <div className={styles.iconCircle}><Compass size={32} /></div>
                            <h3>Vision</h3>
                            <p>To lead the fashion world towards a future where luxury and responsibility walk hand in hand.</p>
                        </div>
                        <div className={styles.missionCard}>
                            <div className={styles.iconCircle}><ShieldCheck size={32} /></div>
                            <h3>Integrity</h3>
                            <p>Transparency is our foundation. We believe in honest pricing and direct communication with our clients.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.teamSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Meet the <span>Visionaries</span></h2>
                    </div>
                    <div className={styles.teamGrid}>
                        {team.map((member, index) => (
                            <div key={index} className={styles.teamCard}>
                                <div className={styles.memberImage}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 600px) 45vw, 25vw"
                                    />
                                </div>
                                <h4>{member.name}</h4>
                                <span>{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
        </div>
    );
}
