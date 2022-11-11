const {
    clearHash
} = require('../services/cache');

async function cleanCache(req, res, next) {
    await next();
    clearHash(req.user.id);
}

module.exports = cleanCache;