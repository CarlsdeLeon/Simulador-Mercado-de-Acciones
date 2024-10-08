import { Acciones } from "./acciones";

export class MinHeap{
    private heap: Acciones[] = [];

    constructor() {
        this.heap = [];
    }

    public comparar(comprador: Acciones):string{
        for (let element of this.heap) { 
            if (comprador.get_nombre_de_la_compannia() == element.get_nombre_de_la_compannia() && comprador.get_numero_de_accion() <= element.get_numero_de_accion()) {
                if (comprador.get_precio_por_accion() >= element.get_precio_por_accion()) {

                    return `\nNombre de la compañia: ${element.get_nombre_de_la_compannia()}\nNumero de acciones: ${comprador.get_numero_de_accion()}\nPrecio minimo por accion: ${element.get_precio_por_accion()}\nSubtotal: ${element.get_precio_por_accion() * comprador.get_numero_de_accion()}\nTransaccion entre ${comprador.get_nombre_del_usuario()} y ${element.get_nombre_del_usuario()}\nTipo de operacion: Comprado`;
                
                } else {
                    return `\nNombre de la compañia: ${element.get_nombre_de_la_compannia()}\nNumero de acciones: ${comprador.get_numero_de_accion()}\nPrecio minimo por accion: ${element.get_precio_por_accion()}\nSubtotal: ${element.get_precio_por_accion() * comprador.get_numero_de_accion()}\nTransaccion entre ${comprador.get_nombre_del_usuario()} y ${element.get_nombre_del_usuario()}\nTipo de operacion: Por comprar`;
                
                }
            }
        }
        return ``;
    }

    public mostrar_acciones(): void{
        console.log("Acciones en venta: ")
        this.heap.forEach((accion, indice) => {
            console.log(`${indice + 1}) \nCompañia: ${accion.get_nombre_de_la_compannia()} \nNumero de acciones: ${accion.get_numero_de_accion()} \nPrecio minimo por cada accion: ${accion.get_precio_por_accion()} \nNombre del vendedor: ${accion.get_nombre_del_usuario()}\n`)
        });
    }

    public raiz(): Acciones | null{
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    public anniadir(accion: Acciones): void{
        this.heap.push(accion);
        this.reorganizar_heap_arriba();
    }

    private reorganizar_heap_arriba(): void{
        let index = this.heap.length - 1;

        while (this.tiene_padre(index) && this.padre(index).get_precio_por_accion() > this.heap[index].get_precio_por_accion()){
            this.cambio(this.obtener_index_padre(index), index);
            index = this.obtener_index_padre(index);
        }
    }

    private obtener_index_padre(index: number): number{
        return Math.floor((index - 1) / 2)  //nota, esta formula la descubri yo en la clase mujajaja
    }
    
    private tiene_padre(index: number): boolean{
        return this.obtener_index_padre(index) >= 0;
    }

    private padre(index: number): Acciones{
        return this.heap[this.obtener_index_padre(index)];
    }

    private cambio(primer_index: number, segundo_index: number): void{
        const temp = this.heap[primer_index];
        this.heap[primer_index] = this.heap[segundo_index];
        this.heap[segundo_index] = temp;
    }

    public obtener(): Acciones | null{
        if (this.heap.length === 0) return null;

        const accion = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.reorganizar_heap_abajo();

        return accion;
    }

    private reorganizar_heap_abajo(): void{
        let index = 0;

        while (this.tiene_padre(index)){
            let hijo_mas_pequennio_index = this.obtener_index_hijo_izquierdo(index);

            if (this.tiene_hijo_derecho(index) && this.hijo_derecho(index).get_precio_por_accion() < this.hijo_izquierdo(index).get_precio_por_accion()){
                hijo_mas_pequennio_index = this.obtener_index_hijo_derecho(index);
            }

            if (this.heap[index].get_precio_por_accion() < this.heap[hijo_mas_pequennio_index].get_precio_por_accion()){
                break;
            } else {
                this.cambio(index, hijo_mas_pequennio_index);
            }

            index = hijo_mas_pequennio_index;
        }
    }

    private obtener_index_hijo_izquierdo(index: number): number{
        return 2 * index + 1;
    }

    private obtener_index_hijo_derecho(index: number): number{
        return 2* index + 2;
    }
    
    private tiene_hijo_izquierdo(index: number): boolean{
        return this.obtener_index_hijo_izquierdo(index) < this.heap.length;
    }

    private tiene_hijo_derecho(index: number): boolean{
        return this.obtener_index_hijo_derecho(index) < this.heap.length;
    }

    private hijo_izquierdo(index: number): Acciones{
        return this.heap[this.obtener_index_hijo_izquierdo(index)];
    }

    private hijo_derecho(index: number): Acciones{
        return this.heap[this.obtener_index_hijo_derecho(index)];
    }
}