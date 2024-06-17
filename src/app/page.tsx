"use client";

import { CustonButton } from "./componente/CustomButtom";


const Page = () => {
  const handleButton1 = () => alert("Clicou no Botão 1");
  const handleButton2 = () => alert("Clicou no Botão 2");
  const handleButton3 = () => alert("Clicou no Botão 3");

  return (
    <div style={{ display: 'flex', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
      <CustonButton label="Clique Aqui" onClick={handleButton1} />
   
      <CustonButton label="Clique Aqui 2" onClick={handleButton2} />
      <CustonButton label="Clique Aqui 3" onClick={handleButton3} />
    </div>
  );
};

export default Page;
