
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-utah.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigo-guam.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington-dc.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/lima-peru.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-city.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "images/salt-lake-temple.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "images/accra-ghana-temple.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "images/rome-italy-temple.jpg"
    }
];

// CREATE TEMPLE CARDS

const cardsContainer =
    document.querySelector("#temple-cards");

function displayTemples(templeList) {
    cardsContainer.replaceChildren();

    templeList.forEach((temple) => {
        const card = document.createElement("article");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent =
            `Location: ${temple.location}`;

        const dedication = document.createElement("p");
        dedication.textContent =
            `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent =
            `Area: ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.append(
            name,
            location,
            dedication,
            area,
            image
        );

        cardsContainer.appendChild(card);
    });
}

// FILTER TEMPLES

const filters = {
    home: () => temples,

    old: () => temples.filter(
        temple =>
            Number(temple.dedicated.slice(0, 4)) < 1900
    ),

    new: () => temples.filter(
        temple =>
            Number(temple.dedicated.slice(0, 4)) > 2000
    ),

    large: () => temples.filter(
        temple => temple.area > 90000
    ),

    small: () => temples.filter(
        temple => temple.area < 10000
    )
};

// NAVIGATION

const navigation =
    document.querySelector("#navigation");

const pageTitle =
    document.querySelector("#page-title");

const menuButton =
    document.querySelector("#menu");

navigation.addEventListener("click", (event) => {
    const link =
        event.target.closest("a[data-filter]");

    if (!link) return;

    event.preventDefault();

    const selectedFilter = link.dataset.filter;

    displayTemples(filters[selectedFilter]());

    pageTitle.textContent = link.textContent;

    navigation.querySelectorAll("a").forEach(
        item => item.classList.remove("active")
    );

    link.classList.add("active");

    navigation.classList.remove("open");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );
});

// MOBILE MENU

menuButton.addEventListener("click", () => {
    const isOpen =
        navigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
});

// FOOTER

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

// DISPLAY ALL TEMPLES WHEN PAGE OPENS

displayTemples(temples);