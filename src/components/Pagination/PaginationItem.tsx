import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  pageNumber: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export default function PaginationItem({ pageNumber, isCurrent = false, onPageChange }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: "pink.500", cursor: "default" }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.400"
      _hover={{ bg: "gray.500" }}
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </Button>
  )


}