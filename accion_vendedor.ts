export class AccionVendedor{
    private nombre_de_compannia: string;
    private acciones_en_venta: number;
    private precio_de_venta: number;
    private cantidad_de_acciones: string;
    private nombre_del_vendedor: string;

    constructor(nombre_de_compannia: string, acciones_en_venta: number, precio_de_venta: number, cantidad_de_acciones: string, nombre_del_vendedor: string){
        this.nombre_de_compannia = nombre_de_compannia;
        this.acciones_en_venta = acciones_en_venta;
        this.precio_de_venta = precio_de_venta;
        this.cantidad_de_acciones = cantidad_de_acciones;
        this.nombre_del_vendedor = nombre_del_vendedor;
    }

    public get_nombre_de_la_compannia(): string{
        return this.nombre_de_compannia;
    }

    public get_acciones_en_venta(): number{
        return this.acciones_en_venta;
    }

    public get_precio_de_venta(): number{
        return this.precio_de_venta;
    }

    public get_cantidad_de_acciones(): string{
        return this.cantidad_de_acciones;
    }

    public get_nombre_del_vendedor(): string{
        return this.nombre_del_vendedor;
    }
}