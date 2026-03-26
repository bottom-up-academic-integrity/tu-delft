const cardBoxTemplate = document.createElement('template');

cardBoxTemplate.innerHTML = `  
  <style>
  card {
      border: 2px solid var(--text-blue);
      border-radius: 16px; 
      color: var(--text-blue);
      padding: 20px;
  }

  :host([inactive]) {
    opacity: 15%;
    pointer-events: none;
  }

  card #category {
      font-size: 0.9em;
      margin: 12px 0 0 0;
  }

  card #header {
      font-size: 1.8em;
      margin: 7px 0 0 0;
      display: block;
  }

  card #bodytext {
      margin: 16px 0 0 0 ;
      display: block;
  }

  card #action {
      font-size: 1.2em;
      margin: 5px 0 0 0;
      display: block;
      border-radius: 5px;
  }

  #card-aims {
      grid-row: 1;
      grid-column: 1;
  }

  #card-motivation {
      grid-row: 1 / span 1;
      grid-column: 2;
  }

  #card-integrity-report {
      grid-row: 2 / span 2;
      grid-column: 1;
  }

  #card-members {
      grid-row: 3 / span 2;
      grid-column: 2;
  }
  </style>

    <card id="card-motivation">
        <slot name="category" id="category">Card Category</slot>
        <slot name="header" id="header">Card Header</slot>
        <slot name="bodytext" id="bodytext">This is the body text of the card. It can be pretty long, but I would suggest not writing full essays.</slot>
        <slot name="action" id="action" class="actionbuttons">This should be styled as an action button</slot>
    </card>
`;

class CardBox extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(cardBoxTemplate.content.cloneNode(true));
  }

}

customElements.define('card-box', CardBox);