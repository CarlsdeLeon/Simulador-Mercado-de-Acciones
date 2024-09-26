import { AccionComprador } from "./accion_comprador";

export class MinHeap{
    private heap: AccionComprador[];

    constructor() {
        this.heap = [];
    }

    public raiz(): AccionComprador | null{
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    public anniadir(accion: AccionComprador): void{
        this.heap.push(accion);
        this.reorganizar_heap_arriba();
    }

    public reorganizar_heap_arriba(): void{
        let index = this.heap.length - 1;

        while (this.tiene_padre(index) && this.padre(index).get_precio_de_compra() > this.heap[index].get_precio_de_compra()){
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

    private padre(index: number): AccionComprador{
        return this.heap[this.obtener_index_padre(index)];
    }

    private cambio(primer_index: number, segundo_index: number): void{
        const temp = this.heap[primer_index];
        this.heap[primer_index] = this.heap[segundo_index];
        this.heap[segundo_index] = temp;
    }

    public obtener(): AccionComprador | null{
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

            if (this.tiene_hijo_derecho(index) && this.hijo_derecho(index).get_precio_de_compra() < this.hijo_izquierdo(index).get_precio_de_compra()){
                hijo_mas_pequennio_index = this.obtener_index_hijo_derecho(index);
            }

            if (this.heap[index].get_precio_de_compra() < this.heap[hijo_mas_pequennio_index].get_precio_de_compra()){
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

    private hijo_izquierdo(index: number): AccionComprador{
        return this.heap[this.obtener_index_hijo_izquierdo(index)];
    }

    private hijo_derecho(index: number): AccionComprador{
        return this.heap[this.obtener_index_hijo_derecho(index)];
    }
}