import { StyleSheet, Text, View, Image, Pressable, SafeAreaView} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 , marginVertical: 25}}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="black" />
				</Pressable>

				
			</SafeAreaView>
			<Image
				source={require("../../assets/images/long-island.png")}
				style={{ marginTop: 150 }}
			/>

			<Text style={{ color: "#109010", fontSize: 30, fontWeight: "bold" }}>
				Long-island
			</Text>

			<Text
				style={{
					fontSize: 15,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 44,
					marginBottom: 40,
                    marginRight: 10,
                    marginLeft: 10
				}}
			>
				We have added a new drink, the long island. you can find it in the catalog with everything you need to make this delicious drink
			</Text>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
