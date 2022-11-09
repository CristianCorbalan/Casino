var fs = require("fs");
var readlineSync = require('readline-sync');
export abstract class Casino{
    protected nombreCasino: string;
    protected valorApuesta:number;
    constructor(){
        this.nombreCasino = "LuckyBreak";
        this.valorApuesta = 0;
    }

    abstract  elegirUnJuego();
    abstract resultadosGenerales();

    protected hacerApuesta(dinero:number):void{
        this.valorApuesta += dinero;
     }


     public manipular(nombre:string, texto:string):void{
      fs.writeFile(nombre, texto, error =>{
        if (error){
          console.log("ERROR");
        }
      });
    }

    public modificarArchivo(nombre:string, texto:string){
      this.manipular(nombre, texto);
    } 

    public leerArchivo(path: string): string {
        let txtFile: string = fs.readFileSync(path, "utf-8");
        return txtFile;
      }

    public crearArchivo(archivo:string, nuevoTexto:string){
        let textoPrincipal: string = fs.readFileSync(archivo, "utf-8");
        textoPrincipal += nuevoTexto;
        fs.writeFile(archivo, textoPrincipal, function (err) {
          if (err) {
            return console.log(err);
          }
    
          console.log("Este resultado ha sido agregado a estadísticas.");
        });
      }
    }  