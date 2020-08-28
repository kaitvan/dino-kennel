import { dinoSort, addDinoDropdown, addDinoCard, removeDino } from "./components/printDinoCards.js";

const init = () => {
    dinoSort();
    addDinoDropdown();
    addDinoCard();
    removeDino();
};

init();