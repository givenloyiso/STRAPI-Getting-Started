'use strict';

/**
 *  website-api controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::website-api.website-api');
