import { Pressable, Text, View } from "react-native";
import Loading from "./Loading";

const Button = ({
  onPress = () => {},
  title,
  className,
  loading = false,
  buttonStyle,
  textStyle,
  fontFamily,
}) => {
  if (loading) {
    return (
      <View className="justify-center items-center  w-full ">
        <Loading color="#4b99e9" />
      </View>
    );
  }

  return (
    <Pressable
      className={className}
      title={title}
      style={buttonStyle}
      onPress={onPress}
      disabled={loading}
    >
      <Text style={textStyle} className="font-pmedium">
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
