import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import { CORE_CONCEPTS } from "./data.js";
const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Implementation 0: Similar to implementation 
// function Components(props) {
//   return (
//     <li>
//       <img src={props.img} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

// Implementation 1, 2, 3
function Components({ description, title, img }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

// Implementation 4, 5
function Components1Attr({ props }) {
  const {title, description, img} = props;  {/* Implementation 4: You can 'destructure' the object into respective variables */}
  return (
    <li>
      <img src={img} alt={title}/>  {/* IM4 */}
      <h3>{props.title}</h3>  {/* Implementation 5: Or you can pick out the attribute from passed object */}
      <p>{description}</p>
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
        {/* */}
          <h2>Core Concepts</h2>
          <ul>

            {/* Implementation 1: You can manually pass the attribute with values when calling the component */}
            <Components
              img={componentsImg}
              title="Components"
              description="The core UI building block"
            />

            {/* Implementation 2: You can use the 'spread' operator when passing the object 
                  to pass a "shallow" copy of each of its attributes */}
            <Components {...CORE_CONCEPTS[1]}/>

            {/* Implementation 3: You can pass the attributes which the component accepts 
                  and assign value of object's properties to each of them */}
            <Components
              img={CORE_CONCEPTS[2].img}
              description={CORE_CONCEPTS[2].description}
              title={CORE_CONCEPTS[2].title}
            />

            {/* Implementation 4, 5 */}
            <Components1Attr 
              props = {CORE_CONCEPTS[3]}
            />
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
