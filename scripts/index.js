let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input_field_name');
let jobInput = formElement.querySelector('.popup__input_field_job');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__about-name');
let popup = document.querySelector('.popup');
let popupClassList = popup.classList;

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    handleCloseButtonClick();
}

function handleEditButtonClick() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupClassList.add('popup_opened');
}

function handleCloseButtonClick() {
    popupClassList.remove('popup_opened');
}

closeButton.addEventListener('click', handleCloseButtonClick);
editButton.addEventListener('click',handleEditButtonClick);
formElement.addEventListener('submit', handleFormSubmit);