# 🚦 Smart Traffic Management System

A modern, responsive web application for intelligent traffic monitoring and control. Built with React, TypeScript, and Vite for optimal performance and developer experience.

## ✨ Features

- **Real-time Traffic Monitoring** - Live dashboard with traffic flow analytics
- **Interactive Traffic Map** - Visual representation of traffic intersections and signals  
- **Signal Control System** - Manual and automated traffic light management
- **Analytics Dashboard** - Comprehensive traffic data visualization with charts
- **Environmental Statistics** - Air quality and environmental impact monitoring
- **Incident Management** - Real-time incident reporting and tracking
- **Device Management** - Monitor and control traffic infrastructure devices
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1, TypeScript
- **Build Tool**: Vite 6.2.0
- **Charts**: Recharts 3.2.1
- **Styling**: Tailwind CSS (via utility classes)
- **Icons**: Custom SVG icon components

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/baalaganeshr/traffic-management-system.git
   cd traffic-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🏗️ Project Structure

```
├── 📁 components/          # Reusable UI components
│   ├── 📁 common/         # Shared utility components
│   │   ├── Card.tsx       # Reusable card component
│   │   └── Icons.tsx      # SVG icon components
│   ├── 📁 layout/         # Layout components
│   │   └── Sidebar.tsx    # Navigation sidebar
│   ├── Analytics.tsx      # Traffic analytics component
│   ├── Dashboard.tsx      # Main dashboard component
│   ├── EnvironmentalStats.tsx  # Environmental monitoring
│   ├── Header.tsx         # Application header
│   ├── IncidentFeed.tsx   # Real-time incident feed
│   ├── IntersectionDetails.tsx  # Traffic intersection info
│   ├── Login.tsx          # User authentication
│   ├── SignalControl.tsx  # Traffic signal controls
│   ├── TrafficLightModal.tsx  # Traffic light modal
│   └── TrafficMap.tsx     # Interactive traffic map
├── 📁 pages/              # Page-level components
│   ├── AnalyticsHub.tsx   # Analytics dashboard page
│   ├── DashboardOverview.tsx  # Main dashboard page
│   ├── DeviceManagement.tsx   # Device control page
│   ├── LiveMapPage.tsx    # Live traffic map page
│   └── Settings.tsx       # Application settings page
├── 📁 hooks/              # Custom React hooks
│   └── useTrafficData.ts  # Traffic data management hook
├── App.tsx                # Root application component
├── constants.ts           # Application constants & data
├── types.ts               # TypeScript type definitions
├── index.tsx              # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── .env.local             # Environment variables
```

## 🎯 Key Components

- **Dashboard** - Main overview with traffic metrics
- **Traffic Map** - Interactive map with real-time traffic data
- **Analytics Hub** - Detailed traffic analytics and reporting
- **Device Management** - Control and monitor traffic devices
- **Settings** - Application configuration

## 🌟 Screenshots

The application features a modern dark theme with intuitive navigation and comprehensive traffic management tools.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Baalaganesan R** - [GitHub](https://github.com/baalaganeshr)

---

<div align="center">
  <strong>Built with ❤️ for smarter cities</strong>
</div>
