module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eac295830740ec2aea7383704db6489c'),
  },
});
