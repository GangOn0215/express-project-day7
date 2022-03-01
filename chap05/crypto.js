const crypto = require('crypto');

// console.log(crypto.createHash('sha512').update('pw1234').digest('base64'));
// console.log(crypto.createHash('sha512').update('pw1234').digest('hex'));

const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if(err) return reject(err);
      
      resolve(buf.toString("base64"));
    })
  })
}

const createCryptoPassword = async (plainPassword) => {
  const salt = await createSalt();

  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if(err) reject(err);
      
      resolve({password: key.toString("base64"), salt});
    })
  });
}

const getCryptoPassword = (planPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(planPassword, salt, 100000, 64, "sha512", (err, key) => {
      if(err) reject(err);

      resolve({password: key.toString("base64")});
    })
  })
}

(async () => {
  const setPassword = await createCryptoPassword("pw1234");
  const getInputData = { id: "test", pw: "pw1234" };

  console.log(await getCryptoPassword(getInputData.pw, setPassword.salt));

  
  console.log(setPassword);
})();
