class Header extends HTMLElement {
  constructor() {
    super();
  }
}


connectedCallback() {
  this.innerHTML = `
    <style>
      nav {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:  #0a0a23;
      }

      ul {
        padding: 0;
      }

      a {
        font-weight: 700;
        margin: 0 25px;
        color: #fff;
        text-decoration: none;
      }

      a:hover {
        padding-bottom: 5px;
        box-shadow: inset 0 -2px 0 0 #fff;
      }
    </style>
    
  <header>	  
  <!--  b) Les prochaines lignes sont pour la barre d'en haut du site - Nom, contact, descriptions avec liens	 -->	  
    <nav class="navbar navbar-fixed-top navbar-inverse" role="navigation">
      <div class="container">
      
	      
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav"> 
	          <li><a href="#">&#127968; Accueil</a></li>
	          <li><a href="barre_en_haut/nouveautes.html">&#128171; NOUVEAUTÉS!</a></li>  		  
            <li><a href="mailto:sacs.estoul@gmail.com">&#x1F4E7; Adresse Courriel</a></li>	  		  		  		  
            <li><a href="barre_en_haut/petite_histoire.html">&#128092; La petite histoire</a></li>
	          <li><a href="barre_en_haut/faq.html">&#10067; FAQ</a></li>	
            <li><a href="barre_en_haut/rabais.html">&#x2702; Par ici les rabais!</a></li>		  	  
            <div class="bottom-two"></div>
		  
	          <a style="font-family:Didot;font-size:48px;color:#5F9EA0" href="#">&nbsp;Les Sacs ESTOUL</a>  
	          <div class="bottom-one"></div>   
		  
          </ul>
          <!-- 	<img class="logo_topright" title="logo estoul" src="ESTELLE/logo_photos/logo.JPG" alt="logo"></img>    	   -->
       </div><!-- /.navbar-collapse -->
     </div><!-- /.container -->
   </nav>
</header>	     
    
    
    
    
    `;
  }
}    



// {extends: 'nav'} as 3rd arg
customElements.define('header-component', Header);
