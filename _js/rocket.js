const scene = document.querySelector(".scene");

function stars() {
    var count = 50;
    var i = 0;
    while(i < count) {
        var star = document.createElement("i");
        var x = Math.floor(Math.random() * window.innerWidth);
        var duration = Math.random() * 1;
        var h = Math.random() * 100;

        star.style.left = `${x}px`;
        star.style.width = `${1}px`;
        star.style.height = `${h}px`;
        star.style.animationDuration = `${duration}s`;

        scene.appendChild(star);
        i++;
    }
}

stars();