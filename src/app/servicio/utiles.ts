export class utiles {

    private var1: string = 'preba de variable 1';
    private var2: number = 123;

    public generarAlertas() {
        let message;
        return message = {
            alerta:`<div class="alert alert-success" role="alert">
            Se guardo con exito
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>`,
            error: `<div class="alert alert-danger" role="alert">
            Error al guardar
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>`
    }
}


}// fin de clase 