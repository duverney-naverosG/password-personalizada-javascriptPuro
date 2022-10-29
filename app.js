const formulario = document.getElementById("formulario");
const divCamposDib = document.getElementById("divCamposDib");
const divCamposcon = document.getElementById("divCont");
let numCampo = 0; 
let palabras = ""
let cantidad = 0;

divCamposDib.addEventListener("submit",(e)=>{
    e.path[3].addEventListener('submit',(event)=>{
        let cantidadInput = event.path[0].length-2;
        for(let i=0; i<cantidadInput;i++){
            palabras += event.path[0][i].value;
        }
        cantidad = event.path[0][2].value;
        CrearContra(palabras, cantidad);
    })
    e.preventDefault();
})


formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    numCampo = e.path[0][0].value;
    divCamposDib.innerHTML = `<div class="container mt-4 mb-4">
        <div class="row ">
            <div class="col-sm-3">

            </div>
            <div class="col-sm-6 p-3 bg-light rounded shadow-lg">
                <label for="exampleInputEmail1" class="form-label text-center fw-light">rellena los campos con los nombres, numero o caracteres que quieran que hagan parte de tu contraseña</label>
                <form id="formCampos">
                    <div class="row g-3 align-items-center mt-2" id="campos">
                
                    </div>

                </form>
            </div>
            <div class="col-sm-3">
            </div>
        </div>
    </div>`
    formulario.reset()
    const campos = document.getElementById("campos");
    for(let i=0; i<numCampo; i++){
        campos.innerHTML += `<div class="col-4 text-center fw-bold">
            <label>campo ${(i+1)}</label>
            </div>
            <div class="col-8">
                <input type="text" class="form-control" required autocomplete="off">
            </div>`
    }
    
    campos.innerHTML += `<div class="col-9 text-center fw-bold">
    <label>DIGITE EL NUMERO DE CARACTERES DE LA CONTRASEÑA</label>
    </div>
    <div class="col-3">
        <input type="number" class="form-control " min="10" max="20" value="10" required>
    </div>
    <div class="text-center">
            <button type="submit" class="btn btn-warning ">enviar</button>
        </div>`
})

const CrearContra = (palabra, cant) =>{
    let clave = "";
    for(let i=0; i<cant;i++){
        clave += palabra.charAt(Math.floor((Math.random() * (cant - 0 + 1)) + 0));
    }
    palabras=""
    divCamposcon.innerHTML = `<div class="container mt-4 mb-3">
    <div class="row ">
        <div class="col-sm-3">

        </div>
        <div class="col-sm-6 p-3 bg-light rounded shadow-lg">
            <label>TU CONTRASEÑA ES ${clave}</label>
        </div>
        <div class="col-sm-3">
        </div>
    </div>

</div>`
}