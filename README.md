# Employees_template

Всем привет!

![employees template](screenshot.PNG)

Это первый коммит приложения Employees template созданного мною при помощи React компонентов. Прежде, чем начать работу над ним, я изучила и закрепила на практике такие темы, как:

- Что такое реакт, зачем он нам и почему не обычный JS
- Фундаментальные принципы React
- Create React App - создаем свое приложение
- Работаем с JSX-препроцессором, ограничения в нем
- Элементы и компоненты
- Strict Mode и React 18+

На данном этапе оформлен лишь интерфейс приложения при помощи bootstrap классов. При последующей практике оно обрастет и функционалом.

***

Сегодня я узнала о свойствах компонентов и сразу же применила эти знания на практике. И хочу поделиться с вами таким простым для понимания примером.

Функция-компонент, т.е. она получает данные в одном объекте (пропс) в качестве параметра и возвращает React-элемент:

```
function WhoAmI (props) {
    return (
        <div>
            <h1>My name is {props.name}, surname - {props.surname}</h1>
            <a href={props.link}>My profile</a>
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <WhoAmI name="John" surname="Smith" link="https://instagram.com"/>
        <WhoAmI name="Alex" surname="Shepard" link="https://facebook.com"/>
    </div>
  );
}
```
или уже деструктуризированный объект:

```
function WhoAmI ({name, surname, link}) {
    return (
        <div>
            <h1>My name is {name}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <WhoAmI name="John" surname="Smith" link="https://instagram.com"/>
        <WhoAmI name="Alex" surname="Shepard" link="https://facebook.com"/>
    </div>
  );
}
```

выведет на страницу:

> My name is John, surname - Smith
        My profile
My name is Alex, surname - Shepard
        My profile


***

Хэй! Я ненадолго выпала из режима обучения из-за того, что нас подкосила корона, но все позади. Сегодня изучила и попрактиковала две интересные темы и вспомнила одну старую:

- Состояния компонентов
- События в React
- Вспоминаем this

Жду с нетерпением последующей практики! Ведь с каждым разом UI становится более отзывчивым и приятным, а мои знания шире ;)

***

Сегодня я продолжила работать с состояниями и событиями, но уже на формах, тем самым подготовила их для дальнейшей работы с ними и узнала что такое управляемые и неуправляемые компоненты.