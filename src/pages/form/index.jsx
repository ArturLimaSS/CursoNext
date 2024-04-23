import { useEffect, useState } from "react";

export default function Form() {
  const [values, setValues] = useState({});
  const [cadastros, setCadastros] = useState([]);

  const handleGetCadastro = async () => {
    const response = await fetch("/api/form", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    handleGetCadastro();
  }, []);

  const handleSetValues = (e, field) => {
    setValues({
      ...values,
      [field]: e,
    });
  };

  function salvarUsuario(e) {
    e.preventDefault();
    fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        setCadastros(data);
      });
  }

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <div>
      <h1>Integrando com api #2</h1>
      <form onSubmit={salvarUsuario}>
        <input
          type="text"
          name="nome"
          id="nome"
          className="border"
          onChange={(e) => handleSetValues(e.target.value, "nome")}
          value={values.nome}
        />
        <input
          type="number"
          name="idade"
          id="idade"
          className="border"
          onChange={(e) => handleSetValues(+e.target.value, "idade")}
          value={values.idade}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="flex flex-col gap-3">
        {cadastros?.map((c, i) => {
          <div>
            <span>
              Nome: {c.nome}, idade: {c.idade}
            </span>
          </div>;
        })}
      </div>
    </div>
  );
}
