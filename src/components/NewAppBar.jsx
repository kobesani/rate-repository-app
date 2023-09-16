import React, { useState } from 'react';
import { StyleSheet, View, Text as NativeText } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Constants from "expo-constants";
import { Icon } from "react-native-elements";
import { Link } from 'react-router-native';
import Text from './Text';
const data = [
  { label: 'Repositories', value: '1', link: "/"},
  { label: 'Login', value: '2', link: "/sign-in" },
  { label: 'Item 3', value: '3', link: "/" },
  { label: 'Item 4', value: '4', link: "/" },
  { label: 'Item 5', value: '5', link: "/" },
  { label: 'Item 6', value: '6', link: "/" },
  { label: 'Item 7', value: '7', link: "/" },
  { label: 'Item 8', value: '8', link: "/" },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  const handleNavigation = (itemValue) => {
    setValue(itemValue);
    // Perform navigation based on the selected item value
    switch (itemValue) {
      case "1":
        history.push("/"); // Navigate to the "/page1" route
        break;
      case "2":
        history.push("/sign-in"); // Navigate to the "/page2" route
        break;
      // Add more cases for other values and routes as needed
      default:
        break;
    }
  };

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Link to={item.link}>
          <Text style={styles.textItem}>{item.label}</Text>
        </Link>
        {/* <Text style={styles.textItem}>{item.label}</Text> */}
        {item.value === value && (

        <Icon
          name="check"
          size={20}
          color="white"
          // style={{paddingRight: 10}}
        />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Repositories"
        searchPlaceholder="Search..."
        value={value}
        // onChange={item => {
        //   setValue(item.value);
        // }}
        // onChange={item => {
        //   <Navigate to={item.link}/>
        // }}
        onChange={(item) => handleNavigation(item.value)}
        renderLeftIcon={() => (
          // <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
          <Icon
            name="menu"
            size={30}
            color="white"
            style={{paddingRight: 30}}
          />
        )}
        renderItem={renderItem}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // flexShrink: 1,
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: "#24292e",
  },
  dropdown: {
    // margin: 16,
    marginBottom: 20,
    marginRight: 16,
    marginLeft: 16,
    height: 50,
    backgroundColor: '#24292e',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    // flexShrink: 1,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#414a4c",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: "white"
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    // backgroundColor: "black"
  },
});
