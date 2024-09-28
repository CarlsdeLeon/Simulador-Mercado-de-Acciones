import { MinHeap } from "./min_heap";
import { MaxHeap } from "./max_heap";
import { Acciones } from "./acciones";



class Operador {
    private lista_transacciones_realizadas: string[];
    private lista_posibles_trasacciones: string[];

    private min_heap: MinHeap = new MinHeap();
    private max_heap: MaxHeap = new MaxHeap();

    constructor(){
        this.lista_transacciones_realizadas = [];
        this.lista_posibles_trasacciones = [];
    }


    public agregar_compador(accion: Acciones):void {
        this.max_heap.anniadir(accion);
        this.max_heap.mostrar_acciones();
    }

    public agragar_vendedor(accion: Acciones):void {
        this.min_heap.anniadir(accion);
        this.min_heap.mostrar_acciones();
    }

    public mostrar_historial():void {
        console.log(this.lista_transacciones_realizadas)
    }

    public mostrar_posibles_transacciones():void {
        console.log(this.lista_posibles_trasacciones)
    }

    private comparar_para_vendedor():void{

    }

    private comparar_para_comprador():void{

    }
}


let manejo_de_acciones: Operador  = new Operador();

manejo_de_acciones.agragar_vendedor(new Acciones("Cocacola", 15, 800, "carlitos"))

manejo_de_acciones.agregar_compador(new Acciones("Pepsi", 7, 150, "ricardito"))
