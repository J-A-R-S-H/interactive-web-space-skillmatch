"use client";

import React from 'react';

const Navbar = () => {
  // Helper for flex layout
  const flexCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // The "Nuclear Option" for text - forcing it to 11px
  const textStyle = {
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
    letterSpacing: '0.02em',
    lineHeight: '1',
  };

  return (
    <header style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '24px',
      zIndex: 9999,
      pointerEvents: 'none',
    }}>
      <div style={{ ...flexCenter, gap: '8px', pointerEvents: 'auto' }}>
        
        {/* Dark Navigation Bar */}
        <nav style={{
          backgroundColor: '#1A1A1A',
          height: '42px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '8px',
          paddingRight: '48px',
          borderRadius: '12px 0 0 12px',
          position: 'relative',
          clipPath: "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)",
        }}>
          {/* Logo Box */}
          <div style={{
            backgroundColor: '#FF5F2E',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            marginRight: '12px',
            ...flexCenter,
          }}>
            <span style={{ 
              color: 'black', 
              fontWeight: '900', 
              fontSize: '16px', 
              fontStyle: 'italic'
            }}>Badr</span>
          </div>

          {/* Links */}
          <ul style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0 
          }}>
            <li style={{ 
              ...textStyle, 
              backgroundColor: '#333', 
              color: 'white', 
              padding: '6px 12px', 
              borderRadius: '6px' 
            }}>did</li>
            
            <li style={{ ...textStyle, color: '#999', cursor: 'pointer' }}>Navigators</li>
            <li style={{ ...textStyle, color: '#999', cursor: 'pointer' }}>Rewards</li>
            <li style={{ ...textStyle, color: '#999', cursor: 'pointer' }}>FAQ</li>
            
            <div style={{ width: '1px', height: '16px', backgroundColor: '#333', margin: '0 4px' }} />

            <li style={{ ...textStyle, color: '#999', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              not 
            </li>
          </ul>
        </nav>

        {/* Launch Button */}
        <button style={{
          height: '42px',
          backgroundColor: '#C4FF61',
          border: '2px solid black',
          borderRadius: '24px',
          padding: '0 24px',
          ...textStyle,
          fontWeight: '900',
          cursor: 'pointer',
          boxShadow: '0 4px 0 0 black',
          whiteSpace: 'nowrap'
        }}>
          do his part
        </button>

      </div>
    </header>
  );
};

export default Navbar;