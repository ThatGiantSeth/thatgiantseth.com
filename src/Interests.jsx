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
                    <div class="project-title">
                        <h3><a href="https://github.com/ThatGiantSeth/skeleton-reID" target="_blank">Skeleton Re-ID on Raspberry Pi</a></h3>
                        <h4>August 2025 - May 2026</h4>
                    </div>
                    <ul>
                        <li>Trained a lightweight convolutional neural network to identify humans from 3D skeleton data captured by an RGB-D camera, achieving 75% recognition accuracy during live testing.</li>
                        <li>Deployed the trained network on an inexpensive Raspberry Pi 4 microcomputer that consumes under 10 W.</li>
                        <li>Implemented an asynchronous client-server pipeline that kept total identification latency below 100 ms.</li>
                        <li>Built a Qt5 UI to visualize real-time skeletons at 30 FPS and display identification results.</li>
                        <li>Developed an integrated recording and training pipeline to allow seamless dataset expansion.</li>
                        <li>Authored detailed documentation that enabled our project mentor to independently recreate our results.</li>
                    </ul>
                    <img src={skeletonPhoto}/>
                </div>

                <hr />

                <div className="project">
                    <div className="project-title">
                        <h3>SVM Document Classifier</h3>
                        <h4>August 2025 - December 2025</h4>
                    </div>
                    <ul>
                        <li>Collaborated in an Agile-based team environment by attending stand-ups, writing user stories, practicing TDD, and drafting a software requirements specification.</li>
                        <li>Trained an SVM classifier to categorize documents using TF-IDF features, achieving 70% average accuracy.</li>
                        <li>Built a Java CLI application to parse PDFs, extract text, and display predicted categories.</li>
                        <li>Implemented CI/CD with GitHub Actions, build management with Gradle, and unit testing with JUnit.</li>
                    </ul>
                </div>

                <hr/>

                <div className="project">
                    <div className="project-title">
                        <h3><a href="https://github.com/ThatGiantSeth/mips-processor" target="_blank">MIPS Single-cycle Processor</a></h3>
                        <h4>August 2025 - December 2025</h4>
                    </div>
                    <ul>
                        <li>Designed a MIPS-based single-cycle processor in VHDL that supports 7 instructions, 8 registers, and 512 bytes each of data and instruction memory.</li>
                        <li>Constructed an ALU that supports addition, subtraction, multiplication, and value pass-through.</li>
                        <li>Developed a data path by hand, including PC, registers, ALU, instruction and data memories, and control unit.</li>
                        <li>Built VHDL testbenches to verify the data path’s correctness, including edge cases like value overflow.</li>
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
                <h1>Placeholder Text</h1>
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
                <h1>Placeholder Text</h1>
                <img src={coin} />
            </>
        ),
        prevSection: "games-section",
        nextSection: null
    },
]

export default interests