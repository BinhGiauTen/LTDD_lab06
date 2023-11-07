import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

const Screen3 = () => {
  const [drink, setDrink] = useState([]);
  useEffect(() => {
    function fetchApi() {
      fetch("https://6540bce445bedb25bfc27a06.mockapi.io/drink")
        .then((response) => response.json())
        .then((json) => {
          setDrink(json);
        });
    }
    fetchApi();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../image/Frame.png")}
            style={{ width: 20, height: 20 }}
          ></Image>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 700,
              marginLeft: 14,
              marginRight: 200,
            }}
          >
            Drinks
          </Text>
          <Image
            source={require("../image/Image 209.png")}
            style={{ width: 20, height: 20 }}
          ></Image>
        </View>
      </View>
      <ScrollView style={{ flex: 8 }}>
        {drink.map((item) => (
          <View
            style={{ width: 350, height: 64, borderWidth: 1, borderRadius: 4, marginVertical: 8 }}
            key={item.id}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 60, height: 60 }}
              />{" "}
              <View style={{ flexDirection: "column", flex: 1, marginLeft: 20}}>
                <Text style={{fontSize: 16, fontWeight: 500}}>{item.name}</Text>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <Image
                    source={require("../image/Frame (1).png")}
                    style={{ width: 20, height: 20 }}
                  ></Image>
                  <Text>$</Text>
                  <Text>{item.price}</Text>
                </View>
              </View>
              <View style={{flexDirection: "row", alignItems: "center", width: 100}}>
                <Image
                  source={require("../image/Image 247.png")}
                  style={{ width: 20, height: 20 }}
                ></Image>
                <Image
                  source={require("../image/Image 248.png")}
                  style={{ width: 20, height: 20, marginLeft: 50}}
                ></Image>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={{ flex: 1 }}>
        <Pressable style={{height: 44, width: 347, backgroundColor: '#EFB034', borderRadius: 5, alignItems: "center",justifyContent: 'center'}}>
          <Text style={{fontSize: 16, fontWeight: 400, color: '#fff'}}>Go to cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen3;
