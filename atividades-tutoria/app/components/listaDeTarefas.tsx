import React, { useState } from "react";
import "./ListaDeTarefas.css";

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  };

  const removerTarefa = (index: any) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <div className="lista-de-tarefas">
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} className="tarefa-item">
            {tarefa}
            <button
              className="remover-botao"
              onClick={() => removerTarefa(index)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        className="input-tarefa"
      />
      <button onClick={adicionarTarefa} className="botao-adicionar">
        Adicionar Tarefa
      </button>
    </div>
  );
};

export default ListaDeTarefas;
