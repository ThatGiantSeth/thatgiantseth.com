import { DnArrow, UpArrow } from './Icons.jsx'
import interests from './Interests.jsx';


function MobileLayout() {
    return (
        <>
            {interests.map((interest) => (
                <MobileSection 
                    key={interest.type}
                    type={interest.type}
                    title={interest.title}
                    content={interest.content}
                    prevSection={interest.prevSection}
                    nextSection={interest.nextSection}
                />
            ))}
        </>
    )
}

function MobileSection({ type, title, content, prevSection, nextSection }) {
    type = type + "-section"
    
    return (
        <section className="about-section" id={type}>
            {prevSection && <UpArrow dest={"#" + prevSection} />}
            <h1 className="extras-title">{title}</h1>
            {content && <div className="section-content">{content}</div>}
            {nextSection && <DnArrow dest={"#" + nextSection} />}
        </section>
    );
}

export default MobileLayout