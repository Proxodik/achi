
export function getHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const logo = document.createElement("img");
    logo.classList.add("header__logo-image");
    logo.src = "./assets/img/logo.svg";

    const motivationalText = document.createElement("div");
    motivationalText.classList.add("header__motivational-text");
    motivationalText.textContent = "Study smart, not just hard"

    const profileLink = document.createElement("a");
    profileLink.href = "";
    profileLink.classList.add("header__profile-link");

    const profileImg = document.createElement("img");
    profileImg.classList.add("header__profile-image");
    profileImg.src = "./assets/img/logo.svg";

    profileLink.append(profileImg);



    header.append(logo, motivationalText, profileLink);

    return header;
}

