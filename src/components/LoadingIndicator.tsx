import React from 'react'
import { Box, CircularProgress } from '@mui/material'

interface LoadingIndicatorProps {
    loading?: boolean
}

function LoadingIndicator({ loading }: LoadingIndicatorProps) {
    return loading ? (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '200px',
            }}
        >
            <CircularProgress size={100} color="primary" />
        </Box>
    ) : null
}

export default LoadingIndicator
