import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

const ProductScreen = ({ route }) => {
  // Provide default values if productData is not passed
  const productData = route.params?.productData || {
    userName: "패션왕 이다은",
    location: "경기도 하남시 감일동",
    title: "뽀글이 레더 백팩",
    timeSincePost: "20 minutes ago",
    description: "여성 가방",
    // Add any other properties that are expected to be used
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("./my-app/assets/AsaP_image/image1.jpg")}
        style={styles.productImage}
      />

      <View style={styles.profileContainer}>
        <Image
          source={require("./my-app/assets/AsaP_image/daeun_img.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{productData.userName}</Text>
          <Text style={styles.profileLocation}>{productData.location}</Text>
        </View>
      </View>
      <Text style={styles.productTitle}>{productData.title}</Text>
      <Text style={styles.productDescription}>{productData.description}</Text>
      <Text style={styles.productTime}>{productData.timeSincePost}</Text>
      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          한번도 사용하지 않은 쌔 제품입니다. 대여 가능 날짜는 1월 18일부터
          19일까지로 생각중입니다. 대여가격은 채팅으로 문의주시면 더 자세히
          알려드릴게요. 털 손상이나 색깔 변색시 보상금 발생합니다.
        </Text>
      </View>
      <TouchableOpacity style={styles.purchaseButton}>
        <Text style={styles.purchaseButtonText}>구매하기</Text>
      </TouchableOpacity>
      {/* Description Box */}
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>채팅하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    width: "100%",
    height: 300, // Adjust the height as needed
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 25, // Half the size of width/height to make it circular
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  profileName: {
    fontWeight: "bold",
  },
  profileLocation: {
    color: "grey",
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },
  productTime: {
    fontSize: 14,
    color: "grey",
    marginTop: 5,
    marginLeft: 10,
  },
  productDescription: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
  },
  purchaseButton: {
    backgroundColor: "orange",
    borderRadius: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  purchaseButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  descriptionBox: {
    borderWidth: 1,
    borderColor: "#ddd", // Change this color as needed
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  descriptionText: {
    color: "#999", // This is a placeholder text color
    fontSize: 20,
  },
  chatButton: {
    backgroundColor: "#FF8C00", // Example color for chat button
    borderRadius: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  chatButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProductScreen;