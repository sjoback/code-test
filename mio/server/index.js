const express = require('express');
var cors = require('cors');
const app = express();
const port = 8081;

const MOCK_CART_ID = 'MOCK_CART_ID';

const _carts = {
  [MOCK_CART_ID]: {
    id: MOCK_CART_ID,
    products: [
      {
        id: 'M2038407',
        quantity: 2,
        name: 'Sharp matbord, L 140 cm',
        imageUrl: 'https://www.mcdn.net/images/products/103210.jpg?width=182&height=129&output=jpg',
        price: 2895,
        originalPrice: 2895
      },
      {
        id: 'M2160853',
        quantity: 3,
        name: 'Zacharias/TrayBrickbord, Ø 38, H 50 cm',
        imageUrl: 'https://www.mcdn.net/images/products/140073.jpg?width=182&height=129&output=jpg',
        price: 199,
        originalPrice: 379
      }
    ]
  }
}

const servicePointDelivery = {
  id: 'SERVICE_POINT',
  name: 'Postombud',
  price: 79,
  freeThreshold: 599
}

const homeDelivery = {
  id: 'HOME',
  name: 'Hemleverans',
  price: 159,
  freeThreshold: 995
}

app.use(cors());

app.get('/api/cart/:cartId', (req, res) => {
  const cartId = req.params.cartId;
  const cart = _carts[cartId];

  if (!cart) {
    res.sendStatus(404);
    return;
  }

  res.contentType('application/json').send(cart);
});

app.put('/api/cart/:cartId/:id/quantity/:quantity', (req, res) => {
  const cartId = req.params.cartId;
  const cart = _carts[cartId];

  if (!cart) {
    res.sendStatus(404);
    return;
  }

  const productId = req.params.id;
  const product = cart.products.find((p) => p.id === productId);

  if (!product) {
    res.contentType('application/json').send(cart);
  }

  const quantity = parseInt(req.params.quantity)

  if (isNaN(quantity)) {
    res.sendStatus(400);
    return;
  }

  if (quantity === 0) {
    cart.products = cart.products.filter((p) => p.id !== productId);
    res.contentType('application/json').send(cart);
    return;
  }

  product.quantity = quantity;

  res.contentType('application/json').send(cart);
});

app.get('/api/cart/:cartId/delivery/:postal', (req, res) => {
  const cartId = req.params.cartId;
  const cart = _carts[cartId];

  if (!cart) {
    res.sendStatus(404);
    return;
  }

  const postal = req.params.postal.replace(/[^0-9]/, '');

  if (postal.length !== 5) {
    res.sendStatus(400);
  }

  let deliveryOptions = [servicePointDelivery, homeDelivery];

  if (!postal.startsWith('1')) {
    deliveryOptions = [servicePointDelivery];
  }

  const invalidDelivery = cart.delivery &&
    !deliveryOptions.find(({ id }) => id !== cart.delivery)

  if (invalidDelivery) {
    delete cart.delivery;
  }

  res.contentType('application/json').send({
    deliveryOptions,
    cart,
  });
});

app.post('/api/cart/:cartId/delivery/:deliveryId', (req, res) => {
  const cartId = req.params.cartId;
  const cart = _carts[cartId];

  if (!cart) {
    res.sendStatus(404);
    return;
  }

  const deliveryId = req.params.deliveryId;
  
  cart.delivery = deliveryId;

  res.contentType('application/json').send(cart);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});