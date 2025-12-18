import { Event } from "../models";

export const events: Event[] = [
  {
    id: "72f33b4a-40f9-4dff-a0b9-fca04fd78aa6",
    alias: "evento-fullstack",
    password: "senha123",
    name: "Evento de Desenvolvimento Fullstack",
    date: new Date("2024-12-01T10:00:00Z"),
    location: "São Paulo, SP",
    description:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    image:
      "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    backgroundImage:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    numberOfAttendees: 200,
    attendees: [
      {
        id: "123e4567-e89b-12d3-a456-426614174000",
        name: "Alice Silva",
        email: "alice@example.com",
        isConfirmed: true,
        hasPlusOne: true,
        plusOneQuantity: 1,
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174001",
        name: "Carlos Pereira",
        email: "carlos@example.com",
        isConfirmed: false,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174002",
        name: "Beatriz Lima",
        email: "beatriz@example.com",
        isConfirmed: true,
        hasPlusOne: true,
        plusOneQuantity: 2,
      },
    ],
  },
  {
    id: "72f33b4a-40f9-4dff-a0b9-fca04fd78aa7",
    alias: "evento-js-avancado",
    password: "js2024",
    name: "Workshop Avançado de JavaScript",
    date: new Date("2024-11-20T15:00:00Z"),
    location: "Rio de Janeiro, RJ",
    description: "Um workshop avançado para programadores JavaScript.",
    image:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    backgroundImage:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    numberOfAttendees: 100,
    attendees: [
      {
        id: "123e4567-e89b-12d3-a456-426614174003",
        name: "Eduardo Santos",
        email: "eduardo@example.com",
        isConfirmed: true,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174004",
        name: "Fernanda Costa",
        email: "fernanda@example.com",
        isConfirmed: true,
        hasPlusOne: true,
        plusOneQuantity: 1,
      },
    ],
  },
  {
    id: "72f33b4a-40f9-4dff-a0b9-fca04fd78aa8",
    alias: "evento-dev-frontend",
    password: "front123",
    name: "Bootcamp de Desenvolvimento Frontend",
    date: new Date("2024-11-15T09:00:00Z"),
    location: "Belo Horizonte, MG",
    description: "Aprenda a criar interfaces incríveis e responsivas.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    backgroundImage:
      "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    numberOfAttendees: 150,
    attendees: [
      {
        id: "123e4567-e89b-12d3-a456-426614174005",
        name: "Gabriela Rocha",
        email: "gabriela@example.com",
        isConfirmed: true,
        hasPlusOne: true,
        plusOneQuantity: 1,
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174006",
        name: "Hugo Nogueira",
        email: "hugo@example.com",
        isConfirmed: false,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174007",
        name: "Isabela Martins",
        email: "isabela@example.com",
        isConfirmed: true,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
    ],
  },
  {
    id: "72f33b4a-40f9-4dff-a0b9-fca04fd78aa9",
    alias: "casamento-alberto-marina",
    password: "casamento2024",
    name: "Casamento do Alberto e Marina",
    date: new Date("2024-11-25T16:00:00Z"),
    location: "Florianópolis, SC",
    description:
      "Celebração do casamento de Alberto e Marina com amigos e familiares.",
    image:
      "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    backgroundImage:
      "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    numberOfAttendees: 150,
    attendees: [
      {
        id: "123e4567-e89b-12d3-a456-426614174008",
        name: "Bruno Cardoso",
        email: "bruno@example.com",
        isConfirmed: true,
        hasPlusOne: true,
        plusOneQuantity: 1,
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174009",
        name: "Carla Mendes",
        email: "carla@example.com",
        isConfirmed: true,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
    ],
  },
  {
    id: "72f33b4a-40f9-4dff-a0b9-fca04fd78aaa",
    alias: "aniversario-joao",
    password: "joao2024",
    name: "Aniversário do João - 30 Anos",
    date: new Date("2024-12-05T18:00:00Z"),
    location: "Curitiba, PR",
    description:
      "Comemoração dos 30 anos de João com amigos próximos e familiares.",
    image:
      "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    backgroundImage:
      "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    numberOfAttendees: 80,
    attendees: [
      {
        id: "123e4567-e89b-12d3-a456-426614174010",
        name: "Maria Souza",
        email: "maria@example.com",
        isConfirmed: true,
        hasPlusOne: true,
        plusOneQuantity: 2,
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174011",
        name: "José Almeida",
        email: "jose@example.com",
        isConfirmed: false,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
    ],
  },
  {
    id: "72f33b4a-40f9-4dff-a0b9-fca04fd78aab",
    alias: "inauguracao-loja-estrela",
    password: "estrela2024",
    name: "Inauguração da Loja Estrela",
    date: new Date("2024-12-10T09:00:00Z"),
    location: "Porto Alegre, RS",
    description:
      "Evento de inauguração da nova loja Estrela com brindes e promoções.",
    image:
      "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    numberOfAttendees: 300,
    attendees: [
      {
        id: "123e4567-e89b-12d3-a456-426614174013",
        name: "Cláudia Lima",
        email: "claudia@example.com",
        isConfirmed: true,
        hasPlusOne: true,
        plusOneQuantity: 3,
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174012",
        name: "Ricardo Barbosa",
        email: "ricardo@example.com",
        isConfirmed: true,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
    ],
  },
  {
    id: "72f33b4a-40f9-4dff-a0b9-fca04fd78aac",
    alias: "reuniao-familia-oliveira",
    password: "familia2024",
    name: "Reunião da Família Oliveira",
    date: new Date("2024-12-15T12:00:00Z"),
    location: "Salvador, BA",
    description: "Reunião de fim de ano da família Oliveira.",
    image:
      "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    backgroundImage:
      "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    numberOfAttendees: 50,
    attendees: [
      {
        id: "123e4567-e89b-12d3-a456-426614174014",
        name: "Thiago Oliveira",
        email: "thiago@example.com",
        isConfirmed: true,
        hasPlusOne: true,
        plusOneQuantity: 4,
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174015",
        name: "Letícia Oliveira",
        email: "leticia@example.com",
        isConfirmed: true,
        hasPlusOne: false,
        plusOneQuantity: 0,
      },
    ],
  },
];

export default events;
