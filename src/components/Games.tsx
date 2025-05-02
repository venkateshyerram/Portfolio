import React, { useState, useEffect } from 'react';
import './Games.css';

// Add these interfaces at the top of the file
interface Book {
  title: string;
  author: string;
  coverUrl: string;
  rating: number;
  genre: string;
  description: string;
}

const Games: React.FC = () => {
  // Modal state
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sudoku state
  const [sudokuGrid, setSudokuGrid] = useState<number[][]>(
    Array(9).fill(0).map(() => Array(9).fill(0))
  );
  const [solution, setSolution] = useState<number[][]>([]);
  const [isSolved, setIsSolved] = useState(false);

  // Hangman state
  const words = ['REACT', 'TYPESCRIPT', 'JAVASCRIPT', 'PROGRAMMING', 'DEVELOPER'];
  const [selectedWord, setSelectedWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrongGuesses = 6;

  // Add Book Randomizer state
  const [selectedGenre, setSelectedGenre] = useState<string>('fiction');
  const [randomBook, setRandomBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Add genres
  const genres = [
    'fiction', 'mystery', 'science-fiction', 'fantasy', 'romance',
    'thriller', 'biography', 'history', 'self-help', 'business'
  ];

  useEffect(() => {
    if (selectedGame === 'sudoku') {
      generateSudoku();
    } else if (selectedGame === 'hangman') {
      startNewHangmanGame();
    }
  }, [selectedGame]);

  const openGameModal = (game: string) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  const generateSudoku = () => {
    // Simple Sudoku puzzle generation (you can replace this with a more sophisticated algorithm)
    const newGrid = Array(9).fill(0).map(() => Array(9).fill(0));
    // Fill diagonal boxes
    for (let i = 0; i < 9; i += 3) {
      fillBox(newGrid, i, i);
    }
    // Solve the rest
    solveSudoku(newGrid);
    setSolution(JSON.parse(JSON.stringify(newGrid)));
    // Remove some numbers to create the puzzle
    for (let i = 0; i < 40; i++) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      newGrid[row][col] = 0;
    }
    setSudokuGrid(newGrid);
    setIsSolved(false);
  };

  const fillBox = (grid: number[][], row: number, col: number) => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const randomIndex = Math.floor(Math.random() * nums.length);
        grid[row + i][col + j] = nums[randomIndex];
        nums.splice(randomIndex, 1);
      }
    }
  };

  const solveSudoku = (grid: number[][]) => {
    // Simple backtracking solver
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(grid, row, col, num)) {
              grid[row][col] = num;
              if (solveSudoku(grid)) return true;
              grid[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const isValid = (grid: number[][], row: number, col: number, num: number) => {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (grid[row][x] === num) return false;
    }
    // Check column
    for (let x = 0; x < 9; x++) {
      if (grid[x][col] === num) return false;
    }
    // Check box
    const startRow = row - row % 3;
    const startCol = col - col % 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[startRow + i][startCol + j] === num) return false;
      }
    }
    return true;
  };

  const handleSudokuInput = (row: number, col: number, value: number) => {
    if (value >= 0 && value <= 9) {
      const newGrid = [...sudokuGrid];
      newGrid[row][col] = value;
      setSudokuGrid(newGrid);
      checkSudokuSolution(newGrid);
    }
  };

  const checkSudokuSolution = (grid: number[][]) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] !== solution[i][j]) {
          setIsSolved(false);
          return;
        }
      }
    }
    setIsSolved(true);
  };

  const revealSudokuAnswer = () => {
    setSudokuGrid(JSON.parse(JSON.stringify(solution)));
    setIsSolved(true);
  };

  // Hangman game functions
  const startNewHangmanGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSelectedWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  const handleHangmanGuess = (letter: string) => {
    if (guessedLetters.includes(letter)) return;
    
    setGuessedLetters([...guessedLetters, letter]);
    if (!selectedWord.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const displayWord = () => {
    return selectedWord.split('').map((letter, index) => (
      <span key={index} className="word-letter">
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ));
  };

  const isGameOver = wrongGuesses >= maxWrongGuesses;
  const isWordGuessed = selectedWord.split('').every(letter => guessedLetters.includes(letter));

  const renderSudokuGrid = () => {
    return (
      <div className="sudoku-grid">
        {sudokuGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="sudoku-row">
            {row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="number"
                min="1"
                max="9"
                value={cell || ''}
                onChange={(e) => handleSudokuInput(rowIndex, colIndex, parseInt(e.target.value) || 0)}
                className={`sudoku-cell ${cell === 0 ? 'editable' : ''}`}
                disabled={cell !== 0}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  // Add fetchRandomBook function
  const fetchRandomBook = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/subjects/${selectedGenre}.json?limit=100`);
      const data = await response.json();
      
      if (data.works && data.works.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.works.length);
        const book = data.works[randomIndex];
        
        // Get book details
        const bookDetails = await fetch(`https://openlibrary.org${book.key}.json`);
        const details = await bookDetails.json();
        
        // Get ratings (using a mock rating for now as Open Library doesn't provide ratings)
        const rating = (Math.random() * 3 + 2).toFixed(1);
        
        setRandomBook({
          title: book.title,
          author: book.authors?.[0]?.name || 'Unknown Author',
          coverUrl: `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`,
          rating: parseFloat(rating),
          genre: selectedGenre,
          description: details.description?.value || 'No description available'
        });
      }
    } catch (error) {
      console.error('Error fetching book:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Add renderBookRandomizer function
  const renderBookRandomizer = () => (
    <div className="book-randomizer">
      <h3>Book Randomizer</h3>
      <div className="genre-selector">
        <label>Select Genre:</label>
        <select 
          value={selectedGenre} 
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="genre-dropdown"
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </option>
          ))}
        </select>
      </div>
      
      <button 
        onClick={fetchRandomBook} 
        className="game-button"
        disabled={isLoading}
      >
        {isLoading ? 'Finding a Book...' : 'Get Random Book'}
      </button>

      {randomBook && (
        <div className="book-card">
          <div className="book-cover">
            <img src={randomBook.coverUrl} alt={randomBook.title} />
          </div>
          <div className="book-details">
            <h4>{randomBook.title}</h4>
            <p className="author">by {randomBook.author}</p>
            <div className="rating">
              {'★'.repeat(Math.floor(randomBook.rating))}
              {'☆'.repeat(5 - Math.floor(randomBook.rating))}
              <span>({randomBook.rating})</span>
            </div>
            <p className="genre">Genre: {randomBook.genre}</p>
            <p className="description">{randomBook.description}</p>
          </div>
        </div>
      )}
    </div>
  );

  // Update renderGameModal to include Book Randomizer
  const renderGameModal = () => {
    if (!isModalOpen) return null;

    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal}>×</button>
          {selectedGame === 'sudoku' && (
            <div className="game-modal">
              <h3>Sudoku</h3>
              {renderSudokuGrid()}
              <div className="game-controls">
                <button onClick={revealSudokuAnswer} className="reveal-button">
                  Reveal Answer
                </button>
                <button onClick={generateSudoku} className="game-button">
                  New Game
                </button>
                {isSolved && <p className="success-message">Congratulations! You solved the puzzle!</p>}
              </div>
            </div>
          )}

          {selectedGame === 'hangman' && (
            <div className="game-modal">
              <h3>Hangman</h3>
              <div className="hangman-container">
                <div className="word-display">{displayWord()}</div>
                <div className="hangman-status">
                  <p>Wrong guesses: {wrongGuesses}/{maxWrongGuesses}</p>
                  <div className="alphabet-grid">
                    {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
                      <button
                        key={letter}
                        className={`alphabet-button ${guessedLetters.includes(letter) ? 'guessed' : ''}`}
                        onClick={() => handleHangmanGuess(letter)}
                        disabled={guessedLetters.includes(letter) || isGameOver || isWordGuessed}
                      >
                        {letter}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="game-controls">
                  <button onClick={startNewHangmanGame} className="game-button">
                    New Game
                  </button>
                  {(isGameOver || isWordGuessed) && (
                    <p className={isWordGuessed ? 'success-message' : 'error-message'}>
                      {isWordGuessed ? 'Congratulations! You won!' : `Game Over! The word was ${selectedWord}`}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {selectedGame === 'book-randomizer' && (
            <div className="game-modal">
              {renderBookRandomizer()}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="games-section">
      <h2 className="section-title">Games</h2>
      <div className="games-container">
        <div className="game-card" onClick={() => openGameModal('sudoku')}>
          <h3>Sudoku</h3>
          <p>Classic 9x9 number puzzle</p>
          <div className="game-preview">
            <div className="mini-sudoku">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="mini-row">
                  {Array(3).fill(0).map((_, j) => (
                    <div key={j} className="mini-cell"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="game-card" onClick={() => openGameModal('hangman')}>
          <h3>Hangman</h3>
          <p>Guess the programming word</p>
          <div className="game-preview">
            <div className="mini-hangman">
              <div className="hangman-stick"></div>
              <div className="hangman-head"></div>
            </div>
          </div>
        </div>

        <div className="game-card" onClick={() => openGameModal('book-randomizer')}>
          <h3>Book Randomizer</h3>
          <p>Discover random books by genre</p>
        </div>
      </div>
      {renderGameModal()}
    </section>
  );
};

export default Games; 