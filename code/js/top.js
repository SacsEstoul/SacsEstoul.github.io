class Top extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
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
         
         </style>
    
    
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">	  
        <meta name="author" content="Estoul">

        <meta name="description", content="Collection de Sacs Design Uniques / Handmade Tote Bags">
        <meta name="keywords", content="sacs Estoul, sacs, sacs faits main, sacoche, sacs de sport, sacs uniques, Quebec, Trois-Rivieres, bags, tote bags">	 

    `;
  }
}

customElements.define('top-component', Top);
