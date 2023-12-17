let textbox = document.getElementById("textbox");

textbox.addEventListener("input", async function () {
    let F =this.value;
    let H = F.length;
    document.getElementById("Char").innerHTML = H;

    F = F.trim();
    let G = F.split(" ");
    // console.log(G);
    let cleanword = await G.filter( async function (elm) {
        return await elm != "";
    });

    document.getElementById("Word").innerHTML = cleanword.length;
});
