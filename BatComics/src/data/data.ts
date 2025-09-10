import type { Comic } from '../types';

export const batmanComics: Comic[] = [
  {
    id: 1,
    title: "Batman: O Cavaleiro das Trevas",
    coverUrl: "/imgs/cavaleiro-das-trevas.jpg",
    year: 1986,
    author: "Frank Miller",
    artist: "Frank Miller",
    description: "Uma obra-prima sombria que redefiniu o Cavaleiro das Trevas. Bruce Wayne, agora com 55 anos, retorna como Batman em uma Gotham City distópica, enfrentando uma gangue violenta e velhos inimigos.",
    reviews: [
      { id: 1, author: "Alfred Pennyworth", rating: 5, comment: "Essencial. Miller no auge.", date: "2024-01-20" },
      { id: 2, author: "Jim Gordon", rating: 4, comment: "Forte, mas um pouco brutal para o meu gosto.", date: "2024-02-10" },
    ],
    rating: 4.5,
  },
  {
    id: 2,
    title: "Batman: Ano Um",
    coverUrl: "/imgs/ano-um.jpg",
    year: 1987,
    author: "Frank Miller",
    artist: "David Mazzucchelli",
    description: "A história definitiva das origens de Batman. Bruce Wayne retorna a Gotham e começa sua cruzada contra o crime, enquanto o Tenente James Gordon lida com a corrupção na polícia e uma cidade à beira do caos.",
    reviews: [
      { id: 3, author: "Selina Kyle", rating: 5, comment: "Uma introdução selvagem e sexy.", date: "2024-03-01" },
      { id: 4, author: "Harvey Dent", rating: 5, comment: "A base de tudo. Perfeita.", date: "2024-03-15" },
    ],
    rating: 5,
  },
  {
    id: 3,
    title: "Batman: A Piada Mortal",
    coverUrl: "/imgs/piada-mortal.jpg",
    year: 1988,
    author: "Alan Moore",
    artist: "Brian Bolland",
    description: "Uma imersão na mente do Coringa e na relação complexa entre ele e Batman. A HQ explora a origem do Palhaço do Crime e suas tentativas de levar o Comissário Gordon à loucura, chocando os leitores.",
    reviews: [
      { id: 5, author: "O Coringa", rating: 5, comment: "Minha obra-prima! HAHAHAHA!", date: "2024-04-05" },
      { id: 6, author: "Barbara Gordon", rating: 2, comment: "Demasiado perturbador. Não recomendo.", date: "2024-04-12" },
    ],
    rating: 3.5,
  },
  {
    id: 4,
    title: "Batman: O Longo Dia das Bruxas",
    coverUrl: "/imgs/longo-dia-das-bruxas.jpg",
    year: 1996,
    author: "Jeph Loeb",
    artist: "Tim Sale",
    description: "Uma série de assassinatos misteriosos assola Gotham, ocorrendo apenas em feriados. Batman, o Comissário Gordon e Harvey Dent se unem para caçar o assassino conhecido como Feriado, enquanto o submundo do crime entra em colapso.",
    reviews: [
      { id: 7, author: "Carmine Falcone", rating: 4, comment: "Uma bagunça sangrenta, mas um bom mistério.", date: "2024-05-01" },
      { id: 8, author: "Bruce Wayne", rating: 5, comment: "Um estudo de personagens e um thriller perfeito.", date: "2024-05-10" },
    ],
    rating: 4.5,
  },
];