import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import uiImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

// Don't pass these imports in img within {}, else they will be imported as objects not as strings of path
export const CORE_CONCEPTS = [
    {
        title: "Components",
        description: "The core UI building block",
        img: componentsImg
    },
    {
        title: "Props",
        description: "The core UI building block",
        img: propsImg
    },
    {
        title: "User Interface",
        description: "The core UI building block",
        img: uiImg
    },
    {
        title: "State",
        description: "The core UI building block",
        img: stateImg
    }
]