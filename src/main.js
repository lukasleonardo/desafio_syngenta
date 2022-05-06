//import classe Hotel
const Hotel = require("./Hotel")

//Instanciando os hoteis
    const Lakewood = new Hotel('Lakewood', 3, 110.0, 80.0, 90.0, 80.0)
    const Bridgewood = new Hotel('Bridgewood', 4, 160.0, 110.0, 60.0, 50.0)
    const Ridgewood = new Hotel('Ridgewood', 5, 220.0, 100.0, 150.0, 40.0)
    const listaHoteis = [Lakewood,Bridgewood,Ridgewood]

function getCheapestHotel (input) { //DO NOT change the function's name.

    //Tratando dados da Reserva
        const dados = input.split(':')
        const tipoCliente = dados[0]
        const datas = dados[1].split(',')
        const data1= new Date(datas[0])
        const data2= new Date(datas[1])
        const data3= new Date(datas[2])
        const estadia = [data1.getDay(),data2.getDay(),data3.getDay()]
    

        var menorPreco = 10000, temp, varPreco, name
    for(const hotel in listaHoteis){
        varPreco = listaHoteis[hotel].valorEst(tipoCliente,estadia)
        if(varPreco < menorPreco){
            menorPreco = varPreco
            temp = listaHoteis[hotel].clas
            name = listaHoteis[hotel].nome
        }else if(varPreco == menorPreco){
            if(listaHoteis[hotel].clas > temp){
                temp = listaHoteis[hotel].clas
                name = listaHoteis[hotel].nome
            }
        } 
    }
    return  name
}

exports.getCheapestHotel = getCheapestHotel
