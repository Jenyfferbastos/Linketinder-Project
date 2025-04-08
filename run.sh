#!/bin/bash

echo "🔧 Compilando o projeto com Gradle..."
./gradlew build

if [ $? -eq 0 ]; then
    echo "✅ Build bem-sucedido. Iniciando aplicação interativa..."
    echo
    groovy build/classes/groovy/main/ui/Main.groovy
else
    echo "❌ Erro na compilação. Verifique o código e tente novamente."
fi
