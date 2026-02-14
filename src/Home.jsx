import React from 'react';
import { Link } from 'react-router-dom';
import MatrixRain from './MatrixRain';
import backImg from './assets/futuristic-moon-background.jpg';
import backCity from './assets/backCity.png';
import gameImg from './assets/thumbnails/winter-tire.png';
import cesiumImg from './assets/thumbnails/map-thumbnail.jpg';
import stripImg from './assets/lenovo.jpg';
import mountImg from './assets/Mount.png';
import mount4K from './assets/Mount4K.png';
import world4K from './assets/world4K.png';
import chip4K from './assets/Chip4K.png';

const Home = () => {
  // Wspólny styl dla dużych napisów
  const fontStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    color: 'white',
    textTransform: 'uppercase',
    margin: 0,
    fontStyle: 'italic',
    lineHeight: '0.9'
  };

  return (
    <div style={{
      width: '100vw', height: '100vh', backgroundColor: '#000',
      display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative'
    }}>

      {/* --- 1. GÓRNA BELKA (HEADER) --- */}
      <header style={{
        height: '60px', backgroundColor: '#000', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', padding: '0 20px',
        borderBottom: '1px solid #333', zIndex: 20
      }}>
        {/* Lewa strona: Szary kwadrat + Link */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#444' }}></div>
          <a href="https://linkedin.com" style={{ ...fontStyle, fontSize: '1.2rem', color: '#888', textDecoration: 'none' }}>
            LINKEDIN PROFILE
          </a>
        </div>
        {/* Prawa strona: Nazwa pliku */}
        <div style={{ ...fontStyle, fontSize: '1.2rem', color: '#555' }}>
          HOME.JSX
        </div>
      </header>
      {/* --- 2. ŚRODKOWA CZĘŚĆ (MAIN CONTENT) --- */}
      <main style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${backImg})`, // Wybierz jeden główny obraz na tło całego środka
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#050505' // Kolor rezerwowy
      }}>

        {/* Warstwa przyciemniająca tło, żeby napisy i belki bardziej "siadły" */}
        <div style={{
          position: 'absolute', width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1
        }} />

        {/* --- LEWA STRONA (Interaktywna strefa) --- */}
        <Link to="/game" style={{ position: 'absolute', left: 0, width: '50%', height: '100%', zIndex: 10 }}>

          {/* LEWA BELKA - KONSTRUKCJA 2D CLIP */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-50px',
            width: '200px',
            height: '180%',
            transform: 'rotate(-35deg)', // Fizyczny obrót belki
            transformOrigin: 'top left',
            zIndex: 5,
            overflow: 'hidden', // Klucz: belka staje się maską dla tła
            borderRight: '2px solid rgba(255,255,255,0.3)',
            boxShadow: '0 0 40px rgba(0,0,0,0.8)'
          }}>
            {/* TŁO BELKI - ODKRĘCONE */}
            <div style={{
              position: 'absolute',
              width: '1548px',
              height: '4048px',
              top: '-20%', // Korekta pozycji, aby wypełnić skos
              left: '-1000px',
              backgroundImage: `url(${mount4K})`,
              backgroundSize: '2048px 2048px',
              // ODKRĘCENIE: Jeśli belka ma -35deg, tło musi mieć 35deg
              transform: 'rotate(35deg)',

              /* --- TUTAJ KADRUJESZ (LEWA) --- */
              transform: `
      rotate(35deg) 
      scale(0.75) 
      translate(-150px, -200px)
    `,
              /* ----------------------------- */

              transformOrigin: 'center center',
              pointerEvents: 'none'
            }} />
          </div>

          <div style={{ padding: '10% 20%', height: '100%', display: 'flex', alignItems: 'center' }}>
            <h1 style={{ ...fontStyle, fontSize: '5rem', position: 'relative', zIndex: 11 }}>
              GAME<br />GRA
            </h1>
          </div>
        </Link>

        {/* --- PRAWA STRONA (Interaktywna strefa) --- */}
        <Link to="/map" style={{
          position: 'absolute', right: 0, width: '50%', height: '100%',
          zIndex: 10, textDecoration: 'none'
        }}>
          {/* PRAWA BELKA (Wycinek tekstury 2048x2048) */}
          {/* --- PRAWA BELKA (Z kontrolą kadrowania) --- */}
          <div style={{
            position: 'absolute', top: 0, right: '-50px', width: '200px', height: '180%',
            transform: 'rotate(35deg)', transformOrigin: 'top right',
            zIndex: 5, overflow: 'hidden', borderLeft: '2px solid rgba(255,255,255,0.3)'
          }}>
            <div style={{
              position: 'absolute',
              width: '2048px', height: '4048px',
              backgroundImage: `url(${world4K})`,
              backgroundSize: '2048px 2048px',

              /* --- TUTAJ KADRUJESZ (PRAWA) --- */
              transform: `
      rotate(-35deg) 
      scale(0.74) 
      translate(60px, -1000px)
    `,
              /* ------------------------------ */

              transformOrigin: 'center center',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Tekst Prawy */}
          <div style={{ padding: '10% 20%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', textAlign: 'right' }}>
            <h1 style={{ ...fontStyle, fontSize: '5rem', position: 'relative', zIndex: 11 }}>
              CESIUM<br />MAPA
            </h1>
          </div>
        </Link>

      </main>

      {/* --- 3. DOLNA BELKA (FOOTER) --- */}
      <footer style={{
        height: '100px', position: 'relative', backgroundColor: '#000',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderTop: '1px solid #333', zIndex: 20, overflow: 'hidden'
      }}>
        {/* Tło Matrixa */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.4 }}>
          <MatrixRain />
        </div>

        {/* Linki Kontaktowe */}
        <div style={{ position: 'relative', display: 'flex', gap: '50px' }}>
          <a href="#projects" style={{ ...fontStyle, fontSize: '2.5rem', textDecoration: 'none', letterSpacing: '5px' }}>
            PROJECTS
          </a>
          <span style={{ ...fontStyle, fontSize: '2.5rem', opacity: 0.3 }}>/</span>
          <a href="#contact" style={{ ...fontStyle, fontSize: '2.5rem', textDecoration: 'none', letterSpacing: '5px' }}>
            KONTAKT
          </a>
        </div>
      </footer>

    </div>
  );
};

export default Home;