import { getMovies } from '@/utils/request';
import React from 'react'
import Card from '@/components/Card'
import SearchResults from '@/components/SearchResults';

async function SearchPage({searchParams}) {
  // imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  const searchText = searchParams.query;
  const movies = await getMovies(searchText)
  return (
    <SearchResults searchText={searchText} movies={movies} />
  )
}

export default SearchPage