var usersModel = require('../../models/users');
exports.findUser = async function (parmas) {
    // document查询
    return await usersModel.findOne(parmas);
}
exports.updataUser = async function (filters,parmas) {
    // document查询
    return await usersModel.updateOne(filters, parmas);
}