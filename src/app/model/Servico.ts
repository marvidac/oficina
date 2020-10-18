import { StatusEnum } from './StatusEnum';

export class Servico {
    id: number;
    descricao: string;
    qtdeHoras: string;
    status: StatusEnum;
    dataCadastro: string;
}