import { dinoSort, addDinoDropdown, addDinoCard, removeDino, feedDino, petDino, adventureDino } from "./components/printDinoCards.js";

const init = () => {
    dinoSort();
    addDinoDropdown();
    addDinoCard();
    removeDino();
    feedDino();
    petDino();
    adventureDino();
};

init();