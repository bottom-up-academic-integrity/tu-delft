const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

  <style>

  header {
      color: #fafafa;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      width: calc(100vw - 2*var(--side-margin-content));
      margin:26px var(--side-margin-content) 0 var(--side-margin-content);
      padding: 10px 0;

      border-bottom: 1px solid #fafafa;
      position: absolute;
      top:0;
      left:0;
      z-index: 1;
  }

  header #orgname {
      font-weight: bold;
      white-space: nowrap;
      cursor: pointer;
  }

  #navbar {
      display: flex;
      width: 100%;
      margin: 0 20px;
  }

  .nav-item{
      padding: 5px 9px;
      margin:5px;
      cursor: pointer;
  }

  #actionbuttons {
      display: flex;
      align-items: center;
  }

  .bubble-button {
      display: flex;
      align-items: center;

      cursor: pointer;
      white-space: nowrap;
      border-radius: 30px;
      background-color: rgba(0,0,0,0.2);
      padding: 12px 13px 11px 16px;
      margin-left:10px;
  }

  .bubble-button:hover {
      background-color: rgba(0,0,0,0.3);
  }

  .bubble-button span{
    margin-left: 4px;
  }

  .bubble-button .icon {
    margin-left:5px;
    width: 1em;
    height: 1em;
    background-color: #fafafa;
  }

.showmobile {display: none}
.hidemobile {display: block}

  @media only screen and (max-width: 480px) {
    header {
        flex-direction:column;
        align-items:flex-start;
        margin:22px var(--side-margin-content) 0 var(--side-margin-content);
        padding-bottom: 12px;
    }

    header #orgname {
        height: auto;
        padding-left:10px;
    }

    #navbar {
        margin: 5px 0;
    }

    .nav-item {
        padding-left: 12px;
        padding-right: 20px;
        margin-left:0;
    }

    .bubble-button {
        padding:7px 11px 7px 14px;
        margin-left: 0px;
        margin-right: 6px;
        background-color: rgba(0,0,0,0.3);
    }

    .showmobile {display: block}
    .hidemobile {display: none}
  
  
  }
  </style>
  <header>
  <div id="orgname" onclick="window.location.href='/index.html'"><img src="/media/logo-tudelft-for-integrity.png" style="height:4.5em;"></div>
  <div id="navbar">
      <div class="nav-item" onclick="window.location.href='/index.html'">Home</div>
      <div class="nav-item" onclick="window.location.href='/output/2025-our-moral-deliberation.html'">Our Deliberation</div>
      <div class="nav-item" onclick="window.location.href='/about.html'">About</div>
  </div>
  <div id="actionbuttons">
      <div id="endorsement" class="bubble-button" onclick="window.open('https://forms.office.com/e/qYGAxbVee1')">
        <div class="hidemobile">Endorse our Message</div>
        <div class="showmobile">Endorse Message</div>
        <div class="icon" style="font-size: 1.5em; -webkit-mask: url(/icons/volunteer_activism_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24.svg) no-repeat center;"></div>
    </div>
    <div id="contact" class="bubble-button" onclick="window.open('https://forms.office.com/e/5zrfcJS70Z')">
        <div>Get in Touch</div>
        <div class="icon" style="font-size: 1.5em; -webkit-mask: url(/icons/call_made_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24.svg) no-repeat center;"></div>
    </div>
  </div>
  </header>
`;


class Header extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(headerTemplate.content);


  }

}

customElements.define('header-component', Header);