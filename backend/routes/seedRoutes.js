// Importações
import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

// Criação do roteador
const seedRouter = express.Router();

// Rota GET para inicializar dados
seedRouter.get('/', async (req, res) => {
  try {
    // Remove todos os documentos da coleção Product
    await Product.deleteMany({});

    // Insere dados do arquivo data.js na coleção Product
    const createdProducts = await Product.create(data.products);

    // Remove todos os documentos da coleção User
    await User.deleteMany({});

    // Insere dados do arquivo data.js na coleção User
    const createdUsers = await User.create(data.users);

    // Envia uma resposta com os documentos criados
    res.send({ createdProducts, createdUsers });
  } catch (error) {
    // Se ocorrer um erro, envia uma resposta de erro
    res.status(500).send({ error: error.message });
  }
});

// Exporta o roteador
export default seedRouter;

// import express from 'express';
// import Product from '../models/productModel.js';
// import data from '../data.js';
// import User from '../models/userModel.js';

// const seedRouter = express.Router();

// seedRouter.get('/', async (req, res) => {
//   await Product.deleteMany({});
//   const createdProducts = await Product.insertMany(data.products);

//   await User.deleteMany({});
//   const createdUsers = await User.insertMany(data.users);
//   res.send({ createdProducts, createdUsers });
// });
// export default seedRouter;
