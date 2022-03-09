//? THIS ENABLES THE GRAHPQL PLAYFROUND
module.exports = {
  //
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 8,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true
      },
    },
  },
};


//? THIS PROVIDE THE EMAIL

// module.exports = ({ env }) => ({
//   // ...
//   email: {
//     provider: "sendmail",
//     providerOptions: {
//       dkim: {
//         privateKey:
//           "v=DKIM1; k=rsa; p=#####;",
//         keySelector: "default._domainkey.domein.eu.", // the same as the one set in DNS txt record, use online dns lookup tools to be sure that is retreivable
//       },
//     },
//     settings: {
//       defaultFrom: "info@mail.eu",
//       defaultReplyTo: "info@mail.eu",
//     },
//   },
//   // ...
// });
