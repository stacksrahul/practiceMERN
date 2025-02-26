import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png"
import propsImg from "./assets/config.png"
const reactDescription = ['Fundamental','Crucial','Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Components(props) {
  return(
    <li>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function Header() {
  let description = reactDescription[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Components 
              title="Components"
              description="The core UI building block"
              img={componentsImg}
            />
            <Components 
              title="Props"
              description=""
              img={propsImg}
            />
            <Components />
            <Components />
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
