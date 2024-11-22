import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  standalone: false,
})
export class FavoritosComponent implements OnInit {
  favorites: any[] = []; // Lista de livros favoritos

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.loadFavorites(); // Carrega os favoritos ao iniciar o componente
  }

  // Método para carregar os favoritos
  loadFavorites(): void {
    this.favorites = this.favoriteService.getFavorites(); // Recupera os favoritos
  }

  // Método para remover um favorito
  removeFavorite(book: any): void {
    this.favoriteService.removeFavorite(book); // Remove o livro dos favoritos
    this.loadFavorites(); // Atualiza a lista de favoritos
  }
}
