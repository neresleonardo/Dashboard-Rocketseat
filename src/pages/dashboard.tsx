import { Box, Flex,Text, SimpleGrid, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { Header } from "../components/Header/header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from 'apexcharts';



const Chart = dynamic(() => import('react-apexcharts'), {
    ssr:false, // Carregado pelo blowser e não pelo server
})

const options: ApexOptions = {
    chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600],
        },
    categories: [   
           '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:00:00.000Z',
            '2021-03-20T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-24T00:00:00.000Z',
            '2021-03-25T00:00:00.000Z',
            '2021-03-26T00:00:00.000Z',
        ],
    },
    fill: {
        opacity:0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.7,
        }
    }
};
const series = [
    { name: 'series1', data: [400,43,100,21,500,201] }
];

export default function Dashboard() {
    return(
        <Flex direction="column" h="100vh">            
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px">
                    <Box
                    p="8"
                    bg="gray.800"
                    borderRadius={8}
                    >
                    <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                    <Chart type="area" height={160} options={options} series={series} />
                    </Box>

                    <Box
                    p="8"
                    bg="gray.800"
                    borderRadius={8}
                    pb="4"
                    >
                    <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                    <Chart type="area" height={160} options={options} series={series} />
                   
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}