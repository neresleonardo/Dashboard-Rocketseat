import { Stack, Box, Text } from "@chakra-ui/react";
import PaginationItem from './PaginationItem'


interface PaginatinoProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentePage?: number;
  onPageChange: (page: number) => void
}

const siblingsCount = 1;


function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(pages => pages > 0)
}

export function Paginator({ totalCountOfRegisters, currentePage = 1, onPageChange, registersPerPage = 10 }: PaginatinoProps) {

  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previousPages = currentePage > 1
    ? generatePagesArray(currentePage - 1 - siblingsCount, currentePage - 1)
    : [];


  const nextPages = currentePage < lastPage
    ? generatePagesArray(currentePage, Math.min(currentePage + siblingsCount, lastPage))
    : [];




  return (
    <Stack direction={['column', 'row']} mt="8" spacing="6" justifyContent="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">

        {currentePage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />
            {currentePage > (2 + siblingsCount) && <Text color="gray.300" width="8" textAlign="center">...</Text>}
          </>
        )
        }

        {previousPages.length > 0 && previousPages.map(page => <PaginationItem key={page} onPageChange={onPageChange} pageNumber={page} />)}

        <PaginationItem onPageChange={onPageChange} pageNumber={currentePage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => <PaginationItem key={page} onPageChange={onPageChange} pageNumber={page} />)}

        {(currentePage + siblingsCount) < lastPage && (
          <>
            {(currentePage + 1 + siblingsCount) < lastPage && <Text color="gray.300" width="8" textAlign="center">...</Text>}
            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
          </>
        )}

      </Stack>
    </Stack>
  );
}