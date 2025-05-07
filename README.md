# TugasProject_SIM
## Frist Planning of the project


### Struktur Project
KohiApp/
├── assets/                  # Gambar, ikon, dll
│   └── images/
├── components/              # Komponen reusable
│   ├── PromoBanner.tsx
│   ├── ProductCard.tsx
│   ├── HeaderGreeting.tsx
│   ├── ServiceOption.tsx
├── navigation/              # Navigasi bottom tab & stack
│   ├── BottomTabs.tsx
│   └── AppNavigator.tsx
├── screens/                 # Setiap layar
│   ├── HomeScreen.tsx
│   ├── VoucherScreen.tsx
│   ├── OrdersScreen.tsx
│   ├── AccountScreen.tsx
├── types/                   # Tipe TypeScript (jika pakai TS)
│   └── index.ts
├── constants/               # Warna, font, ukuran global
│   ├── colors.ts
│   ├── fonts.ts
├── App.tsx                  # Entry point
└── package.json

### Start This Project

`npm install -g expo-cli` <button onclick="navigator.clipboard.writeText('npm install -g expo-cli')">Copy</button>

`npx create-expo-app KohiApp -t expo-template-blank-typescript` <button onclick="navigator.clipboard.writeText('npm install -g expo-cli')">Copy</button>

`npm install @react-navigation/native` <button onclick="navigator.clipboard.writeText('npm install -g expo-cli')">Copy</button>