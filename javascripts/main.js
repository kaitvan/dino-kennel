import { dinoSort, addDinoDropdown, addDinoCard, removeDino, feedDino, petDino, adventureDino, showDinoDetails, updateHealthColor } from "./components/printDinoCards.js";

const init = () => {
    dinoSort();
    updateHealthColor();
    addDinoDropdown();
    addDinoCard();
    removeDino();
    feedDino();
    petDino();
    adventureDino();
    showDinoDetails();
};

init();