"use client";

import React, { useState } from 'react';

const FAQ = () => {
  const [step, setStep] = useState(0);

  const script = [
    { text: "Yo! Ready to explore the project?", sender: "bot" },
    { text: "Yeah! What exactly am I looking at?", sender: "user" },
    { text: "You're at the center of a new gaming ecosystem.", sender: "bot" },
    { text: "Sounds cool, how do I join the Navigators?", sender: "user" },
    { text: "Connect your wallet and hit the 'Launch' button!", sender: "bot" },
    { text: "Perfect. Let's get started.", sender: "user" }
  ];

  const handleNext = () => {
    if (step < script.length) {
      setStep(step + 1);
    }
  };

  const bubbleBase = {
    padding: '30px 40px', // Massive padding
    fontSize: '24px',     // Huge text
    fontWeight: '900',
    border: '4px solid black',
    boxShadow: '10px 10px 0px 0px black',
    maxWidth: '70%',      // Allows them to be very wide
    marginBottom: '40px',
    animation: 'slideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    fontFamily: 'sans-serif',
    position: 'relative',
    lineHeight: '1.2',
    textTransform: 'uppercase',
  };

  return (
    <div style={{ 
      width: '100vw', 
      minHeight: '100vh',
      display: 'flex', 
      flexDirection: 'column',
      padding: '100px 0', // Space for top/bottom
      backgroundColor: 'transparent',
      overflowX: 'hidden'
    }}>
      
      {/* Messages Wrapper - Stretching to screen edges */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {script.slice(0, step).map((msg, index) => {
          const isBot = msg.sender === 'bot';
          return (
            <div 
              key={index} 
              style={{
                ...bubbleBase,
                alignSelf: isBot ? 'flex-start' : 'flex-end',
                backgroundColor: isBot ? '#FFFFFF' : '#C4FF61',
                // Remove rounded corners on the edge side to make it "hit" the screen
                borderRadius: isBot ? '0px 40px 40px 0px' : '40px 0px 0px 40px',
                // Ensure the border touches the literal edge
                marginLeft: isBot ? '-4px' : '0',
                marginRight: !isBot ? '-4px' : '0',
              }}
            >
              {msg.text}
            </div>
          );
        })}
      </div>

      {/* Controller Button - Fixed at bottom center */}
      <div style={{ 
        position: 'fixed', 
        bottom: '50px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 1000 
      }}>
        <button 
          onClick={handleNext}
          disabled={step >= script.length}
          style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            backgroundColor: '#FF5F2E',
            border: '5px solid black',
            fontSize: '48px',
            fontWeight: '900',
            cursor: step >= script.length ? 'default' : 'pointer',
            boxShadow: '6px 6px 0px 0px black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: step >= script.length ? '0.2' : '1',
            transition: 'all 0.1s',
            outline: 'none',
            color: 'black'
          }}
          onMouseDown={(e) => step < script.length && (e.currentTarget.style.transform = 'translate(4px, 4px)')}
          onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0px, 0px)'}
        >
          {step >= script.length ? "✓" : "+"}
        </button>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(${step % 2 === 0 ? '50px' : '-50px'}) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        body { margin: 0; overflow-x: hidden; }
      `}</style>
    </div>
  );
};

export default FAQ;