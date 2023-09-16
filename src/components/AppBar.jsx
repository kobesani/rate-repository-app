import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 15,
    // paddingBottom: 15,
    backgroundColor: "#24292e",
  },
  scrollView: {
    paddingLeft: 8
  },
  link: {
    marginRight: 20, // Adjust as needed for spacing between links
    marginBottom: 15, // margin added here so that there is less space b/t the scrollbar
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        indicatorStyle="white"
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollView}
      >
        <Link to="/" style={styles.link}>
          <Text fontSize="heading" fontWeight="bold" color="title">
            Repositories
          </Text>
        </Link>
        <Link to="/sign-in" style={styles.link}>
          <Text fontSize="heading" fontWeight="bold" color="title">
            Login
          </Text>
        </Link>
        {/* Add more links as needed */}
      </ScrollView>
    </View>
  );
};


export default AppBar;
