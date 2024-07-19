import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { Entypo, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";

interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  icon: any,
  required?:boolean,
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  icon,
  required,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-0  ${otherStyles}`}>
      <View className="border-2 relative border-purple-300 w-full h-12 px-4 rounded-lg bg-purple-200 focus:border-purple-500 flex-row items-center">
        <TextInput
          className="flex-1 text-gray-900w-full text-[14px] pl-6 flex-row items-center justify-between"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor="#997FD1"
          secureTextEntry={
            (title === "Password" || title === "Motdepasse") && !showPassword
          }
          {...props}
        />
        
        <FontAwesome
          className="absolute left-0 "
          style={{ position: "absolute", left: 12 }}
          name={icon}
          size={20} 
          color={"#997FD1"}
        />
        {(title === "Password" || title === "Motdepasse") && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={23}
              color={"#000"}
              className=""
            />
          </TouchableOpacity>
        )}
        {required && (
          <View className="flex-row absolute top-12">
            <Entypo name="cross" size={14} color={"red"}/>
            <Text style={{ marginLeft: 3, fontSize:10,  color: "red" }}>
              Champ requis
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default FormField;
