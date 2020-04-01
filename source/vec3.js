const { ValueType } = require('./value-type');

module.exports.Vec3 = class Vec3 extends ValueType {
    constructor(x, y, z) {
        super();
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
}