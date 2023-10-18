import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const TableComp = () => {
  return (
    <div className="border border-b m-2 rounded-lg pb-[1px]">
      <TableContainer>
        <Table variant="striped" colorScheme="red">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Article Name</Th>
              <Th className="hidden md:table-cell">Description</Th>{" "}
              {/* Hide on mobile (md = medium breakpoint) */}
              <Th>Writer</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>How React Like React ❤️</Td>
              <Td className="hidden md:table-cell">React is awe</Td>
              <Td>Chinedu</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
