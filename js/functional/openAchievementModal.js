import { db } from "../../firebase/firebase-config.js";
import { ref, update, remove } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

export function openAchievementModal(data) {
    const modal = document.createElement('div');
    modal.classList.add('achievement-modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('achievement-modal__content');

    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.classList.add('close');
    closeButton.addEventListener('click', () => modal.remove());

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('achievement-modal__image-container');

    const modalImage = document.createElement('img');
    modalImage.src = data.imageUrl;
    modalImage.alt = data.title;
    imageContainer.append(modalImage);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('achievement-modal__text-container');

    const modalTitle = document.createElement('input');
    modalTitle.type = 'text';
    modalTitle.value = data.title;
    modalTitle.disabled = true;

    const modalDescription = document.createElement('textarea');
    modalDescription.value = data.description;
    modalDescription.disabled = true;

    const modalDate = document.createElement('input');
    modalDate.type = 'date';
    modalDate.value = data.date;
    modalDate.disabled = true;

    const resourceLinkElement = document.createElement('input');
    resourceLinkElement.type = 'url';
    resourceLinkElement.value = data.resourceLink;
    resourceLinkElement.disabled = true;

    const editButton = document.createElement('button');
    editButton.textContent = 'Редагувати';
    editButton.classList.add('save');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.classList.add('delete');

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Зберегти';
    saveButton.classList.add('save');
    saveButton.style.display = 'none';

    editButton.addEventListener('click', () => {
        modalTitle.disabled = false;
        modalDescription.disabled = false;
        modalDate.disabled = false;
        resourceLinkElement.disabled = false;
        saveButton.style.display = 'inline';
        editButton.style.display = 'none';
    });

    saveButton.addEventListener('click', async () => {
        const updatedData = {
            id: data.id || Date.now().toString(),
            title: modalTitle.value.trim(),
            description: modalDescription.value.trim(),
            date: modalDate.value.trim(),
            imageUrl: data.imageUrl,
            resourceLink: resourceLinkElement.value.trim()
        };

        try {
            const achievementRef = ref(db, 'achievements/' + updatedData.id);
            await update(achievementRef, updatedData);
            console.log("Achievement updated successfully!");
            modal.remove();
            location.reload()

        } catch (error) {
            console.error("Error updating achievement: ", error);
        }
    });

    deleteButton.addEventListener('click', async () => {
        if (confirm("Ви впевнені?")) {
            try {
                const achievementRef = ref(db, 'achievements/' + data.id);
                await remove(achievementRef);
                console.log("Achievement deleted successfully!");
                modal.remove();
                document.querySelector(`[data-id='${data.id}']`).remove();
            } catch (error) {
                console.error("Error deleting achievement: ", error);
            }
        }
    });

    contentContainer.append(modalTitle, modalDescription, modalDate, resourceLinkElement, editButton, saveButton, deleteButton);
    modalContent.append(closeButton, imageContainer, contentContainer);
    modal.append(modalContent);
    document.body.append(modal);
}
