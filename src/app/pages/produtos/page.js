import Header from "@/app/components/Header";
import React from "react";
import SearchBar from "@/app/components/SearchBar";

function Produtos() {
  return (
    <>
      <Header />

      <main className="w-[90vw] m-auto mt-5">
        <h1 className="text-2xl">Produtos</h1>

        <SearchBar />

        <div className="flex justify-between mb-2">
          <h3 className="text-lg">11 Produtos</h3>
          <button className="bg-primary text-white px-3 py-1 rounded-md">
            + Adicionar Produto
          </button>
        </div>

        <table className="w-[90vw] m-auto bg-white rounded-md border-separate border-spacing-x-8 border-spacing-y-3 text-center ">
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th className="w-4">Un. Disponíveis</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Validade</th>
          </tr>
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </table>
      </main>
    </>
  );
}

export default Produtos;

function Produto() {
  return (
    <>
      <tr>
        <td>031923</td>
        <td>foto</td>
        <td>Produto</td>
        <td>30</td>
        <td>Arroz</td>
        <td>R$8,00</td>
        <td>30 dias</td>
      </tr>
    </>
  );
}
