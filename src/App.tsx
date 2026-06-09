import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

// Individual industry pages
import SecurityRiskManagement from "./pages/industries/SecurityRiskManagement";
import BankingFinancialServices from "./pages/industries/BankingFinancialServices";
import HealthcarePharmaceuticals from "./pages/industries/HealthcarePharmaceuticals";
import HospitalityTourism from "./pages/industries/HospitalityTourism";
import ManufacturingLogistics from "./pages/industries/ManufacturingLogistics";
import NGOsDevelopment from "./pages/industries/NGOsDevelopment";
import RetailFMCG from "./pages/industries/RetailFMCG";
import TechnologyTelecoms from "./pages/industries/TechnologyTelecoms";
import ConstructionRealEstate from "./pages/industries/ConstructionRealEstate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Core pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/careers" element={<Careers />} />

          {/* Industry sub-pages */}
          <Route path="/industries/security-risk-management" element={<SecurityRiskManagement />} />
          <Route path="/industries/banking-financial-services" element={<BankingFinancialServices />} />
          <Route path="/industries/healthcare-pharmaceuticals" element={<HealthcarePharmaceuticals />} />
          <Route path="/industries/hospitality-tourism" element={<HospitalityTourism />} />
          <Route path="/industries/manufacturing-logistics" element={<ManufacturingLogistics />} />
          <Route path="/industries/ngos-development" element={<NGOsDevelopment />} />
          <Route path="/industries/retail-fmcg" element={<RetailFMCG />} />
          <Route path="/industries/technology-telecoms" element={<TechnologyTelecoms />} />
          <Route path="/industries/construction-real-estate" element={<ConstructionRealEstate />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
