/*
  COMO ADICIONAR UMA NOVA AULA
  ----------------------------
  1. Ache a disciplina certa aqui embaixo: "erq" ou "ml".
  2. Dentro do array "aulas" dessa disciplina, copie um bloco { ... } e cole no final da lista.
  3. Preencha os campos do bloco:
       numero: número da aula (1, 2, 3...)
       titulo: título da aula
       data:   data no formato "AAAA-MM-DD"
       link:   link de compartilhamento do Google Drive (Compartilhar > Copiar link)
  4. Salve o arquivo. Não precisa mexer em mais nada — o site atualiza sozinho.
     Aulas com data nos últimos 7 dias recebem automaticamente um selo "Novo".

  Para criar uma disciplina nova, copie um bloco "erq: { ... }" inteiro,
  cole antes do fechamento "}" final, mude a chave (ex: "erq2") e os dados.
  Os campos "icone" (um emoji) e "cor" (código hexadecimal) definem a
  identidade visual da disciplina nos cards e no cabeçalho.

  O campo "ementa" é opcional e alimenta a caixa "Ementa e conteúdo
  programático" que aparece na página da disciplina. Edite o texto
  livremente para acompanhar o plano de ensino oficial.
*/

const INSTITUICAO = {
  nome: "Centro Universitário Maurício de Nassau",
  sigla: "UNINASSAU",
  curso: "Análise e Desenvolvimento de Sistemas",
  logo: "logo-uninassau.png"
};

