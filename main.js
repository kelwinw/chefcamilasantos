const menuItems = [
    {
        title: "Kit Páscoa",
        price: "R$ 139",
        description: `Casinha temática recheada de delícias de Páscoa:
                      <ul>
                        <li>1 Pacote de Bits Brownie</li>
                        <li>1 Ovo de colher</li>
                        <li>1 Cookie recheado</li>
                      </ul>`,
        image: "Rectangle 750.png"
    },
    {
        title: "Ovo de colher",
        price: "R$ 39",
        description: `Ovo de colher, recheado com brigadeiro cremoso de chocolate ao leite, creme de ninho, Nutella e pedaços de brownie.
                      <small>Peso aprox. 200g</small>`,
        image: "Rectangle 751.png"
    },
    {
        title: "Bits Brownie",
        price: "R$ 29",
        description: `Pedaços do nosso delicioso brownie de chocolate meio amargo, coberto parcialmente com chocolate ao leite.
                      <small>Peso aprox. 150g</small>`,
        image: "Rectangle 752.png"
    },
    {
        title: "Surpresa de Uva",
        price: "R$ 139",
        description: `Casca de chocolate ao leite, recheado com brigadeiro especial de chocolate branco e uvas thompson. Decorado com uvas e chocolate ao leite nobre.
                      <small>Peso aprox. 400g</small>`,
        image: "Rectangle 753.png"
    },
    {
        title: "Belga",
        price: "R$ 129",
        description: `Casca de chocolate ao leite, recheado com brigadeiro cremoso e decorado com brigadeiros de chocolate ao leite.
                      <small>Peso aprox. 400g</small>`,
        image: "Rectangle 754.png"
    },
    {
        title: "Franui",
        price: "R$ 149",
        description: `Casca de chocolate ao leite, recheado com brigadeiro especial de chocolate branco, geléia artesanal de framboesa e coberto com bombons Franui.
                      <small>Peso aprox. 350g</small>`,
        image: "Rectangle 755.png"
    },
    {
        title: "Pistache",
        price: "R$ 169",
        description: `Casca de chocolate branco nobre, recheada com delicioso brigadeiro de Pistache, finalizado com ganache de Pistache e pistache triturado.
                      <small>Peso aprox. 400g</small>`,
        image: "Rectangle 756.png"
    },
    {
        title: "Ninho & Nutella",
        price: "R$ 139",
        description: `Casca de chocolate ao leite, recheada com brigadeiro de Ninho, muita nutella e decorado com brigadeiros de Ninho e Nutella.
                      <small>Peso aprox. 400g</small>`,
        image: "Rectangle 757.png"
    },
    {
        title: "Crème Brûlée",
        price: "R$ 159",
        description: `Casca de chocolate branco nobre, recheada com brigadeiro de creme brûlée, geléia artesanal de frutas vermelhas (opcional).
                      <small>Peso aprox. 400g</small>`,
        image: "Rectangle 758.png"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");

    menuItems.forEach((item, index) => {
        // Create card element
        const card = document.createElement("div");
        card.className = "menu-item fade-in";
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-title">${item.title}</h3>
                    <div class="item-line"></div>
                    <span class="item-price">${item.price}</span>
                </div>
                <div class="item-desc">
                    ${item.description}
                </div>
            </div>
            <div class="item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
        `;

        menuContainer.appendChild(card);
    });
});
