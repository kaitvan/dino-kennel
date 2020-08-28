import { dinoSort, addDinoDropdown, addDinoCard, removeDino, feedDino, petDino } from "./components/printDinoCards.js";

const init = () => {
    dinoSort();
    addDinoDropdown();
    addDinoCard();
    removeDino();
    feedDino();
    petDino();
};

init();