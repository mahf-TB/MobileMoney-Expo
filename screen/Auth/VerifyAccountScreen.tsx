import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import React, { useRef, useState } from "react";

export default function VerifyAccountScreen() {
  const [btnSpinner, setBtnSpinner] = useState(false);

  const [code, setCode] = useState(new Array(4).fill(""));
  const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));
  const handleInputs = (text: any, index: any) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].current.focus();
    }

    if (text === "" && index > 0) {
      inputs.current[index + 1].current.focus();
    }
  };

  const handleSubmit = async () => {};
  const { width } = useWindowDimensions();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-pblack mb-2 text-purple-500">
        Verification code
      </Text>
      <Text
        style={{ fontSize: 12, marginBottom: 25 }}
        className="font-pmedium text-gray-700 tracking-wide"
      >
        We have sent the Verification code to your email
      </Text>
      <View className="flex flex-row gap-2">
        {code.map((_, index) => (
          <TextInput
            ref={inputs.current[index]}
            key={index}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => handleInputs(text, index)}
            value={code[index]}
            returnKeyType="done"
            autoFocus={index === 0}
            className="border-2 border-purple-300 rounded"
            style={{ width: 50, height: 50, fontSize: 18, textAlign: "center" }}
          />
        ))}
      </View>
      <View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{width:width*1 - 150}}
          className="bg-purple-500 w-full flex justify-center items-center rounded-lg mt-5 mb-2 py-3"
        >
          {btnSpinner ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text
              style={{ fontSize: 18 }}
              className=" font-psemibold text-white tracking-wide"
            >
              Submit
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
