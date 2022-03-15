class FirstPhoto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // should be a string, "1", "2", "3", etc.
    var numeroSac = this.attributes.numero.value;
    // should be a string, "sacs_1_9", "sacs_10_18", etc.
    var pageSac = this.attributes.page.value;
    // boolean, is it on the first page (index.html) or one of the following ones (onglet#.html). Used to know if we need "../" in link
    var isLanding = this.attributes.landing_page.value;
    
    var strSac = "sac" + numeroSac;
    
    var nomNum = "nom" + numeroSac;
    var prixNum = "prix" + numeroSac;
    
    if (isLanding) {
      var addressHTML = "sacs_details/" + pageSac + "/" + strSac + ".html";
      var addressJPG = "sacs_details/" + pageSac + "/" + strSac + ".JPG";  
    }  
    else {
      var addressHTML = "../sacs_details/" + pageSac + "/" + strSac + ".html";  
      var addressJPG = "../sacs_details/" + pageSac + "/" + strSac + ".JPG";
    }  
    
    
    function getElement(id) {
      return document.getElementById(id);
    }

    fetch('../../ESTELLE/info_sacs.json')
    .then(res => res.json())
    .then((res) => {
    var donnees = res.données_sacs;
    var infoSac = donnees[numeroSac];
      
    var nomSac = infoSac.nom;
	  var prixSac = infoSac.prix;
      
      
   // Noms:
   getElement(nomNum).innerHTML = nomSac;
  
	
   // Prix: 	   
   getElement(prixNum).innerHTML =  prixSac;

 	       
   });	  
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
    
    <div class="col-md-4 portfolio-item">
    
    <p style="font-size:25px;text-align:center;font-family:Optima"><a href=${{addressHTML}} id=${{nomNum}}></a></p>        
      <a href=${{addressHTML}}>
		    <img class="img-responsive" style="text-align:center;width:350px;height:525px;" src=${{addressJPG}} onerror="this.style.visibility = 'hidden'"></img>
	    </a>
      
    <h3 id=prixNum></h3>               
    </div>
    
    

    `;
  }
}

customElements.define('firstphoto-component', FirstPhoto);


