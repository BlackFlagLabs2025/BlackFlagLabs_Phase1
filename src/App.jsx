/* App.jsx */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Privacy from "./routes/Privacy";
import Terms from "./routes/Terms";
import NexusSentinel from "./routes/work/NexusSentinel";
import AetherCommerce from "./routes/work/AetherCommerce";
import HelixProtocol from "./routes/work/HelixProtocol";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/work/nexus-sentinel" element={<NexusSentinel />} />
        <Route path="/work/aether-commerce" element={<AetherCommerce />} />
        <Route path="/work/helix-protocol" element={<HelixProtocol />} />
      </Routes>
    </BrowserRouter>
  );
}