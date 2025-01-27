
import ReactPlayer from 'react-player'
import { useState } from 'react'
import './App.css'

function App() {
  const [link, setLink] = useState("https://www.youtube.com/watch?v=I3AsBLb9OM4");
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(!playing);
  }
  const handleLink = (e) => {
    e.preventDefault();

    if (e.target[0].value === "") return;

    setLink(e.target[0].value);
    setPlaying(false);
  }

  return (
    <>
      <div className='header-app'>
        <h1>
          <a href="https://github.com/cookpete/react-player" target='_blank'>React Player</a>
        </h1>
        <p>Aprendiendo a utilizar React Player: es un componente para reproducir videos y audios, es muy fácil de usar.</p>
        <q>Es mantenido por <portal><a href="https://www.mux.com/">Mux</a></portal></q>
        <form className='form-link' onSubmit={handleLink}>
          <input type="url" name="link-video" id="link-video" autoComplete="off" placeholder='Link del video' />
          <button type="submit">Cargar</button>
        </form>
      </div>
      <div className='player-app'>
        <ReactPlayer playing={playing} controls url={link}></ReactPlayer >
        <button onClick={handlePlay}>Play/Pause</button>
      </div>
    </>
  )
}

export default App
