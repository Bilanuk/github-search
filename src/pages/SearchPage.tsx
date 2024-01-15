import { useLazyQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../queries'
import React, { useCallback, useState } from 'react'
import { debounce } from 'lodash'
import { Box, TextField } from '@mui/material'

import LoadingIndicator from '../components/LoadingIndicator'
import RepositoryList from '../components/RepositoryList'
import { RepositoryWithRating } from '../store/repository/repositorySlice'

function SearchPage() {
    const [query, setQuery] = useState<string>('')
    const [search, { loading, data }] = useLazyQuery(GET_REPOSITORIES)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSearch = useCallback(
        debounce((searchQuery: string) => {
            if (searchQuery === '') {
                return
            }

            search({ variables: { query: `${searchQuery} in:name` } })
        }, 500),
        []
    )

    const handleInputChange = (newQuery: string) => {
        setQuery(newQuery)
        debouncedSearch(newQuery)
    }

    return (
        <Box>
            <TextField
                fullWidth
                label="Search repositories"
                id="fullWidth"
                value={query}
                autoComplete={'off'}
                onChange={(event) => handleInputChange(event.target.value)}
            />
            {loading ? (
                <LoadingIndicator loading={loading} />
            ) : (
                <RepositoryList
                    repositories={data?.search?.repos as RepositoryWithRating[]}
                />
            )}
        </Box>
    )
}

export default SearchPage
