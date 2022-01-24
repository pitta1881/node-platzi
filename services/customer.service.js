const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')

const { models } = require('../libs/sequelize')
class CustomerService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.user.password, 10)
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash
      }
    }
    const newCustomer = await models.Customer.create(newData, {
      include: ['user']
    })
    delete newCustomer.user.dataValues.password;
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
