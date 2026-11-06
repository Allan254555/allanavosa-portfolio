import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './styles/global.css';

// The browser looks for #id before React has drawn the page, so scroll once it exists.
function ScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    // Jump straight there: a long smooth scroll after a page load feels slow.
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' }));
  }, []);
  return null;
}

// Renders one page inside the shared header and footer.
// `current` matches a navLinks `page` value so the header can mark it active.
export function mount(current, Page) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Header current={current} />
      <main><Page /></main>
      <Footer />
      <ScrollToHash />
    </React.StrictMode>
  );
}
