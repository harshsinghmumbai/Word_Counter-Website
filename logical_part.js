let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function () {
    let F = this.value;
    let H = F.length;
    document.getElementById("Char").innerHTML = H;

    F = F.trim();
    let G = F.split(" ");
    console.log(G);
    let cleanword = G.filter(function (elm) {
        return elm != "";
    });
    document.getElementById("Word").innerHTML = cleanword.length;
});
