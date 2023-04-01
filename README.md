# Docker_lab5
Kontener zawierający prostą aplikację webową korzystająca z node js

Part1:

Instalacja
1. Przejdź do folderu w którym ma zostać pobrane repozytorium
2. Użyj komendy: git clone https://github.com/lukas5555510/Docker_lab5
3. Żeby stworzyć kontener użyj komendy: docker build -f Dockerfile -t nazwa_obrazu .
4. Uruchomienie kontenera: docker run -e VERSION=v1 -d -p 8081:8080 nazwa_obrazu
5. Sprawdzenie działania: curl 127.0.0.1:8081

* W kroku 4 port 8081 można zmienić na dowolny
* W nazwie_obrazu można dodać tag np nazwa_obrazu:tag1

Deinstalacja
1. Użyj polecenia żeby zatrzymać kontener: Docker stop id_kontenera
2. Użyj polecenia żeby usunąć kontener: Docker rm id_kontenera
3. Użyj polecenia żeby usunąć obraz kontenera: Docker rmi nazwa_obrazu

Part2:


