const documentTemplate = document.createElement('template');

documentTemplate.innerHTML = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Cal+Sans&display=swap" rel="stylesheet">

<style>
#document {
  font-size: 1.05em;
  max-width: 75ch;
  margin: 0 auto 50px auto;
  background-color: #fafafa;
  padding: 40px 80px;

  color: var(--text-blue); /* darker version of --main-blue */
  filter:drop-shadow(0px 2px 2px #9e9e9e);

  font-family: "Atkinson Hyperlegible", sans-serif;
  font-weight: 400;

  line-height: 1.5em;
}

#document #title{
    font-size: 5.2em;
    font-weight: bold;
    font-family: "Cal Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height:1em;
    margin: 10px 0 20px 0;
}

#document #subtitle{
    font-size: 1.8em;
    line-height: 0.99em;
    font-family: "Cal Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 5px;
}

#document #date{
  font-family: "Cal Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  opacity: 20%;
}

#document #body-content{
  margin-top:15px;
}

#document h2 {
    line-height: 1.5em;
}

::slotted(.actionbuttons) {
  display: flex;
  flex-wrap: wrap;
}
            
@media only screen and (max-width: 480px) {
#document {
    font-size: 1em;
    margin: 0 auto 5px auto;
    padding: 30px 16px;
    filter: none; */
}

#document #title{
    font-size: 3em;
    line-height: 0.95em;;
}

#document #subtitle{
    font-size: 1.5em;
    line-height: 1.1em;
    margin: 0 0 7px 0;
}
}
</style>

<div id="document">
    <div id="title">
      <slot name="title"></slot>
    </div>
    <div id="subtitle">
      <slot name="subtitle"></slot>
    </div>
    <div id="date">
      <slot name="date"></slot>
    </div>
    <div id="body-content">
      <!-- converted using https://text-html.com/ -->
      <slot name="body-content"></slot>
      <slot></slot>
    </div>
    <div id="call-to-action">
      <slot name="buttons"></slot>
    </div>
    <div id="author-list">
      <slot name="authors"></slot>
    </div>
</div> 

`;


class Document extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(documentTemplate.content);
  }

}

customElements.define('document-component', Document);