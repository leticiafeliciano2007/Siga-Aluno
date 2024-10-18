    document.addEventListener("DOMContentLoaded", function() {
    const anoSelect = document.getElementById("ANO_ALUNO");
    const boletimBody = document.getElementById("boletim-body");

    // Dados de exemplo para cada ano
    const boletinsPorAno = {
        2024: [
            { componente: "Biologia", ch: 80, freq: "93,22%", sint1: "MB", sint2: "MB", sint3: "MB", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "LPL-Língua Portuguesa e Literatura", ch: 120, freq: "90,69%", sint1: "B", sint2: "B", sint3: "R", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "Matemática", ch: 160, freq: "83,89%", sint1: "MB", sint2: "R", sint3: "I", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "Filosofia", ch: 80, freq: "86,66%", sint1: "MB", sint2: "B", sint3: "MB", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "Geografia", ch: 80, freq: "93,10%", sint1: "MB", sint2: "MB", sint3: "MB", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "IPSSI-Internet, Protocolos e Segurança de Sistemas de Informação", ch: 80, freq: "89,65%", sint1: "MB", sint2: "MB", sint3: "B", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "Inglês", ch: 80, freq: "93,10%", sint1: "MB", sint2: "R", sint3: "MB", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "PAM-Programação de Aplicativos Mobile II", ch: 80, freq: "79,31%", sint1: "B", sint2: "R", sint3: "I", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "TCC-Trabalho de Conclusão de Curso", ch: 120, freq: "86,51%", sint1: "MB", sint2: "B", sint3: "B", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "PW-Programação Web III", ch: 80, freq: "89,65%", sint1: "B", sint2: "B", sint3: "MB", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "QTS-Qualidade e Teste de Software", ch: 80, freq: "85%", sint1: "MB", sint2: "MB", sint3: "B", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "Sociologia", ch: 80, freq: "91,22%", sint1: "B", sint2: "B", sint3: "B", sint4: "-", sintf: "-", resf: "Em curso" },
            { componente: "SE-Sistemas Embarcados", ch: 80, freq: "89,65%", sint1: "MB", sint2: "MB", sint3: "MB", sint4: "-", sintf: "-", resf: "Em curso" },
        ],
        2023: [
            { componente: "Biologia", ch: 80, freq: "95%", sint1: "MB", sint2: "MB", sint3: "B", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "BD-Banco de Dados II", ch: 80, freq: "97,50%", sint1: "MB", sint2: "B", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "DS-Desenvolvimento de Sistemas", ch: 120, freq: "96,89%", sint1: "B", sint2: "MB", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "Ética e Cidadania Organizacional", ch: 40, freq: "92,50%", sint1: "MB", sint2: "MB", sint3: "B", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "Educação Física", ch: 80, freq: "96,29%", sint1: "B", sint2: "MB", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "Física", ch: 80, freq: "96,20%", sint1: "MB", sint2: "MB", sint3: "B", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "Geografia", ch: 80, freq: "92,10%", sint1: "MB", sint2: "MB", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "Hitória", ch: 80, freq: "96,38%", sint1: "MB", sint2: "MB", sint3: "B", sint4: "B", sintf: "MB", resf: "Aprovado" },
            { componente: "Inglês", ch: 80, freq: "94,80%", sint1: "MB", sint2: "MB", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "LPL-Língua Portuguesa e Literatura", ch: 120, freq: "93,10%", sint1: "B", sint2: "B", sint3: "B", sint4: "R", sintf: "B", resf: "Aprovado" },
            { componente: "Matemática", ch: 120, freq: "93,10%", sint1: "MB", sint2: "B", sint3: "B", sint4: "B", sintf: "B", resf: "Aprovado" },
            { componente: "PAM-Programação de Aplicativos Mobile I", ch: 80, freq: "95%", sint1: "B", sint2: "B", sint3: "B", sint4: "B", sintf: "B", resf: "Aprovado" },
            { componente: "PW-Programação Web II", ch: 80, freq: "88,75%", sint1: "B", sint2: "B", sint3: "MB", sint4: "B", sintf: "B", resf: "Aprovado" },
            { componente: "Química", ch: 80, freq: "95,18%", sint1: "B", sint2: "B", sint3: "B", sint4: "B", sintf: "B", resf: "Aprovado" },
        ],
        2022: [
            { componente: "Arte", ch: 80, freq: "94,80%", sint1: "B", sint2: "MB", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "APS-Análise e Projeto de Sistemas", ch: 80, freq: "95,23%", sint1: "B", sint2: "MB", sint3: "MB", sint4: "B", sintf: "B", resf: "Aprovado" },
            { componente: "BD-Banco de Dados I", ch: 80, freq: "92,50%", sint1: "MB", sint2: "MB", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "DD-Design Digital", ch: 80, freq: "92,10%", sint1: "MB", sint2: "B", sint3: "R", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "Educação Física", ch: 80, freq: "97,46%", sint1: "MB", sint2: "MB", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "Fundamentos da Informática", ch: 80, freq: "97,56%", sint1: "MB", sint2: "MB", sint3: "MB", sint4: "MB",sintf: "MB", resf: "Aprovado" },
            { componente: "Física", ch: 80, freq: "96,10%", sint1: "MB", sint2: "MB", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "História", ch: 80, freq: "96,38%", sint1: "MB", sint2: "B", sint3: "B", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "Inglês", ch: 80, freq: "97,50%", sint1: "B", sint2: "MB", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "LPL-Língua Portuguesa e Literatura", ch: 120, freq: "97,52%", sint1: "B", sint2: "MB", sint3: "B", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "Matemática", ch: 80, freq: "98,71%", sint1: "MB", sint2: "MB", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "PW-Programação Web I", ch: 80, freq: "100%", sint1: "MB", sint2: "MB", sint3: "B", sint4: "MB", sintf: "MB", resf: "Aprovado" },
            { componente: "Química", ch: 80, freq: "100%", sint1: "B", sint2: "B", sint3: "B", sint4: "B", sintf: "B", resf: "Aprovado" },
            { componente: "TPA-Técnicas de Programação de Algoritmos", ch: 120, freq: "100%", sint1: "MB", sint2: "B", sint3: "MB", sint4: "MB", sintf: "MB", resf: "Aprovado" },
        ]
    };

    // Função para atualizar o boletim com base no ano selecionado
    function atualizarBoletim(ano) {
        const boletimAtual = boletinsPorAno[ano] || [];

        // Limpar tabela
        boletimBody.innerHTML = "";

        // Preencher nova tabela com os dados do ano selecionado
        boletimAtual.forEach(item => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.componente}</td>
                <td>${item.ch}</td>
                <td>${item.freq}</td>
                <td>${item.sint1}</td>
                <td>${item.sint2}</td>
                <td>${item.sint3}</td>
                <td>${item.sint4}</td>
                <td>${item.sintf}</td>
                <td>${item.resf}</td>
            `;

            boletimBody.appendChild(row);
        });
    }

    // Escutar a mudança no seletor de ano e atualizar o boletim
    anoSelect.addEventListener("change", function() {
        const anoSelecionado = anoSelect.value;
        atualizarBoletim(anoSelecionado);
    });

    // Atualizar boletim ao carregar a página com o ano padrão
    atualizarBoletim(anoSelect.value);
});
