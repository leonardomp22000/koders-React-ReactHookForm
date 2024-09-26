import { useState } from "react";
export default function App() {
  // Lista de koders
  const [koders, setKoders] = useState([]);
  // Input
  const [text, setText] = useState("");

  // Declaracion de funciones antes del return
  function addKoder() {
    setKoders([...koders, text]);
  }

  function removeKoder(indexToRemove) {
    const newKoders = koders.filter((koder, idx) => idx != indexToRemove);
    setKoders(newKoders);
  }

  function onSubmit(event) {
    event.preventDefault();
    addKoder();
    setText();
  }

  return (
    <main className="w-full min-h-screen flex-col">
      <p className="w-full bg-teal-600 text-black font-bold text-center">
        Koders List hook form
      </p>
      <form
        className="flex flex-row gap-2 justify-center p-5"
        onSubmit={onSubmit}
      >
        <input
          className="p-2 rounded-md text-black w-full max-w-screen-sm"
          type="text"
          name="first-name"
          placeholder="Nombre"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        />
        <input
          className="p-2 rounded-md text-black w-full max-w-screen-sm"
          type="text"
          name="last-name"
          placeholder="Apellido"
          //value={text}
          onChange={(event) => setText(event.target.value)}
          //required
        />
        <input
          className="p-2 rounded-md text-black w-full max-w-screen-sm"
          type="email"
          name="email"
          placeholder="Correo"
          //value={text}
          onChange={(event) => setText(event.target.value)}
          //required
        />

        <button className="bg-white text-black px-3 rounded"> + Agregar</button>
      </form>
      <div className="max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-1">

        {/**Conditional rendering */}
        {koders.length === 0 && (
          <p className="text-white/50"> No hay koders registrados</p>
        )}
        {/** Renderind list */}
        {koders.map((koder, idx) => {
          return (
            <div
              key={`koder-${idx}`}
              className="bg-white/10 rounded p-4 flex flex-row justify-between"
            >
              <span className="select-none">{koder}</span>
              <span className=" text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-1 size-5 text-center items-center flex " onClick={()=> removeKoder(idx)}>
                x
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
