class FirstPhoto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
//     // should be a string, "1", "2", "3", etc.
       var numSac = this.attributes.numero.value;
       var nomSac = "sac" + numSac;
       var prixSac = "prix" + numSac;	  
	  
       fetch('../../ESTELLE/info_sacs.json')
       .then(res => res.json())
       .then((res) => {
       var data = res.données_sacs;  
       var sac = data[nomSac];
       var nom = sac.nom;
       var prix = sac.prix;	       
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
    </style>
    
    <div class="col-md-4 portfolio-item">
    <p style="font-size:25px;text-align:center;font-family:Optima"><a href="sacs_details/sacs_1_9/sac1.html">${nom}</a></p>   
    <a href="sacs_details/sacs_1_9/sac1.html">
       <img class="img-responsive" style="text-align:center;width:350px;height:525px;" src="photos/sacs_1-9/sac1.JPG" onerror="this.style.visibility = 'hidden'"></img>
    </a>
    <h3>prix</h3> 	                               
    </div>	
    
	
    `;
  }
}

customElements.define('first-photo', FirstPhoto);


