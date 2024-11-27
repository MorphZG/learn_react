// why import image into a js variable.
// this allows bundlers to properly process the image, optimize it, and include it in the final bundle.
// ensures the image is correctly referenced in the final build, even if the folder structure changes.
import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(maxIndex) {
    return Math.floor(Math.random() * (maxIndex + 1));
}

function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app
                you are
            </p>
        </header>
    );
}

function CoreConcept(props) {
    return (
        <li>
            <img src="..." alt="..." />
            <h3>TITLE</h3>
            <p>DESCRIPTION</p>
        </li>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title="Components"
                            description="The core UI building block"
                            img={componentsImg}
                        />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
