const { request } = require('express');

const express = require('express');
const stripe = require('stripe')(
  'pk_test_51Gx9zRCxN1MNpec1KP69CDd8s4kSFupjlbhLdHwkrMqsxaWaiq8oTlj7WpSyq41MPzXZdGkD6V52VaGassZm47R000hHJ9rUY2',
);
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
