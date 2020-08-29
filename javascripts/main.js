import { dinoSort, addDinoDropdown, addDinoCard, removeDino, feedDino, petDino, adventureDino, showDinoDetails } from "./components/printDinoCards.js";

const init = () => {
    dinoSort();
    addDinoDropdown();
    addDinoCard();
    removeDino();
    feedDino();
    petDino();
    adventureDino();
    showDinoDetails();
};

init();