class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
  // argument is position == 1, 2, or 3, for root, parent, and grand-parent directory. Default is parent. 	  
    var linkPosition = this.attributes.position.value;	  
       if (linkPosition == 3) {
	   var linkAccueil = "../../index.html";
	   var linkNouveaute = "../../barre_en_haut/nouveautes.html";
	   var linkHistoire = "../../barre_en_haut/petite_histoire.html";
	   var linkFAQ = "../../barre_en_haut/faq.html";
	   var linkRabais = "../../barre_en_haut/rabais.html";
       }       
       else if (linkPosition == 1) {
	   var linkAccueil = "#";
	   var linkNouveaute = "barre_en_haut/nouveautes.html";
	   var linkHistoire = "barre_en_haut/petite_histoire.html";
	   var linkFAQ = "barre_en_haut/faq.html";
	   var linkRabais = "barre_en_haut/rabais.html";	       
       }
       else {  
	   var linkAccueil = "../index.html";
	   var linkNouveaute = "../barre_en_haut/nouveautes.html";
	   var linkHistoire = "../barre_en_haut/petite_histoire.html";
	   var linkFAQ = "../barre_en_haut/faq.html";
	   var linkRabais = "../barre_en_haut/rabais.html";	       
        	    
       }
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
    
    <nav class="navbar navbar-fixed-top navbar-inverse" role="navigation">
        <div class="container">
        <div class="collapse navbar-collapse navbar-ex1-collapse">
        
        <ul class="nav navbar-nav"> 
	    <li><a href="${{linkAccueil}}">&#127968; Accueil</a></li>
	    <li><a href="${{linkNouveaute}}">&#128171; NOUVEAUTÉS!</a></li>  		  
            <li><a href="mailto:sacs.estoul@gmail.com">&#x1F4E7; Adresse Courriel</a></li>	  		  		  		  
            <li><a href="${{linkHistoire}}">&#128092; La petite histoire</a></li>
	    <li><a href="${{linkFAQ}}">&#10067; FAQ</a></li>	
            <li><a href="${{linkRabais}}">&#x2702; Par ici les rabais!</a></li>
	    
            <div class="bottom-two"></div>
		  
	    <a style="font-family:Didot;font-size:48px;color:#5F9EA0" href="#">&nbsp;Les Sacs ESTOUL</a>  
	    
	    <div class="bottom-one"></div>   		  
        </ul>
        
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav>
    `;
  }
}

customElements.define('header-component', Header);


