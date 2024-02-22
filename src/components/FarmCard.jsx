/* eslint-disable react/prop-types */
import { Badge, Box, Image } from "@chakra-ui/react";

const FarmCard = ({ onClickFarm, imageUrl, title, formattedPrice, farm }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={() => onClickFarm(farm)}
      className="hover:scale-110 duration-500 ease-in-out cursor-pointer"
    >
      <Image src={imageUrl} alt={""} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>

        <Box>
          {formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FarmCard;
