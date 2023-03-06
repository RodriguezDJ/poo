class Alumno{
    constructor(nombre, matricula, email) {
               this.nombre = nombre ;
               this.matricula= matricula;
               this.email = email;
    }
}


class Ui{
    addAlumno() {
   
        

    }
    delateAlumno() {

    }

     showMessage() {

     }

}

//DOM Events
document.getElementById('Alumno')
.addEventListener('submit', function(e) {
        const nombre = document.getElementById('nombre').value;
     const matricula = documnent.getElementById('matricula').value;
     const email = document.getElementById('email').value;
     console.log(nombre, matricula, email);
     const alumno = new Alumno(nombre);
     const Ui =new ui();
    
     e.preventDefault();
     });
DocumentTimeline.getElementById('Alumno').addEventListener('click',function(){
    alert('bienbenid'(this.nombre))
});

console.log(Alumno);