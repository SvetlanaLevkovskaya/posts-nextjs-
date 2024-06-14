## Описание
Проект "Posts App" представляет собой веб-приложение для просмотра сообщений (постов) с возможностью просмотра комментариев к каждому сообщению и фейковой пагинации. Пользователь может просматривать список постов, переходить на страницу каждого поста для просмотра деталей и комментариев, а также осуществлять авторизацию.

## Используемые технологии
- Next.js
- TypeScript
- Axios
- Tailwind CSS
- Nanostores
- Yup
- React Hook Form
- ESLint
- Prettier

## Функционал
Просмотр сообщений: Пользователь может просматривать список сообщений с фейковой пагинацией.
Детали сообщения: Пользователь может переходить на страницу конкретного сообщения для просмотра его деталей и комментариев.
Фейковая авторизация: Пользователь должен пройти фейковую авторизацию для доступа к постам.
Управление состоянием: Управление состоянием приложения осуществляется с использованием библиотеки Nanostores.
Валидация форм: Валидация формы авторизации с использованием Yup и React Hook Form.

## Основные компоненты
HomePage: Главная страница, отображающая список постов с фейковой пагинацией.
PostPage: Страница деталей поста, отображающая информацию о посте и список комментариев.
LoginPage: Страница авторизации пользователя.
PostList: Компонент для отображения списка постов.
CommentList: Компонент для отображения списка комментариев к посту.
NavLayout: Компонент для обеспечения навигации и структуры страницы.
Button: Универсальный компонент кнопки с Tailwind CSS.


## Установка и запуск
- Клонируйте репозиторий на свой локальный компьютер.
- Установите зависимости, выполнив команду npm install.
- Запустите приложение командой npm run dev.
