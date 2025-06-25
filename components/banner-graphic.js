const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=call_made" />
  <style>
  header {
      color: #fafafa;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      width: calc(100vw - 2*var(--side-margin-content));
      margin:28px var(--side-margin-content) 0 var(--side-margin-content);
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
  }

  #navbar {
      display: flex;
      width: 100%;
      margin: 0 20px;
  }

  .nav-item{
      padding: 5px;
      margin:5px;
      cursor: pointer;
  }

  #contact {
      display: flex;
      align-items: center;

      cursor: pointer;
      white-space: nowrap;
      border-radius: 30px;
      background-color: rgba(0,0,0,0.2);
      padding: 12px 13px 11px 16px;
  }
  </style>
  <header>
  <div id="orgname">TU Delft Bottom-Up Integrity</div>
  <div id="navbar">
      <div class="nav-item">Aims</div>
      <div class="nav-item">Motivation</div>
      <div class="nav-item">Output</div>
      <div class="nav-item" onclick="window.location.href='people.html'">Members</div>
  </div>
  <div id="contact" onclick="window.open('mailto:tobias.verkerk@proton.me')">
      <div>Get in Touch</div>
      <span class="material-symbols-outlined" style="padding: 2px;">
          call_made
      </span>
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