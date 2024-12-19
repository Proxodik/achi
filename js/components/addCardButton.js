import {getAchivementCard} from "./achivementCard.js";

import {db} from "../../firebase/firebase-config.js";// Импортируем db
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js"; // Импортируем нужные функции для RTDB

function addAchievementToFirestore(data) {
    const achievementId = data.id || Date.now().toString(); // Если нет ID, используем текущее время

    const achievementRef = ref(db, 'achievements/' + achievementId); // Путь к данным

    set(achievementRef, {
        title: data.title || 'Achi',
        description: data.description || 'No description',
        date: data.date || "",
        imageUrl: data.imageUrl || "../assets/img/default.png",
        resourceLink: data.resourceLink || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    })
        .then(() => {
            console.log("Achievement added successfully!");
        })
        .catch((error) => {
            console.error("Error adding achievement: ", error);
        });
}

const createModal = () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal__content');

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Заголовок';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.placeholder = 'Опис';

    const dateInput = document.createElement('input');
    dateInput.type = 'date';

    const imageInput = document.createElement('input');
    imageInput.type = 'url';
    imageInput.placeholder = 'Посилання на зображення';

    const resourceLinkInput = document.createElement('input');
    resourceLinkInput.type = 'url';
    resourceLinkInput.placeholder = 'Посилання на ресурс';

    const addButton = document.createElement('button');
    addButton.textContent = 'Додати';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрити';

    modalContent.append(
        titleInput,
        descriptionInput,
        dateInput,
        imageInput,
        resourceLinkInput,
        addButton,
        closeButton
    );

    modal.append(modalContent);
    document.body.append(modal);

    closeButton.addEventListener('click', () => modal.remove());

    addButton.addEventListener('click', () => {
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const date = dateInput.value.trim();
        const imageUrl = imageInput.value.trim();
        const resourceLink = resourceLinkInput.value.trim();

        const data = {title, description, date, imageUrl, resourceLink};

        const newCard = getAchivementCard(data);
        addAchievementToFirestore(data);

        document.querySelector('.achievements-container').append(newCard);
        modal.remove();

    });
};

export const getAddCardButton = () => {
    const button = document.createElement('button');
    button.classList.add('add-achievement-button');
    button.textContent = '+';

    button.addEventListener('click', () => createModal());

    document.body.append(button);

    return button;
};
