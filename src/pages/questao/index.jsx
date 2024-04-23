import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Questao({ props }) {
  const [questao, setQuestao] = useState([]);
  const handleGetData = async () => {
    const response = await fetch("http://localhost:3000/api/questao/1").then(
      (res) => res.json()
    );
    setQuestao(response);
    console.log(response);
  };
  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div>
      <h1>{questao?.enunciado}</h1>
      <ul>
        {questao.respostas?.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/questao/1");
  return {
    props: {
      props: await response.json(),
    },
  };
};
