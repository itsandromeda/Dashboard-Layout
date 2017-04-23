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