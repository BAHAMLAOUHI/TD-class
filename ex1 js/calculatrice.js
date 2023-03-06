//pour l'unicité du choix du checkbox!
let checkboxes=document.querySelectorAll('input[type="checkbox"]');
let operator='';
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (event) => {
      if (event.target.checked) {
         operator=event.target.value;
         checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });
  


  let nombre=document.querySelector("#nombre");
  let button=document.querySelectorAll('button');
  let resultat=document.querySelector("#resultat");
  let calc=0;
  console.log(button); 
   
  button.forEach((btn)=>{
    btn.addEventListener('click', (event) => {
       if ( event.target.innerText =='Calculer'){
      
        //if (typeof(nombre.value)=='string'){
            //alert('veuller saisir un nombre')}

        switch(operator){
            case 'ln':  
             calc= Math.log(nombre.value);break
            case 'ln10': 
             calc= Math.log10(nombre.value);break
            case  'ln2' :
             calc= Math.log2(nombre.value);break
            default : alert('veuiller choisir un operateur')
        }
        
        resultat.value=calc;
       }else{
        nombre.value='';
        resultat.value=0;       }
    })
  })
  
  //console.log(nombre);


