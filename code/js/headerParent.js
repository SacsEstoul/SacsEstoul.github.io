class HeaderP extends HTMLElement {
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
    
    <nav class="navbar navbar-fixed-top navbar-inverse" role="navigation">
        <div class="container">
        <div class="collapse navbar-collapse navbar-ex1-collapse">
        
        <ul class="nav navbar-nav"> 
	      <li><a href="../index.html">&#127968; Accueil</a></li>
	      <li><a href="../barre_en_haut/nouveautes.html">&#128171; NOUVEAUTÉS!</a></li>  		  
        <li><a href="mailto:sacs.estoul@gmail.com">&#x1F4E7; Adresse Courriel</a></li>	  		  		  		  
        <li><a href="../barre_en_haut/petite_histoire.html">&#128092; La petite histoire</a></li>
	      <li><a href="../barre_en_haut/faq.html">&#10067; FAQ</a></li>	
        <li><a href="../barre_en_haut/rabais.html">&#x2702; Par ici les rabais!</a></li>
        <div class="bottom-two"></div>
		  
	      <a style="font-family:Didot;font-size:48px;color:#5F9EA0" href="../index.html">&nbsp;Les Sacs ESTOUL</a>  
	      <div class="bottom-one"></div>   		  
        
        </ul>      
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav>
    `;
  }
}

customElements.define('header-componentP', HeaderP);






