'use strict';

/**
 * website-api service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-api.website-api');
