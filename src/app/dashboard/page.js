import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    User, Package, MapPin, LogOut, CheckCircle,
    Truck, Clock, CreditCard, ChevronRight, Edit3, X, Plus, Save,
    TrendingUp, Activity, Smartphone, Shield, Zap, History, Star
} from 'lucide-react';
import styles from './Dashboard.module.css';
import { useToast } from '@/components/common/Toast/Toast';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession, signOut } from 'next-auth/react';

export default function UserDashboard() {
    const { data: session, status } = useSession();
    const [activeTab, setActiveTab] = useState('overview');
    const { addToast } = useToast();
    const [isEditing, setIsEditing] = useState(false);

    const [userData, setUserData] = useState({
        name: "Johnathan Doe",
        email: "john.doe@lumiere.com",
        phone: "+1 (555) 123-4567",
        memberSince: "November 2023",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
    });

    const [tempData, setTempData] = useState({ ...userData });

    useEffect(() => {
        if (session?.user) {
            setUserData(prev => ({
                ...prev,
                name: session.user.name || prev.name,
                email: session.user.email || prev.email,
                avatar: session.user.image || prev.avatar
            }));
            setTempData(prev => ({
                ...prev,
                name: session.user.name || prev.name,
                email: session.user.email || prev.email,
                avatar: session.user.image || prev.avatar
            }));
        }
    }, [session]);

    const stats = [
        { label: "Active Orders", value: "02", icon: <Package size={20} />, trend: "+12%" },
        { label: "Total Spent", value: "$4,250", icon: <CreditCard size={20} />, trend: "+5%" },
        { label: "Wishlist Items", value: "18", icon: <Star size={20} />, trend: "+3" },
    ];

    const orders = [
        { id: "ORD-9921", date: "Feb 15, 2024", total: 1598, status: "Delivered", items: 3 },
        { id: "ORD-8812", date: "Jan 28, 2024", total: 420, status: "Shipped", items: 1 }
    ];

    const activeOrder = {
        id: "ORD-1105",
        status: "In Transit",
        estimatedDelivery: "Feb 28, 2024",
        currentStep: 2
    };

    const handleSaveProfile = () => {
        setUserData({ ...tempData });
        setIsEditing(false);
        addToast('Maison Profile updated.', 'success');
    };

    const renderContent = () => {
        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    {(() => {
                        switch (activeTab) {
                            case 'overview':
                                return (
                                    <div className={styles.venumSection}>
                                        <div className={styles.sectionHeader}>
                                            <div className={styles.venumBadge}>Venum Ecosystem</div>
                                            <h2 className={styles.venumTitle}>Strategic <span>Intelligence</span></h2>
                                            <p className={styles.venumDesc}>A holistic view of your acquisitions and loyalty performance.</p>
                                        </div>

                                        <div className={styles.venumStatsGrid}>
                                            {stats.map((stat, i) => (
                                                <div key={i} className={styles.venumStatCard}>
                                                    <div className={styles.statTop}>
                                                        <div className={styles.statIconBadge}>{stat.icon}</div>
                                                        <span className={styles.trend}>{stat.trend}</span>
                                                    </div>
                                                    <div className={styles.statBottom}>
                                                        <label>{stat.label}</label>
                                                        <h3>{stat.value}</h3>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className={styles.intelligenceBox}>
                                            <div className={styles.intelHeader}>
                                                <h4><Zap size={16} /> Real-time Analytics</h4>
                                                <span>Updated 2m ago</span>
                                            </div>
                                            <div className={styles.intelContent}>
                                                <div className={styles.intelItem}>
                                                    <div className={styles.intelVisual} style={{ width: '70%', background: 'var(--accent)' }}></div>
                                                    <div className={styles.intelLabel}>Collection Completion <span>70%</span></div>
                                                </div>
                                                <div className={styles.intelItem}>
                                                    <div className={styles.intelVisual} style={{ width: '45%', background: '#fff' }}></div>
                                                    <div className={styles.intelLabel}>Reward Milestone <span>45%</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            case 'orders':
                                return (
                                    <div className={styles.venumSection}>
                                        <div className={styles.sectionHeader}>
                                            <h2 className={styles.venumTitle}>Acquisition <span>Logs</span></h2>
                                            <p className={styles.venumDesc}>Historical data of your Maison Lumeire selections.</p>
                                        </div>
                                        <div className={styles.venumOrderList}>
                                            {orders.map(order => (
                                                <div key={order.id} className={styles.venumOrderCard}>
                                                    <div className={styles.orderLeft}>
                                                        <div className={styles.orderIconWrap}><Package size={20} /></div>
                                                        <div className={styles.orderLabel}>
                                                            <h4>#{order.id}</h4>
                                                            <p>{order.date} • {order.items} Items</p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.orderRight}>
                                                        <div className={styles.orderValue}>${order.total.toLocaleString()}</div>
                                                        <div className={`${styles.statusBadge} ${styles[order.status.replace(' ', '').toLowerCase()]}`}>
                                                            {order.status}
                                                        </div>
                                                        <button className={styles.venumActionBtn}><ChevronRight size={18} /></button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            case 'tracking':
                                return (
                                    <div className={styles.venumSection}>
                                        <div className={styles.sectionHeader}>
                                            <h2 className={styles.venumTitle}>Mission <span>Tracking</span></h2>
                                            <p className={styles.venumDesc}>Live telemetry for your pending delivery.</p>
                                        </div>
                                        <div className={styles.trackingCard}>
                                            <div className={styles.trackingInfo}>
                                                <div className={styles.trackTop}>
                                                    <div>
                                                        <h3>Order #{activeOrder.id}</h3>
                                                        <p>Current Status: <span>{activeOrder.status}</span></p>
                                                    </div>
                                                    <div className={styles.trackDate}>
                                                        <label>Estimated Arrival</label>
                                                        <h4>{activeOrder.estimatedDelivery}</h4>
                                                    </div>
                                                </div>

                                                <div className={styles.venumTimeline}>
                                                    <div className={styles.timelineBar}>
                                                        <div className={styles.timelineProgress} style={{ width: '66%' }}></div>
                                                    </div>
                                                    <div className={styles.timelineNodes}>
                                                        {['Initiated', 'Processed', 'In Transit', 'Destination'].map((node, i) => (
                                                            <div key={i} className={`${styles.node} ${i <= 2 ? styles.nodeActive : ''}`}>
                                                                <div className={styles.nodePoint}></div>
                                                                <span>{node}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            default:
                                return (
                                    <div className={styles.venumSection}>
                                        <div className={styles.sectionHeader}>
                                            <h2 className={styles.venumTitle}>Profile <span>Integrity</span></h2>
                                            <p className={styles.venumDesc}>Maintain your account credentials and personal data.</p>
                                        </div>
                                        <div className={styles.venumForm}>
                                            <div className={styles.formRow}>
                                                <div className={styles.formGroup}>
                                                    <label>Full Identity</label>
                                                    <input
                                                        type="text"
                                                        disabled={!isEditing}
                                                        className={`${styles.venumInput} ${isEditing ? styles.editable : ''}`}
                                                        value={tempData.name}
                                                        onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                                                    />
                                                </div>
                                                <div className={styles.formGroup}>
                                                    <label>Communications</label>
                                                    <input
                                                        type="email"
                                                        disabled={!isEditing}
                                                        className={`${styles.venumInput} ${isEditing ? styles.editable : ''}`}
                                                        value={tempData.email}
                                                        onChange={(e) => setTempData({ ...tempData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.formActions}>
                                                {isEditing ? (
                                                    <>
                                                        <button className={styles.venumSaveBtn} onClick={handleSaveProfile}><Save size={16} /> Sync Changes</button>
                                                        <button className={styles.venumCancelBtn} onClick={() => setIsEditing(false)}><X size={16} /> Abort</button>
                                                    </>
                                                ) : (
                                                    <button className={styles.venumEditBtn} onClick={() => setIsEditing(true)}><Edit3 size={16} /> Modify Profile</button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                        }
                    })()}
                </motion.div>
            </AnimatePresence>
        );
    };

    return (
        <div className={styles.venumDashboard}>
            {/* Ambient Background Lights */}
            <div className={styles.lightOne}></div>
            <div className={styles.lightTwo}></div>

            <div className="container">
                <div className={styles.venumLayout}>
                    {/* Navigation Sidebar */}
                    <aside className={styles.venumSidebar}>
                        <div className={styles.venumUserCard}>
                            <div className={styles.avatarGlow}>
                                <Image src={userData.avatar} alt={userData.name} width={120} height={120} className={styles.venumAvatar} unoptimized />
                            </div>
                            <h3>{userData.name}</h3>
                            <p>Platinum Clearance</p>
                        </div>

                        <nav className={styles.venumMenu}>
                            <div className={styles.menuLabel}>Central Command</div>
                            <button className={`${styles.menuItem} ${activeTab === 'overview' ? styles.menuActive : ''}`} onClick={() => setActiveTab('overview')}>
                                <Activity size={18} /> Intelligence
                            </button>
                            <button className={`${styles.menuItem} ${activeTab === 'profile' ? styles.menuActive : ''}`} onClick={() => setActiveTab('profile')}>
                                <User size={18} /> Identity
                            </button>

                            <div className={styles.menuLabel}>Logistics</div>
                            <button className={`${styles.menuItem} ${activeTab === 'orders' ? styles.menuActive : ''}`} onClick={() => setActiveTab('orders')}>
                                <History size={18} /> Acquisitions
                            </button>
                            <button className={`${styles.menuItem} ${activeTab === 'tracking' ? styles.menuActive : ''}`} onClick={() => setActiveTab('tracking')}>
                                <Truck size={18} /> Live Tracking
                            </button>

                            <div className={styles.menuLabel}>Vault</div>
                            <Link href="/wishlist" className={styles.menuItem}>
                                <Heart size={18} /> Private Archive
                            </Link>
                            <button className={styles.menuItem} onClick={() => addToast('Encryption active.', 'info')}>
                                <Shield size={18} /> Security
                            </button>
                        </nav>

                        <div className={styles.sidebarFooter}>
                            <button className={styles.venumLogout} onClick={() => signOut({ callbackUrl: '/' })}>
                                <LogOut size={16} /> Terminate Session
                            </button>
                        </div>
                    </aside>

                    {/* Content Component Area */}
                    <main className={styles.venumDisplay}>
                        <div className={styles.venumPaper}>
                            {renderContent()}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
