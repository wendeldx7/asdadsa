import conn from "../config/conn.js";

const tableOnibus = /*sql*/ `
    CREATE TABLE IF NOT EXISTS onibus (
        id VARCHAR(255) PRIMARY KEY,
        placa int (10) not null,
        modelo varchar(255) not null,
        ano_fabricação date not null,
         capacidade int not null,
         motorista_id varchar(255) not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`;
conn.query(tableOnibus, (err, result, field) => {
  if (err) {
    console.error("Erro ao criar a tabela " + err.stack);
    return;
  }
  console.log(result);
  console.log(field);
  console.log("Tabela [Onibus] criada com sucesso");
});
