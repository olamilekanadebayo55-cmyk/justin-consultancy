import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import WebDevelopment from './pages/WebDevelopment.jsx';
import VideoEditing from './pages/VideoEditing.jsx';
import AIAutomation from './pages/AIAutomation.jsx';
import ResearchWriting from './pages/ResearchWriting.jsx';
import DataAnalysis from './pages/DataAnalysis.jsx';
import VibeCoding from './pages/VibeCoding.jsx';
import WebsiteSecurity from './pages/WebsiteSecurity.jsx';
import SEODigitalMarketing from './pages/SEODigitalMarketing.jsx';
import Work from './pages/Work.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Insights from './pages/Insights.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/web-development" element={<WebDevelopment />} />
        <Route path="services/video-editing" element={<VideoEditing />} />
        <Route path="services/ai-automation" element={<AIAutomation />} />
        <Route path="services/research-writing" element={<ResearchWriting />} />
        <Route path="services/data-analysis" element={<DataAnalysis />} />
        <Route path="services/vibe-coding" element={<VibeCoding />} />
        <Route path="services/website-security" element={<WebsiteSecurity />} />
        <Route path="services/seo-digital-marketing" element={<SEODigitalMarketing />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="insights" element={<Insights />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