const DISCIPLINAS = {
  erq: {
    nome: "Engenharia de Requisitos, Teste e Qualidade de Software",
    sigla: "ERTQS",
    descricao: "Requisitos, testes e garantia de qualidade de software.",
    icone: "🧪",
    cor: "#2f6fb0",
    semestre: "2026.2",
    ementa: {
      codigo: "GRA-PLE-XXXX-X",
      periodo: "2º Período",
      cargaHoraria: {
        "Teórica presencial": "20h",
        "Teórica EaD": "20h",
        "Prática presencial": "20h",
        "Prática EaD": "0h",
        "Atividades de Extensão": "0h"
      },
      texto:
        "Engenharia de Requisitos em ecossistemas ágeis e especificação orientada a comportamento (BDD). Engenharia de Qualidade, métricas de confiabilidade e modelos de maturidade corporativa (CMMI, MPS.BR, ISO/IEC 25010). Fundamentos teóricos e práticos dos níveis de Teste de Software (técnicas de caixa-branca e caixa-preta). Automação de testes integrados em esteiras CI/CD, avaliações não funcionais (segurança e carga) e o uso estratégico de Inteligência Artificial generativa para a otimização preditiva da qualidade sistêmica.",
      competencias: [
        "Elicitação Estratégica e Empatia Analítica: investigar contextos corporativos ambíguos, diagnosticando lacunas operacionais através do emprego de técnicas ativas de elicitação para extrair, categorizar e modelar requisitos funcionais e não-funcionais.",
        "Gestão de Conformidade e Maturidade Sistêmica: avaliar a arquitetura de processos organizacionais em consonância com modelos mundiais de maturidade (CMMI, MPS.BR) e normas de qualidade (ISO/IEC 25010).",
        "Engenharia de Cenários e Projetação de Testes: projetar roteiros exaustivos de validação técnica fundamentados nos paradigmas de Caixa-Branca, Caixa-Preta e heurísticas exploratórias.",
        "Orquestração de Automação e Integração de Repositórios: desenvolver e codificar scripts de automação de testes, acoplando-os em esteiras de integração contínua (CI/CD).",
        "Auditoria de Resiliência e Segurança Ética: mensurar limites físicos de processamento, estresse concorrente e vulnerabilidades perimetrais mediante testes não-funcionais."
      ],
      unidades: [
        {
          titulo: "Unidade I — Engenharia de Requisitos",
          topicos: [
            "1.1 O Processo Holístico de Engenharia de Requisitos",
            "1.2 Técnicas de Elicitação, Descoberta e Priorização",
            "1.3 Especificação, Modelagem e Documentação Formal"
          ]
        },
        {
          titulo: "Unidade II — Qualidade de Software e Conformidade Normativa",
          topicos: [
            "2.1 Os Atributos e a Psicologia da Qualidade Sistêmica",
            "2.2 Modelos de Maturidade e Melhoria de Processos",
            "2.3 Métricas, Estimativas e Monitoramento de Confiabilidade"
          ]
        },
        {
          titulo: "Unidade III — Fundamentos Teóricos e Níveis de Teste de Software",
          topicos: [
            "3.1 Arquitetura Conceitual e Psicologia do Processo de Testagem",
            "3.2 Níveis de Validação Estruturada e Arquitetura de Execução",
            "3.3 Técnicas Clássicas e Heurísticas de Desenho de Casos de Teste"
          ]
        },
        {
          titulo: "Unidade IV — Automação, Integração Contínua e Inovação Aplicada",
          topicos: [
            "4.1 Testes Não Funcionais, Resiliência Física e Interação",
            "4.2 Orquestração de Testes Automatizados e Infraestrutura Ágil",
            "4.3 Inovação Algorítmica e Inteligência Artificial na Qualidade"
          ]
        }
      ]
    },
    aulas: [
  {
    numero: 1,
    titulo: "1.1 O Processo Holístico de Engenharia de Requisitos",
    data: "2026-08-11",
    link: "https://drive.google.com/drive/folders/1SOJd72ilV37RAVnu8N-xwq-WzMDXjvpG?usp=sharing"
  },
  {
    numero: 2,
    titulo: "1.2 Técnicas de Elicitação, Descoberta e Priorização",
    data: "2026-08-18",
    link: "https://drive.google.com/drive/folders/1no535xtFLim_Oh2G-zD-FCirrfnmvLY2?usp=sharing"
  },
  {
    numero: 3,
    titulo: "Aula Online",
    data: "2026-08-25",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 4,
    titulo: "1.3 Especificação, Modelagem e Documentação Formal",
    data: "2026-09-01",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 5,
    titulo: "2.1 Os Atributos e a Psicologia da Qualidade Sistêmica",
    data: "2026-09-08",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQU"
  },
  {
    numero: 6,
    titulo: "2.2 Modelos de Maturidade e Melhoria de Processos",
    data: "2026-09-15",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 7,
    titulo: "Aula Online",
    data: "2026-09-22",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 8,
    titulo: "2.3 Métricas, Estimativas e Monitoramento de Confiabilidade",
    data: "2026-09-29",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 9,
    titulo: "1º Avaliação",
    data: "2026-10-06",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 10,
    titulo: "3.1 Arquitetura Conceitual e Psicologia do Processo de Testagem",
    data: "2026-10-13",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 11,
    titulo: "3.2 Níveis de Validação Estruturada e Arquitetura de Execução",
    data: "2026-10-20",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 12,
    titulo: "Aula Online",
    data: "2026-10-27",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 13,
    titulo: "3.3 Técnicas Clássicas e Heurísticas de Desenho de Casos de Teste",
    data: "2026-11-03",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 14,
    titulo: "Aula Online",
    data: "2026-11-10",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 15,
    titulo: "4.1 Testes Não Funcionais, Resiliência Física e Interação",
    data: "2026-11-17",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 16,
    titulo: "4.2 Orquestração de Testes Automatizados / 4.3 Inovação Algorítmica e IA na Qualidade",
    data: "2026-11-24",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 17,
    titulo: "2º Avaliação",
    data: "2026-12-01",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 18,
    titulo: "Segunda Chamada",
    data: "2026-12-08",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 19,
    titulo: "Segunda Chamada",
    data: "2026-12-15",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 20,
    titulo: "Segunda Chamada",
    data: "2026-12-22",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  }
]
  },
  ml: {
    nome: "Machine Learning",
    sigla: "ML",
    descricao: "Fundamentos e aplicações de aprendizado de máquina.",
    icone: "🤖",
    cor: "#7a4fbf",
    semestre: "2026.2",
    ementa: {
      codigo: "GRA-PLE-2140-G",
      periodo: "4º Período",
      cargaHoraria: {
        "Teórica presencial": "20h",
        "Teórica EaD": "20h",
        "Prática presencial": "20h",
        "Prática EaD": "0h",
        "Atividades de Extensão": "0h"
      },
      texto:
        "Fundamentos de Machine Learning; Algoritmos Meta-Heurísticos; Computação Natural; Aprendizagem Supervisionada; Aprendizagem não supervisionada; Aprendizagem Bayesiana, Métodos Paramétricos, Redução de Dimensionalidade, Clustering, Métodos Não-paramétricos, Árvores de Decisão, Redes Neurais, Aprendizado por Reforço.",
      competencias: [
        "Conhecer os fundamentos de Machine Learning.",
        "Aplicar a Computação Natural.",
        "Aplicar os métodos paramétricos e não paramétricos.",
        "Dominar os conceitos de redução de dimensionalidade e Clustering.",
        "Utilizar Árvores de Decisão e Redes Neurais.",
        "Entender a Aprendizagem por Reforço."
      ],
      unidades: [
        {
          titulo: "Unidade I",
          topicos: [
            "Fundamentos de Machine Learning",
            "Algoritmos Meta-Heurísticos",
            "Computação Natural"
          ]
        },
        {
          titulo: "Unidade II",
          topicos: [
            "Aprendizagem Supervisionada",
            "Aprendizagem Não Supervisionada",
            "Aprendizagem por Reforço",
            "Aprendizagem Bayesiana"
          ]
        },
        {
          titulo: "Unidade III",
          topicos: [
            "Redução de Dimensionalidade",
            "Modelos Paramétricos",
            "Métodos Não Paramétricos",
            "Árvores de Decisão"
          ]
        },
        {
          titulo: "Unidade IV",
          topicos: [
            "Clustering",
            "Perceptron em Múltiplas Camadas",
            "Projeto"
          ]
        }
      ]
    },
    aulas: [
  {
    numero: 1,
    titulo: "Fundamentos de Machine Learning",
    data: "2026-08-14",
    link: "https://drive.google.com/drive/folders/1AtIY9JHvlt_ZTnNW69svUY_n6mqihyIm?usp=sharing"
  },
  {
    numero: 2,
    titulo: "Algoritmos Meta-Heurísticos",
    data: "2026-08-21",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 3,
    titulo: "Computação Natural",
    data: "2026-08-28",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 4,
    titulo: "Aprendizagem Supervisionada",
    data: "2026-09-04",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 5,
    titulo: "Aprendizagem Não Supervisionada",
    data: "2026-09-11",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 6,
    titulo: "Aprendizagem por Reforço",
    data: "2026-09-18",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 7,
    titulo: "Aprendizagem Bayesiana",
    data: "2026-09-25",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 8,
    titulo: "1ª Avaliação Parcial",
    data: "2026-10-09",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 9,
    titulo: "Redução de Dimensionalidade",
    data: "2026-10-16",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 10,
    titulo: "Modelos Paramétricos",
    data: "2026-10-23",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 11,
    titulo: "Métodos Não Paramétricos",
    data: "2026-10-30",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 12,
    titulo: "Árvores de Decisão",
    data: "2026-11-06",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 13,
    titulo: "Clustering",
    data: "2026-11-13",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 14,
    titulo: "Redes Neurais - Perceptron em Múltiplas Camadas",
    data: "2026-11-20",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 15,
    titulo: "Projeto - Definição e Orientação",
    data: "2026-11-27",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 16,
    titulo: "2ª Avaliação Parcial",
    data: "2026-12-04",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 17,
    titulo: "Desenvolvimento do Projeto Final",
    data: "2026-12-11",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 18,
    titulo: "Segunda Chamada",
    data: "2026-12-18",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  },
  {
    numero: 19,
    titulo: "Segunda Chamada",
    data: "2026-12-25",
    link: "https://drive.google.com/drive/folders/SEU-LINK-AQUI"
  }
]
  }
};
