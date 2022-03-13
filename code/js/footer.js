class Footer extends HTMLElement {
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
         
         <script type="text/javascript">
             var dt = new Date();
             document.getElementById('getCurrentDate').innerHTML = dt.getFullYear();
         </script>             
    
         <footer>
         <div class="row">
         <div class="col-lg-12">
         
		     <p style="color:#5F9EA0"><strong>Les Sacs Estoul </strong><span id="getCurrentDate"></span></p>
		     <a href="mailto:sacs.estoul@gmail.com">sacs.estoul@gmail.com</a>
		     </br>
         <p style="color:#5F9EA0"> 377 rue Farmer</br>
                                   Trois-Rivières, Québec</br>
                                   G9A 3E8</p>
         </div>
         </div>
         </footer> 

    `;
  }
}

customElements.define('footer-component', Footer);
