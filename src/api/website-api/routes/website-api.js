'use strict';

/**
 * website-api router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::website-api.website-api');
