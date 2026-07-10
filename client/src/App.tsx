import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ImageSecurity from "./components/ImageSecurity";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PortfolioGalleryPage from "./pages/PortfolioGalleryPage";
import Photography from "./pages/Photography";
import PhotographyAlbumsPage from "./pages/PhotographyAlbumsPage";
import PhotographyGalleryPage from "./pages/PhotographyGalleryPage";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/portfolio"} component={Portfolio} />
      <Route path={"/portfolio/:categoryId"} component={PortfolioGalleryPage} />
      <Route path={"/photography"} component={Photography} />
      <Route path={"/photography/:categoryId"} component={PhotographyAlbumsPage} />
      <Route path={"/photography/:categoryId/:albumId"} component={PhotographyGalleryPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <ImageSecurity />
          <Toaster />
          <div className="min-h-screen bg-background text-foreground">
            <Router />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
