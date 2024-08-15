

<h1>Projet Liste de Films</h1>

<div >
  <h2>Vue d'ensemble</h2>
  <p>
    Ce projet est une application web développée avec React et Chakra UI qui permet aux utilisateurs de visualiser et d'interagir avec une liste de films. Les fonctionnalités incluent la pagination des films, le filtrage par catégorie, et la fonctionnalité de like/dislike.
  </p>
</div>

<div class="section">
  <h2>Fonctionnalités</h2>
  <ul>
    <li><strong>Affichage des Films</strong> : Les films sont affichés dans des cartes réactives avec le titre, la catégorie, et une jauge indiquant le ratio like/dislike.</li>
    <li><strong>Pagination</strong> : Navigation entre les pages avec des options pour afficher 4, 8 ou 12 films par page.</li>
    <li><strong>Filtrage par Catégorie</strong> : Filtrer les films par catégorie avec des options de sélection multiple dynamiques.</li>
    <li><strong>Toggle Like/Dislike</strong> : Augmenter/diminuer de manière interactive les likes et dislikes pour chaque film.</li>
    <li><strong>Suppression de Film</strong> : Supprimer des films de la liste.</li>
    <li><strong>Design Réactif</strong> : L'application est conçue pour être réactive, assurant une utilisation optimale sur divers écrans.</li>
  </ul>
</div>

<div class="section">
  <h2>Technologies Utilisées</h2>
  <ul>
    <li><strong>React</strong> : Bibliothèque JavaScript pour construire des interfaces utilisateur.</li>
    <li><strong>Chakra UI</strong> : Bibliothèque de composants React pour des éléments UI accessibles et personnalisables.</li>
  </ul>
</div>

<div class="section">
  <h2>Configuration</h2>
 
  </ul>
  <h3>Installation</h3>
  <ol>
    <li><strong>Cloner le dépôt :</strong></li>
    <pre><code>git clone https://github.com/EyaSomaii/react-interview-movies/tree/main </code></pre>
    <li><strong>Naviguer dans le répertoire du projet :</strong></li>
    <pre><code>cd movie-list-project</code></pre>
    <li><strong>Installer les dépendances :</strong></li>
    <pre><code>npm install</code></pre>
    <li><strong>Démarrer le serveur de développement :</strong></li>
    <pre><code>npm start</code></pre>
    <p>Ouvre ton navigateur et va à <code>http://localhost:3000</code> pour voir l'application.</p>
  </ol>
</div>

<div class="section">
  <h2>Utilisation</h2>
  <ul>
    <li><strong>Afficher les Films</strong> : La liste des films est affichée dans des cartes. Chaque carte montre le titre du film, la catégorie, et une jauge indiquant le ratio like/dislike.</li>
    <li><strong>Like/Dislike un Film</strong> : Clique sur le bouton "Like" ou "Dislike" sur une carte de film pour basculer entre aimer et ne pas aimer le film. Les comptes de likes/dislikes et la jauge se mettront à jour en conséquence.</li>
    <li><strong>Supprimer un Film</strong> : Clique sur le bouton "Delete" (Supprimer) sur une carte de film pour le retirer de la liste.</li>
    <li><strong>Filtrer par Catégorie</strong> : Utilise les cases à cocher de catégorie pour filtrer la liste des films par catégories sélectionnées.</li>
    <li><strong>Changer le Nombre d'Éléments par Page</strong> : Sélectionne le nombre de films à afficher par page (4, 8 ou 12) à l'aide du menu déroulant.</li>
    <li><strong>Naviguer entre les Pages</strong> : Utilise les boutons "Précédent" et "Suivant" pour naviguer entre les pages de films.</li>
  </ul>
</div>

<div class="section">
  <h2>Structure du Code</h2>
  <ul>
    <li><strong>src/components/Movie-Card.jsx</strong> : Contient le composant <code>MovieCard</code> qui affiche les cartes de film individuelles.</li>
    <li><strong>src/components/MovieList.jsx</strong> : Contient le composant <code>MovieList</code> qui affiche la liste des films, gère la pagination, le filtrage et la suppression.</li>
    <li><strong>src/data/movies.js</strong> : Contient un fichier de données fictives avec des informations sur les films.</li>
    <li><strong>src/App.js</strong> : Le point d'entrée principal de l'application qui rend le composant <code>MovieList</code>.</li>
  </ul>
</div>
