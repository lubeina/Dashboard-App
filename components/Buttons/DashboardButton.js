import React from "react";
// Style Components
import { Icon, Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const DashboardButton = ({ navigation }) => {
  const handleAdd = () => navigation.navigate("Analytics");
  return (
    <Button transparent>
      <Icon
        type="AntDesign"
        name="dashboard"
        style={{ fontSize: 30, color: "black" }}
        onPress={handleAdd}
      />
    </Button>
  );
};

export default withNavigation(DashboardButton);
