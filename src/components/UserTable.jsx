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

const users = [
  {
    id: 1,
    username: "btwitsbista",
    email: "btwitsbista@gmail.com",
    hasFarm: "Yes",
  },
  {
    id: 2,
    username: "arjun",
    email: "arjun@gmail.com",
    hasFarm: "No",
  },
  {
    id: 3,
    username: "sushil",
    email: "sushil@gmail.com",
    hasFarm: "Yes",
  },
];

const UserTable = () => {
  return (
    <TableContainer my={8} border={"gray"}>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Table to show users data</TableCaption>
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Has Farm?</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => {
            return (
              <Tr key={user.id}>
                <Td>{user.username}</Td>
                <Td>{user.email}</Td>
                <Td>{user.hasFarm}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
