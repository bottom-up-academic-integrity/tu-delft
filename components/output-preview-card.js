const outputPreviewCard = document.createElement('template');

outputPreviewCard.innerHTML = `

  <style>

  .output {
    border: 2px solid var(--main-blue);
    border-radius: 14px;
    margin: 30px 0px;
  }

  .output:hover {
    cursor: pointer;
    background-color: rgba(0,12,125,0.05);
  }

  .output-card-header {
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--main-blue);
  }
 
  .title {
    font-size:3em;
    line-height: 0.95em;
    font-family: "Cal Sans", sans-serif;
    padding: 20px 30px;
    border-right: 2px solid var(--main-blue);
    flex-grow: 1;
  }

  .date {
    font-size:2em;
    line-height: 0.95em;
    font-family: "Cal Sans", sans-serif;

    white-space: nowrap;

    opacity: 10%;
    padding: 10px 30px;
    text-align: right;
  }

  .summary {
    padding: 18px 30px;
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 1.1em;
  }



  @media only screen and (max-width: 480px) {
  .output-card-header {
    flex-direction: column;
    align-items: start;
  }

  .title {
    font-size: 2.3em;
    border-right: none;
    padding-bottom: 0px;
  } 

  .date { 
    opacity: 30%;
    font-size: 1.4em;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  
  
  }
  </style>
  <div class="output">
    <div class="output-card-header">
      <span class="title"><slot name="title"></slot></span>
      <span class="date"><slot name="date"></slot></span>
    </div>
    <div class="summary"><slot name="summary"></slot></div>
    </div>
  </div>
`;


class OutputPreview extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(outputPreviewCard.content.cloneNode(true));


  }

}

customElements.define('output-item', OutputPreview);