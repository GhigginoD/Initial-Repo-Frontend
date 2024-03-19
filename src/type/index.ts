export type TemaType = {
  id?: string;
  nome: string;
  slug?: string;
  descricao: string;
};

export type AssuntoType = {
  id: string;
  nome: string;
  slug: string;
  posicionamento: string;
  descricao: string;
  Category: { name: string; id: string };
};
