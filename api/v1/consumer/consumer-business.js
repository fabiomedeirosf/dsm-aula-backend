const consumerRepository = require("./consumer-repository");

const create = async (consumer) => {

    return consumerRepository.save(consumer);
};

const findAll = async () => {
    return consumerRepository.findAll();
}

const findByid = (id) => {
    return consumerRepository.findById(id);
}

module.exports = {create, findAll, findByid};