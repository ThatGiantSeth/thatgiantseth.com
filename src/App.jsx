import { useState, useEffect, useRef } from 'react'

import Header from './Header.jsx'
import Bio from './Bio.jsx'
import MobileLayout from './MobileLayout.jsx'
import DesktopLayout from './DesktopLayout.jsx'
import Background from './Background.jsx'

import "./style.css"

function getViewportState() {
  return {
    isMobile: Math.min(window.innerWidth, window.innerHeight) <= 768,
    mobilePortrait: window.innerHeight >= window.innerWidth,
  };
}

function App() {

  const [viewportState, setViewportState] = useState(getViewportState);

  useEffect(() => {
    const updateViewport = () => {
      setViewportState(getViewportState());
    };

    window.addEventListener('resize', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

  const [openWindows, setOpenWindows] = useState({
    music: false,
    projects: false,
    games: false,
    extras: false,
  });

  const toggleWindow = (windowId) => {
    setOpenWindows((current) => ({
      ...current,
      [windowId]: !current[windowId],
    }));
  }

  const [windowPositions, setWindowPositions] = useState({});

  const [dragging, setDragging] = useState(null);

  const startDragging = (windowId, event) => {
    const windowElement = event.currentTarget.parentElement;
    const rectangle = windowElement.getBoundingClientRect();

    setWindowPositions((current) => ({
      ...current,
      [windowId]: {
        left: rectangle.left,
        top: rectangle.top,
      },
    }));

    setDragging({
      id: windowId,
      offsetX: event.clientX - rectangle.left,
      offsetY: event.clientY - rectangle.top,
    });
  };

  useEffect(() => {
    if (!dragging) return;

    const handlePointerMove = (event) => {
      setWindowPositions((current) => ({
        ...current,
        [dragging.id]: {
          left: event.clientX - dragging.offsetX,
          top: event.clientY - dragging.offsetY,
        },
      }));
    };

    const handlePointerUp = () => {
      setDragging(null);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [dragging]);

  const { isMobile, mobilePortrait } = viewportState;

    const discordRef = useRef(null);
    const githubRef = useRef(null);
    const pcPartsRef = useRef(null);
    const youtubeRef = useRef(null);

  return (
    <>
      <Background
        isMobile={isMobile}
        discordRef={discordRef}
        githubRef={githubRef}
        pcPartsRef={pcPartsRef}
        youtubeRef={youtubeRef}
      />
      {!isMobile && <DesktopLayout openWindows={openWindows} onToggleWindow={toggleWindow} windowPositions={windowPositions} onStartDragging={startDragging} />}
      <div className="wrapper">
          <div className="box">

            <Header 
              isMobile={isMobile}
              discordRef={discordRef}
              githubRef={githubRef}
              pcPartsRef={pcPartsRef}
              youtubeRef={youtubeRef}
            />

            <Bio 
              isMobile={isMobile} 
              onToggleWindow={toggleWindow} 
              openWindows={openWindows} 
            />

            {isMobile && <MobileLayout />}

          </div>
      </div>
      {isMobile && !mobilePortrait && (
          <div id='rotate-message'>
            <h1>This site works best in portrait mode.</h1>
            <h2>Please rotate your device.</h2>
          </div>
        )}
    </>
  );
}

export default App