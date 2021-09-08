import { Postagem } from "./Postagem";
import { Tema } from "./Tema";

export class Usuario {
    public id_usuario: number
    public email: string;
    public nome: string;
    public idade: number;
    public senha: string;
    public tipo: string;
    public foto: string;
    public renda_familiar: number;
    public ramo_empresa: string;
    public postagem: Postagem[];
    public tema: Tema[];
   
}