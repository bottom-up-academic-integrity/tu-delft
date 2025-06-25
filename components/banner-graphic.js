const bannerTemplate = document.createElement('template');

bannerTemplate.innerHTML = `
  <style>
    #opening-graphic {
        position: relative
    }

    #opening-image {
        border-radius: 35px;
        width: calc(100vw - 2*25px);
        height: 300px;
        margin: 20px 25px;
        background-image: url("https://filelist.tudelft.nl/_processed_/b/0/csm_TU%20Delft%20Library%20headerafbeelding%20-%20zomer_10f4ed2618.webp");
        background-size: cover;
        background-position: center;
        filter: url(#duotone-deep-blue-white);        
    }

    #banner-text {
        display:block;
        font-size: 5em;
        line-height: 0.8em;
        font-weight: bold;

        color: #fafafa;

        position: absolute;
        top: 160px;
        left:50px;

        margin: 30px;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    }

    @media only screen and (max-width: 480px) {
        #opening-image {
            height: 280px;
            width: calc(100vw - 2*15px);
            margin: 15px 15px;
            border-radius: 11px
        }
    
        #banner-text{
            font-size: 3em;
            line-height: 0.9em;
            top:150px;
            left:10px;
            text-shadow: 0 0 8px rgba(0,0,0,0.7);
        }
    
    
    
    }
  </style>
    <div id="opening-graphic">
        <div id="opening-image"></div>
        <slot name="text" id="banner-text">Bottom-Up Integrity</slot>
    </div>

    <svg width="0" height="0" style="position: absolute;">
        <filter id="duotone-deep-blue-white" color-interpolation-filters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0 0 0 1 0
            "
            result="grayscale"
          />
      
          <feComponentTransfer color-interpolation-filters="sRGB" in="grayscale">
            <feFuncR type="table" tableValues="0 1" />
            <feFuncG type="table" tableValues="0 1" />
            <feFuncB type="table" tableValues="0.627 1" />
            <feFuncA type="identity" />
          </feComponentTransfer>
        </filter>
      </svg>
`;


class Banner extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(bannerTemplate.content);
  }

}

customElements.define('banner-graphic', Banner);