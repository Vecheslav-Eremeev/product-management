# README для приложения "Управление товарами"

## Описание

Это приложение на Vue.js предназначено для управления товарами. Пользователи могут добавлять, редактировать, удалять товары, а также фильтровать и сортировать их по различным критериям. Приложение использует Pinia для управления состоянием и Vue Router для навигации.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone <URL_репозитория>
Перейдите в директорию проекта:
bash


cd <имя_директории>
Установите зависимости:
bash


npm install
Запустите приложение:
bash


npm run dev
Использование
Добавление товара: Используйте форму для добавления нового товара.
Редактирование товара: Нажмите кнопку "Редактировать" рядом с товаром, чтобы изменить его данные.
Удаление товара: Нажмите кнопку "Удалить" для удаления товара из списка.
Фильтрация: Выберите тип интеграции для фильтрации товаров.
Сортировка: Выберите порядок сортировки (по возрастанию или убыванию) для отображения списка товаров.
Пагинация: Перейдите между страницами с товарами с помощью кнопок "Назад" и "Вперед".
Тестирование
Приложение включает юнит-тесты для проверки функциональности хранилища продуктов. Тесты написаны с использованием Vitest и проверяют следующие функции:
Добавление продукта
Редактирование продукта
Удаление продукта
Сохранение продуктов в localStorage
Фильтрация продуктов
Сортировка продуктов
Запуск тестов
Для запуска тестов выполните следующую команду:
bash


npm run test
Структура проекта
src/: Основная директория приложения.
components/: Компоненты Vue, используемые в приложении.
stores/: Хранилище Pinia для управления состоянием.
types/: Определения типов TypeScript.
router/: Настройки маршрутизации приложения.
tests/: Юнит-тесты для проверки функциональности приложения.
Технологии
Vue.js: Фреймворк для создания пользовательских интерфейсов.
Pinia: Библиотека для управления состоянием.
Vue Router: Библиотека для маршрутизации в приложении Vue.
Vitest: Инструмент для тестирования, используемый для написания и запуска юнит-тестов.
