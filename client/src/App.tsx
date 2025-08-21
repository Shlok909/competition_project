import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language-context";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import FounderIntro from "@/pages/founder-intro";
import SplashScreen from "@/pages/splash-screen";
import MainApp from "@/pages/main-app";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location}>
        <Route path="/" component={() => (
          <PageTransition>
            <FounderIntro />
          </PageTransition>
        )} />
        <Route path="/splash" component={() => (
          <PageTransition>
            <SplashScreen />
          </PageTransition>
        )} />
        <Route path="/app" component={() => (
          <PageTransition>
            <MainApp />
          </PageTransition>
        )} />
        <Route component={() => (
          <PageTransition>
            <NotFound />
          </PageTransition>
        )} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
