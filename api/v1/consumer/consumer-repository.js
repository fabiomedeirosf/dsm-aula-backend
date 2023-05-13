const ConsumerModel = require('./consumer-model');

const data = [];
const save = async (consumer) => {

    const result = ConsumerModel.create(consumer);
    return result;
};

const findAll = async () => {
    const result = ConsumerModel.findAll({raw: true});

    return result;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}

module.exports = {save, findAll, findById};