import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PerfilScreen from './src/screens/perfil'
import AboutScreen from './src/screens/about'
import AcademicScreen from './src/screens/academic'
import VisionScreen from './src/screens/vision'
import AnimationScreen from './src/screens/animation'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: '#D2D6EF',
          tabBarStyle: {
            backgroundColor: '#4B5358',
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            tabBarIcon: () => {
              return <Text>🧑</Text>
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: () => {
              return <Text>😎</Text>
            },
          }}
        />
        <Tab.Screen
          name="Academic"
          component={AcademicScreen}
          options={{
            tabBarIcon: () => {
              return <Text>📚</Text>
            },
          }}
        />
        <Tab.Screen
          name="Vision"
          component={VisionScreen}
          options={{
            tabBarIcon: () => {
              return <Text>🔭</Text>
            },
          }}
        />
        <Tab.Screen
          name="Animation"
          component={AnimationScreen}
          options={{
            tabBarIcon: () => {
              return <Text>💃</Text>
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#104547',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
