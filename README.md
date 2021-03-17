# Travel App

Демо: []()

## Локальный запуск:

`$ git clone https://github.com/DaryaSho/travel-app.git -b dev `

` $ cd travel-app `

` $ npm install `

Создайте файл .env в корне приложения

В созданном файле укажите переменные окружения:  
` $ PORT=8080
MONGODB_URL=mongodb+srv://travelDB:12345@cluster0.brvwp.mongodb.net/travel?retryWrites=true&w=majority
jwtSecret=Travel_App
DEFAULT_LANG=ENG `

` $ cd client `

` $ npm install `

` $ cd ../ `

` $ npm run dev `

Приложение и сервер запустятся локально.
