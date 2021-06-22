const PF = require("../Models/pf");

module.exports = {
  async listar(req, res) {
    try {
      const pfs = await PF.findAll();
      return res.json(pfs);
    } catch (err) {
      return console.error("Erro na listagem: ", err);
    }
  },
  async criar(req, res) {
    const { cpf, nome, email, telefone, nascimento } = req.body;
    try {
      const pf = await PF.create({
        CPF: CPF,
        Nome: Nome,
        Email: Email,
        Telefone: Telefone,
        Nascimento: Nascimento,
      });
      return res.json(Pf);
    } catch (error) {
      return console.error("Erro na criação", err);
    }
  },
  async atualizar(req, res) {
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;
    const { cpf, nome, email, telefone, nascimento } = req.body;
    const id = req.params.id;
    try {
      await PF.update(
        {
          cpf,
          nome,
          email,
          telefone,
          nascimento,
        },
        { where: { id: { [Op.eq]: id } } }
      );
      return res.json({ msg: `Cadastro de ${nome} atualizado com sucesso!` });
    } catch (error) {
      return res.json({ msg: `Cadastro de ${nome} não foi atualizado` }, err);
    }
  },
  async delete(req, res) {
    try {
      await PF.destroy({ where: { id: req.params.id } });
      return res.json({
        msg: `Exclusão de cadastro de ID ${req.params.id} feita com sucesso!`,
      });
    } catch (err) {
      return console.err("Erro na exclusão: ", err);
    }
  },
};
