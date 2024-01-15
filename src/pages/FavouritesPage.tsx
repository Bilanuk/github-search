import { Box } from '@mui/material'
import { selectFavouritesRepositories } from '../store/repository/repositorySlice'
import { useAppSelector } from '../store/hooks'
import React from 'react'
import RepositoryList from '../components/RepositoryList'

function FavouritesPage() {
    const favouritesRepositories = useAppSelector(selectFavouritesRepositories)

    return (
        <Box>
            <RepositoryList
                repositories={favouritesRepositories}
                displayRating={true}
            />
        </Box>
    )
}

export default FavouritesPage
