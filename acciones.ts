export class Acciones{
    private nombre_de_compannia: string;
    private numero_de_accion: number;
    private precio_por_accion: number;
    private nombre_del_usuario: string;

    constructor(nombre_de_compannia: string, numero_de_acciones: number, precio_por_accion: number, nombre_del_vendedor: string){
        this.nombre_de_compannia = nombre_de_compannia;
        this.numero_de_accion = numero_de_acciones;
        this.precio_por_accion = precio_por_accion;
        this.nombre_del_usuario = nombre_del_vendedor;

    }

    public get_nombre_de_la_compannia(): string{
        return this.nombre_de_compannia;
    }

    public get_numero_de_accion(): number{
        return this.numero_de_accion;
    }

    public get_precio_por_accion(): number{
        return this.precio_por_accion;
    }

    public get_nombre_del_usuario(): string{
        return this.nombre_del_usuario;
    }


}