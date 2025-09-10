export interface Review {
  id: number;
  author: string;
  rating: number; 
  comment: string;
  date: string; 
}

export interface Comic {
  id: number;
  title: string;
  coverUrl: string;
  year: number;
  description: string; 
  author: string;      
  artist: string;   
  rating?: number;     
  reviews?: Review[];  
}