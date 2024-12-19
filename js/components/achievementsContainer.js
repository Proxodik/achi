import { db } from "../../firebase/firebase-config.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

import { getAchivementCard } from "./achivementCard.js";

export async function getAchievementsContainer() {
    const achievementsContainer = document.createElement("div");
    achievementsContainer.classList.add("achievements-container");

    const achievements = await getAchievements();

    for (let achievement in achievements) {
        achievementsContainer.append(getAchivementCard(achievements[achievement]));
    }

    return achievementsContainer;
}

async function getAchievements() {
    const achievementsRef = ref(db, 'achievements');
    const snapshot = await get(achievementsRef);

    if (snapshot.exists()) {
        const achievements = snapshot.val();
        return achievements;
    } else {
        console.log("No data available");
        return [];
    }
}
