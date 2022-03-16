class FirstPhoto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
//     // should be a string, "1", "2", "3", etc.
//     var numeroSac = this.attributes.numero.value;
//     // should be a string, "sacs_1_9", "sacs_10_18", etc.
//     var pageSac = this.attributes.page.value;
//     // temporary, until all pageSac are the same for photos and pages suivantes	  
//     var pagePhoto = this.attributes.page_photo.value;
	  
//     // "true" or "false" (str), is it on the first page (index.html) or one of the following ones (onglet#.html).
//     // Used to know if we need "../" in link
//     var isLanding = this.attributes.landing_page.value;
    
//     var strSac = "sac" + numeroSac;
    
//     var nomNum = "nom" + numeroSac;
//     var prixNum = "prix" + numeroSac;
    
//     if (isLanding == "true") {
//       var addressHTML = "sacs_details/" + pageSac + "/" + strSac + ".html";
//       var addressJPG = "sacs_details/" + pagePhoto + "/" + strSac + ".JPG";  
//     }  
//     else {
//       var addressHTML = "../sacs_details/" + pageSac + "/" + strSac + ".html";  
//       var addressJPG = "../sacs_details/" + pagePhoto + "/" + strSac + ".JPG";
//     }  
//     var addressHTML = "sacs_details/sacs_1_9/sac1.html" 
//     var addressJPG = "sacs_details/sacs_1-9/sac1.JPG"  
    
    
    


    fetch('ESTELLE/info_sacs.json')
    .then(res => res.json())
    .then((res) => {
    const data = res.données_sacs;
    var infoSac = data.sac1;
      
    var nomSac = infoSac.nom;
    var prixSac = infoSac.prix;
    var typeSac = typeof(nomSac);
             
   });	
	  
	  
//         <div class="col-md-4 portfolio-item">
//           <p style="font-size:25px;text-align:center;font-family:Optima"><a href="sacs_details/sacs_10_18/sac10.html">${nomSac}</a></p>
//           <a href="sacs_details/sacs_1_9/sac1.html">
// 		  <img class="img-responsive" style="text-align:center;width:350px;height:525px;" src="photos/sacs_1-9/sac1.JPG" onerror="this.style.visibility = 'hidden'"></img>
// 	  </a>
//           <h3>${prixSac}</h3>
	  
//         </div>	  
    window.alert(typeSac);
    
    this.innerHTML = `
    
 
    <p>${typeSac}</p>

    `;
  }
}

customElements.define('first-photo', FirstPhoto);


