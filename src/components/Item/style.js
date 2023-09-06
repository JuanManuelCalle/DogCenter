import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: colors.blueTiffany,
    backgroundColor: colors.blueTiffany,
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  itemText: {
    color: colors.white,
  },
});

export default styles;
