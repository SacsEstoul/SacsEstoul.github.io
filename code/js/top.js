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

        <!--  a)  Les 2 lignes suivantes servent à la découverte du site sur Google	   -->
        <meta name="description", content="Collection de Sacs Design Uniques / Handmade Tote Bags">
        <meta name="keywords", content="sacs Estoul, sacs, sacs faits main, sacoche, sacs de sport, sacs uniques, Quebec, Trois-Rivieres, bags, tote bags">	 
        <!--  a)   -->

        <!--  1) CSS style using bootstrap -->
        <link href="code/css/bootstrap.css" rel="stylesheet">
        <!-- Custom CSS for the '3 Col Portfolio' Template -->
        <link href="code/css/3-col-portfolio.css" rel="stylesheet">

        <script src="code/js/header.js" type="text/javascript" defer></script>
    `;
  }
}

customElements.define('top-component', Top);
