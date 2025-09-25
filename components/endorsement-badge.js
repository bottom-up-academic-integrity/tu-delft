const endorsementBadgeTemplate = document.createElement('template');

endorsementBadgeTemplate.innerHTML = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Cal+Sans&display=swap" rel="stylesheet">

<style>
  #endorsement-badge {
    width: 100%;
    font-size: 1.05em;
    color: var(--text-blue); /* darker version of --main-blue */

    font-family: "Atkinson Hyperlegible", sans-serif;
    font-weight: 400;

    display:flex;
    justify-content:flex-end;
  }

  #badge {
    display: flex;
    align-items:center;
    color:inherit;
    text-decoration: none;

    cursor: pointer;
    white-space: nowrap;
    border-radius: 30px;
    border: solid 2px var(--text-blue);
    padding: 6px 16px 5px 16px;
    margin-right: 10px;
    font-weight: bold;
  
  }

  #badge:hover{
    background-color: rgba(0,0,0,0.1);
  }
  
  .icon {
    width: 1em;
    height: 1em;
    background-color: var(--text-blue);
  }

  @media only screen and (max-width: 480px) {

  }
}
</style>

<div id="endorsement-badge">
  <div id="badge">
    <div><span id="endorsement-counter"></span> Endorsements </div>
    <div class="icon" style="font-size: 1.7em; -webkit-mask: url(/icons/volunteer_activism_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg) no-repeat center;"></div>
  <div>
</div> 

`;


class EndorsementBadge extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(endorsementBadgeTemplate.content);
    //this.get_endorsements();

    shadowRoot.getElementById('badge').addEventListener('click', () => {
    const anchor = document.querySelector('endorsement-list-component');
    
    // Scrolls the element into view
    anchor.scrollIntoView({
      behavior: 'smooth', // Makes the scroll animation smooth
      block: 'start'        // Scrolls the end of the element to the bottom of the viewport
        });
    });
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
    let counter = this.shadowRoot.querySelector("#endorsement-counter");
    counter.textContent = this.num_anonymous + this.endorsements.length;
  }

}

customElements.define('endorsement-badge-component', EndorsementBadge);