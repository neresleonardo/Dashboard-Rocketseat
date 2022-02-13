import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            as="header"
            w="100%"
            h="20"
            mx="auto"
            mt="4"
            align="center"
            maxWidth={1480}
            px="6"
        >


            <Logo />

            { isWideVersion && <SearchBox />}

            <NotificationNav />

            <Profile showProviderData={isWideVersion} />

        </Flex>
    )
}