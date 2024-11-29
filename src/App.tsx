import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { ModPage } from './pages/ModPage';
import { TransitDatabase } from './pages/TransitDatabase';
import { BiznesCard } from './pages/BiznesCard';
import { PhotosPage } from './pages/PhotosPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/minecraft-mods/:modId" element={<ModPage />} />
          <Route path="/transit-database" element={<TransitDatabase />} />
          <Route path="/biznes-card" element={<BiznesCard />} />
          <Route path="/photos/:galleryId" element={<PhotosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
