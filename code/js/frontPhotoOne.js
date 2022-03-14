class FrontPhoto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var photoNum = this.attributes.photonumero.value 
    var photoLink =  "sacs_details/sacs_1_9/sac" + photoLink + ".html"
    this.innerHTML = `
    
    <style>
    .bottom-one {
         margin-bottom: 1cm;
         overflow: hidden; 
    }
    .bottom-two {
         margin-bottom: 2cm;
         overflow: hidden; 	
    }
    .bottom-three {
         margin-bottom: 2cm;
         overflow: hidden; 	
    }    

    `;
  }
}

customElements.define('onephoto-component', FrontPhoto);


