# 🎭 VastraVilla

**India's First Peer-to-Peer Clothing Rental Marketplace**

VastraVilla is a modern P2P platform where users can **rent clothes from each other**. List your wardrobe to earn money, or rent premium outfits for weddings, parties & events at affordable prices!

---

## 🌟 How It Works

### 🔄 Peer-to-Peer Model

Unlike traditional rental stores, VastraVilla connects **real people**:

- **Sellers** list their clothes and set rental prices
- **Renters** browse, book, and pay for clothes they like
- Both parties are protected by our **security deposit** and **late fee** system

### 💰 Pricing Structure

When renting clothes, users pay:
| Fee Type | Description |
|----------|-------------|
| **Rental Fee** | Daily/weekly rental price set by seller (e.g., ₹500/day) |
| **Security Deposit** | Refundable amount (50-100% of item value) to protect seller |
| **Platform Fee** | Small commission for VastraVilla (optional) |

### 🔐 Protection System

| Protection           | For Sellers                              | For Renters                                    |
| -------------------- | ---------------------------------------- | ---------------------------------------------- |
| **Security Deposit** | Covers damage, loss, or theft of clothes | Fully refundable if returned in good condition |
| **Late Return Fee**  | ₹200-500/day extra income if late        | Ensures timely return to avoid charges         |
| **Verified Users**   | Only verified renters can book           | Sellers are verified with ID proof             |

---

## 🎯 Key Features

### For Renters 👗

- 🔍 **Browse Listings** - Find clothes by occasion, size, style
- 📍 **Local Pickups** - Rent from people near you
- 💳 **Secure Payment** - Pay rental + refundable deposit
- ⭐ **Reviews & Ratings** - Check seller ratings before booking

### For Sellers (Cloth Owners) 💰

- 📸 **List Your Clothes** - Upload photos, set your own prices
- 🛡️ **Security Deposit** - Protected against damage/theft
- ⏰ **Late Fees** - Earn extra if renter returns late
- 📊 **Seller Dashboard** - Track listings, rentals & earnings

### Platform Features 🚀

- 🔐 **Firebase Authentication** - Secure login/signup
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Built with Tailwind CSS
- ☁️ **Cloud Storage** - Firebase Storage for images

---

## 🛠️ Tech Stack

| Technology             | Purpose                |
| ---------------------- | ---------------------- |
| **React 19**           | Frontend framework     |
| **React Router**       | Navigation & routing   |
| **Tailwind CSS**       | Styling & UI           |
| **Firebase Auth**      | User authentication    |
| **Firebase Storage**   | Image uploads          |
| **Firebase Firestore** | Database (coming soon) |

---

## 📁 Project Structure

```
VastraVilla/
├── public/
│   ├── slide1.jpg, slide2.jpg, slide3.jpg  # Banner images
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation bar
│   │   ├── Home.js            # Landing page with slider
│   │   ├── ClothingList.js    # Display rental listings
│   │   ├── ClothingCard.js    # Individual listing card
│   │   ├── Login.js           # User authentication
│   │   ├── SellerAuth.js      # Seller login/signup
│   │   ├── SellerDashboard.js # Seller management panel
│   │   ├── Cart.js            # Shopping cart
│   │   ├── AboutUs.js         # About page
│   │   └── ContactUs.js       # Contact page
│   ├── data/
│   │   └── clothingData.js    # Sample clothing data
│   ├── utils/
│   │   ├── firebase.js        # Firebase configuration
│   │   ├── storageUtils.js    # Image upload utilities
│   │   └── validate.js        # Form validation
│   ├── App.js                 # Main app with routes
│   ├── index.js               # Entry point
│   └── index.css              # Global styles
├── .env                       # Firebase credentials
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Firebase project (for auth & storage)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ayushnautiyal-16/VastraVilla.git
   cd VastraVilla
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup Firebase**

   - Create a Firebase project at https://console.firebase.google.com
   - Enable Authentication (Email/Password)
   - Enable Storage
   - Copy credentials to `.env`:

   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. **Start development server**

   ```bash
   npm start
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

---

## 💡 Business Model

### Revenue Streams

1. **Platform Commission** - Small % from each rental transaction
2. **Featured Listings** - Sellers pay to boost visibility
3. **Premium Membership** - Benefits for frequent renters/sellers

### Safety Measures

- ✅ Phone & email verification
- ✅ ID verification for sellers
- ✅ Security deposit system
- ✅ Late fee policy
- ✅ Rating & review system
- ✅ Dispute resolution

---

## 🎯 Roadmap

- [x] User authentication (Firebase)
- [x] Seller dashboard
- [x] Image upload to Firebase Storage
- [ ] Firestore database integration
- [ ] Payment gateway (Razorpay/Stripe)
- [ ] Real-time chat between users
- [ ] Advanced search & filters
- [ ] Push notifications
- [ ] Mobile app (React Native)

---

## 👨‍💻 Developer

**Ayush Nautiyal**

- GitHub: [@ayushnautiyal-16](https://github.com/ayushnautiyal-16)

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Star this repo if you find it helpful!

**Project Link**: [https://github.com/ayushnautiyal-16/VastraVilla](https://github.com/ayushnautiyal-16/VastraVilla)
