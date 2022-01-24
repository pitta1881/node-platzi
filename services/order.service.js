const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize')

class OrderService {

  constructor(){
  }

  async create(data) {
    const newOrder = await models.Order.create(data)
    return newOrder;
  }

  async find() {
    const orders = await models.Order.findAll({
      include: [{
        association: 'customer',
        include: ['user']
      }]
    })
    return orders;
  }

  async findByUser(userId) {
    const orders = await models.Order.findAll({
      include: [{
        association: 'customer',
        include: ['user']
      }],
      where: {
        '$customer.user.id$': userId
      }
    })
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id,{
      include: [{
        association: 'customer',
        include: ['user']
      }]
    })
    return order;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;
