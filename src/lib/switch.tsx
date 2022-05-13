import React from "react";
import {
  Animated,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
type SwitchProps = {
  width?: number;
  height?: number;
  value?: boolean;
  onText?: string;
  offText?: string;
  onBgColor?: string;
  offBgColor?: string;
  color?: string;
  disabled?: boolean;
  onChange?: (state: boolean) => any;
  textStyle?: StyleProp<TextStyle>;
};
export default function Switch({
  width = 140,
  height = 60,
  value = false,
  onChange,
  onText = "ON",
  offText = "OFF",
  color = "#FFF",
  offBgColor = "#c2c2c2",
  onBgColor = "#2bb332",
  textStyle = {},
  disabled = false,
}: SwitchProps) {
  const indicatorWidth = (width - width * 0.02) / 2;
  const [state, setState] = React.useState(!!value);
  const animation = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    setState(value);
  }, [value]);
  React.useEffect(() => {
    Animated.spring(animation, {
      toValue: state ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [state]);

  const sliderPosition = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, indicatorWidth - width * 0.02],
    extrapolate: "clamp",
  });
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{ opacity: disabled ? 0.6 : 1 }}
      onPress={() => {
        setState((old) => {
          if (onChange) {
            onChange(old);
          }
          return !old;
        });
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: width,
          height: height,
          borderRadius: height / 5,
          backgroundColor: state ? onBgColor : offBgColor,
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            borderRadius: height / 5,
            transform: [{ translateX: sliderPosition }],
            width: indicatorWidth,
            margin: width * 0.02,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: color,
            zIndex: 2,
            elevation: 2,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: width,
            justifyContent: "space-around",
          }}
        >
          <Animated.Text
            style={[
              { fontSize: width * 0.18, color: color, fontWeight: "bold" },
              textStyle,
            ]}
          >
            {onText}
          </Animated.Text>
          <Animated.Text
            style={[
              { fontSize: width * 0.18, color: color, fontWeight: "bold" },
              textStyle,
            ]}
          >
            {offText}
          </Animated.Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
