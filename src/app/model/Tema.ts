import { Postagem } from "./Postagem";
import { Usuario } from "./Usuario";

export class Tema {
    public id: number;
    public listaPostagem: Postagem[];
    public nomeTema: string;
    public usuario: Usuario;
}