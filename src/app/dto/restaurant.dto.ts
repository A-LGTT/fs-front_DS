export interface Restaurant {

  id: number;
  nom: string;
  adresse: string;
  commentaires: Commentaire[];
  moyenne: number;

}
export interface Commentaire {

  id: number;
  evaluateur: string;
  commentaire: string;
  note: number;

}
