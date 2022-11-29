class ListItem extends HTMLElement {
  constructor() {
    super();

    // attach shadow DOM
    // this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.innerHTML = `
      <li class="bill-item">
        <div class="item__icon add">
          <i class="bi bi-caret-up-fill"></i>
        </div>
        <div class="item__description">
          <div class="item__title">Salário</div>
          <div class="item__group">Pagamento</div>
        </div>
        <div class="list-item__value">
          <div class="list-item__amount add">$4354,00</div>
          <div class="list-item__date">10/10/2022</div>
        </div>
      </li>
    `;
  }
}

window.customElements.define("list-item", ListItem);
