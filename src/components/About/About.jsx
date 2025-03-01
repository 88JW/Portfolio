import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <section id="about">
      <h2 className="align-left">About ME</h2>
      <div className="about-content">
        <div className="full-content">
          <div className="cards">
            <div className="card card-left">
              <h4>Tworzenie i rozwijanie konfigów gier</h4>
              <p>Praca po stronie frontendu i UI, implementacjainterfejsów użytkownika oraz dostosowywanie ichdo założeń projektowych.</p>
              <p>Implementacja nowych funkcji oraz udoskonalanieistniejącego kodu w celu poprawy rozgrywki idoświadczenia użytkownika.</p>
            </div>
            <div className="card card-right">
              <h4>Zarządzanie i koordynacja</h4>
              <p>Koordynowanie współpracy między zespołamiprogramistów, grafików i animatorów w celuefektywnego wdrażania rozwiązań do gier.</p>
              <p>Zarządzania czasem, praca z backlogiem i tworzenie dokumentacji technicznej</p>
            </div>
            <div className="card card-left">
              <h4>Implementacja i produkcja</h4>
              <p>Udział w produkcji i wdrożeniu 6 ukończonychprojektów gier, obejmujących zarówno rozwójnowych tytułów, jak i ulepszanie istniejącychprodukcji.</p>
              <p>Rozwiązywanie problemów technicznych i debugging.</p>
              <p>Wprowadzanie optymalizacji i refaktoryzacja kodu.</p>
            </div>
            {/* ...add more cards as needed... */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
