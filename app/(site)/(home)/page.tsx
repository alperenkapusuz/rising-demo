import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Container maxWidth="lg">
    <Stack mt={6} px={2}>
      <Typography
        fontSize={"30px"}
        lineHeight={"40px"}
        fontWeight={"700"}
        gutterBottom
      >
        Proxies & Scraping Infrastructure
      </Typography>
    </Stack>
  </Container>
  )
}

export default page