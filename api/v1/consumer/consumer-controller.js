const consumerBusiness = require("./consumer-business");

const create = async (request, h) => {

    try {
        const payload = request.payload;

        const consumer = {
            name: payload.name,
            city: payload.address.city
        };

        const result = toPayload(await consumerBusiness.create(consumer));
   
        return h.response(result).code(201);
    } catch (error) {
        console.log(error);
        return h.response(error.message).code(500);
    }
}

const find = async (request, h) => {
    try {
        const result = await consumerBusiness.findAll();

        console.log(Array.isArray(result));
        return toPayload(result);
    } catch(error) {
        console.log(error);
    }
}

const getById =  (request, h) => {
    const id = request.params.id;

    const consumer = consumerBusiness.findByid(id);
    
    if(consumer) {
        return h.response(consumer).code(200);
    }
    return h.response("Not found").code(404);
}

const toPayload = (consumerModel) => {

    if (Array.isArray(consumerModel)) {
        const payload = [];
        consumerModel.forEach(c => {
            console.log(c);
            payload.push({
                id: c.id,
                name: c.name,
                address: {
                    city: c.city
                }
            });
        });
        return payload;
    } else {
        const payload = {
            id: consumerModel.id,
            name: consumerModel.name,
            address: {
                city: consumerModel.city
            }
        }
        return payload;
    }
}

module.exports = {find, create, getById};