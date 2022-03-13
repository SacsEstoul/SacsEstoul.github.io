class Header extends HTMLElement {
  constructor() {
    super();
  }
}


connectedCallback() {
  this.innerHTML = `
        <style>
	#body {
		margin-top: 50px; /* 50px is the height of the navbar - change this if the navbarn height changes */
		overflow: hidden; 
	}

	.portfolio-item {
		margin-bottom: 25px;
	}

	#footer {
		margin: 50px 0;
		overflow: hidden; 
	}

	.bottom-tiny {
	     margin-bottom: 0.25cm;
	     overflow: hidden; 
	}

	.bottom-sm {
	     margin-bottom: 0.5cm;
	     overflow: hidden; 	
	}


	.bottom-one {
	     margin-bottom: 1cm;
	     overflow: hidden; 
	}

	.bottom-two {
	     margin-bottom: 2cm;
	     overflow: hidden; 	
	}

	.bottom-three {
	     margin-bottom: 3cm;
	     overflow: hidden; 	
	}


	.page {
	  width: 100vw;
	  height: 100vh;
	  position: fixed;
	  top: 0;
	  left: -100vw;
	  overflow-y: auto;
	  z-index: 0;
	  background-color: hsl(0,0%,100%);
	}

	.page:target {
	  left: 0vw;
	  z-index: 1;
	}


	.logo_topright {
	  position:absolute;
	  top:5px;
	  right:5px;
	  height: 160px;
	  width: 160px;	
	}


	.topright {
	    position: absolute;
	    right: 0;
	    top: 0;
	    display: block;
	    height: 130px;
	    width: 130px;
	    text-indent: -999em;
	    text-decoration: none;
	}

	.logo_bottomright {
	  position:absolute;
	  bottom:5px;
	  right:5px;
	  height: 160px;
	  width: 160px;	
	}


	.bottomright {
	    position: absolute;
	    right: 0;
	    bottom: 0;
	    display: block;
	    height: 130px;
	    width: 130px;
	    text-indent: -999em;
	    text-decoration: none;
	}


	.logo_bottomleft {
	  position:absolute;
	  bottom:5px;
	  left:5px;
	  height: 160px;
	  width: 160px;	
	}


	.bottomleft {
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    display: block;
	    height: 130px;
	    width: 130px;
	    text-indent: -999em;
	    text-decoration: none;
	}


	.link_border {
	    border:2px;
	    border-style:solid;
	    border-color:#5F9EA0;
	    padding:0.5em;	
	}	
        </style>
	<header>	    
	<nav class="navbar navbar-fixed-top navbar-inverse" role="navigation">
	<div class="container">

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
	</div><!-- /.navbar-collapse -->
	</div><!-- /.container -->
	</nav>
	</header>	     
    
    
    
    
    `;
  }
}    



// {extends: 'nav'} as 3rd arg
customElements.define('header-component', Header);
