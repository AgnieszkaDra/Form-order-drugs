// export const windowSize = window.addEventListener('resize', function(){
//     const prescriptionFieldset = this.document.querySelector('.prescription')
//     if(this.window.matchMedia("(max-width:700px)")){
//       prescriptionFieldset.classList.add('element--hidden-mobile')
    
//   }else {
//     prescriptionFieldset.classList.remove('element--hidden-mobile')
//     // ten warunek działa dopiero po odświeżeniu strony
//   }}
  
//   )

window.addEventListener('resize', function(){
    const mql = window.matchMedia("(max-width: 700px)");
  const prescriptionFieldset = document.querySelector('.prescription')
  const paperPrescriptionClone = prescriptionFieldset.cloneNode(true)
  const textareaPinPesel = document.querySelector('.orderDrugsForm.fieldset.electronicPrescription')
 if(mql.matches){
  
  prescriptionFieldset.classList.add('element--hidden-mobile')
  textareaPinPesel.appendChild(paperPrescriptionClone)


 } else{
  prescriptionFieldset.classList.remove('element--hidden-mobile')
  textareaPinPesel.remove(paperPrescriptionClone)
 }
})

windowSize()

 