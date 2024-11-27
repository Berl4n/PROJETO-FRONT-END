import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detalhesLivro',
  pure: false, // Isso permite que o pipe se atualize em tempo real, se necessário
  standalone: false,
})
export class DetalhesLivroPipe implements PipeTransform {
  transform(livro: any): string {
    if (!livro) {
      return 'Informações do livro indisponíveis';
    }

    const titulo = livro.title || 'Título não informado';
    const autor = livro.author || 'Autor desconhecido';
    const genero = livro.genre || 'Gênero não especificado';
    const descricao = livro.description || 'Descrição não disponível';

    return `
      <strong>Título:</strong> ${titulo}<br>
      <strong>Autor:</strong> ${autor}<br>
      <strong>Gênero:</strong> ${genero}<br>
      <strong>Descrição:</strong> ${descricao}
    `;
  }
}
