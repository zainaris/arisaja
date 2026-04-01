import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Broadband from "./pages/Broadband";
import Dedicated from "./pages/Dedicated";
import MetroE from "./pages/MetroE";
import DWDM from "./pages/DWDM";
import DarkFiber from "./pages/DarkFiber";
import BackupOnDemand from "./pages/BackupOnDemand";
import ServiceLocationPage from "./pages/ServiceLocationPage";
import CityPage from "./pages/CityPage";
import BlogIndex from "./pages/BlogIndex";
import BlogArticlePage from "./pages/BlogArticlePage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { getAllServiceLocationSlugs, cities } from "./data/seoData";

const queryClient = new QueryClient();

const serviceLocationRoutes = getAllServiceLocationSlugs();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/broadband" element={<Broadband />} />
            <Route path="/dedicated" element={<Dedicated />} />
            <Route path="/metro-e" element={<MetroE />} />
            <Route path="/dwdm" element={<DWDM />} />
            <Route path="/dark-fiber" element={<DarkFiber />} />
            <Route path="/backup-on-demand" element={<BackupOnDemand />} />
            
            {/* SEO: Service + Location pages */}
            {serviceLocationRoutes.map(r => (
              <Route key={r.path} path={r.path} element={<ServiceLocationPage />} />
            ))}
            
            {/* SEO: City pages */}
            {cities.map(c => (
              <Route key={c.slug} path={`/lokasi/${c.slug}`} element={<CityPage />} />
            ))}
            
            {/* Blog */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:articleSlug" element={<BlogArticlePage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);
export default App;
