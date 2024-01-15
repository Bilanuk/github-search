import { RepositoryWithRating } from '../store/repository/repositorySlice'
import RepositoryCard from './RepositoryCard'
import { Box, Typography } from '@mui/material'

interface RepositoryListProps {
    displayRating?: boolean
    repositories: RepositoryWithRating[]
}

function RepositoryList({
    displayRating = false,
    repositories,
}: RepositoryListProps) {
    return (
        <Box>
            {repositories?.length === 0 ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '200px',
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h4"
                        color="text.secondary"
                    >
                        Nothing is here
                    </Typography>
                </Box>
            ) : (
                <div>
                    {repositories?.map((repository: RepositoryWithRating) => (
                        <RepositoryCard
                            key={repository.id}
                            repository={repository}
                            displayRating={displayRating}
                        />
                    ))}
                </div>
            )}
        </Box>
    )
}

export default RepositoryList
