/*global document*/
/*jshint esversion: 6*/

var navOptions = [{
    container: "main",
    icon: "fa-home",
    description: "Home",
    link: "#"
}, {
    container: "main",
    icon: "fa-inbox",
    description: "Messages",
    link: "#"
}, {
    container: "main",
    icon: "fa-thumb-tack",
    description: "Tasks",
    link: "#"
}, {
    container: "main",
    icon: "fa-calendar",
    description: "Calendar",
    link: "#"
}, {
    container: "more",
    icon: "fa-file-image-o",
    description: "Images",
    link: "#"
}, {
    container: "more",
    icon: "fa-camera",
    description: "Videos",
    link: "#"
}, {
    container: "more",
    icon: "fa-link",
    description: "Links",
    link: "#"
}, {
    container: "more",
    icon: "fa-files-o",
    description: "Files",
    link: "#"
}, {
    container: "settings",
    icon: "fa-users",
    description: "Team members",
    link: "#"
}, {
    container: "settings",
    icon: "fa-cog",
    description: "Setup",
    link: "#"
}];

var containerList = navOptions.map((e) => e.container),
    iconList = navOptions.map((e) => e.icon),
    descriptionList = navOptions.map((e) => e.description),
    linkList = navOptions.map((e) => e.link),
    i;

function navigationOptions(container, icon, description, link) {
    var anchor = document.createElement("a"),
        iconE = document.createElement("i"),
        detailE = document.createElement("span"),
        detailText = document.createTextNode(description);

    if (icon === "fa-home") {
        anchor.classList.add("default");
    }

    anchor.classList.add("nav-options");
    anchor.setAttribute("href", link);
    iconE.classList.add("fa");
    iconE.classList.add(icon);
    anchor.appendChild(iconE);
    detailE.appendChild(detailText);
    anchor.appendChild(detailE);
    document.getElementById(container).appendChild(anchor);
}

for (i = 0; i < navOptions.length; i += 1) {
    navigationOptions(containerList[i], iconList[i], descriptionList[i], linkList[i]);
}

/*REACTION BOX*/

var reactions = [{
    container: "reaction-box",
    icon: "fa-user-o",
    title: "New followers",
    date: "today",
    count: "252"
}, {
    container: "reaction-box",
    icon: "fa-heart-o",
    title: "New likes",
    date: "today",
    count: "930"
}, {
    container: "reaction-box",
    icon: "fa-sticky-note-o",
    title: "New notes",
    date: "today",
    count: "1020"
}, {
    container: "reaction-box",
    icon: "fa-comment-o",
    title: "New comments",
    date: "today",
    count: "210"
}, {
    container: "reaction-box",
    icon: "fa-user-o",
    title: "New messages",
    date: "last 7 days",
    count: "317"
}];

var containerArray = reactions.map((e) => e.container),
    iconArray = reactions.map((e) => e.icon),
    titleArray = reactions.map((e) => e.title),
    descriptionArray = reactions.map((e) => e.date),
    linkArray = reactions.map((e) => e.count),
    y;

function reaction(container, icon, title, date, count) {
    var parent = document.createElement("div"),
        iconE = document.createElement("i"),
        textA = document.createElement("span"),
        textB = document.createElement("span"),
        textC = document.createElement("span"),
        titleNode = document.createTextNode(title),
        dateNode = document.createTextNode(date),
        countNode = document.createTextNode(count);

    parent.classList.add("reactions");
    iconE.classList.add("fa");
    iconE.classList.add(icon);
    parent.appendChild(iconE);
    textA.appendChild(titleNode);
    textB.appendChild(dateNode);
    textC.appendChild(countNode);
    parent.appendChild(textA);
    parent.appendChild(textB);
    parent.appendChild(textC);
    document.getElementById(container).appendChild(parent);
}

for (i = 0; i < reactions.length; i += 1) {
    reaction(containerArray[i], iconArray[i], titleArray[i], descriptionArray[i], linkArray[i]);
}

/*GALLERY ITEMS*/

var gallery = [{
    img: "reaction-box",
    src: "assets/images/Home is wherever mom is.jpg",
    alt: "Home is wherever mom is",
    time: "32 minutes ago"
}, {
    img: "reaction-box",
    src: "assets/images/Never too old for bruises and broken bones.jpg",
    alt: "Never too old for bruises",
    time: "1 hour ago"
}, {
    img: "reaction-box",
    src: "assets/images/Wanderlust.jpg",
    alt: "Wanderlust",
    time: "1 hour ago"
}, {
    img: "reaction-box",
    src: "assets/images/Work hard.jpg",
    alt: "Work hard",
    time: "1 hour ago"
}, {
    img: "reaction-box",
    src: "assets/images/Point 44 Magnum...jpg",
    alt: "Point 44 Magnum..",
    time: "1 hour ago"
}, {
    img: "reaction-box",
    src: "assets/images/I will not be impressed by technology.jpg",
    alt: "I will not be impressed by technology",
    time: "1 hour ago"
}, {
    img: "reaction-box",
    src: "assets/images/G.jpg",
    alt: "G",
    time: "2 hours ago"
}, {
    img: "reaction-box",
    src: "assets/images/Still Together, Still Going Strong.jpg",
    alt: "Still Together, Still Going Strong",
    time: "2 hours ago"
}, {
    img: "reaction-box",
    src: "assets/images/This sketchbook belongs to...jpg",
    alt: "This sketchbook belongs to...",
    time: "2 hours ago"
}];

var imagesArray = gallery.map((e) => e.img),
    srcArray = gallery.map((e) => e.src),
    altArray = gallery.map((e) => e.alt),
    timeArray = gallery.map((e) => e.time),
    x;

function printGallery(picture, src, alt, time, i) {
    var figure = document.createElement("figure"),
        image = document.createElement("img"),
        figcaption = document.createElement("figcaption"),
        spanA = document.createElement("span"),
        spanB = document.createElement("span"),
        descriptionText = document.createTextNode(alt),
        timeText = document.createTextNode(time);

    image.setAttribute("src", src);
    image.setAttribute("alt", alt);
    figure.classList.add("gallery-item");
    figure.appendChild(image);
    spanA.appendChild(descriptionText);
    spanB.appendChild(timeText);
    figcaption.appendChild(spanA);
    figcaption.appendChild(spanB);
    figure.appendChild(figcaption);
    document.getElementById("gallery-items").appendChild(figure);
}

for (i = 0; i < gallery.length; i += 1) {
    printGallery(imagesArray[i], srcArray[i], altArray[i], timeArray[i], i);
}