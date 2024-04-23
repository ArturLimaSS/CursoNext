export default function question(req, res) {
  if (req.method === 'GET') {

    const id = req.query.id

    res.status(200).json({
      id,
      enunciado: "Qual é a sua cor preferida?",
      respostas: [
        "Branca",
        "Amarela",
        "Vermelha",
        "Verde",
        "Azul",
        "Preto",
      ]
    })
  } else { res.status(405).send("The method is not allowed") }
}