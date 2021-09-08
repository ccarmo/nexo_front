import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem {
    
    public id_postagem: number;
    public nomePostagem: string;
    public pitch: string;
    public data: Date;
    public curtidas: number;
    public postagemTema: Tema;
    public postagemUsuario: Usuario;
}

