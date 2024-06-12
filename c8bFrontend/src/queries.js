import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      bookCount
    }
  }
`

export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      author
      published
    }
  }
`


export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $published: Int, $genre: String!){
    addBook(
        title: $title,
        author: $author,
        published: $published,
        genre: $genre
    ) {
      title
      author
      published
      genres
    }
  }
`

export const ADD_GENRE = gql`
  mutation addGenre($title: String!, $genre: String!){
    addGenre(
        title: $title,
        genre: $genre
    ) {
      title
      author
      published
      genres
    }
  }
`