# Interactive ToDo List Manager

This ToDo Manager is an interactive tool to enter, store, organize and keep track of ToDo's. The user can enter any text they wish and once created, mark the item as completed or not completed accordingly, while keeping metrics of completion percentages on the total list. The user can also modify the content of a ToDo item and rearrange its position within the list at any time and also delete them when no longer considered relevant. The application makes use of the browser's local storage API for data persistance of the input ToDo's.

## Characteristics

- Multilanguage selection (English/Spanish) with data persistance
- Completion rate graphics updated in real-time
- Easy-to-use interface with high reactivity and intuitive
- Feature to rearrange single list items individualy
- Filter feature to search by name useful when many items in the list
- Edit option to modify single list items at any time
- Delete feature to permanently remove an item

## Instalation

1. Clone the project repository
   ```bash
   git clone https://github.com/your_user/todoList.git
   ```
2. Move to the recently created repository folder and install dependencies
   ```bash
   cd todoList
   npm install
   ```
3. Execute the project with the script 'npm start'
   ```bash
   npm start
   ```

## Estructura del Proyecto

```
todoList/
│
├── assets                # React assets folder
├── build/
│   └── index.html        # Build executable
├── node_modules          # Node installed dependencies
├── public                # React public folder
└── src                   # Javascript application and components logic
    └── App               # Main app logic
    └── LangaugeContext   # Sets the language context provider and preset translations
    └── LanguageSelector  # Language selector component logic
    └── counter           # counter with graphic component logic
    └── emptyTodos        # 'empty list' component logic
    └── listItem          # list or Todo Item component logic
    └── loadingTodos      # animated 'loading' component logic
    └── Modal             # Modal component logic
    └── searchInput       # search or filter component logic
    └── todoContext       # Context handler for the global ToDo properties and states 
    └── todoForm          # enter new Todo form logic
    └── todoList          # list container component logic
    └── todosError        # 'error' component logic
```

## Usage

1. Choose the language of your preference between English and Spanish.
2. Click on the magenta button (+) on the bottom right corner to add a new ToDo.
3. Type your ToDo text and click Add.
4. Optional: click on the pencil icon on the right end of your ToDo to modify its content.
5. Optional: click on the X icon on the top right end of your ToDo to permanently delete the ToDo.
6. When having two or more ToDo's, click on the up or down arrows in the center of a ToDo to change its position in the list.

### Requirements and considerations
- Although there is no character limits, we recommend to keep your ToDo texts as short and concise as possible.
- The application validates duplicates when trying to enter new toDo's or editing an existing one. This validation is case insensitive.
- The filter functionality is not case sensitive either, so you can find even words with unusual accents by entering equivalent regular letters

## Technical details

- The application was developed with React and uses github pages for deployment as it only comprises front-end side.
- Data persistance is achieved using the web browser's local storage by means of the localStorage API, previous String parsing of the list.
- The multi-language feature was developed using React useLanguage.
- The new ToDo Modal was handled using React portals.
- The props management was handled using React useContext and in some cases, direct prop passing between parent-child components.

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **React**

## Example ToDo list structure

Each call to localStorage.setItem receives the storageItem name `test1` and the list ToDo list in json string format:

```json
[
  {
    "text": "Bathe my cat",
    "completed": "True"
  },
  {
    "text": "Chop vegetables",
    "completed": "False"
  },
  // More ToDo's...
]
```

## License

This project is under MIT License. Consult the file `LICENSE` for more details.

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
