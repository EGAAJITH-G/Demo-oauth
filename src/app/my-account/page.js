import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
    User, Package, MapPin, Heart, Shield, LogOut,
    ChevronRight, Edit3, X, Save, Plus, Clock,
    CreditCard, CheckCircle, Bell, Settings, ArrowRight,
    Camera, Smartphone, Globe, Mail, Star, History, Gift
} from 'lucide-react';
import styles from './MyAccount.module.css';
import { useToast } from '@/components/common/Toast/Toast';
import { motion, AnimatePresence } from 'framer-motion';

export default function MyAccountPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const { addToast } = useToast();

    const [activeTab, setActiveTab] = useState('overview');
    const [isEditing, setIsEditing] = useState(false);

    // Mock User Data based on user's dashboard edits
    // Initial User Data - will be updated by session
    const [userData, setUserData] = useState({
        name: "Lumière Guest",
        email: "guest@lumiere.com",
        phone: "+1 (000) 000-0000",
        memberSince: new Date().getFullYear().toString(),
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
    });

    const [tempData, setTempData] = useState({ ...userData });

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        } else if (session?.user) {
            const updatedData = {
                ...userData,
                name: session.user.name || userData.name,
                email: session.user.email || userData.email,
                avatar: session.user.image || userData.avatar
            };
            setUserData(updatedData);
            setTempData(updatedData);
        }
    }, [session, status, router]);

    const handleSaveProfile = () => {
        setUserData({ ...tempData });
        setIsEditing(false);
        addToast('Profile updated successfully!', 'success');
    };

    const handleAction = (msg) => {
        addToast(msg, 'info');
    };

    if (status === 'loading') return null;

    const renderContent = () => {
        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    {(() => {
                        switch (activeTab) {
                            case 'overview':
                                return (
                                    <div className={styles.section}>
                                        <div className={styles.sectionHeader}>
                                            <div className={styles.badgeLine}>Venum Platinum</div>
                                            <h2 className={styles.sectionTitle}>Dashboard <span>Overview</span></h2>
                                            <p className={styles.sectionDesc}>Curating your personalized luxury experience.</p>
                                        </div>

                                        <div className={styles.overviewGrid}>
                                            <div className={styles.statCard}>
                                                <div className={styles.statIcon}><History size={20} /></div>
                                                <div className={styles.statInfo}>
                                                    <label>Recent Orders</label>
                                                    <h3>24</h3>
                                                </div>
                                            </div>
                                            <div className={styles.statCard}>
                                                <div className={styles.statIcon}><Star size={20} /></div>
                                                <div className={styles.statInfo}>
                                                    <label>Loyalty Points</label>
                                                    <h3>4,850</h3>
                                                </div>
                                            </div>
                                            <div className={styles.statCard}>
                                                <div className={styles.statIcon}><Gift size={20} /></div>
                                                <div className={styles.statInfo}>
                                                    <label>Active Rewards</label>
                                                    <h3>3</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.promoBanner}>
                                            <div className={styles.promoContent}>
                                                <h4>Early Access: Venetian Collection</h4>
                                                <p>As a Platinum member, you have 48h priority access to our upcoming drop.</p>
                                                <Link href="/collections" className={styles.promoBtn}>Explore Collection</Link>
                                            </div>
                                            <div className={styles.promoVisual}></div>
                                        </div>

                                        <div className={styles.recentActivity}>
                                            <div className={styles.activityHeader}>
                                                <h4>Recent Activity</h4>
                                                <button onClick={() => addToast('Viewing all logs...', 'info')}>View All</button>
                                            </div>
                                            <div className={styles.activityList}>
                                                <div className={styles.activityItem}>
                                                    <div className={styles.dot}></div>
                                                    <p>Order <span>#ORD-9921</span> was delivered to your New York address.</p>
                                                    <span>2h ago</span>
                                                </div>
                                                <div className={styles.activityItem}>
                                                    <div className={styles.dot}></div>
                                                    <p>You added <span>Silk Evening Gown</span> to your wishlist.</p>
                                                    <span>Yesterday</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            case 'profile':
                                return (
                                    <div className={styles.section}>
                                        <div className={styles.sectionHeader}>
                                            <h2 className={styles.sectionTitle}>Identity <span>Profile</span></h2>
                                            <p className={styles.sectionDesc}>Personalize your presence within the maison.</p>
                                        </div>

                                        <div className={styles.profileFormGrid}>
                                            <div className={styles.inputWrap}>
                                                <label><User size={14} /> Full Name</label>
                                                <input
                                                    type="text"
                                                    disabled={!isEditing}
                                                    className={`${styles.venumInput} ${isEditing ? styles.editable : ''}`}
                                                    value={tempData.name}
                                                    onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className={styles.inputWrap}>
                                                <label><Mail size={14} /> Email Address</label>
                                                <input
                                                    type="email"
                                                    disabled={!isEditing}
                                                    className={`${styles.venumInput} ${isEditing ? styles.editable : ''}`}
                                                    value={tempData.email}
                                                    onChange={(e) => setTempData({ ...tempData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className={styles.inputWrap}>
                                                <label><Smartphone size={14} /> Phone Number</label>
                                                <input
                                                    type="text"
                                                    disabled={!isEditing}
                                                    className={`${styles.venumInput} ${isEditing ? styles.editable : ''}`}
                                                    value={tempData.phone}
                                                    onChange={(e) => setTempData({ ...tempData, phone: e.target.value })}
                                                />
                                            </div>
                                            <div className={styles.inputWrap}>
                                                <label><Globe size={14} /> Region</label>
                                                <select disabled={!isEditing} className={`${styles.venumInput} ${isEditing ? styles.editable : ''}`}>
                                                    <option>United States</option>
                                                    <option>United Kingdom</option>
                                                    <option>France</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className={styles.formActions}>
                                            {isEditing ? (
                                                <>
                                                    <button className={styles.venumPrimaryBtn} onClick={handleSaveProfile}><Save size={16} /> Update Profile</button>
                                                    <button className={styles.venumSecondaryBtn} onClick={() => setIsEditing(false)}><X size={16} /> Cancel</button>
                                                </>
                                            ) : (
                                                <button className={styles.venumPrimaryBtn} onClick={() => setIsEditing(true)}><Edit3 size={16} /> Manage Details</button>
                                            )}
                                        </div>
                                    </div>
                                );
                            case 'orders':
                                return (
                                    <div className={styles.section}>
                                        <div className={styles.sectionHeader}>
                                            <h2 className={styles.sectionTitle}>Order <span>Archives</span></h2>
                                            <p className={styles.sectionDesc}>A history of your curated selections.</p>
                                        </div>
                                        <div className={styles.venumOrderList}>
                                            {[
                                                { id: "ORD-9921", date: "Feb 15, 2024", total: 1598, status: "Delivered", items: 3 },
                                                { id: "ORD-8812", date: "Jan 28, 2024", total: 420, status: "In Transit", items: 1 }
                                            ].map(order => (
                                                <div key={order.id} className={styles.venumOrderCard}>
                                                    <div className={styles.orderLeft}>
                                                        <div className={styles.orderIcon}><Package size={20} /></div>
                                                        <div className={styles.orderMain}>
                                                            <h4>#{order.id}</h4>
                                                            <p>{order.date} • {order.items} Items</p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.orderRight}>
                                                        <div className={styles.orderPrice}>${order.total.toLocaleString()}</div>
                                                        <div className={`${styles.venumBadge} ${styles[order.status.replace(' ', '').toLowerCase()]}`}>
                                                            {order.status}
                                                        </div>
                                                        <button className={styles.venumIconBtn}><ChevronRight size={18} /></button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            case 'addresses':
                                return (
                                    <div className={styles.section}>
                                        <div className={styles.sectionHeader}>
                                            <h2 className={styles.sectionTitle}>Shipping <span>Vault</span></h2>
                                            <p className={styles.sectionDesc}>Destinations for your luxury deliveries.</p>
                                        </div>
                                        <div className={styles.venumAddressGrid}>
                                            {[
                                                { id: 1, type: "Residence", street: "123 Luxury Avenue, PH 4", city: "New York", country: "USA", isDefault: true },
                                                { id: 2, type: "Atelier", street: "45 Creative Circle, Level 2", city: "Los Angeles", country: "USA", isDefault: false }
                                            ].map(addr => (
                                                <div key={addr.id} className={styles.venumAddressCard}>
                                                    <div className={styles.addressTop}>
                                                        <span className={styles.addrType}>{addr.type}</span>
                                                        {addr.isDefault && <span className={styles.defaultDot}>Default</span>}
                                                    </div>
                                                    <h4>{addr.street}</h4>
                                                    <p>{addr.city}, {addr.country}</p>
                                                    <div className={styles.addrActions}>
                                                        <button className={styles.textBtn}>Modify</button>
                                                        {!addr.isDefault && <button className={styles.textBtn}>Set Default</button>}
                                                    </div>
                                                </div>
                                            ))}
                                            <button className={styles.addAddrCard}>
                                                <Plus size={24} />
                                                Add New Destination
                                            </button>
                                        </div>
                                    </div>
                                );
                            case 'payments':
                                return (
                                    <div className={styles.section}>
                                        <div className={styles.sectionHeader}>
                                            <h2 className={styles.sectionTitle}>Financial <span>Security</span></h2>
                                            <p className={styles.sectionDesc}>Secure payment methods for seamless transactions.</p>
                                        </div>
                                        <div className={styles.paymentList}>
                                            <div className={styles.venumCard}>
                                                <div className={styles.cardVisual}>
                                                    <div className={styles.chip}></div>
                                                    <div className={styles.cardNumber}>•••• •••• •••• 8821</div>
                                                    <div className={styles.cardMeta}>
                                                        <span>VISA</span>
                                                        <span>12 / 26</span>
                                                    </div>
                                                </div>
                                                <div className={styles.cardInfo}>
                                                    <h4>Platinum Reserve</h4>
                                                    <p>Primary Payment Method</p>
                                                    <button className={styles.textBtn}>Remove Method</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            default:
                                return (
                                    <div className={styles.emptyState}>
                                        <Settings size={48} className={styles.emptyIcon} />
                                        <h3>Section Restricted</h3>
                                        <p>This area of the Venum Portal is currently under maintenance or requires higher clearance.</p>
                                        <button className={styles.venumPrimaryBtn} onClick={() => setActiveTab('overview')}>Back to Dashboard</button>
                                    </div>
                                );
                        }
                    })()}
                </motion.div>
            </AnimatePresence>
        );
    };

    return (
        <div className={styles.venumPage}>
            {/* Ambient Background Elements */}
            <div className={styles.ambientPulse}></div>
            <div className={styles.ambientPulse2}></div>

            <div className="container">
                <div className={styles.venumLayout}>
                    {/* Left: Interactive Sidebar */}
                    <aside className={styles.venumSidebar}>
                        <div className={styles.venumUserBox}>
                            <div className={styles.venumAvatarWrapper}>
                                <div className={styles.venumAvatarRing}></div>
                                <Image
                                    src={userData.avatar}
                                    alt={userData.name}
                                    width={120}
                                    height={120}
                                    className={styles.venumAvatar}
                                    unoptimized
                                />
                                <button className={styles.avatarEditBtn}><Camera size={14} /></button>
                            </div>
                            <div className={styles.venumUserDetails}>
                                <h1>{userData.name}</h1>
                                <p>Verified Member <span>Since 2023</span></p>
                            </div>
                        </div>

                        <nav className={styles.venumNav}>
                            <div className={styles.navGroup}>
                                <label>Maison Account</label>
                                <button className={`${styles.venumNavItem} ${activeTab === 'overview' ? styles.venumActiveNav : ''}`} onClick={() => setActiveTab('overview')}>
                                    <div className={styles.navIcon}><Shield size={18} /></div>
                                    <span>Intelligence Overview</span>
                                </button>
                                <button className={`${styles.venumNavItem} ${activeTab === 'profile' ? styles.venumActiveNav : ''}`} onClick={() => setActiveTab('profile')}>
                                    <div className={styles.navIcon}><User size={18} /></div>
                                    <span>Identity Settings</span>
                                </button>
                            </div>

                            <div className={styles.navGroup}>
                                <label>Collections & Orders</label>
                                <button className={`${styles.venumNavItem} ${activeTab === 'orders' ? styles.venumActiveNav : ''}`} onClick={() => setActiveTab('orders')}>
                                    <div className={styles.navIcon}><Package size={18} /></div>
                                    <span>Order Masterlist</span>
                                </button>
                                <button className={`${styles.venumNavItem} ${activeTab === 'addresses' ? styles.venumActiveNav : ''}`} onClick={() => setActiveTab('addresses')}>
                                    <div className={styles.navIcon}><MapPin size={18} /></div>
                                    <span>Shipping Vault</span>
                                </button>
                                <Link href="/wishlist" className={styles.venumNavItem}>
                                    <div className={styles.navIcon}><Heart size={18} /></div>
                                    <span>Private Wishlist</span>
                                </Link>
                            </div>

                            <div className={styles.navGroup}>
                                <label>Security & Loyalty</label>
                                <button className={`${styles.venumNavItem} ${activeTab === 'payments' ? styles.venumActiveNav : ''}`} onClick={() => setActiveTab('payments')}>
                                    <div className={styles.navIcon}><CreditCard size={18} /></div>
                                    <span>Payment Methods</span>
                                </button>
                                <button className={`${styles.venumNavItem} ${activeTab === 'settings' ? styles.venumActiveNav : ''}`} onClick={() => setActiveTab('settings')}>
                                    <div className={styles.navIcon}><Settings size={18} /></div>
                                    <span>Advanced Privacy</span>
                                </button>
                            </div>

                            <div className={styles.navFooter}>
                                <button className={styles.venumLogoutBtn} onClick={() => signOut({ callbackUrl: '/' })}>
                                    <LogOut size={16} /> Secure Termination
                                </button>
                            </div>
                        </nav>
                    </aside>

                    {/* Right: Dynamic Content Area */}
                    <main className={styles.venumMain}>
                        <div className={styles.venumContentCard}>
                            {renderContent()}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
