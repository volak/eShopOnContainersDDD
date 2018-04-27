export default {
  brand: {
    presence: true,
    length: {
      minimum: 3,
      message: 'must be at least 3 characters'
    }
  },
  type: {
    presence: true,
    length: {
      minimum: 3,
      message: 'must be at least 3 characters'
    }
  },
  product: {
    name: {
      presence: true,
      length: {
        minimum: 3,
        message: 'must be at least 3 characters'
      }
    },
    price: {
      presence: true,
      numericality: {
        greaterThan: 0
      }
    },
    catalogType: {
      type: {
        presence: true
      }
    },
    catalogBrand: {
      brand: {
        presence: true
      }
    }
  }
};
