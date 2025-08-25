import theme from "@/constants/theme";
import { hp } from "@/helpers/common"; // Assuming you have a helper for responsive height
import { StyleSheet, TextInput, View } from "react-native";

const Input = (props) => {
  return (
    <View
      className="flex-row items-center justify-center px-[1.2rem]"
      style={[styles.container, props.containerStyles && props.containerStyles]}
    >
      {props.icons && props.icons}
      <TextInput
        className="flex-1 font-psemibold"
        placeholderTextColor={theme.color.textLight}
        placeholder={props.placeHolder || "Enter text"}
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: hp(7.2),
    borderWidth: 1,
    outline: "none",
    borderColor: "#D9D9D9",
    borderCurve: "continuous",
    borderRadius: 22,
  },
});
