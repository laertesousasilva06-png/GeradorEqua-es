# Voltex Math

Jogo de equações com a interface web original empacotada para Android usando Capacitor.

## Gerar o APK

O GitHub Actions gera automaticamente um APK de depuração a cada atualização da branch `main`. Também é possível iniciar a compilação manualmente em **Actions → Build APK Android → Run workflow**.

Quando a execução terminar:

1. Abra a execução concluída em **Actions**.
2. Na seção **Artifacts**, baixe `Voltex-Math-APK`.
3. Extraia o ZIP e transfira `app-debug.apk` para o Android.
4. Abra o arquivo no celular e autorize a instalação pelo navegador ou gerenciador de arquivos, se o Android solicitar.

## Compilar localmente

Requer Node.js 22, Java 21 e Android SDK configurado.

```bash
npm install
npm run prepare:web
npx cap add android
npm run build:android
cd android
./gradlew assembleDebug
```

O APK de depuração ficará em `android/app/build/outputs/apk/debug/app-debug.apk`.

As páginas `index.html` e `jogo.html` continuam sendo a fonte da interface. O script de preparação apenas as copia para a pasta usada pelo Capacitor; não recria nem altera o visual do jogo.
