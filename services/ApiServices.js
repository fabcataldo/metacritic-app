import { fakeUsers } from "../utils/fakeUsers";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class ApiServices {
  getUser(user) {
    return fakeUsers.find(
      (userDB) =>
        userDB.email === user.email && userDB.password === user.password
    );
  }

  async login(user) {
    const getUserResponse = this.getUser(user);
    const userForStorage = {
      token: "fake-token",
      userEmail: getUserResponse.email,
    };

    if (getUserResponse) {
      try {
        await AsyncStorage.setItem(
          "currentUser",
          JSON.stringify(userForStorage),
        );
        return getUserResponse;
      } catch (e) {
        console.error("Save user data to storage failed!", e);
      }
    } else {
      throw new Error("Invalid credentials");
    }
  }

  async getUserStorage() {
    try {
      const userStorage = await AsyncStorage.getItem("currentUser");
      if (userStorage !== null) {
        return JSON.parse(userStorage);
      }
    } catch (e) {
      console.error("Get saved user data in storage FAILED! ", e);
    }
    return null;
  }
}
