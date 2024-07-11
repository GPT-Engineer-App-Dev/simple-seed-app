import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Activity } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ActivityFeed from "./pages/ActivityFeed.jsx";
import CreateActivity from "./pages/CreateActivity.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Activity Feed",
    to: "/",
    icon: <Activity className="h-4 w-4" />,
  },
  {
    title: "Create Activity",
    to: "/create-activity",
    icon: <Activity className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ActivityFeed />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="create-activity" element={<CreateActivity />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;