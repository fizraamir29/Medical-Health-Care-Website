// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Services from './components/Services'; 
// import About from './components/About'; 
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';
// import LoginPage from './components/LoginPage';  // Updated to capitalized name

// const Page = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto bg-white">
//       <Navbar />
//       <Hero /> 
//       <Services />
//       <About />
//       <ContactUs />
//       <LoginPage /> {/* Corrected component name */}
//       <Footer/>
//     </div>
//   );
// };

// export default Page;
// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import CTAButton from './components/CTAButton'; // If you have a CTA Button component
// import Hero from './hero/page';         // Import Hero from its folder
// import Services from './services/page';  // Import Services from its folder
// import About from './about/page';        // Import About from its folder
// import ContactUs from './contact/page';  // Import Contact Us from its folder

// const MainPage = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto bg-white">
//       <Navbar />
//       <Hero /> 
//       <Services />
//       <About />
//       <ContactUs />
//       <Footer />
//     </div>
//   );
// };

// export default MainPage;

// src/app/page.tsx
// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Hero from './hero/page';         // Import Hero from its folder
// import Services from './services/page';  // Import Services from its folder
// import About from './about/page';        // Import About from its folder
// import ContactUs from './contact/page';  // Import Contact Us from its folder

// const MainPage = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto bg-white">
//       <Navbar />  {/* Navbar will be shown on every page */}
//       <Hero /> 
//       <Services />
//       <About />
//       <ContactUs />
//       <Footer />  {/* Footer will also be shown on every page */}
//     </div>
//   );
// };

// export default MainPage;

// src/app/page.tsx
import React from 'react';
// import Footer from './components/Footer'; // Import Footer if needed
import Hero from './hero/page';         // Import Hero from its folder
import Services from './services/page';  // Import Services from its folder
import About from './about/page';        // Import About from its folder
import ContactUs from './contact/page';  // Import Contact Us from its folder

const MainPage = () => {
  return (
    <div>
      <Hero /> 
      <Services />
      <About />
      <ContactUs />
      {/* <Footer /> Optional: Add Footer if you want it on the main page */}
    </div>
  );
};

export default MainPage;
