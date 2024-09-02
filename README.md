# Product Management Application

## Описание

Это приложение для управления товарами, разработанное с использованием Vue.js и Pinia. Оно позволяет добавлять, редактировать, удалять и фильтровать товары, а также управлять их сортировкой и пагинацией.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone <https://github.com/Vecheslav-Eremeev/product-management>
   cd product-management
2. Установите зависимости:
    ```bash
    npm install
3. Запустите приложение в режиме разработки:
    ```bash
    npm run dev
4. Откройте браузер и перейдите по адресу http://localhost:3000.

## Структура проекта
- src/
- components/ - Компоненты Vue, такие как ProductForm, ProductItem, EditProductModal, и Pagination.
- stores/ - Хранилище состояния с использованием Pinia (productStore.ts).
- types/ - Определения типов, включая интерфейс Product.
- router/ - Настройки маршрутизации приложения.
- App.vue - Главный компонент приложения.
- main.ts - Точка входа приложения.

## Использование
> Добавление продукта
> Используйте форму для добавления нового продукта. После добавления продукт будет отображен в списке.
> Редактирование продукта
> Нажмите на продукт в списке, чтобы открыть модальное окно редактирования. Внесите изменения и сохраните их.
> Удаление продукта
> Нажмите на кнопку удаления рядом с продуктом, чтобы удалить его из списка.
> Фильтрация и сортировка
> Вы можете фильтровать продукты по интеграции и сортировать их по имени в порядке возрастания или убывания.
> Пагинация
> Приложение поддерживает пагинацию, позволяя вам просматривать продукты по страницам.

## Тестирование
1. Для запуска тестов используйте команду:
    ```bash
    npm run test

## Зависимости
- Vue.js
- Vue Router
- Pinia
- TypeScript
- Vite
- Vitest

## Лицензия
Этот проект лицензирован под MIT License.
