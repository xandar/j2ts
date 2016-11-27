const fs = require('fs');

/**
 * Write res
 * @param tsClazz
 * @returns {Promise}
 */
module.exports = (tsClazz, dest) => {
    return Promise.all(tsClazz.map(c => {
        return new Promise((resolve, error) => {
            fs.writeFile(`${dest}/${c.name}.ts`, c.str, (err) => {
                if(err) {
                    error(err);
                } else {
                    resolve(c);
                }
            });
        });
    }));
};