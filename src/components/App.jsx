import notes from '../notes';
import './App.css'
import Heading from './Heading'
import Note from './Note'
import Footer from './Footer'
function App() {

  return (
    <div><Heading />
      {notes.map((note)=>{
        return <Note key={note.key} title={note.title} content={note.content}/>
      })}
    <Footer /></div>
  )
}

export default App
