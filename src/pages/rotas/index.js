import Link from "next/link";
import { useRouter } from "next/router";
import { pessoas } from "../../Data/url";
import { useEffect } from "react";
export default function Rotas() {
  useEffect(() => { console.log(pessoas); }, [pessoas])
  const router = useRouter();
  function navegacaoSimples(url) {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: url.id,
        nome: url.nome
      }
    });
  }
  return (
    <div>
      <h1>Rotas index</h1>
      <div className="flex w-full p-4 gap-3 flex-col align-start flex-start justify-start">
        {
          pessoas && pessoas.map((pessoa, index) => (
            <button key={index}
              className="border w-52 hover:bg-slate-300 active:bg-slate-300 transition-all ease-in-out duration-150 rounded-sm"
              onClick={() => { navegacaoSimples(pessoa) }}>{pessoa.nome}</button>
          ))
        }

      </div>
    </div>
  )
}