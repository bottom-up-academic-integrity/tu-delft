const cardListTemplate = document.createElement('template');

cardListTemplate.innerHTML = `  
  <style>
  #card-bbox {
      margin:0 25px;
  }

  #card-space {
      max-width: 1350px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      /* height: 500px; */

      margin: 0 auto;
      /* background-color: rgba(0,0,0,0.1); */
  }

  card {
      border-radius:20px;
      background-color: var(--main-blue);
      color: #fafafa;
      padding: 20px;
  }

  card #category {
      font-size: 0.9em;
      margin: 12px 0 0 0;
  }

  card #header {
      font-size: 1.8em;
      margin: 7px 0 0 0;
  }

  card #bodytext {
      margin: 16px 0 0 0 ;
  }

  card #action {
      font-size: 1.2em;
      margin: 32px 0 12px 0;
  }

  #card-aims {
      grid-row: 1;
      grid-column: 1;
  }

  #card-motivation {
      grid-row: 1 / span 2;
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
  <div id="card-bbox">
  <div id="card-space">
      <card id="card-aims">
          <div id="category">Aims</div>
          <div id="header">What are we trying to achieve?</div>
          <div id="bodytext">What are we trying to achieve? Lorem ipsum and more body text that could be a few lines.</div>
          <div id="action">Read more</div>
      </card>
      <card id="card-motivation">
          <div id="category">Motivation</div>
          <div id="header">Why do we exist?</div>
          <div id="bodytext">Lorem ipsum and more body text that could be a few lines</div>
          <div id="action">Read more</div>
      </card>
      <card id="card-integrity-report">
          <div id="category">Output</div>
          <div id="header">Commentary on the recent integrity report</div>
          <div id="bodytext">Lorem ipsum and more body text that could be a few lines</div>
          <div id="action">Read our commentary</div>
      </card>
      <card id="card-members">
          <div id="category">members</div>
          <div id="header">Who is involved in this initiative?</div>
          <div id="bodytext">Lorem ipsum and more body text that could be a few lines</div>
          <div id="action">View the team</div>
      </card>
  </div>
  </div>
`;

class CardList extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(cardListTemplate.content);
  }

}

customElements.define('cardlist', CardList);