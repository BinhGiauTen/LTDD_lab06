import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";

const API_Screen_03 = () => {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    function fetchApi() {
      fetch("https://6540bce445bedb25bfc27a06.mockapi.io/name")
        .then((response) => response.json())
        .then((json) => {
          setShop(json);
        });
    }
    fetchApi();
  }, []);

  
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        gap: 19,
        backgroundColor: "#F3F4F6",
      }}
    >
      {shop.map((item) => (
        <View key={item.id}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 347, height: 114 }}
          />
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 6,
              paddingHorizontal: 4,
              paddingVertical: 6,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {item.status === true && (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Image
                      source={require("../image/Image 178.png")}
                      style={{ width: 15, height: 10 }}
                    />
                    <Text style={{ color: "#1DD75B" }}> Accepting Orders </Text>
                  </View>
                )}
                {item.status === false && (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Image
                      source={require("../image/Image 190.png")}
                      style={{ width: 15, height: 15 }}
                    />
                    <Text style={{ color: "#DE3B40" }}>
                      {" "}
                      Temporarily Unavailable
                    </Text>
                  </View>
                )}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("../image/Image 180.png")}
                    style={{ width: 15, height: 15 }}
                  />
                  <Text style={{ color: "#DE3B40" }}>
                    {" "}
                    {item.right}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../image/Image 181.png")}
                    style={{ width: 14, height: 18 }}
                  />
                </View>
              </View>
            </View>
            <Text style={{ fontWeight: 700 }}> {item.name} </Text>
            <Text style={{ opacity: 0.62 }}> {item.address} </Text>
          </View>
        </View>
      ))}
    </View>
  );
  
};

export default API_Screen_03;
