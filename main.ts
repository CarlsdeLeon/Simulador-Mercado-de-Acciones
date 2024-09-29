import { MinHeap } from "./min_heap";
import { MaxHeap } from "./max_heap";
import { Acciones } from "./acciones";



class Operador {
    private lista_transacciones_realizadas: string[] ;
    private lista_posibles_trasacciones: string[] ;

    private min_heap: MinHeap = new MinHeap();
    private max_heap: MaxHeap = new MaxHeap();

    private apuntador_guardado: string;

    constructor(){
        this.lista_transacciones_realizadas = [];
        this.lista_posibles_trasacciones = [];
        this.apuntador_guardado = "";
    }


    public agregar_compador(accion: Acciones):void {
        this.max_heap.anniadir(accion);
        //this.max_heap.mostrar_acciones();
        this.comparar_para_comprador(accion);
    }

    public agragar_vendedor(accion: Acciones):void {
        this.min_heap.anniadir(accion);
        //this.min_heap.mostrar_acciones();
        this.comparar_para_vendedor(accion);
    }

    public mostrar_historial():void {
        console.log("\nHistorial de transacciones: ")
        this.lista_transacciones_realizadas.forEach(element => {
            console.log(element)
        });
    }

    public mostrar_posibles_transacciones():void {
        console.log("\nPosibles transacciones: ")
        this.lista_posibles_trasacciones.forEach(element => {
            console.log(element)
        });
    }

    private comparar_para_vendedor(vendedor: Acciones):void{
        this.apuntador_guardado = this.max_heap.vender(vendedor);
        if (this.apuntador_guardado){
            if (this.apuntador_guardado.slice(-1) == "o"){
                this.lista_transacciones_realizadas.push(this.apuntador_guardado);
            } else if(this.apuntador_guardado.slice(-1) == "r") {
                this.lista_posibles_trasacciones.push(this.apuntador_guardado)
            }
        }
        
    }

    private comparar_para_comprador(comprador: Acciones):void{
        this.apuntador_guardado = this.min_heap.comparar(comprador);
        if (this.apuntador_guardado){
            if (this.apuntador_guardado.slice(-1) == "o"){
                this.lista_transacciones_realizadas.push(this.apuntador_guardado);
            } else if(this.apuntador_guardado.slice(-1) == "r") {
                this.lista_posibles_trasacciones.push(this.apuntador_guardado)
            }
        }

    }
}


let manejo_de_acciones: Operador  = new Operador();


manejo_de_acciones.agragar_vendedor(new Acciones("Jamaica", 17, 500, "ron ramon"))

manejo_de_acciones.agregar_compador(new Acciones("Nintendo", 30, 750, "frikiman"))

manejo_de_acciones.agragar_vendedor(new Acciones("Cocacola", 15, 50, "carlitos"))

manejo_de_acciones.agregar_compador(new Acciones("Jamaica", 30, 1000, "riqui ricon")) //aqui no se genera la compra por que no hay suficientes acciones

manejo_de_acciones.agregar_compador(new Acciones("Cocacola", 7, 150, "ricardito"))

manejo_de_acciones.agragar_vendedor(new Acciones("Nintendo", 30, 800, "sensatoman"))

manejo_de_acciones.agragar_vendedor(new Acciones("Jamaica", 40, 750, "salvador dali"))



manejo_de_acciones.mostrar_historial();

manejo_de_acciones.mostrar_posibles_transacciones();




