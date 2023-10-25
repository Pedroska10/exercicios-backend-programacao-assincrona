const produtos = require("../bancodedados/produtos");
const bancodedados = require("../bancodedados/produtos");
const { getStateFromZipcode } = require("utils-playground");

const listarProdutos = (req, res) => {
  return res.status(200).json({ bancodedados });
};

const detalheProd = (req, res) => {
  const { idProduto } = req.params;
  if (!idProduto) {
    return res.status(400).json({ mensagem: "Informe o id do produto." });
  }
  const produto = bancodedados.find((i) => {
    return i.id === Number(idProduto);
  });
  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }
  return res.status(200).json(produto);
};

const frete = async (req, res) => {
  const { idProduto, cep } = req.params;
  const produto = bancodedados.find((i) => {
    return i.id === Number(idProduto);
  });

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }
  const estado = await getStateFromZipcode(cep);
  let freteValor;
  if (estado === "SP" || estado === "RJ") {
    freteValor = produto.valor * 0.15;
    return res.status(200).json({ produto, estado, frete: freteValor });
  }
  if (
    estado === "BA" ||
    estado === "SE" ||
    estado === "AL" ||
    estado === "PE" ||
    estado === "PB"
  ) {
    freteValor = produto.valor * 0.1;
    return res.status(200).json({ produto, estado, frete: freteValor });
  }
  freteValor = produto.valor * 0.12;
  return res.status(200).json({ produto, estado, frete: freteValor });
};

module.exports = { listarProdutos, detalheProd, frete };
