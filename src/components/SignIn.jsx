import { Pressable, View } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Button } from "react-native-elements";


const SignIn = () => {
  return (
    <View>
      <FormikTextInput name="username" />
      <FormikTextInput name="password" />
      <Pressable onPress={() => console.log()}>
        <Button />
      </Pressable>
    </View>
  );
};

export default SignIn;
