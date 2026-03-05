"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    User, Package, MapPin, LogOut, CheckCircle,
    Truck, Clock, CreditCard, ChevronRight, Edit3, X, Plus, Save
} from 'lucide-react';
import styles from './Dashboard.module.css';
import { useToast } from '@/components/common/Toast/Toast';

export default function UserDashboard() {
    const [activeTab, setActiveTab] = useState('profile');
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

    const orders = [
        { id: "ORD-9921", date: "Feb 15, 2024", total: 598, status: "Delivered", items: 2 },
        { id: "ORD-8812", date: "Jan 28, 2024", total: 120, status: "Delivered", items: 1 },
        { id: "ORD-7745", date: "Dec 12, 2023", total: 890, status: "Delivered", items: 1 }
    ];

    const activeOrder = {
        id: "ORD-1105",
        status: "In Transit",
        estimatedDelivery: "Feb 28, 2024",
        currentStep: 2 // 0: Placed, 1: Processed, 2: Shipped, 3: Delivered
    };

    const [addresses, setAddresses] = useState([
        { id: 1, type: "Home", street: "123 Luxury Avenue, Penthouse 4", city: "New York", state: "NY", zip: "10001", isDefault: true },
        { id: 2, type: "Office", street: "Luxury Tower, 45th Floor", city: "Chicago", state: "IL", zip: "60601", isDefault: false }
    ]);

    const handleSaveProfile = () => {
        setUserData({ ...tempData });
        setIsEditing(false);
        addToast('Profile updated successfully!', 'success');
    };

    const handleCancelEdit = () => {
        setTempData({ ...userData });
        setIsEditing(false);
    };

    const handleRemoveAddress = (id) => {
        setAddresses(prev => prev.filter(a => a.id !== id));
        addToast('Address removed successfully.', 'info');
    };

    const handleSetDefault = (id) => {
        setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
        addToast('Default address updated!', 'success');
    };

    const handleAddAddress = () => {
        addToast('Address management coming in next update!', 'info');
    };

    const handleOrderDetails = (orderId) => {
        addToast(`Fetching details for Order #${orderId}...`, 'info');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>My <span>Profile</span></h2>
                        <div className={styles.profileGrid}>
                            <div className={styles.infoBox}>
                                <label>Full Name</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        className={styles.editInput}
                                        value={tempData.name}
                                        onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                                    />
                                ) : <p>{userData.name}</p>}
                            </div>
                            <div className={styles.infoBox}>
                                <label>Email Address</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        className={styles.editInput}
                                        value={tempData.email}
                                        onChange={(e) => setTempData({ ...tempData, email: e.target.value })}
                                    />
                                ) : <p>{userData.email}</p>}
                            </div>
                            <div className={styles.infoBox}>
                                <label>Phone Number</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        className={styles.editInput}
                                        value={tempData.phone}
                                        onChange={(e) => setTempData({ ...tempData, phone: e.target.value })}
                                    />
                                ) : <p>{userData.phone}</p>}
                            </div>
                            <div className={styles.infoBox}>
                                <label>Member Since</label>
                                <p>{userData.memberSince}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {isEditing ? (
                                <>
                                    <button className={styles.editProfileBtn} onClick={handleSaveProfile}>
                                        <Save size={16} /> Save Changes
                                    </button>
                                    <button className={styles.detailsBtn} onClick={handleCancelEdit}>
                                        <X size={16} /> Cancel
                                    </button>
                                </>
                            ) : (
                                <button className={styles.editProfileBtn} onClick={() => setIsEditing(true)}>
                                    <Edit3 size={16} /> Edit Profile
                                </button>
                            )}
                        </div>
                    </div>
                );
            case 'orders':
                return (
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Order <span>History</span></h2>
                        <div className={styles.ordersList}>
                            {orders.map(order => (
                                <div key={order.id} className={styles.orderCard}>
                                    <div className={styles.orderMain}>
                                        <h4>Order #{order.id}</h4>
                                        <p>Placed on {order.date} • {order.items} Items • ${order.total}</p>
                                    </div>
                                    <div className={`${styles.orderStatus} ${styles.delivered}`}>
                                        {order.status}
                                    </div>
                                    <button className={styles.detailsBtn} onClick={() => handleOrderDetails(order.id)}>Details <ChevronRight size={16} /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'tracking':
                return (
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Track <span>Active Order</span></h2>
                        <div className={styles.trackContent}>
                            <div className={styles.activeOrderInfo}>
                                <h3>Order #{activeOrder.id}</h3>
                                <p>Estimated Delivery: <strong>{activeOrder.estimatedDelivery}</strong></p>
                            </div>

                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{ width: `${(activeOrder.currentStep / 3) * 100}%` }}></div>
                                {[
                                    { name: "Placed", icon: <Clock size={16} /> },
                                    { name: "Processed", icon: <CreditCard size={16} /> },
                                    { name: "Shipped", icon: <Truck size={16} /> },
                                    { name: "Delivered", icon: <CheckCircle size={16} /> }
                                ].map((step, i) => (
                                    <div key={i} className={`${styles.step} ${i <= activeOrder.currentStep ? styles.completedStep : i === activeOrder.currentStep ? styles.activeStep : ''}`}>
                                        <div className={styles.stepIcon}>{step.icon}</div>
                                        <span>{step.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'addresses':
                return (
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Saved <span>Addresses</span></h2>
                        <div className={styles.addressGrid}>
                            {addresses.map(addr => (
                                <div key={addr.id} className={`${styles.addressCard} ${addr.isDefault ? styles.activeAddress : ''}`}>
                                    <h4>{addr.type} {addr.isDefault && <span className={styles.defaultBadge}>Default</span>}</h4>
                                    <p>{addr.street}<br />{addr.city}, {addr.state} {addr.zip}</p>
                                    <div className={styles.addressActions}>
                                        {!addr.isDefault && <button onClick={() => handleSetDefault(addr.id)}>Set Default</button>}
                                        <button onClick={() => handleRemoveAddress(addr.id)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                            <button className={styles.addAddressCard} onClick={handleAddAddress}>
                                <Plus size={24} />
                                <span>Add New Address</span>
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.dashboardPage}>
            <div className="container">
                <div className={styles.dashboardLayout}>
                    {/* Sidebar Navigation */}
                    <aside className={styles.sidebar}>
                        <div className={styles.userHead}>
                            <div className={styles.avatarWrapper}>
                                <Image src={userData.avatar} alt={userData.name} width={100} height={100} className={styles.avatar} />
                            </div>
                            <h3>{userData.name}</h3>
                            <p>Premium Member</p>
                        </div>

                        <nav className={styles.navMenu}>
                            <div
                                className={`${styles.navItem} ${activeTab === 'profile' ? styles.activeNav : ''}`}
                                onClick={() => setActiveTab('profile')}
                            >
                                <User size={18} /> Profile
                            </div>
                            <div
                                className={`${styles.navItem} ${activeTab === 'orders' ? styles.activeNav : ''}`}
                                onClick={() => setActiveTab('orders')}
                            >
                                <Package size={18} /> Order History
                            </div>
                            <div
                                className={`${styles.navItem} ${activeTab === 'tracking' ? styles.activeNav : ''}`}
                                onClick={() => setActiveTab('tracking')}
                            >
                                <Truck size={18} /> Track Order
                            </div>
                            <div
                                className={`${styles.navItem} ${activeTab === 'addresses' ? styles.activeNav : ''}`}
                                onClick={() => setActiveTab('addresses')}
                            >
                                <MapPin size={18} /> Saved Addresses
                            </div>
                            <Link href="/" className={`${styles.navItem} ${styles.logoutBtn}`}>
                                <LogOut size={18} /> Logout
                            </Link>
                        </nav>
                    </aside>

                    {/* Display Area */}
                    <div className={styles.contentArea}>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
