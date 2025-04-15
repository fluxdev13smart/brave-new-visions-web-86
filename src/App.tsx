
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { FloatingShape } from "@/components/FloatingShape";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./styles/MatrixRain.css";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const fadeTimer = setTimeout(() => {
        setShowLoader(false);
      }, 500); // Match the duration-500 from the transition
      return () => clearTimeout(fadeTimer);
    }, 6000); // Changed from 4000 to 6000 for 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showLoader && <div className={`transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0'}`}><LoadingScreen /></div>}
        
        {/* Large floating background shapes with blur */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] animate-float-delay-1">
            <FloatingShape type="circle" color="bg-purple-300" size="w-96 h-96" opacity="opacity-10" className="blur-xl" />
          </div>
          <div className="absolute bottom-40 right-[15%] animate-float-delay-2">
            <FloatingShape type="square" color="bg-theme-education" size="w-80 h-80" opacity="opacity-10" className="blur-xl" />
          </div>
          <div className="absolute top-[40%] left-[20%] animate-float">
            <FloatingShape type="triangle" color="#9b87f5" size="200" opacity="opacity-10" className="blur-xl" />
          </div>
          <div className="absolute bottom-[20%] left-[60%] animate-float-delay-3">
            <FloatingShape type="hexagon" color="bg-theme-justice" size="150" opacity="opacity-10" className="blur-xl" />
          </div>
          <div className="absolute top-[15%] right-[25%] animate-float-delay-2">
            <FloatingShape type="cross" color="bg-theme-imagination" size="w-64 h-64" opacity="opacity-10" className="blur-xl" />
          </div>
        </div>
        
        {/* Matrix rain background */}
        <div className="matrix-rain"></div>
        
        {/* Background orbs */}
        <div className="background-orb orb-1"></div>
        <div className="background-orb orb-2"></div>
        <div className="background-orb orb-3"></div>
        <div className="background-orb orb-4"></div>
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
