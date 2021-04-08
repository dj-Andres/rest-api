const joi = require("@hapi/joi");
const Schema = joi.object({
  documento: joi.string().max(10).required(),
  nombres: joi.string().min(20).max(60).required(),
  email: joi
    .string()
    .min(8)
    .max(80)
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  celular: joi.required(),
});

const SchemaWallet = joi.object({
  documento: joi.string().required(),
  celular: joi.required(),
  valor:joi.number().required()
})

module.exports = {
  Schema,
  SchemaWallet
};
