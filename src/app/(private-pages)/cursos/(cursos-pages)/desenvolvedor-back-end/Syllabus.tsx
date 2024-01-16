'use client';
import { motion } from 'framer-motion';

export default function Syllabus() {
  return (
    <motion.section
      className="p-6 flex flex-col items-center gap-10 my-8"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <header className="text-center">
        <h2 className="text-3xl font-semibold">Grade Curricular</h2>
        <p>
          <strong>Periodo do curso:</strong> 03/07/2023 - 26/01/2024
        </p>
      </header>

      <table className="table-auto">
        <thead className="text-center ">
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th
              className="px-4 py-2 border border-black bg-green-600 text-zinc-100"
              colSpan={2}
            >
              Duração
            </th>
          </tr>
          <tr className="bg-green-800 text-white">
            <th className="px-4 py-2 border border-black ">
              Unidades Curriculares
            </th>
            <th className="px-4 py-2 border border-black">CH total</th>
            <th className="px-4 py-2 border border-black">Dias</th>
            <th className="px-4 py-2 border border-black">Início</th>
            <th className="px-4 py-2 border border-black">Término</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-black">Aula Inagural</td>
            <td className="px-4 py-2 border border-black">3</td>
            <td className="px-4 py-2 border border-black">1</td>
            <td className="px-4 py-2 border border-black">03/07/2023</td>
            <td className="px-4 py-2 border border-black">03/07/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black">
              Logica de Programação e Orientação a objetos
            </td>
            <td className="px-4 py-2 border border-black">12</td>
            <td className="px-4 py-2 border border-black">37</td>
            <td className="px-4 py-2 border border-black">04/07/2023</td>
            <td className="px-4 py-2 border border-black">09/08/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black">JavaScript / SASS</td>
            <td className="px-4 py-2 border border-black">17</td>
            <td className="px-4 py-2 border border-black">51</td>
            <td className="px-4 py-2 border border-black">10/08/2023</td>
            <td className="px-4 py-2 border border-black">09/09/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black">
              Padrões de Desenvolvimento de Software
            </td>
            <td className="px-4 py-2 border border-black">5</td>
            <td className="px-4 py-2 border border-black">15</td>
            <td className="px-4 py-2 border border-black">01/10/2023</td>
            <td className="px-4 py-2 border border-black">15/10/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black">
              Web Services - Server
            </td>
            <td className="px-4 py-2 border border-black">1</td>
            <td className="px-4 py-2 border border-black">4</td>
            <td className="px-4 py-2 border border-black">16/10/2023</td>
            <td className="px-4 py-2 border border-black">20/10/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black">
              Noções de Banco de Dados
            </td>
            <td className="px-4 py-2 border border-black">2</td>
            <td className="px-4 py-2 border border-black">5</td>
            <td className="px-4 py-2 border border-black">21/11/2023</td>
            <td className="px-4 py-2 border border-black">25/11/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black">Node JS + express</td>
            <td className="px-4 py-2 border border-black">4</td>
            <td className="px-4 py-2 border border-black">13</td>
            <td className="px-4 py-2 border border-black">26/11/2023</td>
            <td className="px-4 py-2 border border-black">28/11/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black">
              Planejamento Projeto Integrador
            </td>
            <td className="px-4 py-2 border border-black">4</td>
            <td className="px-4 py-2 border border-black">13</td>
            <td className="px-4 py-2 border border-black">29/11/2023</td>
            <td className="px-4 py-2 border border-black">12/01/2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black">
              Apresentações Projeto Integrador
            </td>
            <td className="px-4 py-2 border border-black">2</td>
            <td className="px-4 py-2 border border-black">5</td>
            <td className="px-4 py-2 border border-black">15/01/2024</td>
            <td className="px-4 py-2 border border-black">19/01/2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black">
              Semana de encerramento
            </td>
            <td className="px-4 py-2 border border-black">2</td>
            <td className="px-4 py-2 border border-black">5</td>
            <td className="px-4 py-2 border border-black">22/01/2024</td>
            <td className="px-4 py-2 border border-black">26/01/2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black">
              Periodo da Residência do aluno FAP
            </td>
            <td className="px-4 py-2 border border-black">23</td>
            <td className="px-4 py-2 border border-black">90</td>
            <td className="px-4 py-2 border border-black">01/02/2024</td>
            <td className="px-4 py-2 border border-black">30/04/2024</td>
          </tr>
        </tbody>
      </table>
    </motion.section>
  );
}
