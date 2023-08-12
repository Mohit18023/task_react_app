import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <Flex>
      <List
        fontSize="1.2em"
        display="flex"
        flexDirection={{ base: "column", sm: "row", md: "row", lg: "column" }}
        spacing={{base:"0", lg: "4"}}
        >
        <ListItem width={{ base: "100%",sm:"150px" }}>
          <NavLink to="/">
            <ListIcon as={CalendarIcon} color="#7FDBCA" />
            Dashboard
          </NavLink>
        </ListItem>

        <ListItem width={{ base: "100%", sm:"150px"}}>
          <NavLink to="/create">
            <ListIcon as={EditIcon} color="#7FDBCA" />
            New Task
          </NavLink>
        </ListItem>

        <ListItem width={{ base: "100%" , sm:"150px"}}>
          <NavLink to="/profile">
            <ListIcon as={AtSignIcon} color="#7FDBCA" />
            Profile
          </NavLink>
        </ListItem>
      </List>
    </Flex>
  );
}
