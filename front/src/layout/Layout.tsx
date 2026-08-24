import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        {/* Header */}
      </header>

      <main>
        {children}
      </main>

      <footer>
        {/* ooter */}
      </footer>
    </>
  );
};

export default Layout;