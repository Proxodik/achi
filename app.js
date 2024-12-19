import {getHeader} from "./js/components/header.js";
import {getAchievementsContainer} from "./js/components/achievementsContainer.js";
import {getAddCardButton} from "./js/components/addCardButton.js";

const app = document.getElementById("app");

const header = getHeader();
const achievementsContainer = await getAchievementsContainer();
const addButton = getAddCardButton();


app.append(header, achievementsContainer, addButton);