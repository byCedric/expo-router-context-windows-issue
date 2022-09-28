// NOTE(EvanBacon): This file will go away in the future.
import "@bacons/expo-metro-runtime";
import { Text } from 'react-native';
import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./app");
  console.log('INDEX', ctx.keys());
  return <Text>Hello</Text>;
  // return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
