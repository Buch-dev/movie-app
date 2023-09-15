import { getMovies } from '@/utils/request';
import React from 'react'
import Card from '@/components/Card'
import SearchResults from '@/components/SearchResults';

async function SearchPage({searchParams}) {
  const searchText = searchParams.query;
  const movies = await getMovies(searchText)
  return (
    <SearchResults searchText={searchText} movies={movies} />
  )
}

export default SearchPage