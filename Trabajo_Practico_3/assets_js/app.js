let listaMenu = [
    'Admnistrador de tareas', 
    "1.Agregar Tarea", 
    "2.listar Tareas", 
    "3.Editar Tareas" ,
    "4.Eliminar Tareas"
];

let tareas = []
function mostrarMenu() {
    let listaVertical = parseInt(prompt(listaMenu.join("\n")));
    while (listaVertical!==5 || 0){
        switch (listaVertical){
            case 1:
                agregarTarea();
                break;
            case 2:
                ListarTareas();
                break;
            case 3:
                editarTarea();
                break;
            case 4:
                eliminarTarea();
                break;
                default:
                    alert("Opcion no valida");
                    break;
        }
        listaVertical = parseInt(prompt(listaMenu.join("\n")));
    }
}
function agregarTarea(){
    let tarea = prompt('Ingrese una tarea');
    if (tarea && tarea.trim()) {
        tareas.push(tarea);
        alert("Tarea agregada: "+ tarea);
    }else {
        alert('Ingrese una tarea valida');
    }
}
function ListarTareas() {
    if (tareas.length === 0) {
        alert('No hay tareas en la lista.');
    }else {
        let lista = 'Lista de Tareas:\n';
        tareas.forEach((tarea, index) => {2
            lista += `${index + 1}. ${tarea}\n`;
        });
        alert(lista);
    }
}
mostrarMenu();