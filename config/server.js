module.exports = ({ env }) => ({
  host: env('HOST', 'ecommerceappstrapi.herokuapp.com'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '72efeb5b7e024bf15c0ca6001eb513aa'),
    },
  },
});
