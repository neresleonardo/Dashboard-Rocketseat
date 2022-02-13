import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header/header";
import { Sidebar } from "../components/Sidebar/Sidebar";

export default function Dashboard() {
    return(
        <Flex direction="column" h="100vh">            
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
            </Flex>
        </Flex>
    )
}