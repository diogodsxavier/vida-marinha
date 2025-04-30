import fundoMarinho from './assets/fundo-marinho.png';

const animais = [
  { nome: 'Baleia', emoji: '🐋' },
  { nome: 'Golfinho', emoji: '🐬' },
  { nome: 'Polvo', emoji: '🐙' },
  { nome: 'Tartaruga', emoji: '🐢' },
]

function App() {
  return (
    <div
      className='min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4'
      style={{ backgroundImage: `url(${fundoMarinho})` }}
    >
      <h1 className='text-4xl md:text-5x1 font-bold mb-8 drop-shadow-lg text-center'>
        A vida Marinha 🌊
      </h1>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {animais.map((animal) => (
          <button
            key={animal.nome}
            className='bg-white/20 backdrop-blur-md rounded-2xl p-4 text-xl md:text-2xl font-semibold hover:scale-105 transition-all drop-shadow-md'
          >
            {animal.emoji} {animal.nome}
          </button>
        ))}
      </div>

    </div>
  )
}

export default App