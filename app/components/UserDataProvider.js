import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const findUser = async () => {
    const result = await AsyncStorage.getItem("user");
    if (result !== null) {
      setUser(JSON.parse(result));
    }
  };

  useEffect(() => {
    findUser();
  }, []);

  return children(user, findUser);
};

export default UserDataProvider;
