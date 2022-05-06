class Hotel{

    constructor(nome, clas, valorReg, valorRw, valorRegFds, valorRwFds){
        this.nome=nome
        this.clas=clas
        this.valorReg = valorReg
        this.valorRw = valorRw
        this.valorRegFds = valorRegFds
        this.valorRwFds = valorRwFds   
    }

    valorEst(tipoCliente,estadia){
        let valorEstadia=0;
        if(tipoCliente == 'Regular'){
            for (const dia in estadia) {
                if(estadia[dia] == 6 ||estadia[dia] == 0 ){
                    valorEstadia += this.valorRegFds;
                }if(estadia[dia]<6 &&estadia[dia]>0){
                    valorEstadia += this.valorReg;
                }
        }
        return valorEstadia;
        }else if(tipoCliente == 'Rewards'){
            for(const dia in estadia){
                if(estadia[dia] == 6 ||estadia[dia] == 0 ){              
                    valorEstadia += this.valorRwFds;
                }if(estadia[dia]<6 && estadia[dia]>0){
                    valorEstadia += this.valorRw;
                }
        }
        return valorEstadia;
        } 
    }
}
module.exports = Hotel;