# AngularWikiApi

# Налаштування проекту
Для початку потрібно:
1.  Встановити середовище виконання JavaScript [Node.js](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi2woTG0u7uAhVvpIsKHZPLAqYQFjAAegQIARAD&url=https%3A%2F%2Fnodejs.org%2Fuk%2F&usg=AOvVaw3UL72OjnHBJ6VfVjj16EbA)

2. Клонувати проект за допомогою команди `git clone`

3. `npm install`
4. `npm install -g typescript`
5. `tsc -v`
6. `npm install -g @angular/cli`
7. `ng serve open`



# Введення в концепції Angular
  Angular - це платформа та фреймворк для побудови односторінкових клієнтських додатків (SPA) за допомогою HTML та TypeScript. Angular написаний на TypeScript. Він реалізує основну та додаткову функціональність як набір бібліотек TypeScript, які ви імпортуєте у свій додаток.

Архітектура програми Angular спирається на певні фундаментальні концепції. Основними будівельними елементами фреймворку Angular є Angular components (компоненти), які організовані в NgModules . NgModules збирають відповідний код у функціональні набори; Програма на Angular визначається набором NgModules. Вона завжди має принаймні кореневий модуль, який дозволяє завантажувати, і, як правило, має набагато більше модулів функцій.

* Компоненти визначають подання (views), які являють собою набори елементів екрану, які Angular може обирати та модифікувати відповідно до вашої логіки програми та даних.
* Компоненти використовують служби (services), які надають певні функціональні можливості, не пов'язані безпосередньо з поданнями. Постачальників послуг можна вводити в компоненти як залежності , роблячи ваш код модульним, багаторазовим та ефективним.

Модулі, компоненти та послуги - це класи, в яких використовуються декоратори. Ці декоратори позначають свій тип і надають метадані, які вказують Angular, як ними користуватися.

* Метадані класу компонентів пов'язують їх із шаблоном, який визначає подання. Шаблон поєднує звичайний HTML із Angular директивами (directives) та розміткою прив'язки (binding markup), які дозволяють Angular змінювати HTML перед тим, як генерувати його для відображенн.
* Метадані для класу служби надають інформацію, необхідну Angular, щоб зробити її доступною для компонентів за допомогою введення залежностей (dependency injection (DI)).

Компоненти програми зазвичай визначають безліч подань, розташованих ієрархічно. Angular надає Router service, яка допоможе вам визначити шляхи навігації серед подань. Маршрутизатор забезпечує складні навігаційні можливості в браузері.

# Модулі
todo

# Компоненти
todo

# Шаблони, директиви та прив'язка даних
todo

# Служби та введення залежності
todo

# Маршрутизація
todo
