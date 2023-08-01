# Приложение по отображению маршрутов на карте

Приложение предназначено для отображения маршрутов на карте на основе данных, полученных от OSRM API.

## Установка и запуск с использованием Docker
1. Склонируйте репозиторий с помощью Git:
```shell
git clone https://github.com/BOGomDAH/map-routes-app.git
cd map-routes-app
```
2. Для сборки и запуска приложения вам необходимо иметь установленную среду WSL (Windows Subsystem for Linux)
```shell
wsl 
```
3. Соберите Docker-образ:
```shell
docker-compose build
```
4. Запустите контейнер из собранного образа:
```shell
docker-compose up
```
Приложение будет доступно на порту [4000](http://localhost:4000/).

## Установка и запуск без использования Docker

1. Склонируйте репозиторий с помощью Git:
```shell
git clone https://github.com/BOGomDAH/map-routes-app.git
cd map-routes-app
```
2. Установите зависимости
```shell
npm install
```
3. Запустите приложение
```shell
npm run dev
```

## Описание приложения
Приложение позволяет отображать маршруты на карте, используя React-Leaflet и данные от OSRM API. Когда пользователь выбирает маршрут из таблицы, приложение отправляет запрос на OSRM API, чтобы получить координаты маршрута. После успешного запроса, координаты маршрута отображаются на карте.

## Используемые технологии
- React
- Redux Toolkit
- Redux Saga
- Ant Design
- React-Leaflet
- OSRM API