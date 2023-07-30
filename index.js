document.querySelectorAll(".carousel").forEach(carousel =>{
    const items = carousel.querySelectorAll(".carousel__item");

    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class ="carousel__nav">
            ${ buttonsHtml.join("")}
        </div>
        `);

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
        button.addEventListener("click" , () => {
            //unselect all items
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selectedd"));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");

        });
        //selects first item
        items[0].classList.add("carousel__item--selected");
        buttons[0].classList.add("carousel__button--selected");
    });

});