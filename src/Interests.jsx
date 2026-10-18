import coin from './assets/images/image02.png'
import skeletonPhoto from './assets/projects/skeleton.jpg'

const interests = [
    {
        id: 'projects',
        type: 'projects',
        title: "Projects",
        content: (
            <div className="projects-list">
                <div className="project">
                    <div className="project-title">
                        <h3><a href="https://github.com/ThatGiantSeth/skeleton-reID" target="_blank">Skeleton Re-ID on Raspberry Pi</a></h3>
                        <h4>August 2025 - May 2026</h4>
                    </div>
                    <img src={skeletonPhoto}/>
                    <ul>
                        <li>Integrated a lightweight convolutional neural network, Raspberry Pi microcomputer, and RGB-D camera to create a real-time skeleton re-ID system, achieving 75% recognition accuracy during live testing</li>
                        <li>Developed a modular client-server architecture in Python that enables future research with newer camera hardware or different ML models</li>
                        <li>Implemented buffering and packaging with asyncio and NumPy to reduce data transmission frequency while keeping total identification latency under 100 ms</li>
                        <li>Built a GUI with Qt5 for real-time skeleton data and identification result visualization at a consistent 30 FPS</li>
                        <li>Created a CLI-based recording and training pipeline to allow dataset expansion and customization</li>
                        <li>Authored detailed technical documentation that enabled the team mentor to achieve similar results</li>
                    </ul>
                </div>

                <hr />

                <div className="project">
                    <div className="project-title">
                        <h3>SVM Document Classifier</h3>
                        <h4>August 2025 - December 2025</h4>
                    </div>
                    <ul>
                        <li>Collaborated in a fast-paced Agile environment by attending stand-ups, drafting software specifications, and ensuring that each phase of the project was delivered on time</li>
                        <li>Built a cross-platform Java application to parse PDFs, extract text, and display predicted categories in a CLI</li>
                        <li>Developed custom training filters that improved the prediction model’s accuracy from 40% to 70%</li>
                        <li>Integrated CI/CD with GitHub Actions, build management with Gradle, and unit testing with Junit to create a maintainable project ecosystem</li>
                    </ul>
                </div>

                <hr/>

                <div className="project">
                    <div className="project-title">
                        <h3><a href="https://github.com/ThatGiantSeth/mips-processor" target="_blank">MIPS Single-cycle Processor</a></h3>
                        <h4>August 2025 - December 2025</h4>
                    </div>
                    <ul>
                        <li>Designed a MIPS-based single-cycle processor in VHDL that supports 7 instructions, 8 registers, and 512 bytes each of data and instruction memory</li>
                        <li>Developed logical data path schematics including program counter, registers, ALU, and control unit</li>
                        <li>Constructed and integrated an ALU that supports addition, subtraction, multiplication, and value pass-through</li>
                        <li>Authored VHDL testbenches to verify each component and troubleshoot edge cases like value overflow</li>
                    </ul>
                </div>
            </div>
        ),
        prevSection: "main-content",
        nextSection: "music-section"
    },
    {
        id: 'music',
        type: 'music',
        title: "Favorite Music",
        content: (
            <iframe src="https://open.spotify.com/embed/playlist/5Wl2nPVgA49rXs8awpIU5E?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        ),
        prevSection: "projects-section",
        nextSection: "games-section"
    },
    {
        id: 'games',
        type: 'games',
        title: "Favorite Games",
        content: (
            <>
                <h1>Under construction :)</h1>
                <img src={coin} />
            </>
        ),
        prevSection: "music-section",
        nextSection: "extras-section"
    },
    {
        id: 'extras',
        type: 'extras',
        title: "Extras",
        content: (
            <>
                <h1>Under construction :)</h1>
                <img src={coin} />
            </>
        ),
        prevSection: "games-section",
        nextSection: null
    },
]

export default interests