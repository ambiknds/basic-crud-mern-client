import { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

export default function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const [blogList, setBlogList] = useState([])

  useEffect(() => {
    Axios.get("https://crud-server.ambiknds.repl.co/blogs", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        description:description,
        author: author
      })
    })
      .then((response) => {
      console.log(response.json())
    })
  },[])
  const addBlog = () => {
    e.prevent.default();
    Axios.post("https://crud-server.ambiknds.repl.co/create", {
      title: title,
      description: description,
      author: author
    })
  }
  return (
    <main>
      <h1>Blog App with MERN</h1>
      <form className='form' >
        <div className='line'>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='line'>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='line'>
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button onSubmit={addBlog}>Add Blog</button>
      </form>
      <hr />
      <div>
        <h2>All Blogs</h2>
        {
          blogList.map((blog, key) => {
            return (
              <div key={key}>
                <h3>{blog.title}</h3>
                <h5>{blog.author}</h5>
                <p>{blog.description}</p>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}
