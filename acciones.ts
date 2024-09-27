export class Acciones{
    private nombre_de_compannia: string;
    private numero_de_accion: number;
    private precio_de_accion: number;
    private cantidad_de_accion: string;
    private nombre_del_usuario: string;

    constructor(){
        this.nombre_de_compannia = "";
        this.numero_de_accion = 0;
        this.precio_de_accion = 0;
        this.cantidad_de_accion = "";
        this.nombre_del_usuario = "";
    }

    public get_nombre_de_la_compannia(): string{
        return this.nombre_de_compannia;
    }

    public get_numero_de_accion(): number{
        return this.numero_de_accion;
    }

    public get_precio_de_accion(): number{
        return this.precio_de_accion;
    }

    public get_cantidad_de_accion(): string{
        return this.cantidad_de_accion;
    }

    public get_nombre_del_dueño(): string{
        return this.nombre_del_usuario;
    }

    public generar_comprador(nombre_de_compannia: string, acciones_en_venta: number, precio_de_venta: number, cantidad_de_acciones: string, nombre_del_vendedor: string): void{
        this.nombre_de_compannia = nombre_de_compannia;
        this.numero_de_accion = acciones_en_venta;
        this.precio_de_accion = precio_de_venta;
        this.cantidad_de_accion = cantidad_de_acciones;
        this.nombre_del_usuario = nombre_del_vendedor;
    }

    public generar_vendedor(nombre_de_compannia: string, precio_de_compra: number, nombre_del_comprador: string):void{
        this.nombre_de_compannia = nombre_de_compannia;
        this.precio_de_accion= precio_de_compra;
        this.nombre_del_usuario = nombre_del_comprador;
    }
}