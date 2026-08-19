import React from 'react';
import { useScrollTheme } from './hooks/useScrollTheme';
import BackgroundGridCanvas from './components/BackgroundGridCanvas';
import CustomCursor from './components/CustomCursor';
import PerimeterNavigation from './components/PerimeterNavigation';
import ScrollProgressBar from './components/ScrollProgressBar';
import NexusHero from './components/NexusHero';
import LogicStream from './components/LogicStream';
import ImpactLedger from './components/ImpactLedger';
import FrictionlessGateway from './components/FrictionlessGateway';
import OccamFooter from './components/OccamFooter';

export default function App() {
  // Palette inverts from light "origin" to dark "uncharted territory" as the
  // visitor scrolls past the hero.
  useScrollTheme(0.55);

  return (
    <div className="relative min-h-screen">
      {/* Background Interactive Canvas Grid */}
      <BackgroundGridCanvas />

      {/* Vertical Scroll Progress Marker */}
      <ScrollProgressBar />

      {/* Outer Perimeter Line & Corner Nav Anchors */}
      <PerimeterNavigation />

      {/* Custom Desktop Crosshair Cursor */}
      <CustomCursor />

      {/* Main Page Sections */}
      <main className="relative z-20">
        <NexusHero />
        <LogicStream />
        <ImpactLedger />
        <FrictionlessGateway />
      </main>

      {/* Occam Footer */}
      <OccamFooter />
    </div>
  );
}
