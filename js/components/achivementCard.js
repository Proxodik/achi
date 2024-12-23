import {openAchievementModal} from "../functional/openAchievementModal.js";

export function getAchivementCard(data) {
    const card = document.createElement('div');
    card.classList.add('achievement-card');
    card.setAttribute('data-id', data.id );

    const title = document.createElement('h3');
    title.classList.add('achievement-card__title');
    title.textContent = data.title || "Achi";

    const description = document.createElement('p');
    description.classList.add('achievement-card__description');
    description.textContent = data.description || "no description";

    const date = document.createElement('p');
    date.classList.add('achievement-card__date');
    date.textContent = `Date: ${data.date || ""}`;

    const image = document.createElement('img');
    image.classList.add('achievement-card__image');
    image.src = data.imageUrl || "../assets/img/default.png";
    image.alt = data.title;

    const resourceLink = document.createElement("a");
    resourceLink.href = data.resourceLink;
    resourceLink.textContent = "resource";
    resourceLink.target = "_blank";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(resourceLink);
    card.appendChild(date);

    card.addEventListener("click", () => openAchievementModal(data))

    return card;
}