const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = { 
    async index(request, response) {

        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body; /** request recupera parametros que usuario indica */

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({ //o await servirá para o codigo esperar a conexao até enviar a resposta abaixo
        id,
        name,
        email,
        whatsapp,
        city,
        uf
        })
        //console.log(data);

        return response.json({ id }); /** response envia parametros para usuario ver */ 

    }
};