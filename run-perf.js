
function test(Vec3) {
    const t1 = Date.now();
    (() => {
        for (let i = 0; i < 1000000; ++i) {
            const x = Math.random();
            new Vec3(x, x, x);
        }
    })();
    const t2 = Date.now();
    console.log(`Past: ${t2 - t1}ms`);
}

test(require('./out/7.8.8/vec3.js').Vec3);
test(require('./out/7.9.x/vec3.js').Vec3);