const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize')
class CustomerService {
  constructor() {}

  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    })
    return newCustomer;
  }

  async find() {
    const rta = await models.Customer.findAll({
      include: ['user']
    });
    return rta;
  }

  async findOne(id) {
    const model = await models.Customer.findByPk(id)
    if(!model){
      throw boom.notFound('customer not found')
    }
    return model;
  }

  async update(id, changes) {
    const model = this.findOne(id)
    const rta = await model.update(changes)
    return rta;
  }

  async delete(id) {
    const model = this.findOne(id)
    const rta = await model.destroy()
    return rta;
  }
}

module.exports = CustomerService;
