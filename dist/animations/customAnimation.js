var customAnimation = function (target, done, direction, config) {
    return new Promise(function (resolve, reject) {
        try {
            if (direction === "enter") {
                gsap.from(target, config);
                gsap.to(target, { onComplete: function () {
                        done();
                        resolve();
                    }
                });
            }
            else {
                gsap.to(target, config);
                gsap.to(target, { onStart: function () {
                        done();
                        resolve();
                    }
                });
            }
        }
        catch (error) {
            reject(error);
        }
    });
};
export default customAnimation;
