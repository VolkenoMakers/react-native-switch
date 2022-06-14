# react-native-switch

![Single select](https://raw.githubusercontent.com/VolkenoMakers/react-native-switch/files/demo.gif)

## Add it to your project

- Using NPM
  `npm install @volkenomakers/react-native-switch`
- or:
- Using Yarn
  `yarn add @volkenomakers/react-native-switch`

## Usage

```javascript
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Switch from "@volkenomakers/react-native-switch";

export const SwitchModule = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 24,
        padding: 15,
        backgroundColor: "#ebebeb",
      }}
    >
      <StatusBar style="default" />
      <SwitchItem title={"Show Email address"} state={true} />
      <SwitchItem title={"Notifications"} state={false} />
      <SwitchItem title={"Receive Emails"} state={true} />
      <SwitchItem disabled title={"Show Full Name"} state={true} />
      <SwitchItem disabled title={"Show ID"} state={false} />
    </View>
  );
};

function SwitchItem({ title, state, disabled }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
      <Switch
        onBgColor="#16a085"
        offBgColor="#e74c3c"
        width={80}
        height={35}
        disabled={disabled}
        value={state}
        textStyle={{ fontSize: 12 }}
        onChange={(state) => console.log("state", state)}
      />
    </View>
  );
}
```

## Properties

- `width?`: number
- `height?`: number
- `value?`: boolean
- `disabled?`: boolean
- `onText?`: string
- `offText?`: string
- `onBgColor?`: string
- `offBgColor?`: string
- `color?`: string
- `onChange?`:[Function](https://github.com/VolkenoMakers/react-native-switch/blob/a5dab28377e1be12cbb71463662363dc83eaaf95/src/lib/switch.tsx#L19)
- `textStyle?`: `StyleProp<TextStyle>`

**ISC Licensed**
