Aplicación móvil desarrollada en React Native v0.66

## EN LA RAÍZ DEL PROYECTO SE ENCUENTRA ARCHIVO "app-debug.apk" que corresponde a la aplicación para instalar en su dispositivo.

# Requisitos
* NodeJS 16+
* React Native Doc: https://reactnative.dev/docs/0.66/getting-started
* Android Studio y Emulador instalado

# Ejecutar
* Si tiene Android Studio y un emulador instalado, abrir consola de comandos y ejecutar
```
cd c:\Users\<Usuario>\AppData\Local\Android\Sdk\emulator
emulator -list-avds
# copiar nombre de emulador instalado
emulator -avd NOMBRE_EMULADOR
```
* Luego, con una consola abierta en el proyecto de React Native ejecutar
```
npx react-native run-android
```

# Version 1.0.1
* Integración con API para login y reservas

# Version 1.0.0
* Vistas:
    * Login
    * Menú
    * Formulario reservas
    * Resumen reserva