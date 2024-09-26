export class AccionComprador{
    private nombre_de_compannia: string;
    private precio_de_compra: number;
    private nombre_del_comprador: string;

    constructor(nombre_de_compannia: string, precio_de_compra: number, nombre_del_comprador: string){
        this.nombre_de_compannia = nombre_de_compannia;
        this.precio_de_compra = precio_de_compra;
        this.nombre_del_comprador = nombre_del_comprador;
    }

    public get_nombre_de_la_compannia(): string{
        return this.nombre_de_compannia;
    }

    public get_precio_de_compra(): number{
        return this.precio_de_compra;
    }

    public get_nombre_del_comprar(): string{
        return this.nombre_del_comprador;
    }
}