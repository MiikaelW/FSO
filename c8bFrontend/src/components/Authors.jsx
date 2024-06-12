import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { ALL_AUTHORS, EDIT_AUTHOR } from '../queries'

const Authors = (props) => {
  const [authors, setAuthors] = useState([])
  const { loading, data } = useQuery(ALL_AUTHORS)

  useEffect(() => {
    if (!loading && data) {
      setAuthors(data.allAuthors)
    }
  }, [loading, data])

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      <AuthorsList authors={authors}></AuthorsList>
      <SetAuthorBirthForm authors={authors}></SetAuthorBirthForm>
    </div>
  )
}

const SetAuthorBirthForm = ({ authors }) => {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')
  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }]
  })

  useEffect(() => {
    const author = authors.find(a => a.name === name)
    if (author) {
      setBorn(author.born)
    }
  }, [name])

  const submit = async (event) => {
    event.preventDefault()

    const result = await editAuthor({ variables: { name, born } })
    const author = result.data.author
    setName(author.name)
    setBorn(author.born)
  }

  return (
    <div>
      <form onSubmit={submit}>
        <select onChange={({ target }) => setName(target.value)}>
          <AuthorOptions authors={authors}></AuthorOptions>
        </select>
        <div>
          Born
          <input
            value={born}
            onChange={({ target }) => setBorn(parseInt(target.value))}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  )
}

const AuthorOptions = ({ authors }) => {
  const emptyOption = [(<option key="empty" value="">Select author</option>)]
  const authorOptions = authors.map(a => {
    return (
      <option key={a.name} value={a.name}>{a.name}</option>
    )
  })
  return emptyOption.concat(authorOptions)
}



const AuthorsList = ({ authors }) => {
  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}


export default Authors
