import React from "react";
// Style Components
import { Icon, Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const AddButton = ({ navigation }) => {
  const handleAdd = () => navigation.navigate("AddRestaurant");
  return (
    <Button transparent>
      <Ionicons
        name="md-add-circle"
        style={{ paddingRight: 15 }}
        size={25}
        onPress={handleAdd}
      />
    </Button>
  );
};

export default withNavigation(AddButton);
