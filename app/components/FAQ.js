"use client";

import React, { useState } from 'react';

const FullPageChat = () => {
  const [step, setStep] = useState(1); 

  const script = [
    { text: "Is SkillMatch free?", sender: "bot" },
    { text: "Yeah! Majority of our features are free. We will only charge the user for joining paid workshops?", sender: "user" },
    { text: "You're at the center of a new gaming ecosystem.", sender: "bot" },
    { text: "Sounds cool, how do I join the Navigators?", sender: "user" },
    { text: "Connect your wallet and hit the 'Launch' button!", sender: "bot" },
    { text: "Perfect. Let's get started.", sender: "user" },
    { text: "Yo! Ready to explore the project?", sender: "bot" },
    { text: "Yeah! What exactly am I looking at?", sender: "user" },
    { text: "You're at the center of a new gaming ecosystem.", sender: "bot" },
    { text: "Sounds cool, how do I join the Navigators?", sender: "user" },
    { text: "Connect your wallet and hit the 'Launch' button!", sender: "bot" },
    { text: "Perfect. Let's get started.", sender: "user" }
  ];

  const handleChoiceClick = () => {
    setStep(prev => prev + 1); 
    
    if (step < script.length - 1) {
      setTimeout(() => {
        setStep(prev => prev + 1);
      }, 600);
    }
  };

  const bubbleBase = {
    padding: '40px 60px',
    fontSize: '32px',
    fontWeight: '900',
    border: '5px solid #51174E', 
    boxShadow: '12px 12px 0px 0px #51174E',
    maxWidth: '85%',
    marginBottom: '50px',
    fontFamily: 'sans-serif',
    position: 'relative',
    lineHeight: '1.1',
    textTransform: 'uppercase',
    transition: 'all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };

  return (
    <div style={{ width: '100vw', padding: '120px 0', overflowX: 'hidden' }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        
        {script.map((msg, index) => {
          const isVisible = index < step;
          const isCurrentChoice = index === step && msg.sender === 'user';
          const isBot = msg.sender === 'bot';

          if (!isVisible && !isCurrentChoice) return null;

          return (
            <div 
              key={index}
              onClick={isCurrentChoice ? handleChoiceClick : null}
              style={{
                ...bubbleBase,
                alignSelf: isBot ? 'flex-start' : 'flex-end',
                backgroundColor: isBot ? '#E8E6FA' : (isCurrentChoice ? '#FFF9C4' : '#FFFFFF'),
                borderRadius: isBot ? '0px 50px 50px 0px' : '50px 0px 0px 50px',
                marginLeft: isBot ? '-5px' : '0',
                marginRight: !isBot ? '-5px' : '0',
                cursor: isCurrentChoice ? 'pointer' : 'default',
                transform: isCurrentChoice ? 'scale(1.05)' : 'scale(1)',
                zIndex: isCurrentChoice ? 10 : 1,
                // Text remains black for readability on light yellow and white
                color: '#08000E',
              }}
              onMouseEnter={(e) => {
                if (isCurrentChoice) {
                  e.currentTarget.style.transform = 'scale(1.1) translateX(-10px)';
                  // Hover effect turns to your deep purple for contrast
                  e.currentTarget.style.backgroundColor = '#51174E'; 
                  e.currentTarget.style.color = '#08000E';
                }
              }}
              onMouseLeave={(e) => {
                if (isCurrentChoice) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.backgroundColor = '#FFF9C4';
                  e.currentTarget.style.color = '#08000E';
                }
              }}
            >
              {isCurrentChoice ? "???" : msg.text}
              
              {isCurrentChoice && (
                <div style={{ 
                  fontSize: '14px', 
                  position: 'absolute', 
                  top: '-35px', 
                  right: '40px', 
                  color: '#E8E6FA',
                  fontWeight: '900',
                  backgroundColor: '#51174E',
                  padding: '4px 10px',
                  border: '2px solid #51174E',
                  boxShadow: '3px 3px 0px 0px #08000E'
                }}>
                  Click to find the Answer here
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        body { margin: 0; background-color: #F9F6EE; }
      `}</style>
    </div>
  );
};

export default FullPageChat;