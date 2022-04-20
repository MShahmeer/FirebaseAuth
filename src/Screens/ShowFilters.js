import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();

const ShowFilters = () => {
  const [cities, setCities] = useState([]);

  const starCountRef = ref(db, "/quick_filter");
  const getData = () => {
    const subscribe = onValue(starCountRef, (snapshot) => {
      const response = snapshot.val().cities;
      // data = response;
      setCities(response);
      // updateStarCount(postElement, data);
      console.log(response);
    });
    return subscribe;
  };
  useEffect(() => {
    getData();
    // console.log(cities);
  }, []);
  return (
    <View>
      <FlatList
        data={cities}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.singleUniversity} elevation={5}>
            <View style={styles.rankingTextWrapper}>
              {/* <Text style={styles.rankingText}>Ranking {item.ranking}</Text> */}
            </View>
            <TouchableOpacity>
              <View style={{ flex: 0.85, flexDirection: "row" }}>
                <View style={styles.imageWrapper}>
                  <Image
                    style={{
                      height: "75%",
                      width: "100%",
                      borderRadius: 50,
                      marginLeft: 5,
                    }}
                    source={{ uri: "https://picsum.photos/200/300" }}
                  />
                </View>
                <View style={styles.universityDetailWrapper}>
                  <Text
                    style={[styles.universityDetailText, styles.usiversityName]}
                  >
                    {item.title}
                  </Text>
                  <Text style={styles.universityDetailText}>
                    Fee : {item.fee}
                  </Text>
                  <Text style={styles.universityDetailText}>
                    Admission : {item.admission}
                  </Text>

                  <View style={styles.locAndPhoneWrapper}>
                    <Text style={styles.universityDetailText}>
                      Location : {item.location}
                    </Text>
                    {/* <Text style={styles.phone}>Phone</Text> */}
                  </View>
                  <Text
                    style={[styles.universityDetailText, styles.DeadlineText]}
                  >
                    Deadline : {item.Deadline}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
    width: "85%",
    marginLeft: "15%",
  },
  filterWrapper: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  singleFilter: {
    flex: 0.3,
    flexDirection: "row",
    height: 40,
    // width:80,
    marginLeft: 10,
  },
  filter: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
  usiversityName: {
    color: "white",
    backgroundColor: "#F75656",
    padding: 5,
    borderTopLeftRadius: 10,
  },
  DeadlineText: {
    color: "#F75656",
    fontWeight: "300",
    fontSize: 19,
  },

  universitiesWrapper: {
    flex: 0.9,
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },
  singleUniversity: {
    flex: 0.25,
    height: "100%",
    width: "100%",
    borderWidth: 0.1,
    marginVertical: 5,
  },
  rankingTextWrapper: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    width: "100%",
  },
  rankingText: {
    marginRight: 20,
    color: "green",
    fontWeight: "800",
    fontSize: 16,
  },
  imageWrapper: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    borderRadius: 50,
  },
  universityDetailWrapper: {
    flex: 0.7,
    height: "100%",
    width: "100%",
  },
  universityDetailText: {
    fontSize: 17,
    marginLeft: 15,
    fontWeight: "500",
    marginBottom: 5,
    marginTop: 5,
  },
  locAndPhoneWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phone: {
    fontSize: 17,
    marginRight: 15,
    fontWeight: "500",
    marginTop: 12,
  },
});

export default ShowFilters;
