Promise.prototype.all = function(promises) {
    let results = [];
    let num = 0;
    let len = promises.length;
    return new Promise(function(resolve, reject) {
      for (let val of promises) {
        Promise.resolve(val).then(function(res) {
          num++;
          results[num] = res;
          if (num === len) {
            return resolve(results);
          }
        }, function(err) {
          return reject(err);
        });
      }
    });
  };