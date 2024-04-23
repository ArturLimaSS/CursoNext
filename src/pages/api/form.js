const cadastros = [];

export default function form(req, res) {
  if (req.method === "POST") {
    const cadastro = req.body;
    cadastros.push(cadastro);
    res.status(200).json(cadastros);
  } else {
    res.status(200).json(cadastros);
  }
}
