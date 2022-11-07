//VARIABLES
let datoDisco;
let datoAutor;
let datoCodigo;
let datoPista;
let datoDuracion;
let discos = [];
let disco;
let pista;
let recuentoDiscos = 0;



//INGRESAR DATOS
function Cargar(){
    datoDisco = prompt("Ingrese el nombre del disco");

    while(datoDisco.length < 1) {
        alert("Por favor completar el dato requerido");
        datoDisco = prompt("Ingrese el nombre del disco");
    }


    datoAutor = prompt("Ingrese el nombre del autor");

    while(datoAutor.length < 1) {
        alert("Por favor completar el dato requerido");
        datoAutor = prompt("Ingrese el nombre del autor");
    }

    CargarCodigo();


    
    disco = {
        Nombre: datoDisco,
        Autor: datoAutor,
        Codigo: [],
        Pistas:[],
    } 



    do{
        datoPista = prompt("Ingrese la pista");

        CargarDuracion();  

        

        pista = {
                Nombre: datoPista,
                datoDuracion: datoDuracion,
            };

            disco.Pistas.push(pista);
        
            } 
    while(confirm("¿Desea ingresar otra pista?") == true);

   
  

        disco.Codigo.push(datoCodigo)
        discos.push(disco);
        recuentoDiscos++;  

}



//CARGAR EL CÓDIGO DE DISCO
function CargarCodigo(){
    datoCodigo = Number(prompt("Ingrese el código de disco"))

    for(let h = 0; h < discos.length; h++)
        while((isNaN(datoCodigo)) || ((datoCodigo < 1) || (datoCodigo > 999)) || (datoCodigo == discos[h].Codigo)){

            if(isNaN(datoCodigo)){
                alert("La duración del CÓDIGO NUMÉRICO debe estar escrita en NÚMEROS. Ingrese un valor numérico.");

                }if(((datoCodigo < 1) || (datoCodigo > 999))){
                    alert("Código de disco inválido, por favor ingresar un número mayor a 1 y menor a 999");

                    }if(datoCodigo == discos[h].Codigo){
                        alert("Código de disco existente");}

        datoCodigo = Number(prompt("Ingrese el código de disco"));}}


//CARGAR DURACIÓN DE DISCO EN SEGUNDOS

function CargarDuracion(){
    datoDuracion = Number(prompt("Ingrese la duración de la pista en segundos"));

    while(((isNaN(datoDuracion))) || (datoDuracion > 7200)){

        if((isNaN(datoDuracion))){
            alert("Por favor ingresar el valor en números");

           }if((datoDuracion > 7200)){
            alert("La duración de la pista debe ser mayor a 0 y menor a 7200, por favor ingresar un número dentro de ese rango de valores");}

        datoDuracion = Number(prompt("Ingrese la duración de la pista en segundos"));

        }
}



//MOSTRAR DATOS
function Mostrar(){
    let html = "<ul>";
    


        for (const item of discos){
            console.log(item);
        }

        for(let i = 0; i < discos.length; i++){
            html += `<strong> Nombre: </strong> <li>${discos[i].Nombre}</li>`;
            html += `<strong> Autor: </strong> <li>${discos[i].Autor}</li>`;
            html += `<strong> Código: </strong> <li>${discos[i].Codigo}</li>`;
            
            for(let j = 0; j < disco.Pistas.length; j++){
            html += `<strong> Nombre de la pista: </strong> <li>${discos[i].Pistas[j].Nombre}</li>`;
            html += discos[i].Pistas[j].datoDuracion >= 180 ? `<strong> Duración de la pista: </strong> <li style = "color:red;">${discos[i].Pistas[j].datoDuracion}</li>` : `<strong> Duración de la pista </strong> <li>${discos[i].Pistas[j].datoDuracion}</li>`;
        }    
    }
   
        html += "</ul></div>";
    
        document.querySelector("#listas").innerHTML = html;
        document.querySelector("#recuento").innerHTML = html = recuentoDiscos;
    

}




