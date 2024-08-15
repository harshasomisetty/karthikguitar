'use client';
import { useState } from 'react';

const GuitarLinktree = () => {
  const [activeString, setActiveString] = useState(null);

  const links = [
    { url: 'https://example.com/1', label: 'Link 1' },
    { url: 'https://example.com/2', label: 'Link 2' },
    { url: 'https://example.com/3', label: 'Link 3' },
    { url: 'https://example.com/4', label: 'Link 4' },
    { url: 'https://example.com/5', label: 'Link 5' },
    { url: 'https://example.com/6', label: 'Link 6' },
  ];

  const handleClick = (index: any) => {
    setActiveString(index);
    setTimeout(() => setActiveString(null), 1000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-orange-200 to-orange-400 flex items-center justify-center p-4">
      <div className="w-full max-w-md relative">
        <style jsx>{`
          @keyframes stringVibration {
            0% {
              transform: translateY(0);
            }
            10% {
              transform: translateY(-2px);
            }
            20% {
              transform: translateY(2px);
            }
            30% {
              transform: translateY(-1px);
            }
            40% {
              transform: translateY(1px);
            }
            50% {
              transform: translateY(-0.5px);
            }
            60% {
              transform: translateY(0.5px);
            }
            70% {
              transform: translateY(-0.25px);
            }
            80% {
              transform: translateY(0.25px);
            }
            90% {
              transform: translateY(-0.125px);
            }
            100% {
              transform: translateY(0);
            }
          }
          .string-vibration {
            animation: stringVibration 1s ease-out;
          }
          .guitar-body {
            background-color: #8b4513;
            border-radius: 50% / 10%;
            position: relative;
            overflow: hidden;
          }
          .guitar-body::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            background-color: #000;
            border-radius: 50%;
          }
          .guitar-neck {
            background-color: #8b4513;
            position: relative;
          }
          .guitar-neck::before {
            content: '';
            position: absolute;
            top: 0;
            left: 10%;
            right: 10%;
            bottom: 0;
            background-color: #d2691e;
          }
          .fret {
            position: absolute;
            left: 0;
            right: 0;
            height: 2px;
            background-color: #c0c0c0;
          }
        `}</style>
        <div className="guitar-body p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            My Guitar Linktree
          </h1>
          <div className="space-y-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  block w-full py-3 px-4 bg-yellow-100 text-brown-800 font-semibold rounded
                  hover:bg-yellow-200 transition-colors duration-200
                  border-t-2 border-b-2 border-yellow-300 relative
                  ${activeString === index ? 'string-vibration' : ''}
                `}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(index);
                  setTimeout(() => window.open(link.url, '_blank'), 1000);
                }}
              >
                {link.label}
                <div className="absolute left-0 right-0 h-0.5 bg-gray-400 top-1/2 transform -translate-y-1/2"></div>
              </a>
            ))}
          </div>
        </div>
        <div className="guitar-neck h-40 mt-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="fret"
              style={{ top: `${(index + 1) * 20}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuitarLinktree;
