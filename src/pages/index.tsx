import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'

//* CUSTOM IMPORTS
import { Banner } from 'components'
import { BANNER_URL } from 'config'

const Home: NextPage = () => {
  return (
    <Box as="main">
      <Banner
        purpose="RENT A HOME"
        title="Rental homes for"
        subTitle="everyone"
        description="Explore Apartments, Villas, Homes"
        subDescription="and more"
        buttonText="Explore Renting"
        href="/search?purpose=for-rent"
        imageUrl={BANNER_URL}
      />

      <Banner
        purpose="BUY A HOME"
        title="Find, Buy &nbsp; Own Your"
        subTitle="Dream Home"
        description="Explore Apartments, Villas, Homes"
        subDescription="and more"
        buttonText="Explore Buying"
        href="/search?purpose=for-sale"
        imageUrl={BANNER_URL}
      />
    </Box>
  )
}

export default Home
