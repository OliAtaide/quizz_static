const ajax_url =
  "https://docs.google.com/spreadsheets/d/1KwVBQosNxn7l4789c-OtGnSFf4hSpHqples2KkBGkO4/";

$.ajax({
  contentType: "application/json; charset=utf-8",
  type: "GET",
  cache: false,
  url: ajax_url,
  xhrFields: {
    responseType: "arraybuffer",
  },
  success: function (result) {
    console.log(result);
  },
});

const questoes = [
  {
    titulo:
      "Há algumas possibilidades de canais para melhorar a comunicação com estudantes e colegas, por exemplo, e-mails, redes sociais, aplicativos de mensagens e demais apps, sites institucionais, entre outros. Com relação a isso, eu:",
    opcoes: [
      "Raramente uso canais de comunicação digital.",
      "Uso canais de comunicação básicos, por exemplo, e-mail.",
      "Combino diferentes canais de comunicação, como e-mail, redes sociais, aplicativos de mensagens e sites.",
      "Seleciono, ajusto e combino, frequentemente, diferentes soluções digitais para me comunicar eficazmente.",
      "Reflito, discuto e desenvolvo as minhas estratégias de comunicação proativamente com estudantes e docentes.",
    ],
  },
  {
    titulo:
      "Uso tecnologias digitais para trabalhar com colegas dentro e fora da minha instituição.",
    opcoes: [
      "Raramente tenho oportunidade para colaborar com outros colegas.",
      "Às vezes troco materiais com colegas, por exemplo, via e-mail.",
      "Entre colegas, trabalhamos juntos em ambientes colaborativos ou usamos arquivos/drives compartilhados.",
      "Troco ideias e materiais que já existem, também com colegas externos à minha instituição, por exemplo, em uma rede on-line profissional ou em um espaço colaborativo ",
      "Crio/produzo materiais juntamente com outros colegas numa rede online de profissionais de diferentes instituições.",
    ],
  },
  {
    titulo: "Desenvolvo minhas habilidades de ensino digital ativamente.",
    opcoes: [
      "Raramente tenho tempo para melhorar minhas habilidades de ensino digital.",
      "Aprimoro minhas habilidades por meio da reflexão e experimentação.",
      "Uso uma variedade de recursos digitais para desenvolver minhas habilidades no ensino digital.",
      "Discuto com colegas como usar tecnologias digitais para inovar e melhorar a prática educativa.",
      "Ajudo os colegas a desenvolverem as suas estratégias para melhorar o uso das tecnologias digitais no ensino.",
    ],
  },
  {
    titulo:
      "Participo em oportunidades de formação on-line, como cursos autoinstrucionais, MOOCs, webinars, conferências virtuais...",
    opcoes: [
      "Esta é uma área nova que ainda não considerei.",
      "Ainda não, mas estou definitivamente interessado(a).",
      "Participei de formação on-line poucas vezes.",
      "Em várias oportunidades participei de formação on-line.",
      "Participo frequentemente de vários tipos de formação on-line.",
    ],
  },
];

questoes.forEach((q, i) => {
  let opcoes = "";
  q.opcoes.forEach((o) => {
    opcoes += `
        <button class="btn opcao">
          ${o}
        </button>
      `;
  });
  $(".perguntas").append(
    `
      <div class="pergunta">
        <div class="titulo btn">
          ${i + 1}. ${q.titulo}
        </div>
        <div class="opcoes">
          ${opcoes}
        </div>
      </div>
    `
  );
});

$(".navbar").append(
  `
    <div class="container container-fluid">
      <div class="navbar-brand mx-auto">
        <img src="imgs/lais.svg"/>
      </div>
      <a href="https://lais.huol.ufrn.br/">
        Portal LAIS
        <i class="bi bi-box-arrow-up-right"></i>
      </a>
    </div>
  `
);

const niveis = [
  {
    imagem: "01",
    titulo: "Recém-chegados",
    texto:
      "reconhecem o potencial das tecnologias digitais para melhorar a prática pedagógica e profissional e usam-nas majoritariamente para preparação de aulas, administração ou comunicação institucional.",
  },
  {
    imagem: "04",
    titulo: "Especialistas",
    texto:
      "selecionam tecnologias digitais propositadamente para situações específicas e procuram compreender as vantagens e desvantagens de diferentes estratégias digitais.",
  },
  {
    imagem: "02",
    titulo: "Exploradores",
    texto:
      "começaram a usar tecnologias digitais em algumas áreas de competência digital, sem, no entanto, seguir uma abordagem abrangente ou consistente.",
  },
  {
    imagem: "05",
    titulo: "Líderes",
    texto:
      "contam com um amplo repertório de estratégias digitais, do qual sabem escolher a mais adequada para determinada situação.",
  },  
  {
    imagem: "03",
    titulo: "Integradores",
    texto:
      "utilizam as tecnologias digitais de forma criativa para melhorar diversos aspectos do seu envolvimento profissional.",
  },
  {
    imagem: "06",
    titulo: "Pioneiros",
    texto:
      "preocupam-se com as limitações ou desvantagens dessas práticas e são levados pelo impulso de inovar cada vez mais a Educação.",
  },
];

niveis.forEach(n => {
  $('.row-levels').append(
    `
      <div class="col-sm-6">
        <div class="card card-level">
          <div class="card-body">
            <img src="imgs/${n.imagem}.png" alt="">
            <div class="card-text">
              <strong>${n.titulo}: </strong>
              ${n.texto}
            </div>
          </div>
        </div>
      </div>
    `
  )
});