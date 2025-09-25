const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=call_made" />
  <style>
    footer {
        margin-top: 50px;
        display: flex;
        background-color: #222222;
        justify-content: space-around;

        color: #fafafa;
        font-family: Arial, Helvetica, sans-serif;
        min-height: 150px;
    }

    footer #short-text {
        width: 25%;
        margin: 30px;
        color: rgba(255,255,255,0.5);;
    }

    footer button {
        margin: 30px;
        height: 20px;
        cursor: pointer;
        padding: 8px 8px 25px 8px;
        color: rgba(255,255,255,0.5);
        border: 1px solid rgba(255,255,255,0.5);
        border-radius: 7px;
        background-color: transparent;
    }

     /* Style rules for phone  */
  @media only screen and (max-width: 480px) {
    footer {
      flex-direction: column;
    }

    footer #short-text{
      width:auto;
      margin:20px 20px 5px 20px;
    }
  
  
  }
  </style>
    <footer>
        <div id="short-text">TU Delft for Integrity is a grassroots initiative composed of academic staff, researchers and students. It is not organised, run by, or formally represent the TU Delft.
        <br><br>     
        tudelft.forintegrity.nl is independent of other subdomains under the forintegrity.nl domain.
        </div>
        <button onclick="window.open('https://forms.office.com/e/5zrfcJS70Z')">
            Get in touch with us
        </button>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(footerTemplate.content);
  }

}

customElements.define('footer-component', Footer);