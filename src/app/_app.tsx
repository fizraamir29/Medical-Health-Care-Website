// // src/app/_app.tsx
// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer'; // Optional, if you want a footer on every page
// import './globals.css'; // Import your global styles if you have any

// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto bg-white">
//       <Navbar />
//       <Component {...pageProps} />
//       <Footer /> {/* Optional: If you want a footer on every page */}
//     </div>
//   );
// };

// export default MyApp;
// src/app/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app'; // Import AppProps type from next/app
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Optional, if you want a footer on every page
import './globals.css'; // Import your global styles if you have any


const MyApp = ({ Component, pageProps }: AppProps) => { // Specify types for props
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Navbar />
      <Component {...pageProps} />
      <Footer /> {/* Optional: If you want a footer on every page */}
    </div>
  );
};

export default MyApp;
