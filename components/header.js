const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

  <style>

  header {
      color: #fafafa;
      display: flex;
      flex-wrap: wrap;
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
      margin: 0 auto 0 20px;
      font-size: 17px;
  }

  .nav-item{
      padding: 5px 9px;
      margin:5px;
      cursor: pointer;
  }

  #header-group-right {
    display:flex;
  }

  #actionbuttons {
      display: flex;
      align-items: center;
      margin: 3px 0;
      flex-wrap: wrap;
      gap: 6px 0;
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

  /* language visibility */

  #lang-selector ul{
    display: flex;
    list-style-type: none;
    padding-inline-start:0;
  }

  #lang-selector button {
    border: none;
    background: none;
    padding: 0 4px;
    color: #fafafa;
    font-size: 1em;
  }

  [data-lang-el="en"] {
    display: var(--display-state-en);
  }

  [data-lang-el="nl"] {
    display: var(--display-state-nl);
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

    #header-group-right {
      flex-direction: column-reverse;
    }


    .bubble-button {
        padding:7px 11px 7px 14px;
        margin-left: 0px;
        margin-right: 6px;
        background-color: rgba(0,0,0,0.6);
    }

    #lang-selector ul{
      width: 100%;
    }

    .showmobile {display: block}
    .hidemobile {display: none}
  
  
  }
  </style>
  <header>
  <div id="orgname" onclick="window.location.href='/index.html'"><img src="/media/logo-tudelft-for-integrity.png" style="height:4em;"></div>
  <div id="navbar">
      <div class="nav-item" onclick="window.location.href='/index.html'">Home</div>
      <div class="nav-item" onclick="window.location.href='/output/2025-our-moral-deliberation.html'"><span data-lang-el='en'>Our&nbsp;Deliberation</span><span data-lang-el=nl>Ons Moreel Beraad</span></div>
      <div class="nav-item" onclick="window.location.href='/about.html'"><span data-lang-el='en'>About</span><span data-lang-el=nl>Over&nbsp;ons</span></div>
  </div>
  <div id="header-group-right">
   <nav aria-label="Language selector" id="lang-selector">
      <ul>
        <li data-lang-el='en' style="opacity:30%"><button aria-label="Switch to English" lang="en" onclick="setLanguage('en')">EN</button></li>
        <li data-lang-el='nl' ><button aria-label="Switch to English" lang="en" onclick="setLanguage('en')">EN</button></li>
        <span style="opacity:30%">/</span>
        <li data-lang-el='en'><button aria-label="Lees in het Nederlands" lang="nl" onclick="setLanguage('nl')">NL</button></li>
        <li data-lang-el='nl' style="opacity:30%"><button aria-label="Lees in het Nederlands" lang="nl" onclick="setLanguage('nl')">NL</button></li>
      </ul>
    </nav>
    <div id="actionbuttons">
      <div id="complaint" class="bubble-button" onclick="window.location.href='/actions/complaint-form.html'">
          <div class="hidemobile"><span data-lang-el='en'>Report&nbsp;an&nbsp;Incident</span><span data-lang-el=nl>Meld&nbsp;een&nbsp;Incident</span></div>
          <div class="showmobile"><span data-lang-el='en'>Report</span><span data-lang-el=nl>Meld</span></div>
          <div class="icon" style="font-size: 1.5em; -webkit-mask: url(/icons/fmd_bad_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24.svg) no-repeat center;"></div>
        </div>
      <div id="endorsement" class="bubble-button" onclick="window.open('https://forms.office.com/e/qYGAxbVee1')">
        <div class="hidemobile"><span data-lang-el='en'>Endorse&nbsp;our&nbsp;Message</span><span data-lang-el=nl>Steun&nbsp;onze&nbsp;Boodschap</span></div>
        <div class="showmobile"><span data-lang-el='en'>Endorse</span><span data-lang-el=nl>Steun</span></div>
        <div class="icon" style="font-size: 1.5em; -webkit-mask: url(/icons/volunteer_activism_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24.svg) no-repeat center;"></div>
      </div>
      <div id="contact" class="bubble-button" onclick="window.open('https://forms.office.com/e/5zrfcJS70Z')">
        <div class="hidemobile"><span data-lang-el='en'>Get&nbsp;in&nbsp;Touch</span><span data-lang-el=nl>Contact</span></div>
        <div class="showmobile">Contact</div>
          <div class="icon" style="font-size: 1.5em; -webkit-mask: url(/icons/call_made_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24.svg) no-repeat center;"></div>
      </div>
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