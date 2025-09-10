// src/pages/ComicDetails.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { batmanComics } from '../data/data';
import type { Comic, Review } from '../types';
import { FaStar, FaArrowLeft } from 'react-icons/fa'; 

const ComicDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [comic, setComic] = useState<Comic | undefined>(undefined);
  const [newReviewText, setNewReviewText] = useState<string>('');
  const [newReviewRating, setNewReviewRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  useEffect(() => {
    const foundComic = batmanComics.find(c => c.id === Number(id));
    setComic(foundComic);
  }, [id]);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText.trim() || newReviewRating === 0 || !comic) return;

    const newReview: Review = {
      id: comic.reviews ? comic.reviews.length + 1 : 1,
      author: "Usuário Anônimo", 
      rating: newReviewRating,
      comment: newReviewText,
      date: new Date().toISOString().split('T')[0], 
    };

    const updatedReviews = [...(comic.reviews || []), newReview];
    const newAverageRating = updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length;

    setComic({
      ...comic,
      reviews: updatedReviews,
      rating: newAverageRating,
    });

    setNewReviewText('');
    setNewReviewRating(0);
    setHoverRating(0);
  };

  if (!comic) {
    return (
      <div className="min-h-screen bg-dark-bg text-gray-200 flex items-center justify-center">
        <p className="text-xl animate-pulse">Carregando ou HQ não encontrada...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg text-gray-200 pt-16 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-accent-yellow hover:text-accent-purple transition-colors duration-300 text-lg mb-8 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Voltar para a lista
        </button>

        <div className="bg-dark-card rounded-xl shadow-card-hover p-8 md:p-10 border border-dark-border flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
          <div className="flex-shrink-0 w-64 h-96 overflow-hidden rounded-lg shadow-lg border border-gray-700">
            <img src={comic.coverUrl} alt={`Capa de ${comic.title}`} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-5xl font-display font-extrabold text-accent-yellow leading-tight mb-4 text-gradient-purple-yellow">
              {comic.title}
            </h2>
            <p className="text-gray-400 text-xl mb-3">Ano: {comic.year}</p>
            <p className="text-gray-300 text-lg mb-2">Autor: <span className="font-semibold text-accent-purple">{comic.author}</span></p>
            <p className="text-gray-300 text-lg mb-4">Artista: <span className="font-semibold text-accent-purple">{comic.artist}</span></p>

            {comic.rating !== undefined && (
              <div className="flex items-center justify-center md:justify-start text-accent-yellow mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-2xl ${i < Math.round(comic.rating || 0) ? 'text-accent-yellow' : 'text-gray-600'}`} />
                ))}
                <span className="ml-3 text-gray-300 text-lg font-medium">({comic.rating.toFixed(1)} / 5 - {comic.reviews?.length || 0} reviews)</span>
              </div>
            )}

            <p className="text-gray-300 text-base leading-relaxed mb-6 border-t border-b border-dark-border py-4">
              {comic.description}
            </p>
          </div>
        </div>

        {/* Seção de Reviews */}
        <div className="mt-12 bg-dark-card rounded-xl shadow-card-hover p-8 border border-dark-border">
          <h3 className="text-3xl font-bold text-accent-yellow mb-6 text-center">Reviews</h3>

          {/* Formulário para Nova Review */}
          <form onSubmit={handleAddReview} className="mb-8 p-6 bg-dark-lighter rounded-lg shadow-md border border-dark-border">
            <h4 className="text-2xl font-semibold text-gray-200 mb-4">Adicionar sua Review</h4>
            <div className="flex items-center mb-4">
              <span className="mr-3 text-gray-300 text-lg">Sua Avaliação:</span>
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                  <FaStar
                    key={i}
                    className={`cursor-pointer text-3xl transition-colors duration-200 ${
                      (hoverRating || newReviewRating) >= ratingValue ? 'text-accent-yellow' : 'text-gray-600'
                    }`}
                    onClick={() => setNewReviewRating(ratingValue)}
                    onMouseEnter={() => setHoverRating(ratingValue)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                );
              })}
              {newReviewRating === 0 && <span className="ml-3 text-red-400">Selecione uma estrela!</span>}
            </div>
            <textarea
              className="w-full p-4 bg-gray-800 text-gray-200 rounded-lg border border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-purple resize-y mb-4 placeholder-gray-500"
              rows={4}
              placeholder="Escreva sua review aqui..."
              value={newReviewText}
              onChange={(e) => setNewReviewText(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-accent-purple hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-purple"
            >
              Enviar Review
            </button>
          </form>

          {comic.reviews && comic.reviews.length > 0 ? (
            <div className="space-y-6">
              {comic.reviews.map(review => (
                <div key={review.id} className="bg-dark-lighter p-6 rounded-lg shadow-md border border-dark-border">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-xl ${i < review.rating ? 'text-accent-yellow' : 'text-gray-600'}`} />
                    ))}
                    <span className="ml-3 text-gray-300 font-medium">{review.rating} / 5</span>
                  </div>
                  <p className="text-gray-200 text-lg mb-2">{review.comment}</p>
                  <p className="text-gray-500 text-sm">Por <span className="font-semibold text-gray-400">{review.author}</span> em {review.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">Nenhuma review ainda. Seja o primeiro a avaliar!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComicDetails;