import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import GlobalLoader from './components/common/GlobalLoader';
import { useLocation } from 'react-router-dom';
const Home=React.lazy(()=>import('./pages/Home')); const Placement=React.lazy(()=>import('./pages/Placement')); const Recruiters=React.lazy(()=>import('./pages/Recruiters')); const Contact=React.lazy(()=>import('./pages/Contact'));
function ScrollToTop(){const location=useLocation();React.useEffect(()=>{window.scrollTo({top:0,behavior:'smooth'});},[location.pathname]);return null}
function LoadingFallback(){return <div className="min-h-[50vh] flex items-center justify-center text-primary dark:text-white">Loading�</div>}
export default function App(){return <Router><ScrollToTop/><GlobalLoader/><div className="w-full min-h-screen flex flex-col font-sans text-gray-900 dark:text-gray-100 bg-bg dark:bg-bg-dark bg-grid-pattern transition-colors duration-200"><Navbar/><main className="flex-grow w-full overflow-x-clip flex flex-col"><Suspense fallback={<LoadingFallback/>}><Routes><Route path="/" element={<Home/>}/><Route path="/placement" element={<Placement/>}/><Route path="/recruiters" element={<Recruiters/>}/><Route path="/contact" element={<Contact/>}/></Routes></Suspense></main><Footer/></div></Router>}
