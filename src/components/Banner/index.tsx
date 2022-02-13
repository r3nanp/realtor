import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  FlexProps
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

//* CUSTOM IMPORTS
import { Button } from 'components'

type BannerProps = FlexProps & {
  imageUrl: string
  purpose: string
  title: string
  subTitle: string
  description: string
  subDescription: string
  href: string
  buttonText: string
}

export const Banner = ({
  imageUrl,
  purpose,
  title,
  subTitle,
  description,
  subDescription,
  buttonText,
  href,
  ...rest
}: BannerProps) => {
  return (
    <Flex
      {...rest}
      as="section"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      m="10"
    >
      <Image
        src={imageUrl}
        alt="Banner"
        width={500}
        height={500}
        objectFit="cover"
      />

      <Box p="5">
        <Text color="gray.500" fontSize="sm">
          {purpose}
        </Text>

        <Text fontSize="3xl" fontWeight="bold">
          {title} <br /> {subTitle}
        </Text>

        <Text color="gray.700" fontSize="lg" py={['2', '3']}>
          {description} <br /> {subDescription}
        </Text>

        <Button
          fontSize="xl"
          bg="blue.300"
          color="white"
          loadingText="Searching..."
          _hover={{ bgColor: 'blue.500' }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
          }}
        >
          <Link href={href}>
            <ChakraLink>{buttonText}</ChakraLink>
          </Link>
        </Button>
      </Box>
    </Flex>
  )
}
