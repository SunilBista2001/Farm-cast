import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const farms = [
  {
    id: 1,
    name: "Farm 1",
    owner: "Sabita",
    contact: 123456789,
    hasSpace: "Yes",
  },
  {
    id: 2,
    name: "Farm 2",
    owner: "Sujan",
    contact: 123456789,
    hasSpace: "No",
  },
  {
    id: 3,
    name: "Farm 3",
    owner: "Arjun",
    contact: 123456789,
    hasSpace: "No",
  },
];

const FarmTable = () => {
  return (
    <TableContainer my={8} border={"gray"}>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Table to show farm data</TableCaption>
        <Thead>
          <Tr>
            <Th>Farm Name</Th>
            <Th>Contact</Th>
            <Th>Owner</Th>
            <Th>Has Space?</Th>
          </Tr>
        </Thead>
        <Tbody>
          {farms.map((farm) => {
            return (
              <Tr key={farm.id}>
                <Td>{farm.name}</Td>
                <Td>{farm.contact}</Td>
                <Td>{farm.owner}</Td>
                <Td>{farm.hasSpace}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default FarmTable;
