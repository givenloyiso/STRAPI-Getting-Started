module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9ecb11c6523b7aa85bfb5a01b526450f'),
  },
});
