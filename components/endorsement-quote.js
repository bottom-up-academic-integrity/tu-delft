const endorsementTemplate = document.createElement('template');

endorsementTemplate.innerHTML = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Cal+Sans&display=swap" rel="stylesheet">

<style>
    #endorsement {
        margin: 50px 0 40px 0;
    }

    #message-body {
        display:block;
        position: relative;
        padding: 20px;
    }

    #quote-open {
        display: inline-block;
        transform: scale(3) translate(0px, 2px);
    }

    #quote-close {
        display: inline-block;
        transform: scale(3) translate(3px, 2px);
    }

    #endorsement-author {
        text-align:right;
        margin-top: 5px;
    }
}
</style>

<div id="endorsement">
    <div id="endorsement-message">
          <span id="quote-open">“</span>&nbsp;&nbsp;<slot name="message"></slot><span id="quote-close">”</span>
    </div>
    <div id="endorsement-author">
      —&nbsp;<slot name="author"></slot>
    </div>
</div> 

`;


class EndorsementQuote extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(endorsementTemplate.content.cloneNode(true));
  }

}

customElements.define('endorsement-quote-component', EndorsementQuote);