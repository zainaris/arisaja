import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Broadband from "./pages/Broadband";
import Dedicated from "./pages/Dedicated";
import MetroE from "./pages/MetroE";
import DWDM from "./pages/DWDM";
import DarkFiber from "./pages/DarkFiber";
import BackupOnDemand from "./pages/BackupOnDemand";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/broadband" element={<Broadband />} />
          <Route path="/dedicated" element={<Dedicated />} />
          <Route path="/metro-e" element={<MetroE />} />
          <Route path="/dwdm" element={<DWDM />} />
          <Route path="/dark-fiber" element={<DarkFiber />} />
          <Route path="/backup-on-demand" element={<BackupOnDemand />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
