const endorsementListTemplate = document.createElement('template');

endorsementListTemplate.innerHTML = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Cal+Sans&display=swap" rel="stylesheet">

<style>
  #endorsement {
    font-size: 1.05em;
    max-width: 68ch;
    margin: 20px auto 0px auto;
    padding: 10px 80px;

    color: var(--text-blue); /* darker version of --main-blue */

    font-family: "Atkinson Hyperlegible", sans-serif;
    font-weight: 400;

    line-height: 1.5em;
  }
  
  #caption img {
    margin-bottom: 10px;
    width:70px;
  }

  #caption {
    font-family: "Cal Sans", sans-serif;

    text-align: center;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items:center;

    line-height: 1.0em;
    font-size: 1.3em;
  }

  #endorsement-list {
    column-count: 3;
    column-width: 170px;
    font-size: 1.1em;
    line-height: 1.1em;
  }

  .named-endorsement {
    padding: 8px 0;
  }

  .anonymous {
    color:black;
    opacity: 40%;
  }  

  .icon {
    margin-left:2px;
    width: 3em;
    height: 3em;
  }

  #padbox {margin: 0 0px;}

  [data-lang-el="en"] {
    display: var(--display-state-en);
  }

  [data-lang-el="nl"] {
    display: var(--display-state-nl);
  }

  @media only screen and (max-width: 480px) {
    #padbox {margin: 0px;}

    #endorsement {
      padding: 0px 20px;
      filter: none; 
    }  
      
    #caption {font-size: 1.2em;}

    #endorsement-list {column-count: 1}

    .named-endorsement {padding: 6px 20px;}
  }
}
</style>

<div id="endorsement">
  <div id="padbox">
  <div id="caption">
    <img src="/icons/volunteer_activism_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg">
    <span data-lang-el=en>Your peers below have endorsed this message. Will you join them in showing
    your support?</span>
    <span data-lang-el=nl>De onderstaande collega's hebben deze boodschap al gesteund. Sluit je je bij hen aan door deze boodschap ook te steunen?</span>
  </div>
  <div id="endorsement-list">
    <div class="anonymous" class="named-endorsement" hidden data-lang-el=en>And <span class="anonymous-endorsements">0</span> anonymous endorsements</div>
    <div class="anonymous" class="named-endorsement" hidden data-lang-el=nl>En <span class="anonymous-endorsements">0</span> anonieme steunbetuigingen</div>
  </div>
  <div>
</div> 

`;


class EndorsementList extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(endorsementListTemplate.content);
    //this.get_endorsements();
  }

  connectedCallback() {    
    this.datasource = this.attributes.datasource.value
    console.log(`loading endorsement data...`)
    this.loadCSV();
  }

  // get the contents of local CSV file with standard http request
  // and then pass it on to parse_encdorsements()
  async loadCSV() {
    const filePath = this.datasource 
    console.log(filePath)
    
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP error while fetching! status: ${response.status}`);
      }
      const csvString = await response.text();
      
      // Now parse the CSV string
      this.parse_endorsements(csvString);

    } catch (error) {
      console.error('Error fetching or parsing the CSV file:', error);
    }
  }

  // extra a list of filenames and number of anonymous endorsements
  parse_endorsements(csvString) {
    this.endorsements = [];
    this.num_anonymous = 0;
    for (const rawline of csvString.split("\n")) { // loop over lines
      const line = rawline.replace("\r", "").trim();

      if (line.length === 0) {continue}  // skip empty lines

      if (line.toLowerCase() === "anonymous") {
        this.num_anonymous++;
      } else {
        this.endorsements.push(line)
      }
    }

    console.log(`Found ${this.endorsements.length} named endorsements, and ${this.num_anonymous} anonymous endorsements.`)

    this.display_endorsements();  // ensure we add elements to the DOM
  }

  display_endorsements() {
    let listEl = this.shadowRoot.querySelector("#endorsement-list");

    //this.endorsements.sort(() => Math.random() - 0.5);
    this.endorsements.sort().reverse();
    for (const endorsee of this.endorsements) {
      const endorsementEl = document.createElement('div');
      endorsementEl.className = "named-endorsement" 
      endorsementEl.textContent = endorsee;
      listEl.prepend(endorsementEl)
    }

    // unhide the end section that lists the number of anonymous endorsements
    if (this.num_anonymous > 0) {
      this.shadowRoot.querySelectorAll(".anonymous-endorsements").forEach(el => el.textContent = this.num_anonymous)
      this.shadowRoot.querySelectorAll(".anonymous").forEach(el => el.removeAttribute("hidden"))
    }

  }

}

customElements.define('endorsement-list-component', EndorsementList);