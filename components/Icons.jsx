import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const CircleInfoIcon = (props) => (
  <FontAwesome5 name="info-circle" size={32} color="white" {...props} />
);

export const HomeIcon = (props) => (
  <FontAwesome name="home" size={32} color="white" {...props} />
);

export const InfoIcon = (props) => (
  <FontAwesome name="info" size={32} color="white" {...props} />
);

export const LogoutIcon = (props) => (
  <MaterialIcons name="logout" size={24} color="white" {...props} />
);
