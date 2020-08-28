import { dinoSort, addDinoDropdown, addDinoCard, removeDino, feedDino } from "./components/printDinoCards.js";

const init = () => {
    dinoSort();
    addDinoDropdown();
    addDinoCard();
    removeDino();
    feedDino();
};

init();