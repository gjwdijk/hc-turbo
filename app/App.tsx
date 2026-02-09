/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {JSX} from "react";
import { useState } from "react";
import { SafeAreaView, StatusBar, Text, Button } from "react-native";
import RTNWeFitterHealthConnect from "rtn-wefitterhealthconnect/js/NativeRTNWeFitterHealthConnect";

const App: () => JSX.Element = () => {
    const [result, setResult] = useState<number | null>(null);
    return (
        <SafeAreaView>
            <StatusBar barStyle={"dark-content"} />
            <Text style={{ marginLeft: 20, marginTop: 20 }}>
                3+7={result ?? "??"}
            </Text>
            <Button
                title="Compute"
                onPress={async () => {
                    const value = await RTNWeFitterHealthConnect?.add(3, 7);
                    setResult(value ?? null);
                }}
            />
        </SafeAreaView>
    );
};
export default App;
