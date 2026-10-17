import { CloseBtn } from './Icons.jsx'

import interests from './Interests';

function DesktopLayout({ openWindows, onToggleWindow, windowPositions, onStartDragging }) {
    return (
        <div id="window-container">
            {interests
            .filter((interest) => openWindows[interest.type])
            .map((interest) => (
                <Window 
                    key={interest.type}
                    type={interest.type}
                    title={interest.title}
                    content={interest.content}
                    onToggleWindow={onToggleWindow}
                    position={windowPositions[interest.type]}
                    onStartDragging={onStartDragging}
                />
            ))}
        </div>
    )
}

function Window({ type, title, content, onToggleWindow, position, onStartDragging }) {

    const elementId = type + "-window";

    return (
        <div className="window" id={elementId} style={ position ? {
                left: `${position.left}px`,
                top: `${position.top}px`,
            } : undefined
        }>
          <div className="title-bar" onPointerDown={(event) => onStartDragging(type, event)}>
            <div className="titlebar-text">
              <h2>{title}</h2>
            </div>
            <button className="close-button" onPointerDown={(event) => event.stopPropagation()} onClick={() => onToggleWindow(type)}>
              <CloseBtn />
            </button>
          </div>
          <div className="title-separation">
            <hr />
          </div>
          {content && <div className="window-content">{content}</div>}
        </div>
    );
}

export default DesktopLayout