export const database = {

    // ==============================================
    // 🐍 ПӘН: PYTHON (9 Нұсқа)
    // ==============================================
    "python": {
        
        // --- 1-ші Нұсқа ---
        "variant1": [
            {
                q: "Python кодын жол-жолымен орындайтын бағдарлама қалай аталады?",
                options: ["Компилятор", "Интерпретатор", "Ассемблер", "Препроцессор", "Диспетчер"],
                correct: 1
            },
            {
                q: "Тармақталу үшін қандай оператор қолданылады?",
                options: ["for", "break", "if", "switch", "return"],
                correct: 2
            },
            {
                q: "Қай дерек түрі өзгермейтін (immutable)?",
                options: ["list", "dict", "set", "tuple", "bytearray"],
                correct: 3
            },
            {
                q: "Python тілінде түсіндірме (комментарий) қандай таңбамен белгіленеді?",
                options: ["//", "/**/", "<!–", "#", "%"],
                correct: 3
            },
            {
                q: "Қай салыстыру операторы «тең» дегенді білдіреді?",
                options: ["=", "==", "===", "eq", ":="],
                correct: 1
            },
            {
                q: "Жолдың (string) ұзындығын қалай аламыз?",
                options: ["size()", "count()", "length()", "len()", "strlen()"],
                correct: 3
            },
            {
                q: "Шарт жалған болғанда орындалатын блок қалай аталады?",
                options: ["if", "if not", "else", "return", "break"],
                correct: 2
            },
            {
                q: "Бірегей мәндерді сақтауға қандай дерек түрі қолайлы?",
                options: ["list", "dict", "set", "tuple", "string"],
                correct: 2
            },
            {
                q: "Төмендегілердің қайсысы логикалық оператор?",
                options: ["+", "and", "*", "/", "%"],
                correct: 1
            },
            {
                q: "Жолды бөліктерге бөлу үшін қандай әдіс қолданылады?",
                options: ["cut()", "divide()", "split()", "break()", "open()"],
                correct: 2
            },
            {
                q: "lambda-функциясының синтаксисі қандай?",
                options: ["lambda: x → y", "lambda x: өрнек", "lambda(x){ }", "func lambda(x)", "lambda->x"],
                correct: 1
            },
            {
                q: "map() функциясы не істейді?",
                options: ["Мәндерді сүзгіден өткізеді", "Функцияны әр элементке қолданады", "Жолдарды біріктіреді", "Кездейсоқ сан қайтарады", "Тізімді сұрыптайды"],
                correct: 1
            },
            {
                q: "random модулін қалай импорттауға болады?",
                options: ["include random", "using random", "import random", "attach random", "new random"],
                correct: 2
            },
            {
                q: "Файлды оқу үшін қалай ашамыз?",
                options: ["open('f.txt', 'w')", "open('f.txt', 'r')", "open('f.txt', 'rw')", "open('f.txt', 'x')", "open_read('f.txt')"],
                correct: 1
            },
            {
                q: "read() әдісі не істейді?",
                options: ["Мәтінді жазады", "Файлды жабады", "Мәтінді оқиды", "Файлды жояды", "Жолды түрлендіреді"],
                correct: 2
            },
            {
                q: "Класты қалай жариялаймыз?",
                options: ["new class Example:", "class Example:", "class(Example);", "Example class:", "create class Example"],
                correct: 1
            },
            {
                q: "Нысан (объект) жасалған кезде қай әдіс шақырылады?",
                options: ["start", "create", "init", "make", "class"],
                correct: 2
            },
            {
                q: "JSON файлының форматы қандай?",
                options: ["Жолдар тізімі", "Екілік код", "Кілт–мән (key–value) түріндегі мәтін", "Кестелік деректер", "Тек сандар"],
                correct: 2
            },
            {
                q: "filter() функциясы не істейді?",
                options: ["Тізімдерді көбейтеді", "Функцияны қолданып, шартқа сай элементтерді таңдайды", "Бос орындарды өшіреді", "Жолдарды біріктіреді", "Сөздік жасайды"],
                correct: 1
            },
            {
                q: "Қай модуль дата-мен (күн/уақыт) жұмыс істейді?",
                options: ["random", "math", "datetime", "string", "datework"],
                correct: 2
            },
            {
                q: "PostgreSQL-де дерекқорды қандай командамен жасайды?",
                options: ["NEW DATABASE name;", "CREATE DB name;", "CREATE DATABASE name;", "MAKE DATABASE name;", "DB CREATE name;"],
                correct: 2
            },
            {
                q: "Python тілінде SQL-сұранысты қалай орындаймыз?",
                options: ["db.run()", "cursor.execute()", "sql.run()", "execute.sql()", "database.exec()"],
                correct: 1
            },
            {
                q: "Нөлге бөлу кезінде қандай қате түрі пайда болады?",
                options: ["TypeError", "ZeroDivisionError", "NameError", "ValueError", "StopError"],
                correct: 1
            },
            {
                q: "SQLite дерекқорын қалай ашамыз?",
                options: ["sqlite.load()", "sqlite.connect()", "sql.open()", "base.open()", "postgres.connect()"],
                correct: 1
            },
            {
                q: "Ерекшеліктерді (қателерді) өңдеуге қандай конструкция қолданылады?",
                options: ["try–except", "check–catch", "error–fix", "protect–handle", "validate–except"],
                correct: 0
            },
            {
                q: "SQL-де түсіндірме (комментарий) қалай жазылады?",
                options: ["#", "//", "–", "!!", "%%"],
                correct: 2
            },
            {
                q: "Мәліметтерді таңдап алу үшін қай оператор қолданылады?",
                options: ["TAKE", "SELECT", "GET", "CHOOSE", "FETCH"],
                correct: 1
            },
            {
                q: "SQLite файлы көбіне қандай кеңейтілімге ие?",
                options: [".db", ".sql", ".base", ".sq", ".sqlite3"],
                correct: 4
            },
            {
                q: "SQL-де кестені қалай жасаймыз?",
                options: ["NEW TABLE", "CREATE TABLE", "MAKE TABLE", "TABLE CREATE", "ADD TABLE"],
                correct: 1
            },
            {
                q: "commit қалай орындалады?",
                options: ["connect.commit()", "save.commit()", "commit.db()", "db.save()", "sql.end()"],
                correct: 0
            },
            {
                q: "PyQt5 қандай модульде орналасқан?",
                options: ["pywindow", "QtPy", "PyQt5", "gui5", "pyui"],
                correct: 2
            },
            {
                q: "PyQt қосымшасын қалай құрамыз?",
                options: ["app = QtApp()", "app = QApplication([])", "app = NewApp()", "app = WindowApp()", "app = CreateApp()"],
                correct: 1
            },
            {
                q: "Қай элемент түйме (кнопка) жасайды?",
                options: ["QPushButton", "QButton", "QtButton", "PushBtn", "NewButton"],
                correct: 0
            },
            {
                q: "Qt Designer қандай файл жасайды?",
                options: [".design", ".form", ".ui", ".qt", ".window"],
                correct: 2
            },
            {
                q: ".ui файлын қалай жүктейміз?",
                options: ["load_ui()", "uic.loadUi()", "import.ui()", "designer.load()", "ui.open()"],
                correct: 1
            },
            {
                q: "Қосымшаның циклын қандай функция іске қосады?",
                options: ["app.run()", "app.start()", "app.exec()", "app.go()", "app.launch()"],
                correct: 2
            },
            {
                q: "PyQt5-тегі сигнал деген не?",
                options: ["Интерфейс функциясы", "Іске қосу командасы", "Элемент тудыратын оқиға", "Жаңарту әдісі", "Дерек түрі"],
                correct: 2
            },
            {
                q: "Слот деген не?",
                options: ["Оқиға", "Сигналды өңдейтін функция (обработчик)", "Құрылымдық айнымалы", "Терезе компоненті", "Интерфейс стилі"],
                correct: 1
            },
            {
                q: "Сигналды слотқа қалай қосамыз?",
                options: ["signal → slot", "connect(signal, slot)", "signal.connect(slot)", "slot.connect(signal)", "bind(signal, slot)"],
                correct: 2
            },
            {
                q: "Қарапайым терезені қалай жасаймыз?",
                options: ["Window()", "QWindow()", "QWidget()", "RootWindow()", "BaseWindow()"],
                correct: 2
            }
        ],

        // --- 2-ші Нұсқа ---
        "variant2": [
             {
                q: "Бағдарламаның құрылымын анықтайтын ережелер жиынтығы қалай аталады?",
                options: ["Логика", "Синтаксис", "Семантика", "Параметрлер", "Функционал"],
                correct: 1
            },
            {
                q: "Мәтінді сақтау үшін қай дерек түрі қолданылады?",
                options: ["int", "float", "str", "list", "tuple"],
                correct: 2
            },
            {
                q: "Қай оператор тең емес екенін тексереді?",
                options: ["=", "==", "!=", ":=", "><"],
                correct: 2
            },
            {
                q: "«Немесе» дегенді білдіретін логикалық оператор?",
                options: ["and", "or", "not", "xor", "nor"],
                correct: 1
            },
            {
                q: "in операторы не істейді?",
                options: ["Ұзындығын тексереді", "Элементтің бар-жоғын тексереді", "Циклді қайта іске қосады", "Мәндерді көбейтеді", "Айнымалыны жариялайды"],
                correct: 1
            },
            {
                q: "Жолдың шетіндегі бос орындарды өшіретін әдіс?",
                options: ["trim()", "clear()", "strip()", "remove()", "space()"],
                correct: 2
            },
            {
                q: "Кілт–мән (key–value) жұптарын сақтайтын дерек түрі?",
                options: ["list", "dict", "tuple", "set", "string"],
                correct: 1
            },
            {
                q: "Қай цикл шарт ақиқат болғанша орындала береді?",
                options: ["for", "repeat", "while", "loop", "until"],
                correct: 2
            },
            {
                q: "Циклді ерте аяқтайтын кілт сөз?",
                options: ["stop", "quit", "break", "exit", "leave"],
                correct: 2
            },
            {
                q: "Тізімнің соңына элемент қосатын әдіс?",
                options: ["append()", "add()", "insert()", "push()", "extend()"],
                correct: 0
            },
            {
                q: "Санды екі есе арттыратын lambda-функцияны таңдаңыз:",
                options: ["lambda x: x+x", "lambda(x, x2)", "lambda x => x+2", "lambda: 2x", "lambda(x) x*2"],
                correct: 0
            },
            {
                q: "reduce() функциясы не істейді?",
                options: ["Жолдарды көбейтеді", "Элементтерді бір мәнге дейін тізбектей түрлендіреді", "Элементтерді сұрыптайды", "Элементтерді жояды", "Дерек түрін тексереді"],
                correct: 1
            },
            {
                q: "math модулінен тек sqrt функциясын қалай импорттаймыз?",
                options: ["import math.sqrt", "import sqrt", "from math get sqrt", "from math import sqrt", "include math.sqrt"],
                correct: 3
            },
            {
                q: "Файлды қосып жазу (дозапись) режимінде ашу:",
                options: ["open('f.txt', 'a')", "open('f.txt', 'd')", "open('f.txt', 'x')", "open('f.txt', 'r+')", "open('f.txt', '!')"],
                correct: 0
            },
            {
                q: "Файлды жабатын әдіс?",
                options: ["stop()", "shutdown()", "done()", "close()", "exit()"],
                correct: 3
            },
            {
                q: "Person класын қалай жариялаймыз?",
                options: ["def Person:", "make class Person:", "class Person:", "Person class():", "new Person:"],
                correct: 2
            },
            {
                q: "Объект атрибутына қалай жүгінеміз?",
                options: ["obj:atr", "obj(atr)", "obj->atr", "obj.atr", "atr.obj"],
                correct: 3
            },
            {
                q: "JSON файлының ең жиі қолданылатын кеңейтілімі?",
                options: [".dat", ".txt", ".conf", ".json", ".jfile"],
                correct: 3
            },
            {
                q: "Деректерді JSON-ға сериализациялайтын функция?",
                options: ["json.write()", "json.serialize()", "json.dumps()", "json.data()", "json.pack()"],
                correct: 2
            },
            {
                q: "JSON-ды файлдан қалай жүктейміз?",
                options: ["json.load()", "json.open()", "json.make()", "json.readjson()", "json.parsefile()"],
                correct: 0
            },
            {
                q: "Кестеден барлық жазбаларды таңдайтын команда?",
                options: ["TAKE * FROM", "GET * FROM", "SELECT * FROM", "FETCH * FROM", "READ * FROM"],
                correct: 2
            },
            {
                q: "Қай SQL операторы жолды жояды?",
                options: ["CUT", "DROP", "REMOVE", "DELETE", "ERASE"],
                correct: 3
            },
            {
                q: "Бар жоқ айнымалыға жүгінгенде қандай қате шығады?",
                options: ["NameError", "TypeError", "ValueError", "IndexError", "ZeroDivisionError"],
                correct: 0
            },
            {
                q: "INSERT сұранысын қалай орындаймыз?",
                options: ["cursor.add()", "cursor.send()", "cursor.execute()", "cursor.write()", "cursor.sql()"],
                correct: 2
            },
            {
                q: "Сұраныс нәтижесіндегі барлық жолдарды қалай аламыз?",
                options: ["fetchall()", "getall()", "readall()", "take()", "list()"],
                correct: 0
            },
            {
                q: "SQLite-та логикалық мән (BOOLEAN) қандай тип ретінде сақталады?",
                options: ["BOOLEAN", "BOOL", "LOGIC", "LOG", "INTEGER"],
                correct: 4
            },
            {
                q: "Бірегей мәндер сақталатын өріс қалай аталады?",
                options: ["UNIQUE", "IDENTITY", "Special", "PK", "Number"],
                correct: 0
            },
            {
                q: "Тек бірегей мәндерді таңдайтын оператор?",
                options: ["ONLY", "DISTINCT", "UNIQUE", "DIFFERENT", "CLEAR"],
                correct: 1
            },
            {
                q: "PyQt5-те графикалық интерфейс құру құралы қалай аталады?",
                options: ["QtAssembler", "UI Maker", "Qt Designer", "PyWindow", "Interface Lab"],
                correct: 2
            },
            {
                q: "Басты терезе қай классқа жатады?",
                options: ["QWidget", "QMainWindow", "WindowRoot", "QApplication", "RootFrame"],
                correct: 1
            },
            {
                q: "Түйме жасайтын функция?",
                options: ["Button()", "MakeButton()", "QPushButton()", "NewButton()", "QButton()"],
                correct: 2
            },
            {
                q: "show() әдісі не істейді?",
                options: ["Терезені жабады", "Терезені жояды", "Терезені көрсетеді", "Интерфейсті жаңартады", "Терезе жасайды"],
                correct: 2
            },
            {
                q: ".ui файлын қалай жүктейміз?",
                options: ["load.ui()", "uic.importUi()", "uic.loadUi()", "app.loadUi()", "QtLoader.ui()"],
                correct: 2
            },
            {
                q: "Түйме оқиғасын функцияға қалай қосамыз?",
                options: ["button.whenClick(func)", "button.do(func)", "button.connect(func)", "button.clicked.connect(func)", "button.push(func)"],
                correct: 3
            },
            {
                q: "QApplication деген не?",
                options: ["Сигналдар модулі", "Бағдарламаның басты терезесі", "Стиль өңдеуші", "Қосымшаның негізгі объектісі", "Элементтер панелі"],
                correct: 3
            },
            {
                q: "Түйме басылғанда қай оқиға генерацияланады?",
                options: ["pressed", "clicked", "run", "invoke", "do"],
                correct: 1
            },
            {
                q: "PyQt5-тегі слот деген не?",
                options: ["Дерек түрі", "Сигналды өңдейтін әдіс", "Терезе", "Түйме", "Интерфейс"],
                correct: 1
            },
            {
                q: "Қарапайым виджетті қалай жасаймыз?",
                options: ["Widget()", "NewWidget()", "QWidget()", "pyWidget()", "QtWidget()"],
                correct: 2
            },
            {
                q: "Қосымшаны қалай аяқтаймыз?",
                options: ["exit.app()", "app.finish()", "close.app()", "app.quit()", "quit.window()"],
                correct: 3
            },
            {
                q: "Интерфейсті жаңартатын әдіс?",
                options: ["update()", "refresh()", "reload()", "recreate()", "reset()"],
                correct: 0
            }
        ],

        // --- 3-ші Нұсқа ---
        "variant3": [
             {
                q: "Функцияға берілетін мән қалай аталады?",
                options: ["объект", "параметр", "кілт", "сілтеме", "оператор"],
                correct: 1
            },
            {
                q: "Бөлшек сандарды сақтайтын дерек түрі?",
                options: ["int", "float", "str", "bool", "list"],
                correct: 1
            },
            {
                q: "Қай оператор «үлкен немесе тең» дегенді білдіреді?",
                options: [">>", ">>=", ">=", "=>", "!>="],
                correct: 2
            },
            {
                q: "Мәнді терістейтін логикалық оператор?",
                options: ["not", "or", "and", "xor", "nor"],
                correct: 0
            },
            {
                q: "Жолды бас әріпке айналдыратын әдіс?",
                options: ["big()", "upper()", "uppercase()", "top()", "cap()"],
                correct: 1
            },
            {
                q: "Реті бар және өзгеретін коллекцияны сақтауға қай түр қолайлы?",
                options: ["tuple", "list", "set", "dict", "range"],
                correct: 1
            },
            {
                q: "Блокты белгілі бір рет санына қайталау үшін қандай оператор қолданылады?",
                options: ["repeat", "until", "loop", "for", "do"],
                correct: 3
            },
            {
                q: "Ағымдағы итерацияны тоқтатып, келесісіне өтетін оператор?",
                options: ["break", "stop", "skip", "continue", "exit"],
                correct: 3
            },
            {
                q: "Тізімнен мән бойынша элементті өшіретін әдіс?",
                options: ["remove()", "delete()", "erase()", "pop()", "drop()"],
                correct: 0
            },
            {
                q: "Кортеждің (tuple) қай әдісі бар?",
                options: ["append()", "add()", "insert()", "count()", "remove()"],
                correct: 3
            },
            {
                q: "map() функциясы не істейді?",
                options: ["Тізімді жолға айналдырады", "Функцияны әр элементке қолданады", "Деректерді сұрыптайды", "Тізімдерді біріктіреді", "Шарт бойынша элементтерді жояды"],
                correct: 1
            },
            {
                q: "lambda синтаксисінің дұрыс жазылған нұсқасы:",
                options: ["lambda x => x3", "lambda(x){x3}", "lambda x: x3", "lambda: x3", "lambda->x*3"],
                correct: 2
            },
            {
                q: "datetime модулін толық импорттау:",
                options: ["using datetime", "include datetime", "import datetime", "take datetime", "load datetime"],
                correct: 2
            },
            {
                q: "Файлды тек жазу режимінде ашу:",
                options: ["open('file.txt', 'r')", "open('file.txt', 'w')", "open('file.txt', 'rw')", "open('file.txt', 'c')", "open('file.txt', 'd')"],
                correct: 1
            },
            {
                q: "Файлдан бір жол оқитын әдіс?",
                options: ["read()", "readline()", "readrow()", "readstr()", "read1()"],
                correct: 1
            },
            {
                q: "Объект жасалғанда шақырылатын функция?",
                options: ["class", "new", "make", "init", "start"],
                correct: 3
            },
            {
                q: "Объект атрибуттарының тізімін қай әдіс қайтарады?",
                options: ["vars()", "info()", "about()", "attrs()", "describe()"],
                correct: 0
            },
            {
                q: "pickle қандай форматпен жұмыс істейді?",
                options: ["Тек жолдар", "Тек сөздіктер", "Екілік (binary) формат", "Тек сандар", "Тек тізімдер"],
                correct: 2
            },
            {
                q: "Екілік сериализация үшін қай модуль қолданылады?",
                options: ["json", "pickle", "struct", "bin", "serial"],
                correct: 1
            },
            {
                q: "SQLite базасының жиі қолданылатын кеңейтілімі?",
                options: [".txt", ".data", ".sql", ".db", ".lite"],
                correct: 3
            },
            {
                q: "SQL-де кесте жасаудың командасы?",
                options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "TABLE ADD", "TABLE CREATE"],
                correct: 1
            },
            {
                q: "Бір шарт бойынша бір жазбаны қалай таңдаймыз?",
                options: ["SELECT ONE", "SELECT ROW WHERE", "SELECT * WHERE", "SELECT FROM WHERE", "SELECT WHERE ROW"],
                correct: 2
            },
            {
                q: "ORDER BY операторы не істейді?",
                options: ["Жолдарды сүзгіден өткізеді", "Жолдарды сұрыптайды", "Жолдарды біріктіреді", "Жолдарды жояды", "Жолдар қосады"],
                correct: 1
            },
            {
                q: "Кестелерді біріктіретін оператор?",
                options: ["ADD", "JOIN", "LINK", "MERGE", "FUSE"],
                correct: 1
            },
            {
                q: "Python-да SQL командасын орындау:",
                options: ["sql.run()", "db.send()", "cursor.execute()", "execute.command()", "run.sql()"],
                correct: 2
            },
            {
                q: "fetchone() не істейді?",
                options: ["Барлық жолдарды алады", "Бір ғана жолды алады", "Жолды жояды", "Жолды жаңартады", "Жолды қайта жазады"],
                correct: 1
            },
            {
                q: "PostgreSQL-ге қосылуға қай функция қолданылады?",
                options: ["sqlite3.connect()", "psycopg2.connect()", "sqldb.connect()", "postgres.open()", "pgsql.start()"],
                correct: 1
            },
            {
                q: "Транзакцияны аяқтау қалай жасалады?",
                options: ["cursor.stop()", "db.end()", "connection.commit()", "write.commit()", "db.complete()"],
                correct: 2
            },
            {
                q: "PyQt5-те интерфейстерге жауапты модуль?",
                options: ["PyInterface", "PyWindow", "PyQt5.QtWidgets", "QtMaker", "QtUI"],
                correct: 2
            },
            {
                q: "Виджетті қалай жасаймыз?",
                options: ["QWidget()", "Window()", "Root()", "Widget()", "QtWidget()"],
                correct: 0
            },
            {
                q: "Қосымшаның негізгі циклын не іске қосады?",
                options: ["window.loop()", "run.app()", "app.exec()", "exec.window()", "loop.start()"],
                correct: 2
            },
            {
                q: "Түймеге мәтін орнату:",
                options: ["button.setText()", "button.writeText()", "button.textAdd()", "button.label()", "button.input()"],
                correct: 0
            },
            {
                q: "Qt Designer қандай файл жасайды?",
                options: [".qtd", ".qt", ".ui", ".design", ".form"],
                correct: 2
            },
            {
                q: "Басу сигналына қосылу:",
                options: ["button.click(func)", "button.pressed(func)", "button.whenClick(func)", "button.clicked.connect(func)", "button.action(func)"],
                correct: 3
            },
            {
                q: "Барлық элементтердің ата-аналық класы?",
                options: ["QFrame", "QWidget", "QElement", "QBase", "WindowCore"],
                correct: 1
            },
            {
                q: "Сигнал деген не?",
                options: ["Өңдеу әдісі", "Интерфейс оқиғасы", "Интерфейс", "Терезе стилі", "Дерек түрі"],
                correct: 1
            },
            {
                q: "Слот деген не?",
                options: ["Оқиғаны өңдейтін әдіс", "Терезе", "Сурет", "Мәтіндік объект", "Атрибут"],
                correct: 0
            },
            {
                q: "Терезе өлшемін орнату үшін қандай әдіс қолданылады?",
                options: ["setDimensions()", "setSize()", "setGeometry()", "size()", "resizeWindow()"],
                correct: 2
            },
            {
                q: "PyQt5 қосымшасын қалай аяқтаймыз?",
                options: ["exit()", "stop()", "app.quit()", "quit.app()", "break()"],
                correct: 2
            },
            {
                q: "Виджетті жаңарту әдісі?",
                options: ["refresh()", "update()", "recreate()", "redraw()", "reload()"],
                correct: 1
            }
        ],

        // --- 4-ші Нұсқа ---
        "variant4": [
             {
                q: "Айнымалыны анықтамай тұрып қолданғанда қандай қате пайда болады?",
                options: ["TypeError", "NameError", "IndexError", "ValueError", "SyntaxError"],
                correct: 1
            },
            {
                q: "not in операторы не істейді?",
                options: ["Мәннің түрін тексереді", "Элементтің жоқтығын тексереді", "Мәнді меншіктейді", "Циклді қайта іске қосады", "Санның таңбасын (минус/плюс) өзгертеді"],
                correct: 1
            },
            {
                q: "Кілт–мәннің өзгермейтін коллекциясы қалай аталады?",
                options: ["list", "tuple", "dict", "frozendict", "staticmap"],
                correct: 3
            },
            {
                q: "Жолдан барлық ішкіжол (подстрока) кездесулерін жоятын әдіс?",
                options: ["remove()", "strip()", "replace()", "clear()", "delete()"],
                correct: 2
            },
            {
                q: "XOR логикалық операциясын орындайтын оператор?",
                options: ["^^", "xor", "^", "<>", "!=="],
                correct: 2
            },
            {
                q: "type() функциясы не қайтарады?",
                options: ["Объект ұзындығын", "Объект форматын", "Объектінің түрін (type)", "Объект мекенжайын", "Объект мәнін"],
                correct: 2
            },
            {
                q: "Тізімдегі элементтің индексін қайтаратын әдіс?",
                options: ["index()", "find()", "search()", "detect()", "locate()"],
                correct: 0
            },
            {
                q: "Көптікке (set) элемент қосатын әдіс?",
                options: ["append()", "add()", "push()", "insert()", "extend()"],
                correct: 1
            },
            {
                q: "if-тен кейін шарттар тізбектей тексерілетін блок қалай аталады?",
                options: ["else if", "elif", "elseif", "nextif", "alt"],
                correct: 1
            },
            {
                q: "Жол тек цифрлардан тұратынын тексеретін әдіс?",
                options: ["isnum()", "isdigit()", "numeric()", "isnumber()", "checkdigit()"],
                correct: 1
            },
            {
                q: "Санды квадратқа шығаратын lambda-функция?",
                options: ["lambda x => x^2", "lambda(x): x**2", "lambda x: xx", "lam(x){x²}", "lambda: xx"],
                correct: 2
            },
            {
                q: "Кездейсоқ мәндермен жұмыс істейтін модуль?",
                options: ["random", "rand", "rng", "chance", "generate"],
                correct: 0
            },
            {
                q: "Дұрыс синтаксисін көрсетіңіз:",
                options: ["import math as m", "import as math m", "math import as m", "using math → m", "from math alias m"],
                correct: 0
            },
            {
                q: "JSON-ды жолдан оқу үшін қай әдіс қолданылады?",
                options: ["json.decode()", "json.read()", "json.loads()", "json.open()", "json.try()"],
                correct: 2
            },
            {
                q: "Python объектісін JSON файлына жазу үшін:",
                options: ["json.store()", "json.write()", "json.dump()", "json.push()", "json.save()"],
                correct: 2
            },
            {
                q: "pickle файлының форматы?",
                options: ["Мәтіндік", "Екілік", "JSON", "XML", "Кестелік"],
                correct: 1
            },
            {
                q: "CSV-мен жұмыс істейтін модуль?",
                options: ["csv", "table", "comma", "filecsv", "textcsv"],
                correct: 0
            },
            {
                q: "PostgreSQL дампының жиі қолданылатын кеңейтілімі?",
                options: [".psql", ".pg", ".dump", ".sql", ".pgdata"],
                correct: 3
            },
            {
                q: "Шектеулі қатар санын таңдау үшін:",
                options: ["SELECT FIRST n", "SELECT n ROWS", "SELECT * LIMIT n", "SELECT LIMIT n", "TAKE n"],
                correct: 2
            },
            {
                q: "UPDATE командасы не істейді?",
                options: ["Деректерді жояды", "Деректерді жаңартады", "Кесте жасайды", "Кестенің атын өзгертеді", "Баған қосады"],
                correct: 1
            },
            {
                q: "Кестені толық жою үшін қандай команда қолданылады?",
                options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE", "KILL TABLE"],
                correct: 1
            },
            {
                q: "0 мен 1 аралығында кездейсоқ санды қандай функция қайтарады?",
                options: ["random.one()", "random.rand()", "random.random()", "random.float()", "random.value()"],
                correct: 2
            },
            {
                q: "LIKE операторы не істейді?",
                options: ["Сандарды салыстырады", "Үлгі (шаблон) бойынша іздейді", "Жолдарды жояды", "Мән меншіктейді", "Кесте жасайды"],
                correct: 1
            },
            {
                q: "cursor-дан баған атауларын қалай аламыз?",
                options: ["cursor.columns", "cursor.keys()", "cursor.fields()", "cursor.meta()", "cursor.colnames()"],
                correct: 1
            },
            {
                q: "SELECT * FROM table сұранысындағы * нені білдіреді?",
                options: ["Тек жолдарды таңдау", "Тек бағандарды таңдау", "Барлығын таңдау", "Алғашқы 5 жолды таңдау", "Тек бірегей жолдарды таңдау"],
                correct: 2
            },
            {
                q: "PyQt5 қосымшасының терезелері үшін қай модуль жауап береді?",
                options: ["PyQt5.Core", "PyQt5.UI", "PyQt5.QtWidgets", "PyQt5.Design", "PyQt5.App"],
                correct: 2
            },
            {
                q: "QMainWindow экземплярын жасау:",
                options: ["win = QMainWindow()", "win = Window()", "win = MainWindow()", "win = QtMain()", "win = WindowMain()"],
                correct: 0
            },
            {
                q: "Терезе тақырыбын қалай орнатамыз?",
                options: ["window.header('title')", "window.rename('title')", "window.caption('title')", "window.setWindowTitle('title')", "window.title('title')"],
                correct: 3
            },
            {
                q: "Түймені терезеге қалай қосамыз?",
                options: ["window.add(button)", "button.attach(window)", "button.to(window)", "button.moveTo(window)", "window.push(button)"],
                correct: 0
            },
            {
                q: "Түйме орнын қалай орнатамыз?",
                options: ["button.locate(x, y)", "button.setPosition(x, y)", "button.move(x, y)", "button.go(x, y)", "button.setXY()"],
                correct: 2
            },
            {
                q: "Терезені көрсетуге қолданылатын әдіс?",
                options: ["draw()", "show()", "display()", "open()", "window()"],
                correct: 1
            },
            {
                q: "Сигналдар мен слоттар деген не?",
                options: ["Интерфейс элементтерінің өзара әрекеттесу механизмі", "Файлдар құрылымы", "Мәлімет алмасу протоколдары", "Айнымалы түрлері", "Импорт модульдері"],
                correct: 0
            },
            {
                q: "Горизонталды layout қалай құрылады?",
                options: ["QHBoxLayout()", "QHorizontal()", "LayoutH()", "HorizontalLayout()", "HLayout()"],
                correct: 0
            },
            {
                q: "Layout-қа виджетті қалай қосамыз?",
                options: ["layout.insert(widget)", "layout.put(widget)", "layout.addWidget(widget)", "layout.widgetAdd(widget)", "layout.append(widget)"],
                correct: 2
            },
            {
                q: "Түйме басу сигналын қалай қосамыз?",
                options: ["button.press(func)", "button.whenClick(func)", "button.clicked.connect(func)", "button.doClick(func)", "button.call(func)"],
                correct: 2
            },
            {
                q: "resize() әдісі не істейді?",
                options: ["Түймені актив етеді", "Виджеттің өлшемін өзгертеді", "Түсін өзгертеді", "Виджетті өшіреді", "Тексті жаңартады"],
                correct: 1
            },
            {
                q: "QLineEdit өрісінен мәтінді алу:",
                options: ["field.text()", "field.get()", "field.read()", "field.value()", "field.input()"],
                correct: 0
            },
            {
                q: "Мәтіндік өрісті тазарту:",
                options: ["field.clr()", "field.clear()", "field.empty()", "field.delete()", "field.clean()"],
                correct: 1
            },
            {
                q: "Қосымшаны аяқтау:",
                options: ["app.stop()", "exit.window()", "app.quit()", "quit()", "end.app()"],
                correct: 2
            },
            {
                q: "repaint() әдісі не істейді?",
                options: ["Элементті толық қайта сызады", "Терезені жабады", "Элементті жояды", "Жаңа layout жасайды", "Виджет түрін өзгертеді"],
                correct: 0
            }
        ],

        // --- 5-ші Нұсқа ---
        "variant5": [
             {
                q: "Мәселені шешуге арналған нұсқаулар тізбегі қалай аталады?",
                options: ["Модель", "Алгоритм", "Құрылым", "Функция", "Бағдарлама"],
                correct: 1
            },
            {
                q: "Тек екі мәнді (ақиқат/жалған) сақтайтын дерек түрі?",
                options: ["int", "float", "bool", "binary", "flag"],
                correct: 2
            },
            {
                q: "«Кіші немесе тең» операциясын қай оператор білдіреді?",
                options: ["<<", "<=", "=<", "!<", "≤"],
                correct: 1
            },
            {
                q: "Жолдың бірінші әрпін бас әріпке айналдыратын әдіс?",
                options: ["big()", "upper1()", "capitalize()", "head()", "cap()"],
                correct: 2
            },
            {
                q: "Жолдарды біріктіру үшін қай оператор қолданылады?",
                options: ["&", "+", "*", "&&", "join"],
                correct: 1
            },
            {
                q: "Тізімге индекс бойынша элемент қосатын әдіс?",
                options: ["add()", "set()", "insert()", "push()", "merge()"],
                correct: 2
            },
            {
                q: "Кем дегенде бір рет орындалатын цикл түрі?",
                options: ["while", "for", "do-while", "repeat-until", "until-for"],
                correct: 2
            },
            {
                q: "Қалдық (остаток) алу үшін қай оператор қолданылады?",
                options: ["//", "%", "mod", "div", "#"],
                correct: 1
            },
            {
                q: "Мән жоқ болса да қате шығармай, көптіктен (set) элемент өшіретін әдіс?",
                options: ["remove()", "pop()", "clear()", "discard()", "erase()"],
                correct: 3
            },
            {
                q: "Жолдан ішкіжолды тауып, индексін қайтаратын әдіс?",
                options: ["locate()", "find()", "detect()", "look()", "check()"],
                correct: 1
            },
            {
                q: "Параметрсіз lambda-функцияны таңдаңыз:",
                options: ["lambda(): 5", "lambda 5", "lambda → 5", "lambda: 5", "lambda(None)"],
                correct: 0
            },
            {
                q: "Математикалық функциялар беретін модуль?",
                options: ["mathtools", "numbers", "math", "calc", "numeric"],
                correct: 2
            },
            {
                q: "Бір модульден бірнеше функцияны импорттау:",
                options: ["import a,b from module", "from module import a, b", "import (a,b) module", "using module(a,b)", "from module take a b"],
                correct: 1
            },
            {
                q: "Файлды екілік оқу режимінде ашу:",
                options: ["open('f', 'db')", "open('f', 'b')", "open('f', 'rb')", "open('f', 'binary')", "open('f', 'bin')"],
                correct: 2
            },
            {
                q: "Файлдағы жолдар тізімін қай әдіс қайтарады?",
                options: ["rows()", "lines()", "readlines()", "list()", "readrow()"],
                correct: 2
            },
            {
                q: "Объект жасалғанда init-ке дейін шақырылатын әдіс?",
                options: ["start", "new", "prepare", "alloc", "class"],
                correct: 1
            },
            {
                q: "Объект әдістерінің тізімін алу:",
                options: ["listmethods()", "dir()", "get()", "funcs()", "about()"],
                correct: 1
            },
            {
                q: "JSON Lines файлының жиі қолданылатын кеңейтілімі?",
                options: [".jlines", ".jsonl", ".lines", ".jdata", ".jtxt"],
                correct: 1
            },
            {
                q: "Python объектісін pickle-ге сериализациялау:",
                options: ["pickle.store()", "pickle.dump()", "pickle.save()", "pickle.write()", "pickle.export()"],
                correct: 1
            },
            {
                q: "CSV деректерін жүктеу:",
                options: ["csv.read()", "csv.load()", "csv.reader()", "csv.parse()", "csv.open()"],
                correct: 2
            },
            {
                q: "Тек белгілі бір бағандарды таңдау:",
                options: ["SELECT ONLY col1, col2", "SELECT col1 col2", "SELECT (col1, col2)", "SELECT col1, col2", "TAKE col1 col2"],
                correct: 3
            },
            {
                q: "Жолдарды шарт бойынша біріктіретін SQL операторы?",
                options: ["MERGE", "JOIN", "GROUP", "LINK", "CONNECT"],
                correct: 1
            },
            {
                q: "Кесте бар болса ғана жоятын команда?",
                options: ["DROP TABLE IF FOUND", "DROP TABLE IF EXIST", "DELETE TABLE IF EXISTS", "DROP TABLE IF EXISTS", "REMOVE TABLE IF EXISTS"],
                correct: 3
            },
            {
                q: "Диапазонға кірмейтін мәндері бар жолдарды таңдау:",
                options: ["NOT BETWEEN", "OUT RANGE", "NOT RANGE", "NOT IN RANGE", "OUTSIDE"],
                correct: 0
            },
            {
                q: "Кесте құрылымын өзгертуге арналған команда?",
                options: ["CHANGE TABLE", "MODIFY TABLE", "ALTER TABLE", "UPDATE STRUCT", "RESHAPE TABLE"],
                correct: 2
            },
            {
                q: "PostgreSQL-мен жұмыс істеуге арналған Python кітапханасы?",
                options: ["sqlite3", "postgres", "psql", "psycopg2", "libpg"],
                correct: 3
            },
            {
                q: "Вертикалды layout құру:",
                options: ["VBox()", "QVLayout()", "LayoutV()", "QVBoxLayout()", "VLayout()"],
                correct: 3
            },
            {
                q: "Layout қолданбай, виджетті терезеге қосу:",
                options: ["window.attach(widget)", "window.insert(widget)", "widget.setParent(window)", "window.addWidget(widget)", "window.include(widget)"],
                correct: 2
            },
            {
                q: "Мәтіндік белгі (label) жасау:",
                options: ["TextLabel()", "QLabel()", "QText()", "Label()", "QtLabel()"],
                correct: 1
            },
            {
                q: "Қаріп өлшемін өзгерту:",
                options: ["font.resize()", "font.setPixelSize()", "font.textSize()", "font.updateSize()", "font.change()"],
                correct: 1
            },
            {
                q: "QLabel мәтінінің түсін өзгерту:",
                options: ["label.setColor()", "label.setTextColor()", "label.setStyleSheet()", "label.color()", "label.setStyle()"],
                correct: 2
            },
            {
                q: "QLineEdit мәтіні өзгергенде қай оқиға туындайды?",
                options: ["textChanged", "textInput", "onType", "write", "inputChanged"],
                correct: 0
            },
            {
                q: "Виджетті жоюға арналған әдіс?",
                options: ["delete()", "remove()", "destroy()", "close()", "deleteLater()"],
                correct: 4
            },
            {
                q: "Терезе өлшемін алу:",
                options: ["window.size()", "window.getSize()", "window.dimensions()", "window.measure()", "window.scale()"],
                correct: 0
            },
            {
                q: "Терезенің фиксированный өлшемін орнату:",
                options: ["window.setFixedSize()", "window.sizeFix()", "window.lockSize()", "window.freezeSize()", "window.setLimit()"],
                correct: 0
            },
            {
                q: "raise_() әдісі не істейді?",
                options: ["Терезені жартылай мөлдір етеді", "Терезені басқа терезелердің үстіне шығарады", "Терезені төмен жібереді", "Терезені максималды күйге келтіреді", "Интерфейсті қайта жүктейді"],
                correct: 1
            },
            {
                q: "Тінтуір координаталарын қалай аламыз?",
                options: ["getCursor()", "QCursor.pos()", "Cursor.get()", "mouse.pos()", "cursor.coord()"],
                correct: 1
            },
            {
                q: "Терезе иконкасын орнату:",
                options: ["window.setIcon()", "window.icon()", "window.setWindowIcon()", "window.loadIcon()", "window.applyIcon()"],
                correct: 2
            },
            {
                q: "Қосымшаны аяқтау:",
                options: ["quit.window()", "stop()", "app.quit()", "app.close()", "end()"],
                correct: 2
            },
            {
                q: "repaint() әдісі не істейді?",
                options: ["Тек мәтінді жаңартады", "Толық қайта сызу жасайды", "Қосымшаны қайта іске қосады", "Дерекқорды жаңартады", "Виджет түрін өзгертеді"],
                correct: 1
            }
        ],

        // --- 6-шы Нұсқа ---
        "variant6": [
             {
                q: "Бағдарламаны жазу ережелерін анықтайтын тіл элементі?",
                options: ["Алгоритм", "Синтаксис", "Типизация", "Семантика", "Интерпретация"],
                correct: 1
            },
            {
                q: "Символдар жиынын сақтайтын дерек түрі?",
                options: ["char", "int", "str", "list", "byte"],
                correct: 2
            },
            {
                q: "«Қатаң үлкен» дегенді білдіретін оператор?",
                options: ["=>", ">>", ">", ">=", "<>"],
                correct: 2
            },
            {
                q: "Жолды кіші әріпке ауыстыратын әдіс?",
                options: ["low()", "small()", "down()", "lower()", "tiny()"],
                correct: 3
            },
            {
                q: "Тізімнен индекс бойынша элемент өшіру әдісі?",
                options: ["remove()", "erase()", "delete()", "pop()", "drop()"],
                correct: 3
            },
            {
                q: "Жолды n рет қайталайтын оператор?",
                options: ["+", "*", "repeat", "**", "//"],
                correct: 1
            },
            {
                q: "Реті бар, өзгермейтін коллекция қай типке жатады?",
                options: ["list", "tuple", "set", "dict", "array"],
                correct: 1
            },
            {
                q: "Қатыстылықты (принадлежность) тексеретін оператор?",
                options: ["have", "include", "contains", "in", "exist"],
                correct: 3
            },
            {
                q: "Диапазонмен (range) бірге қолданылатын цикл?",
                options: ["repeat", "for", "iterate", "while", "until"],
                correct: 1
            },
            {
                q: "Көптіктен барлық элементтерді өшіретін әдіс?",
                options: ["drop()", "popAll()", "clear()", "reset()", "purge()"],
                correct: 2
            },
            {
                q: "lambda-функция қандай мақсатта қолданылады?",
                options: ["Аты бар функциялар жасауға", "Глобал айнымалыларды жариялауға", "Қысқа анонимді функциялар жасауға", "Класстар жасауға", "Модульдер жасауға"],
                correct: 2
            },
            {
                q: "Күн мен уақытпен жұмыс істейтін модуль?",
                options: ["timecalc", "datetime", "timer", "clock", "dtime"],
                correct: 1
            },
            {
                q: "Модульді бүркеншік атпен (alias) импорттау:",
                options: ["import math -> m", "from math alias m", "import math as m", "math import m", "math->m"],
                correct: 2
            },
            {
                q: "Файлды әрі оқуға, әрі жазуға ашу режимі?",
                options: ["'rw'", "'cr'", "'r+'", "'w?'", "'edit'"],
                correct: 2
            },
            {
                q: "Файлдағы курсорды жылжытатын әдіс?",
                options: ["move()", "set()", "seek()", "goto()", "pointer()"],
                correct: 2
            },
            {
                q: "Объект атрибуттарының сөздігін қай әдіс қайтарады?",
                options: ["attrs()", "getinfo()", "properties()", "dict", "vars()"],
                correct: 3
            },
            {
                q: "json.dumps() не істейді?",
                options: ["JSON-ды файлдан оқиды", "Объектіні JSON-жолға түрлендіреді", "Файлды сөздікке айналдырады", "JSON файлын жасайды", "JSON объектілерін біріктіреді"],
                correct: 1
            },
            {
                q: "pickle екілік файлдарымен жұмыс істейтін модуль?",
                options: ["json", "struct", "binary", "pickle", "serialize"],
                correct: 3
            },
            {
                q: "CSV-файлды оқу үшін қалай ашамыз?",
                options: ["csv.open()", "open(file)", "open(file, 'csv')", "open(file, 'r')", "open(file, 'c')"],
                correct: 3
            },
            {
                q: "GROUP BY операторы не істейді?",
                options: ["Кестелерді біріктіреді", "Жолдарды белгі бойынша топтастырады", "Жолдарды жояды", "Жолдарды сұрыптайды", "Бағандар қосады"],
                correct: 1
            },
            {
                q: "Кестедегі жолдар санын қай функция қайтарады?",
                options: ["COUNT()", "SUM()", "SIZE()", "AMOUNT()", "LEN(*)"],
                correct: 0
            },
            {
                q: "Тек бірегей жолдарды таңдау үшін:",
                options: ["UNIQUE *", "DISTINCT *", "FILTER UNIQUE", "SINGLE ROWS", "NEW LINES"],
                correct: 1
            },
            {
                q: "Шартқа сай жолдарды таңдайтын оператор?",
                options: ["PICK", "WHERE", "MATCH", "FILTER", "TAKE"],
                correct: 1
            },
            {
                q: "Сұрыптауды кему ретімен орындайтын SQL операторы?",
                options: ["SORT DESC", "ORDER BY ↓", "ORDER BY DESC", "DESCENDING BY", "SORT DOWN"],
                correct: 2
            },
            {
                q: "Файлға жазылатын кірістірілген база қайсысы?",
                options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Oracle"],
                correct: 3
            },
            {
                q: "PostgreSQL-ге арналған кітапхана?",
                options: ["pgpython", "psycopg2", "sqlpg", "postsql", "postpy"],
                correct: 1
            },
            {
                q: "PyQt5 терезесін жасау:",
                options: ["Window", "QWidget()", "QAppWindow()", "Main()", "UIWidget()"],
                correct: 1
            },
            {
                q: "QVBoxLayout-қа элемент қосу:",
                options: ["layout.insert(widget)", "layout.push(widget)", "layout.addWidget(widget)", "layout.put(widget)", "layout.widgetAdd(widget)"],
                correct: 2
            },
            {
                q: "Виджет координаталарын орнату:",
                options: ["widget.coords(x,y)", "widget.move(x,y)", "widget.setXY(x,y)", "widget.locate(x,y)", "widget.place(x,y)"],
                correct: 1
            },
            {
                q: "Түйме жасау:",
                options: ["Button()", "QBtn()", "QPushButton()", "MakeButton()", "QtButton()"],
                correct: 2
            },
            {
                q: "QLabel-ден мәтінді алу:",
                options: ["label.read()", "label.text()", "label.get()", "label.value()", "label.print()"],
                correct: 1
            },
            {
                q: "QLabel мәтінін өзгерту:",
                options: ["setText()", "changeText()", "updateText()", "renameText()", "writeText()"],
                correct: 0
            },
            {
                q: "hide() әдісі не істейді?",
                options: ["Виджетті жояды", "Виджетті жасырады", "Виджетті ерекшелейді", "Виджетті блоктайды", "Виджетті жылжытады"],
                correct: 1
            },
            {
                q: "Түймеге иконка орнату:",
                options: ["button.icon()", "button.setIcon()", "button.setButtonIcon()", "button.applyIcon()", "button.useIcon()"],
                correct: 1
            },
            {
                q: "Негізгі циклға қай объект жауап береді?",
                options: ["QLoop", "QApplication", "QMainWindow", "QThread", "QCycle"],
                correct: 1
            },
            {
                q: "Интерфейсті қайта сызу әдісі?",
                options: ["reload()", "redraw()", "repaint()", "updateUi()", "reset()"],
                correct: 2
            },
            {
                q: "Қос рет шерту оқиғасын қалай өңдейміз?",
                options: ["widget.doubleClick.connect()", "widget.dblclicked.connect()", "widget.doubleClicked.connect()", "widget.mouseDoubleClickEvent", "widget.onDoubleClick()"],
                correct: 3
            },
            {
                q: "Терезенің орнын алу:",
                options: ["window.getPos()", "window.position()", "window.pos()", "window.coords()", "window.points()"],
                correct: 2
            },
            {
                q: "Layout-ты жою:",
                options: ["layout.delete()", "delete layout", "layout.destroy()", "layout.deleteLater()", "layout.remove()"],
                correct: 3
            },
            {
                q: "Қосымшаны аяқтау:",
                options: ["exit()", "app.quit()", "window.closeApp()", "shutdown()", "stop()"],
                correct: 1
            }
        ],

        // --- 7-ші Нұсқа ---
        "variant7": [
             {
                q: "Бағдарламадағы ең кіші ақпараттық бірлік қалай аталады?",
                options: ["символ", "оператор", "өрнек", "модуль", "токен"],
                correct: 4
            },
            {
                q: "Бүтін сандарды сақтайтын дерек түрі?",
                options: ["float", "str", "int", "num", "digit"],
                correct: 2
            },
            {
                q: "Қатаң теңдік тексеретін оператор?",
                options: ["=", ":=", "==", "eq", "==="],
                correct: 2
            },
            {
                q: "Жолдың оң жақ бос орындарын ғана өшіретін әдіс?",
                options: ["rtrim()", "strip()", "right()", "rstrip()", "cutright()"],
                correct: 3
            },
            {
                q: "Тізімді орын-орнында (in-place) сұрыптайтын әдіс?",
                options: ["sort()", "order()", "sorted()", "arrange()", "organize()"],
                correct: 0
            },
            {
                q: "Бүтін бөлікпен бөлуді жасайтын оператор?",
                options: ["/", "div", "//", "%", "///"],
                correct: 2
            },
            {
                q: "Реті жоқ, бірегей элементтер типі?",
                options: ["dict", "list", "tuple", "set", "unique"],
                correct: 3
            },
            {
                q: "Шартты терістейтін оператор?",
                options: ["minus", "no", "!", "not", "invert"],
                correct: 3
            },
            {
                q: "break кездескенше шексіз орындалатын цикл?",
                options: ["repeat", "loop", "for", "while", "until"],
                correct: 3
            },
            {
                q: "Тізімнің соңғы элементін өшіретін әдіс?",
                options: ["remove()", "cut()", "pop()", "drop()", "erase()"],
                correct: 2
            },
            {
                q: "Екі параметрі бар lambda өрнегі?",
                options: ["lambda(x,y){ }", "lambda x,y → x+y", "lambda x,y: x+y", "lambda(x+y)", "lambda: x,y"],
                correct: 2
            },
            {
                q: "Жүйелік уақытпен жұмыс істейтін модуль?",
                options: ["clock", "datetime", "timer", "time", "sysclock"],
                correct: 3
            },
            {
                q: "Модульдің барлық функцияларын қалай импорттаймыз?",
                options: ["import * from module", "from module import *", "module import all", "include module.all", "take module.*"],
                correct: 1
            },
            {
                q: "Жаңа файлды құру режимі?",
                options: ["'r'", "'x'", "'w'", "'rw'", "'rw+'"],
                correct: 2
            },
            {
                q: "Файлдың барлығын бірден оқитын функция?",
                options: ["readall()", "file.readall()", "read()", "getline()", "readfile()"],
                correct: 2
            },
            {
                q: "Объект жойылғанда шақырылатын әдіс?",
                options: ["delete", "free", "destroy", "del", "gc"],
                correct: 3
            },
            {
                q: "json.load() не істейді?",
                options: ["JSON жазады", "JSON-ды файлдан оқиды", "Жолды JSON-ға түрлендіреді", "Объектіні сериализациялайды", "JSON-ды тазалайды"],
                correct: 1
            },
            {
                q: "pickle.load() не қайтарады?",
                options: ["JSON-объект", "Мәтіндік жол", "Сериализацияланған Python-объект", "Тек сөздік", "Тек тізім"],
                correct: 2
            },
            {
                q: "Python объектісін CSV-жолға қалай айналдырамыз?",
                options: ["csv.convert()", "csv.dumps()", "csv.write()", "csv.export()", "қолмен join арқылы"],
                correct: 4
            },
            {
                q: "Бірнеше шартты қанағаттандыратын деректерді таңдау:",
                options: ["WHERE A OR B", "WHERE A AND B", "WHERE MATCH A B", "FILTER A+B", "FILTER ALL A B"],
                correct: 1
            },
            {
                q: "Бағанның қосындысын есептеу:",
                options: ["SUM(column)", "COUNT(column)", "TOTAL(column)", "PLUS(column)", "ADD(column)"],
                correct: 0
            },
            {
                q: "Диапазондағы мәндерге сәйкес жолдарды таңдау:",
                options: ["INSIDE", "BETWEEN", "RANGE", "LIMIT", "BOUND"],
                correct: 1
            },
            {
                q: "HAVING не істейді? ",
                options: ["Топтарды сүзгіден өткізеді", "Топтарды жояды", "Кесте жасайды", "Баған қосады", "Жолдарды сұрыптайды"],
                correct: 0
            },
            {
                q: "Шарт бойынша жолдарды жою:",
                options: ["REMOVE FROM", "DELETE WHERE", "DELETE FROM table WHERE …", "CUT FROM table", "DROP WHERE"],
                correct: 2
            },
            {
                q: "Параметрленген SQL сұранысын орындау:",
                options: ["cursor.execute(query, params)", "cursor.run(query, params)", "cursor.sql(query, params)", "execute(query%params)", "send(query,params)"],
                correct: 0
            },
            {
                q: "SQLite-ке қосылу:",
                options: ["sqlite.connect()", "sql.connect()", "sqlite3.connect()", "pydb.connect()", "sqllite.connect()"],
                correct: 2
            },
            {
                q: "PyQt5-те басты терезені жасау:",
                options: ["BaseWindow()", "QWindow()", "QMainWindow()", "QWidget()", "UIMain()"],
                correct: 2
            },
            {
                q: "Горизонталды контейнер:",
                options: ["QHorizontal()", "QHBoxLayout()", "HorizontalBox()", "LayoutH()", "BoxH()"],
                correct: 1
            },
            {
                q: "Түйме әрекетін функцияға байлау:",
                options: ["button.action = func", "button.call(func)", "button.clicked.connect(func)", "button.press(func)", "button.do(func)"],
                correct: 2
            },
            {
                q: "Виджеттің шрифтін орнату:",
                options: ["setFont()", "widget.font()", "font.set()", "widget.setTextFont()", "style.setFont()"],
                correct: 0
            },
            {
                q: "Терезе енін алу:",
                options: ["window.width()", "window.getWidth()", "window.xsize()", "window.x()", "window.size()[0]"],
                correct: 0
            },
            {
                q: "Терезенің минималды өлшемін орнату:",
                options: ["window.minSize()", "window.setMinSize()", "window.setMinimumSize()", "window.limitSize()", "window.setSmallestSize()"],
                correct: 2
            },
            {
                q: "Тінтуір қозғалысы кезінде қай оқиға шақырылады?",
                options: ["mouseMove", "onMouse", "mouseMoved", "mouseMoveEvent", "moveMouseEvent"],
                correct: 3
            },
            {
                q: "Layout-ты тазарту:",
                options: ["layout.clear()", "layout.removeAll()", "layout.delete()", "layout.takeAt() циклында", "layout.flush()"],
                correct: 3
            },
            {
                q: "Таймерді тоқтату:",
                options: ["timer.stop()", "timer.pause()", "timer.end()", "timer.quit()", "timer.kill()"],
                correct: 0
            },
            {
                q: "Виджет фонының түсін өзгерту:",
                options: ["widget.color()", "widget.setBackground()", "widget.setStyleSheet()", "widget.styleColor()", "widget.bg()"],
                correct: 2
            },
            {
                q: "Консольге хабар шығару:",
                options: ["echo()", "console.write()", "print()", "output()", "sysout()"],
                correct: 2
            },
            {
                q: "QComboBox-тан мәтінді алу:",
                options: ["combo.value()", "combo.item()", "combo.currentText()", "combo.get()", "combo.read()"],
                correct: 2
            },
            {
                q: "Терезені экранның ортасына жылжыту:",
                options: ["window.center()", "window.moveCenter()", "window.move() ортаны есептеп", "app.center(window)", "ui.center()"],
                correct: 2
            },
            {
                q: "Интерфейсті қайта жүктеу:",
                options: ["reload()", "refreshUi()", "update()", "recreate()", "restartUi()"],
                correct: 2
            }
        ],

        // --- 8-ші Нұсқа ---
        "variant8": [
             {
                q: "Бағдарламаны жазудың рұқсат етілген формаларын анықтайтын ережелер жиынтығы?",
                options: ["Логика", "Синтаксис", "Схема", "Алгоритм", "Құрылым"],
                correct: 1
            },
            {
                q: "True/False мәнін сақтайтын дерек түрі?",
                options: ["bit", "boolean", "bool", "flag", "logic"],
                correct: 2
            },
            {
                q: "«Қатаң кіші» салыстыруы үшін қай оператор қолданылады?",
                options: ["<=", "<", "<<", "<==", "≺"],
                correct: 1
            },
            {
                q: "Жолдағы ішкіжолдың қанша рет кездесетінін қайтаратын әдіс?",
                options: ["count()", "num()", "occurrences()", "findall()", "total()"],
                correct: 0
            },
            {
                q: "Тізімді кері ретпен айналдыратын әдіс?",
                options: ["reverse()", "flip()", "invert()", "swap()", "roll()"],
                correct: 0
            },
            {
                q: "Дәрежеге шығаратын оператор?",
                options: ["^", "pow", "exp", "**", "^^"],
                correct: 3
            },
            {
                q: "Кілт–мән жұбын сақтайтын дерек түрі?",
                options: ["set", "map", "dict", "pair", "tuple"],
                correct: 2
            },
            {
                q: "Логикалық өрнекті терістеу үшін қандай оператор қолданылады?",
                options: ["!=", "not", "!", "inverse", "anti"],
                correct: 1
            },
            {
                q: "Шарт ақиқат болғанша орындалатын цикл?",
                options: ["loop", "for", "repeat", "while", "do"],
                correct: 3
            },
            {
                q: "Тізімге бірден бірнеше элемент қосатын әдіс?",
                options: ["addall()", "pushall()", "extend()", "merge()", "appendall()"],
                correct: 2
            },
            {
                q: "lambda-функция не істейді?",
                options: ["Үлкен модульдер жасайды", "Анонимді шағын функциялар жасайды", "Дерекқор жасайды", "Файл жасайды", "Сыртқы процестер жасайды"],
                correct: 1
            },
            {
                q: "Математикалық тұрақтылармен жұмыс істейтін модуль?",
                options: ["matplotlib", "random", "math", "algebra", "numbers"],
                correct: 2
            },
            {
                q: "math модулін ішінара импорттау:",
                options: ["import math(parts)", "take math.partial", "from math import sin", "math import sin", "load math.sin"],
                correct: 2
            },
            {
                q: "Файлды аяғына қосып жазу үшін қандай режим керек?",
                options: ["'c'", "'a'", "'t'", "'e'", "'add'"],
                correct: 1
            },
            {
                q: "Файл соңына жеткен-жетпегенін тексеретін әдіс?",
                options: ["file.end()", "eof()", "file.eof()", "atEnd()", "read.end()"],
                correct: 2
            },
            {
                q: "Объектінің клас атауын қалай аламыз?",
                options: ["type(obj).title", "obj.class.name", "class(obj).name", "typename(obj)", "obj.name"],
                correct: 1
            },
            {
                q: "json.loads() не істейді?",
                options: ["JSON файлын жүктейді", "JSON-жолды объектіге түрлендіреді", "JSON файлын жасайды", "JSON-ды жояды", "JSON сақтайды"],
                correct: 1
            },
            {
                q: "pickle.dumps() не істейді?",
                options: ["Объектіні екілік жолға түрлендіреді", "Объектіні файлдан жүктейді", "Екілік файлды жояды", "Мәтіндік формат жасайды", "Объектіні шығарады"],
                correct: 0
            },
            {
                q: "CSV үшін writer объектісін алу:",
                options: ["csv.getwriter()", "csv.openwriter()", "csv.writer()", "csv.writerline()", "csv.out()"],
                correct: 2
            },
            {
                q: "Мәні берілгенге тең ЕМЕС жолдарды таңдау:",
                options: ["WHERE !=", "WHERE NOT ==", "WHERE NOT VALUE", "WHERE NOTEQ", "WHERE NO MATCH"],
                correct: 0
            },
            {
                q: "Жолдарды топтастыратын команда?",
                options: ["GROUP BY", "SORT BY", "ORDER BY", "MERGE BY", "FILTER BY"],
                correct: 0
            },
            {
                q: "Бағанның ең үлкен мәнін алу:",
                options: ["PEAK()", "HIGH()", "MAX()", "TOP()", "MOST()"],
                correct: 2
            },
            {
                q: "INNER JOIN не істейді?",
                options: ["Жолдарды жояды", "Тек сәйкес келетін жолдарды көрсетеді", "Барлық жолдарды көрсетеді", "Кесте жасайды", "Кестелерді бөледі"],
                correct: 1
            },
            {
                q: "Алғашқы N жолды таңдау:",
                options: ["FIRST N", "ROWS(N)", "LIMIT N", "CUT N", "SELECT N"],
                correct: 2
            },
            {
                q: "IN операторы не істейді?",
                options: ["Жолдарды салыстырады", "Мәннің тізімге кіретінін тексереді", "Жолдарды жояды", "Жолдарды жаңартады", "Жолдар қосады"],
                correct: 1
            },
            {
                q: "PostgreSQL-ге қосылу:",
                options: ["Postgre.connect()", "DB.connect()", "psycopg2.connect()", "pgsql.open()", "post.connect()"],
                correct: 2
            },
            {
                q: "Түйме-виджетті жасау:",
                options: ["QButton", "MakeButton()", "QPushButton()", "Qt.Btn()", "NewButton()"],
                correct: 2
            },
            {
                q: "Элементтерді вертикалды орналастыру:",
                options: ["QVBoxLayout()", "QVertical()", "VerticalLayout()", "LayoutV()", "BoxV()"],
                correct: 0
            },
            {
                q: "Түйме өлшемін өзгерту:",
                options: ["button.size()", "button.setSize()", "button.resize()", "button.changeSize()", "button.setDims()"],
                correct: 2
            },
            {
                q: "Пайдаланушыдан мәтіндік енгізу алу үшін қандай виджет қолданылады?",
                options: ["QUserInput()", "QLineEdit()", "QTextForm()", "QInput()", "QFormEdit()"],
                correct: 1
            },
            {
                q: "Терезені жасыру:",
                options: ["hideWindow()", "window.hide()", "window.invisible()", "conceal()", "window.remove()"],
                correct: 1
            },
            {
                q: "QLabel-де мәтін түсін орнату:",
                options: ["label.setTextColor()", "label.color()", "label.setStyleSheet()", "label.setFontColor()", "label.paintColor()"],
                correct: 2
            },
            {
                q: "Виджетті қайта сызатын әдіс?",
                options: ["reprint()", "repaint()", "redraw()", "drawagain()", "reset()"],
                correct: 1
            },
            {
                q: "Терезенің ағымдағы координаталарын алу:",
                options: ["window.getPosition()", "window.coords()", "window.position()", "window.pos()", "window.loc()"],
                correct: 3
            },
            {
                q: "Түйме стилін орнату:",
                options: ["button.setButtonStyle()", "button.style()", "button.setStyleSheet()", "button.setCSS()", "button.css()"],
                correct: 2
            },
            {
                q: "PyQt5-те қос рет шерту өңделетін әдіс?",
                options: ["mouseDoubleClickEvent", "doubleClickAction()", "mouseClickDbl()", "eventDouble()", "double()"],
                correct: 0
            },
            {
                q: "QComboBox-тың ағымдағы индексін алу:",
                options: ["combo.getIndex()", "combo.index()", "combo.currentIndex()", "combo.row()", "combo.get()"],
                correct: 2
            },
            {
                q: "Виджетті жою:",
                options: ["widget.remove()", "widget.deleteLater()", "widget.destroy()", "widget.clean()", "widget.kill()"],
                correct: 1
            },
            {
                q: "Терезе иконкасын орнату:",
                options: ["window.icon()", "window.loadIcon()", "window.setWindowIcon()", "window.useIcon()", "window.addIcon()"],
                correct: 2
            },
            {
                q: "Бағдарламаны аяқтау:",
                options: ["finish()", "complete()", "app.quit()", "end()", "exit.window()"],
                correct: 2
            }
        ],

        // --- 9-шы Нұсқа ---
        "variant9": [
             {
                q: "Логикалық тұрғыдан біріктірілген нұсқаулар тізбегі қалай аталады?",
                options: ["Модуль", "Оператор", "Функция", "Блок", "Объект"],
                correct: 2
            },
            {
                q: "3.14 мәні қай типке жатады?",
                options: ["int", "str", "float", "bool", "number"],
                correct: 2
            },
            {
                q: "«Қатаң тең емес» оператор?",
                options: ["~=", "===", "!", "!=", "not="],
                correct: 3
            },
            {
                q: "Жол тек әріптерден тұратынын тексеретін әдіс?",
                options: ["onlyletters()", "isalpha()", "letters()", "alpha()", "islet()"],
                correct: 1
            },
            {
                q: "Тізімнен индекс бойынша элементті өшіріп, оны қайтаратын әдіс?",
                options: ["delete()", "remove()", "pop()", "cut()", "take()"],
                correct: 2
            },
            {
                q: "Тізімді өзімен өзі конкатенациялау үшін қандай оператор қолданылады?",
                options: ["**", "++", "+", "merge", "join"],
                correct: 2
            },
            {
                q: "Қай дерек түрі өзгермейтін?",
                options: ["list", "dict", "tuple", "set", "array"],
                correct: 2
            },
            {
                q: "Қатыстылықты тексеретін оператор?",
                options: ["check", "have", "contain", "include", "in"],
                correct: 4
            },
            {
                q: "Қай цикл бастапқы шарт жалған болса, бір де бір рет орындалмайды?",
                options: ["for", "while", "until", "repeat", "loop"],
                correct: 0
            },
            {
                q: "Тізімнен мәнді іздеп, индексін қайтаратын әдіс?",
                options: ["check()", "find()", "index()", "locate()", "scan()"],
                correct: 2
            },
            {
                q: "lambda x: x-1 функциясы не істейді?",
                options: ["x-ті 1-ге арттырады", "x-ті 1-ге көбейтеді", "x-тен 1-ді азайтады", "x-ті бөледі", "x-ті дәрежеге шығарады"],
                correct: 2
            },
            {
                q: "Пауза мен кідірістермен жұмыс істейтін модуль?",
                options: ["datetime", "wait", "sleep", "time", "timer"],
                correct: 3
            },
            {
                q: "Бүкіл модульді импорттау үшін:",
                options: ["get module", "from module import all", "import module", "include module", "take module"],
                correct: 2
            },
            {
                q: "Файлды тек екілік оқу режимінде ашу:",
                options: ["'rb'", "'br'", "'r@b'", "'b'", "'r-b'"],
                correct: 0
            },
            {
                q: "Файлдан бір жолды оқу:",
                options: ["read()", "read1()", "readline()", "getline()", "row()"],
                correct: 2
            },
            {
                q: "Объектіні жолға айналдырғанда қай әдіс шақырылады?",
                options: ["str", "show", "print", "view", "info"],
                correct: 0
            },
            {
                q: "Python сөздігін JSON файлына қалай түрлендіреміз?",
                options: ["json.write()", "json.export()", "json.dump()", "json.save()", "json.push()"],
                correct: 2
            },
            {
                q: "pickle.load() не істейді?",
                options: ["Екілік объектіні файлдан жүктейді", "Екілік файл жасайды", "JSON-ды Python-ға түрлендіреді", "Файлды тазалайды", "Объектіні сериализациялайды"],
                correct: 0
            },
            {
                q: "CSV writer объектісін жасау:",
                options: ["csv.writer()", "csv.write()", "csv.writeline()", "csv.makewriter()", "csv.format()"],
                correct: 0
            },
            {
                q: "AND және OR шарттарымен жолдарды таңдау:",
                options: ["WHERE A AND B OR C", "FILTER A OR B AND C", "MATCH A AND B OR C", "SELECT CONDITION A B C", "ONLY WHERE A B C"],
                correct: 0
            },
            {
                q: "Орташа мәнді есептейтін функция?",
                options: ["MID()", "AVERAGE()", "AVG()", "MEAN()", "BAL()"],
                correct: 2
            },
            {
                q: "Мәні «A» әрпінен басталатын жолдарды таңдау:",
                options: ["WHERE name = 'A*'", "WHERE name START 'A'", "WHERE name LIKE 'A%'", "WHERE name MATCH 'A'", "WHERE name BEGIN 'A'"],
                correct: 2
            },
            {
                q: "FULL JOIN не істейді?",
                options: ["Тек сәйкес келетін жолдарды біріктіреді", "Тек бірегей жолдарды қайтарады", "Екі кестенің барлық жолдарын біріктіреді", "Тек жоқ жолдарды қайтарады", "Кесте жасайды"],
                correct: 2
            },
            {
                q: "NULL мәні бар жолдарды таңдау:",
                options: ["WHERE x = NULL", "WHERE x IS NULL", "WHERE x == NULL", "WHERE x EQUAL NULL", "WHERE NULL TRUE"],
                correct: 1
            },
            {
                q: "LIMIT операторы не істейді?",
                options: ["Баған форматтарын орнатады", "Жолдар санын шектейді", "Жолды жояды", "Кесте жасайды", "Бағандар қосады"],
                correct: 1
            },
            {
                q: "Python-да PostgreSQL-ге қосылу:",
                options: ["import post", "import psql", "psycopg2.connect()", "sqlpg.connect()", "pg.connect()"],
                correct: 2
            },
            {
                q: "Қарапайым виджетті жасау:",
                options: ["Widget()", "PyWidget()", "QForm()", "QWidget()", "QtWidget()"],
                correct: 3
            },
            {
                q: "Торлы (grid) layout жасау:",
                options: ["QGridLayout()", "QMatrix()", "QLayoutGrid()", "LayoutGrid()", "QGrid()"],
                correct: 0
            },
            {
                q: "Түйменің позициясын формада орнату:",
                options: ["button.loc()", "button.pos(x,y)", "button.move(x,y)", "button.translate(x,y)", "button.shift(x,y)"],
                correct: 2
            },
            {
                q: "Терезені толық экранға шығару:",
                options: ["window.expand()", "window.full()", "window.showFullScreen()", "window.screen()", "window.max()"],
                correct: 2
            },
            {
                q: "Терезе қаріпін орнату:",
                options: ["window.setFont()", "window.font()", "window.fontSize()", "window.editFont()", "window.setFontStyle()"],
                correct: 0
            },
            {
                q: "Түйме мәтінін өзгерту:",
                options: ["button.rename()", "button.setLabel()", "button.changeText()", "button.setText()", "button.text()"],
                correct: 3
            },
            {
                q: "QComboBox-та таңдалған элементтің мәтінін алу:",
                options: ["combo.read()", "combo.selected()", "combo.get()", "combo.currentText()", "combo.value()"],
                correct: 3
            },
            {
                q: "Виджетті жасыру:",
                options: ["hide()", "widget.hide()", "remove()", "widget.off()", "delete()"],
                correct: 1
            },
            {
                q: "Интерфейсті күштеп жаңарту:",
                options: ["redraw()", "repaint()", "reprint()", "restyle()", "rebuild()"],
                correct: 1
            },
            {
                q: "Терезені жылжыту әдісі?",
                options: ["window.setXY()", "move()", "window.position()", "window.go()", "window.translate()"],
                correct: 1
            },
            {
                q: "Терезе тақырыбын орнату:",
                options: ["window.name()", "window.setWindowTitle()", "window.setLabel()", "window.caption()", "window.rename()"],
                correct: 1
            },
            {
                q: "Хабарлама диалогын жасау:",
                options: ["QMessage()", "QMsgBox()", "QMessageBox()", "QBoxMessage()", "DialogMessage()"],
                correct: 2
            },
            {
                q: "Layout-ты дұрыс жою:",
                options: ["layout.kill()", "layout.drop()", "layout.deleteLater()", "layout.remove()", "layout.end()"],
                correct: 2
            },
            {
                q: "PyQt5 қосымшасын аяқтау:",
                options: ["shutdown()", "quit()", "app.quit()", "end()", "window.end()"],
                correct: 2
            }
        ]
    },

    // ==============================================
    // 🗄️ ПӘН: DATABASE (9 Нұсқа)
    // ==============================================
    "db": {

        // --- 1-ші Нұсқа ---
        "variant1": [
             {
                q: "Деректер базасын ең жақсы қалай сипаттауға болады?",
                options: ["Дискідегі байланыссыз файлдар жиынтығы", "Белгілі бір ережелер бойынша қолжетімді деректердің ұйымдасқан құрылымы", "Мәтіндерді өңдеу бағдарламасы", "Желi арқылы деректер тасымалдау жүйесі", "Басқаруы жоқ кездейсоқ кестелер жиыны"],
                correct: 1
            },
            {
                q: "Деректер базасының негізгі мақсаты қандай?",
                options: ["Құрылымдалған деректерді сақтау және басқару", "Құжаттарды басып шығару", "Құрылымсыз суреттерді архивтеу", "Тек математикалық есептеулер орындау", "ОЖ жұмысын жылдамдату"],
                correct: 0
            },
            {
                q: "Деректер базасындағы кесте деген не?",
                options: ["Операциялық жүйенің жеке файлы", "Деректер байланыстарының электрондық схемасы", "Деректерсіз тек бағандар тізімі", "Құрылымсыз тек жолдар тізімі", "Деректер сақталатын жолдар мен бағандардан тұратын құрылым"],
                correct: 4
            },
            {
                q: "Кестедегі жол қалай аталады?",
                options: ["Өріс", "Индекс", "Жазба", "Кілт", "Секция"],
                correct: 2
            },
            {
                q: "Кестедегі баған қалай аталады?",
                options: ["Өріс", "Индекс", "Жазба", "Байланыс", "Байланыс атрибуты"],
                correct: 0
            },
            {
                q: "Төмендегілердің қайсысы деректер базасының түрлері?",
                options: ["Кестелік және парақтық", "Реляциялық және құжаттық", "Есептік және графикалық", "Тек желілік және файлдық", "Жазық және құрылымдық"],
                correct: 1
            },
            {
                q: "Реляциялық деректер базасын не сипаттайды?",
                options: ["Деректер график түрінде сақталады", "Деректер арасында байланыс жоқ", "Тек бинарлық файлдар сақталады", "Деректер кестелер түрінде және олардың арасындағы қатынастармен сақталады", "Барлық деректер бір файлда"],
                correct: 3
            },
            {
                q: "Деректер базасының негізгі түсініктеріне не жатады?",
                options: ["Қапшық, терезе, принтер", "Тақырып, қаріп, стиль", "Кесте, жазба, өріс", "Блокнот, файл, себет", "Парақ, терезе, ұяшық"],
                correct: 2
            },
            {
                q: "МҚБЖ (СУБД) туралы дұрыс тұжырым?",
                options: ["Бұл тек деректер енгізуге арналған құрылғы", "Бұл суреттер сақтайтын құрал", ".db кеңейтілуі бар файл түрі", "Бұл тек бағдарламалау тілі", "Бұл деректер базаларын басқаруға арналған бағдарлама"],
                correct: 4
            },
            {
                q: "МҚБЖ қандай рөл атқарады?",
                options: ["Тек диаграммалар сызады", "Деректерді құруды, сақтауды және өңдеуді қамтамасыз етеді", "Тек есептерді басып шығарады", "Тек резервтік көшірмелер жасайды", "Тек пайдаланушыларды басқарады"],
                correct: 1
            },
            {
                q: "SQL деген не?",
                options: ["Операциялық жүйе", "Реляциялық дерекқорларға арналған құрылымдалған сұраныстар тілі", "Графикалық редактор", "Веб беттердің белгілеу тілі", "Кесте жасау бағдарламасы"],
                correct: 1
            },
            {
                q: "SQL әдетте қандай дерекқор түрімен қолданылады?",
                options: ["Реляциялық", "Файлдық", "Құжаттық", "Графтық", "Нейрондық"],
                correct: 0
            },
            {
                q: "NoSQL деректер базалары туралы дұрыс тұжырым?",
                options: ["Олар тек кестелер қолданады", "Тек офлайн жұмыс істейді", "Бұл SQL-дің ескірген нұсқасы", "Үлкен деректерге жарамайды", "Бұл деректермен икемді жұмыс істейтін нереляциялық жүйелер отбасы"],
                correct: 4
            },
            {
                q: "SQL мен NoSQL арасындағы негізгі айырмашылық?",
                options: ["SQL желісіз жұмыс істейді, NoSQL тек желіде", "SQL тек сандарды, NoSQL тек жолдарды сақтайды", "SQL — қатаң кестелер мен схемалар, NoSQL — икемді деректер модельдері", "Айырмашылық жоқ", "SQL жаңартуды қолдамайды"],
                correct: 2
            },
            {
                q: "Деректер базасының құрылымы нені сипаттайды?",
                options: ["Тек пайдаланушылар санын", "Оперативті жад көлемін", "Есептерді басып шығару форматын", "Кестелер жиынтығын, олардың өрістерін және байланыстарын", "Барлық пайдаланушылардың құқықтарын"],
                correct: 3
            },
            {
                q: "Қай команда жаңа деректер базасын жасайды?",
                options: ["NEW DATABASE", "MAKE DATABASE", "CREATE DATABASE", "ADD DATABASE", "BUILD DATABASE"],
                correct: 2
            },
            {
                q: "Қай команда жаңа кесте жасайды?",
                options: ["CREATE TABLE", "NEW TABLE", "INSERT TABLE", "BUILD TABLE", "MAKE TABLE"],
                correct: 0
            },
            {
                q: "Кесте жасау барысында не анықталады?",
                options: ["Тек қатынау режимі", "Кесте атауы, өріс атаулары және деректер типтері", "Тек пайдаланушылар", "Тек индекстер", "Тек байланыстар"],
                correct: 1
            },
            {
                q: "Деректер базасының құрылымын ең жақсы сипаттайтын жауап?",
                options: ["Кездейсоқ кестелер жиыны", "Логикалық түрде ұйымдасқан өзара байланысты кестелер жиыны", "Тек бір кесте", "Байланысы жоқ файлдар жиыны", "Құжаттары бар қапшықтар жиыны"],
                correct: 1
            },
            {
                q: "Өрістің деректер түрін не үшін көрсетеді?",
                options: ["Интерфейсті өзгерту үшін", "Сұрыптауды шектеу үшін", "Басып шығаруды жылдамдату үшін", "Пайдаланушылар санын шектеу үшін", "Рұқсат етілген мәндер мен операцияларды анықтау үшін"],
                correct: 4
            },
            {
                q: "INSERT не істейді?",
                options: ["Кесте жасайды", "Жаңа жолдар қосады", "Кестені жояды", "Бағандарды өзгертеді", "Деректерді сұрыптайды"],
                correct: 1
            },
            {
                q: "UPDATE командасы не істейді?",
                options: ["Деректерді таңдау", "Кесте жою", "Бар жазбаларды жаңарту", "Индекс жасау", "ДҚ тазалау"],
                correct: 2
            },
            {
                q: "DELETE не үшін қолданылады?",
                options: ["ДҚ жою", "Индекстер жою", "Бағандар жою", "Таңдалған жолдарды жою", "Схема жою"],
                correct: 3
            },
            {
                q: "SELECT не істейді?",
                options: ["ДҚ жасайды", "Деректерді таңдайды", "Деректерді жояды", "Құрылымды өзгертеді", "Кестені архивтейді"],
                correct: 1
            },
            {
                q: "Қай оператор жолдарды фильтрлейді?",
                options: ["WHERE", "ORDER BY", "GROUP BY", "LIMIT", "FILTER"],
                correct: 0
            },
            {
                q: "Қай оператор сұрыптау орнатады?",
                options: ["SELECT", "ORDER BY", "FILTER BY", "GROUP BY", "SET ORDER"],
                correct: 1
            },
            {
                q: "ORDER BY не үшін қолданылады?",
                options: ["Кестені таңдау", "Жолдарды жою", "Жолдарды сұрыптау", "Кестелерді біріктіру", "Индекс жасау"],
                correct: 2
            },
            {
                q: "Жолдар санын шектеу үшін не қолданылады?",
                options: ["LIMIT", "STOP", "END", "CUT", "SHORT"],
                correct: 0
            },
            {
                q: "SELECT * FROM table нені білдіреді?",
                options: ["Бір жолды таңдау", "Барлық деректер базаларын таңдау", "Кестені жою", "Кесте жасау", "Кестенің барлық бағандарын таңдау"],
                correct: 4
            },
            {
                q: "WHERE туралы не дұрыс?",
                options: ["Құрылымды анықтайды", "Шарт бойынша жолдарды таңдайды", "Тек сандар үшін қолданылады", "Тек жолдар үшін", "Тек алғашқы кілттер үшін"],
                correct: 1
            },
            {
                q: "Деректер базасын жобалауда объект деген не?",
                options: ["Физикалық сервер", "Индекс", "Пайдаланушы", "Пәндік облыс мәні (Объект)", "Сұраныс"],
                correct: 3
            },
            {
                q: "Атрибут деген не?",
                options: ["Байланыс", "Объектің қасиеті", "ДҚ атауы", "Пайдаланушылар жиыны", "Индекс атауы"],
                correct: 1
            },
            {
                q: "Байланыс (relationship) деген не?",
                options: ["Кез келген баған", "Объекттер арасындағы қатынас", "Өріс атауы", "Сұрыптау белгісі", "Пайдаланушы рөлі"],
                correct: 1
            },
            {
                q: "Байланыс кардиналдылығы деген не?",
                options: ["Объекттер арасындағы қатынастың экземплярлар саны бойынша түрі", "Кестедегі жолдар саны", "Бағандардың максимумы", "Пайдаланушылар максимумы", "Индекстер максимумы"],
                correct: 0
            },
            {
                q: "«Бірден көпке» байланысына мысал:",
                options: ["Бір студент — көп топ", "Бір ЖОО — бір студент", "Бір студент — бір құжат", "Көп студент — көп ЖОО", "Бір топ — көп студент"],
                correct: 4
            },
            {
                q: "ER-диаграмма нені сипаттайды?",
                options: ["Сервер баптауларын", "Тек пайдаланушылар құқықтарын", "Объектілерді, атрибуттарды және байланыстарды", "Тек индекстерді", "Интерфейс түсін"],
                correct: 2
            },
            {
                q: "Объекттер мен атрибуттар қай кезеңде анықталады?",
                options: ["Физикалық басып шығару", "Логикалық жобалау", "Резервтік көшіру", "МҚБЖ орнату", "Желіні баптау"],
                correct: 1
            },
            {
                q: "Логикалық жобалаудың мақсаты:",
                options: ["Кестелер және олардың байланыстары түріндегі деректер моделі", "Резервтік көшірме форматы", "Операциялық жүйені орнату", "Порттарды баптау", "Интерфейс шрифтін таңдау"],
                correct: 0
            },
            {
                q: "Нормализация не үшін қажет?",
                options: ["Басып шығаруды жылдамдату", "Кестелерді жою", "Индекс санын көбейту", "Деректерді шифрлау", "Артықтықты және аномалияларды азайту"],
                correct: 4
            },
            {
                q: "Реляциялық модель туралы не дұрыс?",
                options: ["Деректер — графиктер", "Деректер тек бір кестеде", "Байланыстар тек файлдар арқылы", "Кестелер байланыспайды", "Деректер — қатынас арқылы байланысқан кестелер"],
                correct: 4
            }
        ],

        // --- 2-ші Нұсқа ---
        "variant2": [
             {
                q: "Бастапқы кілт деген не?",
                options: ["Кез келген баған", "Жазбаның бірегей идентификаторы", "Құпиясөз", "ДҚ атауы", "Пайдаланушының аты"],
                correct: 1
            },
            {
                q: "Бастапқы кілттің басты қасиеті:",
                options: ["Мәндер қайталана алады", "Тек мәтін", "Барлық мәндер NULL", "Бірегейлік және NOT NULL", "Тек сандар"],
                correct: 3
            },
            {
                q: "Сыртқы кілт деген не?",
                options: ["Байланыссыз өріс", "Басқа кестенің PK-на сілтеме жасайтын өріс", "ДҚ атауы", "Пайдаланушының аты", "Сұрыптауға арналған өріс"],
                correct: 1
            },
            {
                q: "Сыртқы кілт не үшін қолданылады?",
                options: ["Есептерді басып шығару", "Сұрыптау", "Сілтемелік тұтастық", "Шифрлау", "Индекстерді жою"],
                correct: 2
            },
            {
                q: "Индекс деген не?",
                options: ["Сервер есебі", "Пайдаланушы аты", "Іздеуді жеделдететін құрылым", "Архив", "ДҚ ішіндегі бума"],
                correct: 2
            },
            {
                q: "Индекс өнімділікке қалай әсер етеді?",
                options: ["Әрқашан оқуды баяулатады", "Іздеуді жылдамдатады, жазуды баяулатады", "Әсер етпейді", "Қоюды жылдамдатады", "Жоюды жылдамдатады"],
                correct: 1
            },
            {
                q: "Бастапқы кілт қалай көрсетіледі?",
                options: ["PRIMARY KEY", "MAIN KEY", "CREATE INDEX", "CREATE PK", "ROOT KEY"],
                correct: 0
            },
            {
                q: "Сыртқы кілт қалай көрсетіледі?",
                options: ["FOREIGN KEY ... REFERENCES ...", "ONLY KEY", "MAIN FOREIGN", "PRIMARY FOREIGN", "OUTER KEY"],
                correct: 0
            },
            {
                q: "Сілтемелік тұтастық нені қамтамасыз етеді?",
                options: ["Кез келген мәліметті жою", "Байланысты кестелердің үйлесімділігін", "Жылдам көшіру", "Сұрыптау", "Пайдаланушылар бойынша бөлу"],
                correct: 1
            },
            {
                q: "Индекс туралы дұрыс тұжырым:",
                options: ["Әрқашан автоматты түрде құрылады", "Тек PK үшін жасалады", "Кесте атауы", "Іздеуге тыйым салады", "Бір немесе бірнеше бағанға жасалуы мүмкін"],
                correct: 4
            },
            {
                q: "SELECT командасының мақсаты:",
                options: ["Мәліметтерді таңдау", "Кесте құру", "Кестені жою", "Индекс құру", "Мәндерді тастау"],
                correct: 0
            },
            {
                q: "WHERE тәжірибеде не үшін керек?",
                options: ["Құрылымды сипаттау", "Жолдарды фильтрациялау", "ДҚ құру", "Индекстерді жою", "Есеп қалыптастыру"],
                correct: 1
            },
            {
                q: "Сұрыптау операторы:",
                options: ["SORT", "ORDER BY", "GROUP", "FILTER", "SORT BY"],
                correct: 1
            },
            {
                q: "Кему ретімен сұрыптауды қалай көрсету керек?",
                options: ["ORDER BY field UP", "ORDER BY field DESC", "ORDER BY field MINUS", "ORDER BY field DOWN", "ORDER BY field NEG"],
                correct: 1
            },
            {
                q: "INSERT не істейді?",
                options: ["Жолды жояды", "Пайдаланушы жасайды", "Құрылымды өзгертеді", "ДҚ жасайды", "Жазба қосады"],
                correct: 4
            },
            {
                q: "UPDATE не үшін қолданылады?",
                options: ["Сұрыптау", "Индекс қосу", "Кесте құру", "ДҚ жою", "Мәндерді өзгерту"],
                correct: 4
            },
            {
                q: "DELETE не істейді?",
                options: ["Таңдалған жолдарды жояды", "Бағандарды жояды", "Бүкіл ДҚ-ны жояды", "Мәлімет типін өзгертеді", "Кілттерді тастайды"],
                correct: 0
            },
            {
                q: "Реляциялық модель туралы не дұрыс?",
                options: ["Кілттер жоқ", "Кестелер кілттер арқылы байланысады", "Барлық мәлімет бір жолда", "Байланыстар тек мәтіндік сипаттамада", "Кестелер байланыссыз"],
                correct: 1
            },
            {
                q: "“Күрделі сұраныстар” нені білдіреді?",
                options: ["Бір кесте", "Бірнеше оператор мен кестені бірге қолдану", "Шартсыз сұраныстар", "Тек DELETE", "Тек UPDATE"],
                correct: 1
            },
            {
                q: "Күрделі сұраныстар құрамына жиі не кіреді?",
                options: ["PRINT, EXIT", "SELECT, WHERE, JOIN, ORDER BY", "CREATE, DROP", "BACKUP, RESTORE", "IMPORT, EXPORT"],
                correct: 1
            },
            {
                q: "ER-диаграммалардың мақсаты:",
                options: ["Декор үшін", "Есептер жасау", "Физикалық модельді алмастыру", "Серверді баптау", "ДҚ құрылымын визуалды көрсету"],
                correct: 4
            },
            {
                q: "Сапалы логикалық жобалаудың нәтижесі:",
                options: ["Байланыссыз кестелер", "Нормаланған кестелер және дұрыс байланыстар", "Пайдаланушылар тізімі", "Есептер жинағы", "Тек индекстер"],
                correct: 1
            },
            {
                q: "Мәліметтер типі туралы не дұрыс?",
                options: ["Қате тип қателер тудырады", "Міндетті емес", "Өнімділікке әсер етпейді", "Тек кілттерге қажет", "Тек SQL-да қолданылады"],
                correct: 0
            },
            {
                q: "CREATE TABLE не істейді?",
                options: ["Кестені өрістер және атрибуттарымен бірге құрады", "Кестені жояды", "Жолдарды жаңартады", "Жолдарды сұрыптайды", "Есеп құрады"],
                correct: 0
            },
            {
                q: "PK қалай көрсетіледі?",
                options: ["column MAIN KEY", "column PRIMARY KEY", "column ONLY KEY", "column UNIQUE ONLY", "column FIRST KEY"],
                correct: 1
            },
            {
                q: "Сыртқы кілт қалай көрсетіледі?",
                options: ["FOREIGN KEY (field) REFERENCES table(field)", "OUT KEY", "EXTERNAL KEY", "LINK KEY", "CHILD KEY"],
                correct: 0
            },
            {
                q: "Кестелер арасындағы индекстер не береді?",
                options: ["Қолжетімділікті азайтады", "Іздеуді және қосылуларды жеделдетеді", "Жаңартуға тыйым салады", "Байланыстарды өшіреді", "Мәлімет типін өзгертеді"],
                correct: 1
            },
            {
                q: "ДҚ құрылымын неге түсіну қажет?",
                options: ["Жазбаларды санау үшін", "Резервтік көшірмені жеңілдету үшін", "Тексерулерді өшіру үшін", "Байланыстарды сауатты жобалау үшін", "Индекс қосу үшін"],
                correct: 3
            },
            {
                q: "МҚБЖ-ның рөлі:",
                options: ["Тек файл сақтайды", "Мәліметтерді, қолжетімділікті және тұтастықты басқарады", "Тек есептер басып шығарады", "Қауіпсіздікке әсер етпейді", "Тек кестелер жасайды"],
                correct: 1
            },
            {
                q: "Студент неге «кесте–жазба–өріс» ұғымын түсінуі керек?",
                options: ["Стандартсыз белгілер қолдану үшін", "ДҚ өлшемін азайту үшін", "Құжаттаманы алмастыру үшін", "Желі жылдамдату үшін", "Мәлімет құрылымын дұрыс модельдеу үшін"],
                correct: 4
            },
            {
                q: "ДҚ схемасы деген не?",
                options: ["Пайдаланушы интерфейсі", "Жадыдағы физикалық орналасуы", "Кестелер, өрістер және байланыстардың құрылымдық сипаттамасы", "Барлық SQL-сұраныстар тізімі", "Терезе интерфейсінің графикалық көрінісі"],
                correct: 2
            },
            {
                q: "Бірегей индекс деген не?",
                options: ["Жаңартуға тыйым салатын индекс", "Қайталанатын мәндерді сақтай алатын индекс", "Бағанда мәндердің бірегейлігін қамтамасыз ететін индекс", "Тек сыртқы кілттерге жасалады", "Тек сұрыптауды жеделдетеді"],
                correct: 2
            },
            {
                q: "Қай кілт түрі әр жолдың бірегейлігін қамтамасыз етеді?",
                options: ["Secondary key", "Foreign key", "Composite index", "Primary key", "Logical key"],
                correct: 3
            },
            {
                q: "FOREIGN KEY не үшін қажет?",
                options: ["Кестелер арасындағы сілтемелік тұтастық үшін", "Сұрыптауды жеделдету үшін", "Уақытша мәліметтерді сақтау үшін", "Есептерді автоматты жасау үшін", "Дубликаттарды жою үшін"],
                correct: 0
            },
            {
                q: "Қандай мәлімет түрі күндерді сақтауға жарайды?",
                options: ["VARCHAR", "BOOLEAN", "DATE", "CHAR", "TIMEONLY"],
                correct: 2
            },
            {
                q: "SQL оператор LIMIT не істейді?",
                options: ["Кесте өлшемін шектейді", "Белгілі жолдарды жояды", "Баған санын шектейді", "Пайдаланушылар қолжетімділігін шектейді", "Қайтарып берілетін жолдар санын шектейді"],
                correct: 4
            },
            {
                q: "«1-ден көпке» кардиналдылығы нені білдіреді?",
                options: ["Бір кестеде бір ғана жазба бар", "Әр жазба бір ғана жазбамен байланысады", "Кестелер байланыссыз", "Бір жазба басқа кестенің бірнеше жазбасымен байланысады", "Жазбалар циклмен байланысқан"],
                correct: 3
            },
            {
                q: "SQL ORDER BY не істейді?",
                options: ["Мәліметтерді топтастырады", "Сұрыптайды", "Мәліметтерді жояды", "Сыртқы кілттер жасайды", "Мәлімет типтерін тексереді"],
                correct: 1
            },
            {
                q: "Мәтіндік мәндер сақтау үшін қандай тип қолданылады?",
                options: ["INT", "CHAR/VARCHAR", "FLOAT", "BOOLEAN", "BLOB"],
                correct: 1
            },
            {
                q: "Төмендегілердің қайсысы NoSQL дерекқоры?",
                options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "MariaDB"],
                correct: 2
            }
        ],

        // --- 3-ші Нұсқа ---
        "variant3": [
             {
                q: "Кестеге жол қосуға арналған SQL операторы:",
                options: ["PUSH", "INSERT INTO", "ADD ROW", "WRITE", "ROW CREATE"],
                correct: 1
            },
            {
                q: "ER-диаграмма деген не?",
                options: ["Сервер жүктемесі диаграммасы", "Жады қолдану графигі", "Нысандар, атрибуттар және байланыстар моделі", "Қолданба құрылымының сызбасы", "Транзакциялар жоспары"],
                correct: 2
            },
            {
                q: "ER-диаграммада нысан қандай элементпен белгіленеді?",
                options: ["Эллипс", "Ромб", "Үшбұрыш", "Тіктөртбұрыш", "Байланыс сызығы"],
                correct: 3
            },
            {
                q: "Кестеден жазба жоюға арналған оператор:",
                options: ["REMOVE", "DROP", "ERASE", "DELETE", "CLEAR"],
                correct: 3
            },
            {
                q: "DROP TABLE не істейді?",
                options: ["Барлық жолдарды жояды, бірақ кестені қалдырады", "Тек индекстерді жояды", "Кестені толық жояды", "Кестені тазартады, құрылымын қалдырады", "Тек байланыстарды жояды"],
                correct: 2
            },
            {
                q: "ДҚ-да индекс деген не?",
                options: ["Мәлімет іздеуді жеделдететін құрылым", "Резервтік көшірме тәсілі", "Кестенің графикалық көрінісі", "Қолжетімділік бақылау жүйесі", "Қателер кестесі"],
                correct: 0
            },
            {
                q: "ER-диаграммада «атрибут» деген не?",
                options: ["Кестелер арасындағы байланыс түрі", "Нысанның қасиеті", "Бірегей кілт", "Алғашқы жазба", "Мәлімет түріне шектеу"],
                correct: 1
            },
            {
                q: "DML-командалар деген не?",
                options: ["ДҚ құрылымын құру командалары", "Пайдаланушыларды басқару командалары", "Мәліметтермен жұмыс командалары (INSERT, UPDATE, DELETE)", "Сервер баптау командалары", "Резервтік көшіру командалары"],
                correct: 2
            },
            {
                q: "SQL DISTINCT нені білдіреді?",
                options: ["Мәліметтерді сұрыптау", "Шарт бойынша фильтрация", "Кесте құрылымын өзгерту", "Кестелерді біріктіру", "Тек бірегей мәндерді таңдау"],
                correct: 4
            },
            {
                q: "ДҚ нормализациясы деген не?",
                options: ["Кестелерді біріктіру", "Қосымша индекстер құру", "Артық мәліметті жою процесі", "Жаңа мәлімет типтерін қосу", "ДҚ-ны басқа серверге көшіру"],
                correct: 2
            },
            {
                q: "Агрегаттық функция не істейді?",
                options: ["Кестені өзгертеді", "Жолдар жиынымен есептеулер орындайды", "Индекс жасайды", "Жолдарды жояды", "Мәтінді JSON-ға түрлендіреді"],
                correct: 1
            },
            {
                q: "Қай функция мәндердің қосындысын есептейді?",
                options: ["AVG", "COUNT", "SUM", "MIN", "TOTAL"],
                correct: 2
            },
            {
                q: "Қай функция максималды және минималды мәнді қайтарады?",
                options: ["MIN, MAX", "MAX, SUM", "МИНИМУМ, МАКСИМУМ", "AVG, SUM", "HIGH, LOW"],
                correct: 0
            },
            {
                q: "Жолдар санын есептейтін функция:",
                options: ["COUNT", "SUM", "MIN", "AVG", "NUMBER"],
                correct: 0
            },
            {
                q: "Жолдарды топтастыру операторы:",
                options: ["ORDER BY", "GROUP BY", "LIMIT", "WHERE", "GROUPING"],
                correct: 1
            },
            {
                q: "Топтарды фильтрациялау үшін:",
                options: ["WHERE", "HAVING", "ORDER BY", "LIMIT", "FILTER GROUP"],
                correct: 1
            },
            {
                q: "SELECT ішінде GROUP BY-ға кірмейтін баған болса не болады?",
                options: ["SQL өзі топтастырады", "Елемейді", "NULL болады", "Қате", "Автоматты түрде агрегаттық болады"],
                correct: 3
            },
            {
                q: "Орташа мәнді есептейтін функция:",
                options: ["SUM", "COUNT", "AVG", "MIN", "MEAN"],
                correct: 2
            },
            {
                q: "Терезелік функция агрегаттық функциядан несімен ерекшеленеді?",
                options: ["Жолдарды жояды", "Тек GROUP BY талап етеді", "Мәлімет түрін өзгертеді", "Жолдарды бір жолға біріктірмейді", "Тек мәтінмен жұмыс істейді"],
                correct: 3
            },
            {
                q: "OVER() не істейді?",
                options: ["Кестені сұрыптайды", "Есептеу үшін терезе анықтайды", "Жолдарды фильтрлейді", "Дубликаттарды жояды", "Жаңа кесте жасайды"],
                correct: 1
            },
            {
                q: "OVER() ішіндегі PARTITION BY … нені білдіреді?",
                options: ["Фильтрация", "Сұрыптау", "Уақытша кесте жасау", "Терезені топтарға бөлу", "Бағандарды жою"],
                correct: 3
            },
            {
                q: "Қай оператор терезелік болып табылады?",
                options: ["SUM(sales) OVER()", "SELECT OVER()", "LIMIT OVER()", "DELETE OVER()", "WINDOW SUM()"],
                correct: 0
            },
            {
                q: "ROW_NUMBER() OVER() не істейді?",
                options: ["Мәндерді қосады", "Жолдарды нөмірлейді", "Жолдарды фильтрлейді", "NULL-дарды жояды", "Индекс жасайды"],
                correct: 1
            },
            {
                q: "OVER() ішіндегі ORDER BY не істейді?",
                options: ["Фильтрлейді", "Топтастырады", "Терезе ішіндегі ретті анықтайды", "Дубликаттарды жояды", "Мәндерді нөлдейді"],
                correct: 2
            },
            {
                q: "SUM(value) OVER() не қайтарады?",
                options: ["Орташа", "Әр жол үшін жалпы қосынды", "Минимум", "NULL", "Жолдар арасындағы айырмашылық"],
                correct: 1
            },
            {
                q: "PARTITION BY жоқ болса, терезе:",
                options: ["Барлық жолдар үшін ортақ", "Қате", "Нөлдік", "Жергілікті", "Кездейсоқ"],
                correct: 0
            },
            {
                q: "INNER JOIN не істейді?",
                options: ["Екі кестенің барлық жолдарын қайтарады", "Сәйкес келетін жолдарды қайтарады", "Тек сол жақ кестені", "Тек оң жақ кестені", "Жолдарды көбейтеді"],
                correct: 1
            },
            {
                q: "LEFT JOIN қайтарады:",
                options: ["Тек сәйкес келетіндерді", "Барлық оң жақ жолдарды", "Сол жақ кестенің барлық жолдары сәйкес келетіндер", "Декарттық көбейтінді", "Сәйкес келмейтіндерді ғана"],
                correct: 2
            },
            {
                q: "FULL JOIN қайтарады:",
                options: ["Тек сәйкес келетіндер", "Тек сол жақ", "Тек оң жақ", "Екі кестенің барлық жолдары", "Тек NULL мәндері"],
                correct: 3
            },
            {
                q: "CROSS JOIN не істейді?",
                options: ["Кілт бойынша байланыстырады", "Дубликаттарды жояды", "Декарттық көбейтінді жасайды", "Фильтрация жасайды", "Сұрыптайды"],
                correct: 2
            },
            {
                q: "NATURAL JOIN не бойынша біріктіреді?",
                options: ["Атауы бірдей бағандар бойынша", "Тек бастапқы кілт арқылы", "Тек мәтіндік бағандар", "Тек сандық бағандар", "Бірінші кездескен баған бойынша"],
                correct: 0
            },
            {
                q: "SELF JOIN — бұл:",
                options: ["Екі түрлі кестені біріктіру", "Кестенің өзімен өзі бірігуі", "Төменгі сұраныс", "Уақытша кесте", "Сыртқы ДҚ-мен біріктіру"],
                correct: 1
            },
            {
                q: "JOIN үшін қандай оператор қажет?",
                options: ["ON немесе USING", "HAVING", "GROUP BY", "LIMIT", "ORDER BY"],
                correct: 0
            },
            {
                q: "RIGHT JOIN қайтарады:",
                options: ["Тек сәйкес келетіндер", "Тек сол жақ", "Оң жақтың барлық жолдары + сол жақтағы сәйкес келетіндер", "Барлық жолдар", "Тек сәйкес келмейтіндер"],
                correct: 2
            },
            {
                q: "Ең жиі қолданылатын JOIN:",
                options: ["FULL", "CROSS", "NATURAL", "INNER", "RIGHT"],
                correct: 3
            },
            {
                q: "JOIN арқылы екіден көп кестені біріктіруге бола ма?",
                options: ["Иә", "Жоқ", "Тек ішкі сұраныспен", "Тек NATURAL JOIN", "Тек SELECT * ішінде"],
                correct: 0
            },
            {
                q: "Ішкі сұраныс деген не?",
                options: ["JOIN түрі", "Басқа сұраныстың ішіндегі сұраныс", "Шектеу", "Функция", "Индекс"],
                correct: 1
            },
            {
                q: "Коррелирленген ішкі сұраныс деген:",
                options: ["Тәуелсіз", "Сыртқы жолға тәуелді", "Тек SELECT-та", "Тек HAVING-де", "Тек JOIN-да"],
                correct: 1
            },
            {
                q: "WHERE ішінде ішкі сұраныспен жиі қолданылатын оператор:",
                options: ["IN", "LIMIT", "JOIN", "TOP", "NEXT"],
                correct: 0
            },
            {
                q: "EXISTS не тексереді?",
                options: ["Мәлімет түрін", "Ішкі сұраныста кем дегенде бір жолдың бар-жоғын", "Бірегейлікті", "Байланыстарды", "Кесте өлшемін"],
                correct: 1
            }
        ],

        // --- 4-ші Нұсқа ---
        "variant4": [
             {
                q: "COUNT(*) функциясы не қайтарады?",
                options: ["Нөлге тең емес мәндердің саны", "Жолдар саны", "Бірегей мәндердің саны", "Бағандар саны", "Кестелер саны"],
                correct: 1
            },
            {
                q: "SQL-де GROUP BY операторы не істейді?",
                options: ["Жолдарды сұрыптайды", "Жолдарды шарт бойынша біріктіреді", "Агрегаттық есептеу үшін жолдарды топтарға бөледі", "Шарт бойынша сүзгіден өткізеді", "Қайталанатын жолдарды өшіреді"],
                correct: 2
            },
            {
                q: "Қай функция бірегей мәндердің санын қайтарады?",
                options: ["COUNT", "COUNT(DISTINCT col)", "UNIQUE", "MIN", "GROUP_COUNT"],
                correct: 1
            },
            {
                q: "MAX() агрегаттық функциясы не істейді?",
                options: ["Ең кіші мәнді табады", "Сомасын табады", "Ең үлкен мәнді табады", "Орташа мәнді табады", "NULL мәнін табады"],
                correct: 2
            },
            {
                q: "Неге SELECT-те агрегаттық емес бағанды GROUP BY-сыз қолдануға болмайды?",
                options: ["SQL ондайды өңдей алмайды", "Нәтижеде екіұштылық (двусмысленность) пайда болады", "Сұраным өте баяу орындалады", "Мәндер NULL-ға айналады", "Кесте блокталады"],
                correct: 1
            },
            {
                q: "HAVING не үшін қолданылады?",
                options: ["Сұрыптау үшін", "Жолдарды сүзгілеу үшін", "Топтарды сүзгілеу үшін", "Бағандарды жою үшін", "Индекстер құру үшін"],
                correct: 2
            },
            {
                q: "AVG() OVER() не қайтарады?",
                options: ["Бүкіл кесте бойынша орташа мән", "Жолдарды біріктірмей орташа мән", "Жолдардың санын", "Топ бойынша максимум", "Сұрыптау функциясын"],
                correct: 1
            },
            {
                q: "Егер PARTITION BY да, ORDER BY да көрсетілмесе, қандай терезе (window) қолданылады?",
                options: ["Ешқандай", "Кездейсоқ", "Барлық жолдар жиыны", "Тек бірінші жол", "Тек соңғы жол"],
                correct: 2
            },
            {
                q: "SUM(value) OVER(PARTITION BY category) терезелік функциясы не істейді?",
                options: ["Бүкіл кесте бойынша соманы қайтарады", "Алдыңғы жолдың сомасын қайтарады", "Әр санат (category) бойынша соманы есептейді", "Бірегей мәндердің сомасын есептейді", "Басқа кестемен JOIN жасайды"],
                correct: 2
            },
            {
                q: "RANK() функциясы ROW_NUMBER() функциясынан несімен ерекшеленеді?",
                options: ["Бірдей мәндер болғанда реттілікте орындарды өткізіп жібереді", "Тек жолдарды сұрыптайды", "Дубликаттарды өшіреді", "Топтарды біріктіреді", "Сұрыптауды жылдамдатады"],
                correct: 0
            },
            {
                q: "DENSE_RANK() не істейді?",
                options: ["Рангтарды (дәрежелерді) жіберіп алмай, жолдарды нөмірлейді", "Әрқашан 1 қайтарады", "Жолдарды өшіреді", "Топтар жасайды", "Деректерді біріктіреді"],
                correct: 0
            },
            {
                q: "Қай JOIN тек сәйкес келетін жолдарды қайтарады?",
                options: ["RIGHT JOIN", "LEFT JOIN", "FULL JOIN", "INNER JOIN", "CROSS JOIN"],
                correct: 3
            },
            {
                q: "FULL OUTER JOIN не істейді?",
                options: ["Кілт бойынша тек сәйкес келетіндерін біріктіреді", "Тек сәйкес келмейтін жолдарды қайтарады", "Екі кестенің барлық жолдарын қайтарады", "Тек сол жақ кестені қайтарады", "Тек оң жақ кестені қайтарады"],
                correct: 2
            },
            {
                q: "CROSS JOIN не үшін қолданылады?",
                options: ["Кілттер бойынша біріктіру үшін", "Дубликаттарды өшіру үшін", "Декарттық көбейтінді (Cartesian product) алу үшін", "Сүзгілеу үшін", "Индексация үшін"],
                correct: 2
            },
            {
                q: "Қай JOIN кестені өз-өзімен біріктіреді?",
                options: ["NATURAL JOIN", "SELF JOIN", "RIGHT JOIN", "CROSS JOIN", "UNION JOIN"],
                correct: 1
            },
            {
                q: "NATURAL JOIN мынаған сүйенеді:",
                options: ["Атауы бірдей бағандарға", "Біріншілік кілттерге", "Тек сандық өрістерге", "Тек мәтіндік өрістерге", "Кездейсоқ өріске"],
                correct: 0
            },
            {
                q: "USING ON-ның орнына не істейді?",
                options: ["Бағанды өшіреді", "Бірдей атаулы бағандар бойынша кестелерді біріктіреді", "Индекс жасайды", "Жолдарды сүзеді", "Жолдарды сұрыптайды"],
                correct: 1
            },
            {
                q: "SELECT ішіндегі ішкі сұраным (подзапрос) не істейді?",
                options: ["Жаңа кесте жасайды", "Әр жол үшін мән қайтарады", "Кестенің құрылымын өзгертеді", "Жолдарды өшіреді", "Деректер типтерін түрлендіреді"],
                correct: 1
            },
            {
                q: "Коррелирленген подзапрос деген не?",
                options: ["Негізгі кестемен байланысы жоқ подзапрос", "Сыртқы сұранымның ағымдағы жолына тәуелді подзапрос", "Тек HAVING ішінде болатын подзапрос", "Тек SELECT ішінде", "Тек JOIN ішінде"],
                correct: 1
            },
            {
                q: "WHERE ішіндегі подзапроспен жиі қай оператор қолданылады?",
                options: ["INTO", "LIKE", "IN", "DROP", "JOIN"],
                correct: 2
            },
            {
                q: "EXISTS не істейді?",
                options: ["Деректер типін тексереді", "Ең аз дегенде бір жолдың бар-жоғын тексереді", "Жолдарды санайды", "Кестелерді біріктіреді", "NULL мәндерді өшіреді"],
                correct: 1
            },
            {
                q: "ANY не істейді?",
                options: ["Шарт подзапростың кез келген мәні үшін орындалса, TRUE қайтарады", "Соманы қайтарады", "JOIN орындайды", "Мәндерді өшіреді", "NULL-дарды сүзеді"],
                correct: 0
            },
            {
                q: "ALL не істейді?",
                options: ["Мәнді подзапростың әр мәнімен салыстырады", "Жолдарды өшіреді", "Кестелерді біріктіреді", "Жолдарды санайды", "Максимумды табады"],
                correct: 0
            },
            {
                q: "FROM ішінде подзапрос қолдануға бола ма?",
                options: ["Иә", "Жоқ", "Тек PostgreSQL-де", "Тек JOIN-пен", "Тек агрегаттармен"],
                correct: 0
            },
            {
                q: "UNION не істейді?",
                options: ["Дубликаттарды өшірмей жолдарды біріктіреді", "Жолдарды біріктіріп, дубликаттарды өшіреді", "Сұрыптау жасайды", "Сүзгілеу жасайды", "JOIN орындайды"],
                correct: 1
            },
            {
                q: "UNION ALL не істейді?",
                options: ["Дубликаттарды өшіреді", "Жолдарды біріктіріп, дубликаттарды сақтап қояды", "Жолдарды сұрыптайды", "Жолдарды сүзгіден өткізеді", "Деректер типін өзгертеді"],
                correct: 1
            },
            {
                q: "INTERSECT не қайтарады?",
                options: ["Екі жиыннан бірегей жолдарды", "Екі сұранымның ортақ жолдарын", "Декарттық көбейтінді", "NULL бар жолдарды", "Бірінші кестені"],
                correct: 1
            },
            {
                q: "EXCEPT не қайтарады?",
                options: ["Барлық жолдарды", "Бірінші жиында бар, бірақ екіншісінде жоқ жолдарды", "Екінші жиынның жолдарын", "Декарттық көбейтінді", "Дубликаттарды"],
                correct: 1
            },
            {
                q: "CTE (WITH) деген не?",
                options: ["Сұранымның уақытша нәтижесі", "Баған", "Индекс", "JOIN", "Шарт"],
                correct: 0
            },
            {
                q: "Оконная рамка ROWS BETWEEN 1 PRECEDING AND CURRENT ROW не істейді?",
                options: ["Тек ағымдағы жолды есептейді", "Алдыңғы және ағымдағы жолды есептейді", "Барлық жолдарды есептейді", "Келесі бөлік (partition) жолдарын есептейді", "Тек NULL-дарды есептейді"],
                correct: 1
            },
            {
                q: "LAG() не істейді?",
                options: ["Келесі мәнді қайтарады", "Алдыңғы мәнді қайтарады", "Соманы қайтарады", "Жолдарды өшіреді", "Топтарды біріктіреді"],
                correct: 1
            },
            {
                q: "LEAD() не істейді?",
                options: ["Алдыңғы мәнді қайтарады", "Келесі мәнді қайтарады", "Максимумды қайтарады", "Дубликаттарды өшіреді", "Деректерді түрлендіреді"],
                correct: 1
            },
            {
                q: "STRING_AGG() агрегаттық функциясы не істейді?",
                options: ["Сандарды қосады", "Жолдарды бір мәтінге біріктіреді", "Бос орындарды өшіреді", "Жолдарды сұрыптайды", "NULL қайтарады"],
                correct: 1
            },
            {
                q: "Қай функция жинақтаушы (накопительный) соманы алуға мүмкіндік береді?",
                options: ["SUM()", "SUM() OVER(ORDER BY col)", "COUNT()", "MIN()", "SUM(DISTINCT)"],
                correct: 1
            },
            {
                q: "Қай JOIN әр кестедегі жолдар санынан да көп жол қайтара алады?",
                options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "CROSS JOIN"],
                correct: 4
            },
            {
                q: "SELF JOIN не істейді?",
                options: ["Кестені бөледі", "Кестені өз-өзімен біріктіреді", "Жолдарды өшіреді", "Сұрыптау орындайды", "Агрегаттық есептеу жасайды"],
                correct: 1
            },
            {
                q: "USING(a, b) не істейді?",
                options: ["Екі бірдей аталған баған бойынша кестелерді біріктіреді", "Деректерді сұрыптайды", "NULL-ды өшіреді", "Ішкі сұрау жасайды", "Жолдарды біріктіреді"],
                correct: 0
            },
            {
                q: "HAVING ішіндегі подзапрос не істейді?",
                options: ["Топтар ішіндегі жолдарды сүзеді", "Деректерді сұрыптайды", "Жаңа кесте жасайды", "Дубликаттарды өшіреді", "Индекстер жасайды"],
                correct: 0
            },
            {
                q: "Қай сұраным бөлім бойынша орташа жалақыдан жоғары жалақы алатын қызметкерлерді қайтарады?",
                options: ["salary > AVG(salary)", "salary > (SELECT AVG(salary) FROM employees GROUP BY dept)", "salary > ALL employees", "salary > SUM(salary)", "salary > MIN(salary)"],
                correct: 1
            },
            {
                q: "COUNT() OVER(PARTITION BY dept) терезелік функциясы не істейді?",
                options: ["Барлық қызметкерлердің санын есептейді", "Әр бөлімдегі қызметкерлер санын есептейді", "Тек бірегей қызметкерлерді санайды", "Тек NULL-дарды санайды", "Бөлімдерді біріктіреді"],
                correct: 1
            }
        ],

        // --- 5-ші Нұсқа ---
        "variant5": [
             {
                q: "ANY — бұл:",
                options: ["Подзапростың кез келген мәнімен салыстыру", "Шектеу", "Функция", "JOIN түрі", "Сұрыптау түрі"],
                correct: 0
            },
            {
                q: "Оконный AVG() бар сұраным не қайтарады?",
                options: ["Бүкіл бөлім бойынша орташа жалақы", "Барлық қызметкерлер бойынша орташа жалақы", "Бөлім ішінде, жұмысқа қабылдану күні бойынша сұрыпталған жинақталған орташа жалақы", "Ішкі сұраудан алынған орташа жалақы", "Ең төменгі жалақы"],
                correct: 2
            },
            {
                q: "UNION ALL:",
                options: ["Дубликаттарды өшірмей біріктіреді", "Дубликаттарды өшіреді", "Тек бірегей жолдарды біріктіреді", "Ішкі сұрау жасайды", "Қайталануларға тыйым салады"],
                correct: 0
            },
            {
                q: "ALL бар сұранымның нәтижесі:",
                options: ["Барлық бөлімдердің қызметкерлері", "Ең төмен жалақысы бар қызметкерлер", "3-бөлімнің қызметкерлері", "Жалақысы бөлім қызметкерлерінің барлық жалақысынан жоғары қызметкерлер", "Бірдей жалақысы бар қызметкерлер"],
                correct: 3
            },
            {
                q: "UNION бар сұранымның нәтижесі:",
                options: ["Тек VIP-клиенттердің қалалары", "Тек қоймалар арасында жоқ қалалар", "VIP-клиенттердің қалалары + қоймалар тізімінде жоқ қалалар", "Клиенттер мен қоймалар арасындағы ортақ қалалар", "Тек қоймалар қалалары"],
                correct: 2
            },
            {
                q: "INTERSECT не қайтарады?",
                options: ["Барлық жолдарды", "Екі жиынның ортақ жолдарын", "Декартова көбейтінді", "NULL", "Тек бірінші жолдарды"],
                correct: 1
            },
            {
                q: "EXCEPT не орындайды?",
                options: ["Біріктіруді", "Қиылысуды", "Екінші жиынды бірінші жиыннан алуды (айырып тастайды)", "Сұрыптауды", "Көбейту (дублирование)"],
                correct: 2
            },
            {
                q: "UNION-дағы сұранымдарға қойылатын талап:",
                options: ["Бағандар саны бірдей болу керек", "Кестелер бірдей болу керек", "Бір JOIN болуы керек", "Тек мәтіндік бағандар", "Міндетті түрде ORDER BY болуы керек"],
                correct: 0
            },
            {
                q: "JOIN-ды UNION-пен бірге қолдануға бола ма?",
                options: ["Иә", "Жоқ", "Тек CTE ішінде", "Тек INTERSECT-пен", "Тек ішкі сұраумен"],
                correct: 0
            },
            {
                q: "UNION кезінде ORDER BY қайда қолданылады?",
                options: ["Әр сұранымға бөлек", "Тек бір рет — соңында", "Тек бірінші сұранымда", "Тек екінші сұранымда", "Ешқашан"],
                correct: 1
            },
            {
                q: "UNION-дағы деректер типтері қандай болуы керек?",
                options: ["Бірдей", "Тек сандық", "Тип бойынша үйлесімді", "Тек мәтіндік", "Атаулары бірдей"],
                correct: 2
            },
            {
                q: "HAVING және подзапроспен жазылған сұранымның соңғы нәтижесі:",
                options: ["Барлық өнімдер", "Ең төмен сатылымы бар өнімдер", "Барлық өнімдер бойынша орташа сатылым деңгейінен жоғары сатылым сомасы бар өнімдер", "Тек NULL мәндері бар өнімдер", "Тек нөлдік сатылымы бар өнімдер"],
                correct: 2
            },
            {
                q: "RANK() бар сұраным не істейді?",
                options: ["Барлық клиенттердің тапсырыстарын шығарады", "Рангсыз тек сұрыптайды", "≥5 тапсырысы бар клиенттердің тапсырыстарын шығарып, сомасы бойынша ранг береді", "Тек клиенттерді ғана қайтарады, тапсырыстарды емес", "Клиенттерді аты бойынша сұрыптайды"],
                correct: 2
            },
            {
                q: "Екі бос жиынның UNION-ы не қайтарады?",
                options: ["NULL", "Қате", "Бос жиын", "Бір NULL", "Бір бос жолдан тұратын жиын"],
                correct: 2
            },
            {
                q: "ALL-сыз таза UNION не қайтарады?",
                options: ["Екі жиыннан бірегей жолдарды", "Декартова көбейтінді", "Барлық жолдарды", "Дубликаттарды", "Тек бірінші жиынның жолдарын"],
                correct: 0
            },
            {
                q: "HAVING SUM(salary) > 50000 бар сұраным не қайтарады?",
                options: ["Барлық департаменттерді", "Жиынтық жалақысы 50000-нан жоғары департаменттерді", "Тек бір департаментті", "Қате", "NULL мәндері бар департаменттерді"],
                correct: 1
            },
            {
                q: "SUM() OVER(PARTITION BY region) не істейді?",
                options: ["Әрбір сатушы бойынша сатылым сомасын", "Жалпы сатылым сомасын", "Ең аз соманы", "Әр жол үшін өз өңірі бойынша сатылым сомасын", "Жыл бойынша жалпы сатылымды"],
                correct: 3
            },
            {
                q: "LEFT JOIN + WHERE B.id IS NULL не қайтарады?",
                options: ["Сәйкес келетін жолдарды", "A кестесінен B-де сәйкестігі жоқ жолдарды", "Декартова көбейтінді", "Қате", "B кестесінің барлық жолдарын"],
                correct: 1
            },
            {
                q: "salary > AVG(salary) подзапросы не істейді?",
                options: ["Ең жоғары жалақы алатын қызметкерлерді табады", "Жалақысы орташа жалақыдан жоғары қызметкерлерді табады", "Максимал жалақысы бар қызметкерлерді табады", "Қызметкерлерді өшіреді", "Ең төмен жалақысы бар қызметкерлерді табады"],
                correct: 1
            },
            {
                q: "INTERSECT нәтижесі:",
                options: ["Барлық қалалар", "Клиенттердің қалалары", "Клиенттер мен жеткізушілерде де бар қалалар", "Жеткізушілерде жоқ қалалар", "Тек жеткізушілер қалалары"],
                correct: 2
            },
            {
                q: "PostgreSQL-де индекс деген не?",
                options: ["Кестенің көшірмесі", "Іздеуді жылдамдататын құрылым", "Транзакция типі", "Баптаулар кестесі", "Резервтік көшіру құралы"],
                correct: 1
            },
            {
                q: "LIKE 'abc%' үшін қай индекс түрі қолайлы?",
                options: ["Hash", "GIN", "B-tree", "BRIN", "GiST"],
                correct: 2
            },
            {
                q: "Неге индекстердің көп болуы INSERT-ті баяулатуы мүмкін?",
                options: ["Индекстер RAM-ды көбейтеді", "Индекстер SELECT-ті блоктайды", "Әр INSERT сайын индекстер жаңартылады", "Индекстер ескі деректерді өшіреді", "Индекстер VACUUM-ды жылдамдатады"],
                correct: 2
            },
            {
                q: "Қашан индекс UPDATE операцияларын баяулатуы мүмкін?",
                options: ["Кесте бос болғанда", "Индекстер өте көп болғанда", "Кесте уақытша (temporary) болғанда", "SELECT тым жылдам болғанда", "Материалданған VIEW болғанда"],
                correct: 1
            },
            {
                q: "Орындау жоспарын көрсететін команда қайсы?",
                options: ["SHOW PLAN", "PLAN VIEW", "EXPLAIN", "LOOK PLAN", "DESCRIBE PLAN"],
                correct: 2
            },
            {
                q: "EXPLAIN ANALYZE не көрсетеді?",
                options: ["Кез келген қателерді", "Сұранымның нақты орындалу уақытын", "Индекстер санын", "Транзакция логтарын", "Кесте өлшемін"],
                correct: 1
            },
            {
                q: "Неге SELECT * қолдану зиян болуы мүмкін?",
                options: ["PostgreSQL-де тыйым салынған", "Қажетсіз қосымша деректерді жүктейді", "Индекстерді өшіреді", "VACUUM-ды баяулатады", "Қол жеткізу құқықтарын бұзады"],
                correct: 1
            },
            {
                q: "IN операторы индекс қолдана ала ма?",
                options: ["Жоқ", "Иә", "Тек сандарда", "Тек жолдық типтерде", "Тек NULL-да"],
                correct: 1
            },
            {
                q: "LIKE қашан индекс қолданбайды?",
                options: ["Жол ұзын болғанда", "Үлгі % таңбасынан басталғанда", "Баған мәтіндік болғанда", "Индекс B-tree болғанда", "COLLATE қолданылғанда"],
                correct: 1
            },
            {
                q: "column + 1 = 10 өрнегі индекс қолданбауының себебі неде?",
                options: ["Индекстер тек жолдармен жұмыс істейді", "Арифметикада индекс өшіріледі", "Функционалдық өрнектер толық сканерлеуді талап етеді", "Индексті қолмен жаңарту керек", "Тек бірегей индекстер қолданылады"],
                correct: 2
            },
            {
                q: "VIEW не үшін қолданылады?",
                options: ["Деректердің көшірмесін сақтау үшін", "Күрделі сұранымдарды жеңілдету үшін", "VACUUM-ды жылдамдату үшін", "Индекстер жасау үшін", "Логтарды сақтау үшін"],
                correct: 1
            },
            {
                q: "VIEW ішінде JOIN қолдануға бола ма?",
                options: ["Жоқ", "Тек біреуін", "Иә", "Тек INNER", "Тек LEFT"],
                correct: 2
            },
            {
                q: "MATERIALIZED VIEW-дің айырмашылығы неде?",
                options: ["SELECT-ті қолдамайды", "Деректерді физикалық түрде сақтайды", "Әр секунд сайын автоматты жаңарады", "JOIN-ды қамти алмайды", "Индекстерді қажет етпейді"],
                correct: 1
            },
            {
                q: "REFRESH MATERIALIZED VIEW не істейді?",
                options: ["Деректерді қайта есептейді", "Кестені өшіреді", "Индекстер жасайды", "БД-ны қайта жүктейді", "Ескі деректерді өшіреді"],
                correct: 0
            },
            {
                q: "VIEW-ға деректер енгізуге бола ма (INSERT)?",
                options: ["Әрқашан", "Ешқашан", "Кейде, егер құрылымы қарапайым болса", "Тек суперпайдаланушы", "Тек индекстер болғанда"],
                correct: 2
            },
            {
                q: "VIEW-ға қолжетімділікті не үшін шектейді?",
                options: ["БД өлшемін кішірейту үшін", "Құпия өрістерді жасыру үшін", "Индексацияны жылдамдату үшін", "Транзакцияларды өшіру үшін", "SELECT-ті жылдамдату үшін"],
                correct: 1
            },
            {
                q: "VIEW техникалық өрістерді жасыра ала ма?",
                options: ["Жоқ", "Тек уақытша өрістерді", "Иә", "Тек админге", "Тек GRANT арқылы"],
                correct: 2
            },
            {
                q: "MATERIALIZED VIEW қашан тиімдірек?",
                options: ["Деректер жиі өзгергенде", "Алдын ала есептелген деректерді тез оқу керек болғанда", "Кесте кішкентай болғанда", "Индекстер болмағанда", "Сыртқы кілт керек болғанда"],
                correct: 1
            },
            {
                q: "Партиционирование деген не?",
                options: ["Деректерді архивтеу", "Кестені бөліктерге бөлу", "Индексация", "Репликация", "VIEW жасау"],
                correct: 1
            },
            {
                q: "Партиционирование нені жылдамдатады?",
                options: ["UPDATE", "Диапазон бойынша SELECT", "VACUUM", "JOIN", "INSERT"],
                correct: 1
            }
        ],

        // --- 6-шы Нұсқа ---
        "variant6": [
             {
                q: "Партиционирование түрлері:",
                options: ["Тек LIST", "Тек RANGE", "RANGE, LIST, HASH", "Тек HASH", "Тек B-tree"],
                correct: 2
            },
            {
                q: "Ата-ана (parent) кесте не үшін керек?",
                options: ["Барлық деректерді сақтайды", "Құрылымды және бөлу ережелерін сақтайды", "Индекстерді сақтайды", "Лог баптауларын сақтайды", "VIEW сақтайды"],
                correct: 1
            },
            {
                q: "PARTITION BY не істейді?",
                options: ["Партицияларды өшіреді", "Кесте жасайды", "Бөлудің (partioning) тәсілін анықтайды", "Статистиканы жаңартады", "Индексті қайта жасайды"],
                correct: 2
            },
            {
                q: "RANGE-партиция таңдаудағы негізгі критерий қандай?",
                options: ["Әліпби бойынша бөлу", "Біріншілік кілт форматы", "Күн (date) немесе сандар диапазоны мәндері", "Индекс түрі", "Кесте атауы"],
                correct: 2
            },
            {
                q: "Партициялау кілтін дұрыс таңдау неге маңызды?",
                options: ["Бэкаптың көлемін анықтайды", "Сұранымда қай партициялар қолданылатынын анықтайды", "Пайдаланушы рөлін көрсетеді", "EXPLAIN-ды жылдамдатады", "VACUUM жылдамдығын арттырады"],
                correct: 1
            },
            {
                q: "Партициялар өз индекстеріне ие бола ала ма?",
                options: ["Жоқ", "Тек LIST", "Иә", "Тек HASH", "Тек бірегей кілттер"],
                correct: 2
            },
            {
                q: "Деректер ешбір партицияға сәйкес келмесе не болады?",
                options: ["PostgreSQL жаңа партиция жасайды", "Қате шығады", "Ата-ана кестеде сақталады", "Локқа жазылады", "MATERIALIZED VIEW-ға жазылады"],
                correct: 1
            },
            {
                q: "Кейін партициялар қосуға бола ма?",
                options: ["Жоқ", "Тек деректер енгізілгенге дейін", "Иә", "Тек суперпайдаланушы", "Тек VACUUM кезінде"],
                correct: 2
            },
            {
                q: "Constraint деген не?",
                options: ["Индекс түрі", "Деректердің тұтастығын қамтамасыз ететін шектеу", "Триггер түрі", "Транзакция режимі", "Тапсырма жоспарлаушысы"],
                correct: 1
            },
            {
                q: "CHECK не үшін қажет?",
                options: ["Құқықтарды баптау үшін", "Мәндерді ережелер бойынша тексеру үшін", "Лог жүргізу үшін", "Архивтеу үшін", "Индексация үшін"],
                correct: 1
            },
            {
                q: "PRIMARY KEY мен UNIQUE арасындағы айырмашылық:",
                options: ["PRIMARY KEY NULL-ға рұқсат етеді", "UNIQUE әрқашан жылдамырақ", "PRIMARY KEY NULL-ға тыйым салады", "Екеуі бірдей", "PRIMARY KEY тек жадта сақталады"],
                correct: 2
            },
            {
                q: "Рөлдерді не үшін бөледі (разделяют роли)?",
                options: ["Жадты үнемдеу үшін", "Қауіпсіздік үшін", "UPDATE-ті жылдамдату үшін", "WAL-ды өшіру үшін", "SELECT-ті жылдамдату үшін"],
                correct: 1
            },
            {
                q: "GRANT не істейді?",
                options: ["Кестені өшіреді", "Құқықтар береді", "БД-ны форматтайды", "Индекстерді жаңартады", "Резервтік көшіру жасайды"],
                correct: 1
            },
            {
                q: "REVOKE не істейді?",
                options: ["Бұрын берілген құқықтарды кері алады", "ANALYZE іске қосады", "Жаңа пайдаланушы жасайды", "Кестені қайта жасайды", "VIEW жасайды"],
                correct: 0
            },
            {
                q: "Тек бір кестеге құқық беруге бола ма?",
                options: ["Жоқ", "Иә", "Тек суперпайдаланушы", "Тек VIEW-ға", "Тек партицияға"],
                correct: 1
            },
            {
                q: "Шифрлау мен хештеудің айырмашылығы?",
                options: ["Хештеуді кері ашуға болады", "Хештеу қайтымсыз", "Шифрлау әрқашан баяу", "Айырмашылығы жоқ", "Шифрлауды VIEW-де қолдануға болмайды"],
                correct: 1
            },
            {
                q: "Пайдаланушыдан кейбір бағандарды жасыруға бола ма?",
                options: ["Жоқ", "Иә, VIEW арқылы", "Тек триггерлер арқылы", "Тек VACUUM арқылы", "Тек партиция арқылы"],
                correct: 1
            },
            {
                q: "pg_dump не үшін керек?",
                options: ["Логтарды талдау үшін", "Резервтік көшіру (бэкап) үшін", "VACUUM үшін", "Индексация үшін", "Мониторинг үшін"],
                correct: 1
            },
            {
                q: "pg_restore не істейді?",
                options: ["Бэкап жасайды", "Деректерді қалпына келтіреді", "Дампты өшіреді", "Кестелерді салыстырады", "SELECT-ті жылдамдатады"],
                correct: 1
            },
            {
                q: "plain және custom форматтарының айырмашылығы:",
                options: ["Plain — бинарлық", "Custom — мәтіндік", "Plain — SQL, custom — архивтелген формат", "Екеуі бірдей", "Plain — тек кестелер, custom — тек схемалар"],
                correct: 2
            },
            {
                q: "Бір кестенің ғана дампын жасауға бола ма?",
                options: ["Жоқ", "Тек pgAdmin арқылы", "Иә", "Тек суперпайдаланушы", "Тек индекстермен бірге"],
                correct: 2
            },
            {
                q: "Базаны дамптан қалай қалпына келтіреді?",
                options: ["DELETE + INSERT", "pg_restore немесе psql арқылы", "VACUUM арқылы", "ANALYZE арқылы", "REFRESH MATERIALIZED VIEW арқылы"],
                correct: 1
            },
            {
                q: "Қалпына келтірудің дұрыстығын қалай тексеруге болады?",
                options: ["БД-ны қайта жүктеу", "Қалпына келтіру алдындағы және кейінгі деректерді салыстыру", "Индекстерді жаңарту", "Журналдарды тазалау", "EXPLAIN ANALYZE жасау"],
                correct: 1
            },
            {
                q: "Бар база үстіне қалпына келтіруге бола ма?",
                options: ["Жоқ", "Иә, егер құрылымы сәйкес келсе", "Тек plain формат", "Тек админ", "Тек база бос болғанда"],
                correct: 1
            },
            {
                q: "CRON не істейді?",
                options: ["Linux-та тапсырмалар жоспарлаушысы", "Селекттерді оңтайландырғыш", "Архиватор", "Транзакциялар менеджері", "VACUUM жоспарлаушысы"],
                correct: 0
            },
            {
                q: "CRON арқылы SQL орындауға бола ма?",
                options: ["Жоқ", "Иә, psql арқылы", "Тек GUI арқылы", "Тек Windows-та", "Тек pgAgent арқылы"],
                correct: 1
            },
            {
                q: "pgAgent не үшін қолданылады?",
                options: ["Логтарды талдау үшін", "SQL-тапсырмаларды жоспарлау үшін", "Партициялар жасау үшін", "WAL баптау үшін", "Кестелерді мониторингтеу үшін"],
                correct: 1
            },
            {
                q: "pgAgent қателерін қайдан көруге болады?",
                options: ["Кесте статистикасынан", "pgAgent логтарынан", "VIEW-дан", "Жүйелік рөлдерден", "Партициялардан"],
                correct: 1
            },
            {
                q: "PostgreSQL-де лог деңгейлері қандай?",
                options: ["LOW, MED, HIGH", "RED, YELLOW, GREEN", "ERROR, WARNING, INFO", "START, STOP, RELOAD", "DEBUG, TRACE"],
                correct: 2
            },
            {
                q: "Ұзақ орындалатын сұранымдарды логтауды не үшін қосады?",
                options: ["Индекстерді өшіру үшін", "Баяу сұранымдарды табу үшін", "Жүктемені азайту үшін", "INSERT-ті жылдамдату үшін", "UPDATE-ті жылдамдату үшін"],
                correct: 1
            },
            {
                q: "PostgreSQL-де VACUUM деген не?",
                options: ["Резервтік көшіру жасау", "Қолданылмайтын жолдарды тазарту", "Кестелерді индексациялау", "Партицияларға бөлу", "Рөлдерді жаңарту"],
                correct: 1
            },
            {
                q: "ANALYZE не үшін қолданылады?",
                options: ["Кесте статистикасын жаңарту үшін", "Индекстер жасау үшін", "Резервтік көшіру үшін", "CRON тапсырмаларын жоспарлау үшін", "Деректерді шифрлау үшін"],
                correct: 0
            },
            {
                q: "EXPLAIN ANALYZE-сіз EXPLAIN не істейді?",
                options: ["Нақты орындалу уақытын көрсетеді", "Сұранымның орындалу жоспарын көрсетеді", "VACUUM орындайды", "Индекстерді қайта жасайды", "Дамптарды салыстырады"],
                correct: 1
            },
            {
                q: "B-tree индекс деген не?",
                options: ["Мәтіндік іздеуге арналған индекс", "Диапазон және теңдік бойынша іздеуге арналған индекс", "Тек сандарға арналған индекс", "JSON үшін индекс", "Функциялар үшін индекс"],
                correct: 1
            },
            {
                q: "GIN индекс деген не?",
                options: ["Диапазон бойынша тез іздеу", "Толықмәтіндік (full-text) іздеу және массивтер үшін индекс", "Тек сандарға арналған индекс", "Тек жолдарға арналған индекс", "Кестені резервтік көшіру"],
                correct: 1
            },
            {
                q: "BRIN индекс деген не?",
                options: ["Кіші кестелерге арналған индекс", "Үлкен және мәндері ретті (последовательные) кестелерге арналған индекс", "JSON үшін индекс", "Мәтіндер үшін индекс", "Партициялар үшін индекс"],
                correct: 1
            },
            {
                q: "UNIQUE constraint не үшін керек?",
                options: ["SELECT-ті жылдамдату үшін", "Бағандағы мәндердің бірегейлігін қамтамасыз ету үшін", "Деректерді шифрлау үшін", "Резервтік көшіру үшін", "Тапсырмаларды жоспарлау үшін"],
                correct: 1
            },
            {
                q: "FOREIGN KEY не үшін қолданылады?",
                options: ["Резервтік көшіру үшін", "Кестелерді байланыстырып, тұтастықты қамтамасыз ету үшін", "VACUUM-ды жылдамдату үшін", "Деректерді шифрлау үшін", "Рөлдерді бөлу үшін"],
                correct: 1
            },
            {
                q: "NOT NULL constraint деген не?",
                options: ["Бірегейлікке шектеу", "Бағанды міндетті түрде толтыруға шектеу", "Деректер типіне шектеу", "Индекстерге шектеу", "VIEW-ға шектеу"],
                correct: 1
            },
            {
                q: "pg_hba.conf не істейді?",
                options: ["Индекстерді баптайды", "Аутентификация мен қолжетімділікті баптайды", "CRON тапсырмаларын баптайды", "Журналдарды баптайды", "Партицияларды баптайды"],
                correct: 1
            }
        ],

        // --- 7-ші Нұсқа ---
        "variant7": [
             {
                q: "PostgreSQL-дегі деректерді шифрлау дегеніміз не?",
                options: ["Деректерді бинарлы түрде сақтау", "Деректерді қорғалған форматқа түрлендіру", "Қатынауды шектеу", "Тапсырмаларды жоспарлау", "VIEW құру"],
                correct: 1
            },
            {
                q: "Құпиясөзді хештеу дегеніміз не?",
                options: ["Құпиясөзді қауіпсіз мәнге түрлендіру", "Құпиясөзді база арқылы салыстыру", "Кестені шифрлау", "Индекс жасау", "Резервтік көшірме құру"],
                correct: 0
            },
            {
                q: "PostgreSQL-дегі ROLE деген не?",
                options: ["Индекс түрі", "Пайдаланушы немесе пайдаланушылар тобы", "Партиция түрі", "Тапсырма жоспарлағыш", "Тұтастық шектеуі"],
                correct: 1
            },
            {
                q: "GRANT OPTION не үшін қолданылады?",
                options: ["Индекс құру үшін", "Привилегияларды беру құқығын тапсыру үшін", "Деректерді шифрлау үшін", "Резервтік көшіру үшін", "Сұрауларды мониторингілеу үшін"],
                correct: 1
            },
            {
                q: "pg_stat_activity не істейді?",
                options: ["Белсенді сессияларды көрсетеді", "Резервтік көшірме жасайды", "Кестелерді индекстейді", "CRON тапсырмаларын жоспарлайды", "Деректерді шифрлайды"],
                correct: 0
            },
            {
                q: "REFRESH MATERIALIZED VIEW CONCURRENTLY не үшін керек?",
                options: ["Ескі деректерді жояды", "Материалданған көріністі блоктамай жаңартады", "Жаңа VIEW құрады", "Индексті қайта жасайды", "VACUUM орындайды"],
                correct: 1
            },
            {
                q: "Партиционирлеудегі pruning дегеніміз не?",
                options: ["Ескі кестелерді жою", "Тек қажет партицияларды оқу", "Жаңа индекстерді жасау", "Деректерді шифрлау", "Constraint тексеру"],
                correct: 1
            },
            {
                q: "HASH-партиционирлеуді қашан қолданған дұрыс?",
                options: ["Күн диапазондары үшін", "Деректерді партициялар арасында біркелкі бөлу үшін", "Мәтіндік деректер үшін", "Үлкен индекстер үшін", "Резервтік көшіру үшін"],
                correct: 1
            },
            {
                q: "pgAgent тапсырмасының орындалуын қалай тексеруге болады?",
                options: ["EXPLAIN арқылы", "pgAgent логтары арқылы", "VACUUM арқылы", "REFRESH MATERIALIZED VIEW арқылы", "ANALYZE арқылы"],
                correct: 1
            },
            {
                q: "WARNING лог деңгейі не үшін?",
                options: ["Қатерлі қателер үшін", "Ескерту және ықтимал мәселелер үшін", "SELECT туралы ақпарат үшін", "Резервтік көшіру үшін", "Партициялар құру үшін"],
                correct: 1
            },
            {
                q: "ERROR лог не көрсетеді?",
                options: ["Сәтті орындалған сұраулар", "Қатерлі қателер", "Ескертулер", "Баяу сұраулар", "Партициялар"],
                correct: 1
            },
            {
                q: "Long query logging деген не?",
                options: ["Барлық SELECT логтау", "Ұзақ орындалатын сұрауларды логтау", "Қателерді логтау", "Партицияларды логтау", "Индекстерді логтау"],
                correct: 1
            },
            {
                q: "pg_stat_user_tables не көрсетеді?",
                options: ["Пайдаланушылар күйі", "Кестелер статистикасы", "Қате логтары", "Индекстер тізімі", "CRON баптаулары"],
                correct: 1
            },
            {
                q: "pgAdmin не істейді?",
                options: ["PostgreSQL басқару", "Деректерді шифрлау", "CRON жоспарлау", "VIEW құру", "Кестелерді индекстеу"],
                correct: 0
            },
            {
                q: "Linux жүйесінде автоматты бэкапты қалай орнатуға болады?",
                options: ["EXPLAIN арқылы", "CRON арқылы", "VACUUM арқылы", "pg_stat_activity арқылы", "REFRESH MATERIALIZED VIEW арқылы"],
                correct: 1
            },
            {
                q: "WAL деген не?",
                options: ["Дерекқордағы болашақ өзгерістер журналы", "Партиция түрі", "Индекс түрі", "Тапсырма жоспарлағыш", "Тұтастық шектеуі"],
                correct: 0
            },
            {
                q: "pg_basebackup не істейді?",
                options: ["Дерекқордың толық резервтік көшірмесін жасайды", "Индекс жасайды", "CRON жоспарлайды", "VIEW жасайды", "Constraint тексереді"],
                correct: 0
            },
            {
                q: "ROLLBACK деген не?",
                options: ["Транзакцияны растау", "Транзакцияны болдырмау", "Индекс жасау", "Резервтік көшіру", "VIEW жасау"],
                correct: 1
            },
            {
                q: "COMMIT не істейді?",
                options: ["Транзакцияны болдырмау", "Транзакцияны растау", "Индекс жасау", "VIEW жасау", "Партиция жасау"],
                correct: 1
            },
            {
                q: "PostgreSQL-дегі SERIAL деген не?",
                options: ["Мәтін түрі", "Авто-инкремент бүтін сан", "Күн түрі", "Массив түрі", "Партиция түрі"],
                correct: 1
            },
            {
                q: "REINDEX деген не?",
                options: ["Жаңа кесте құру", "Индексті қайта құру", "Constraint жаңарту", "Партиция жасау", "VIEW жасау"],
                correct: 1
            },
            {
                q: "pg_stat_replication не көрсетеді?",
                options: ["Репликация статистикасын", "Резервтік көшіру жасайды", "Индекстер құрады", "CRON жоспарлайды", "VIEW басқарады"],
                correct: 0
            },
            {
                q: "TRUNCATE деген не?",
                options: ["Кестеден деректерді журналсыз жою", "Базаны толық жою", "Резервтік көшіру", "Индекс жасау", "Партиция жасау"],
                correct: 0
            },
            {
                q: "TEMPORARY кесте деген не?",
                options: ["Әрқашан сақталатын кесте", "Тек ағымдағы сессияда болатын кесте", "Шектеулері бар кесте", "VIEW-мен кесте", "Бэкапқа арналған кесте"],
                correct: 1
            },
            {
                q: "pg_stat_activity.wait_event не үшін?",
                options: ["Белсенді сессияларды және блокировкаларды талдау", "Индекстер құру", "Резервтік көшіру", "Деректерді шифрлау", "MATERIALIZED VIEW жаңарту"],
                correct: 0
            },
            {
                q: "CREATE ROLE WITH LOGIN не істейді?",
                options: ["Кіру мүмкіндігі жоқ роль жасайды", "Кіру құқығы бар пайдаланушы жасайды", "VIEW жасайды", "Партиция жасайды", "Индекс жасайды"],
                correct: 1
            },
            {
                q: "SERIALIZABLE оқшаулау деңгейі деген не?",
                options: ["Ең төмен оқшаулау", "Аномалияларды болдырмайтын ең жоғары оқшаулау деңгейі", "Индекстерге арналған деңгей", "VIEW үшін деңгей", "CRON үшін деңгей"],
                correct: 1
            },
            {
                q: "ALTER TABLE ... ADD CONSTRAINT не істейді?",
                options: ["Кесте жасайды", "Тұтастық шектеуін қосады", "Индекс жасайды", "VIEW жасайды", "Партиция жасайды"],
                correct: 1
            },
            {
                q: "pg_ctl не істейді?",
                options: ["PostgreSQL серверін басқарады", "Индекс жасайды", "Бэкап жасайды", "VIEW жасайды", "CRON жасайды"],
                correct: 0
            },
            {
                q: "EXCLUDE constraint деген не?",
                options: ["Бірегейлік шектеуі", "Мәндердің ережелер бойынша қиылысуын болдырмайтын шектеу", "NULL шектеуі", "VIEW шектеуі", "Партиция шектеуі"],
                correct: 1
            },
            {
                q: "Қай бэкап тәсілі жүйенің қолжетімсіздік уақытын ең азайтады?",
                options: ["Cold storage", "Hot-backup", "Offline-backup", "Лог архивтеу", "Көшірмелеуге дейін диск фрагментациясы"],
                correct: 1
            },
            {
                q: "Логикалық деректер бұзылуының басты себебі?",
                options: ["Қолданба қателері", "RAM қатесі", "CPU қызып кетуі", "Порттың блокталуы", "Сервер бөлмесінің жарығы"],
                correct: 0
            },
            {
                q: "Консистентті бэкап үшін не міндетті?",
                options: ["Желі қызметін қайта қосу", "Уақытша директорияны тазалау", "Транзакция күйінің snapshot (checkpoint)", "Антивирус орнату", "Жүйе уақытын ауыстыру"],
                correct: 2
            },
            {
                q: "RAID-ті жалғыз қорғау тәсілі ретінде қолдану қаупі?",
                options: ["RAID логикалық бұзылудан немесе өшіруден қорғамайды", "Жылдамдығы төмен", "Көлемі үлкен", "BIOS-қа тәуелді", "Интернет қажет етеді"],
                correct: 0
            },
            {
                q: "Толық көшіруден snapshot-тың айырмашылығы?",
                options: ["Snapshot белгілі бір сәттегі блок күйін бекітеді", "Толық бэкап LVM қажет етеді", "Snapshot тек жаңа деректерді сақтайды", "Snapshot әрқашан тез қалпына келеді", "Snapshot тек жүйе өшірулі болғанда жасалады"],
                correct: 0
            },
            {
                q: "Дифференциалды көшіру қайсысына қатысты сақталады?",
                options: ["Соңғы толық бэкапқа", "Соңғы snapshot-қа", "Алдыңғы инкременттік бэкапқа", "Соңғы транзакцияға", "Тізбектің алғашқы бэкапына"],
                correct: 0
            },
            {
                q: "Инкременттік тізбектің кемшілігі?",
                options: ["Үлкен деректерге жарамайды", "RAID қолданады", "Көлемі үлкен", "Тізбек ұзын болса қалпына келтіру қиын", "Негізгі серверді сөндіру қажет"],
                correct: 3
            },
            {
                q: "Деректер қатты фрагменттелгенде қай қалпына келтіру жылдам?",
                options: ["Incremental chain", "Differential restore", "Copy rollback", "Full restore", "Parallel merge әдісі"],
                correct: 3
            },
            {
                q: "СУБД-дағы “consistent backup” деген не?",
                options: ["RAID-1 қолданылған", "Бэкап тек түнде жасалады", "Деректер шифрмен қорғалған", "Транзакция күйі сақталған, жартылай көшіру жоқ", "Деректер бір файлда сақталған"],
                correct: 3
            },
            {
                q: "БД инфрақұрылымы контекстіндегі “business continuity” деген не?",
                options: ["Апат жағдайында да критикалық сервистердің тоқтамай жұмыс істеуі", "Көп серверлердің болуы", "БД схемасын өзгерту мүмкіндігі", "Бэкаптарды бұлтта сақтау", "Интерфейсті жиі жаңарту"],
                correct: 0
            }
        ],

        // --- 8-ші Нұсқа ---
        "variant8": [
             {
                q: "RPO нені анықтайды?",
                options: ["Деректерді қайтару үшін максималды уақыт", "Жұмыс істемеу ұзақтығы", "Сақтау құны", "Логтар көлемі", "Тәуліктегі максималды көшірме саны"],
                correct: 0
            },
            {
                q: "RTO нені анықтайды?",
                options: ["Қалпына келтірудің ең ұзақ рұқсат етілген уақыты", "Көшірме саны", "Деректердің өсу жылдамдығы", "Метадеректер көлемі", "Бағдарламаны жаңарту жиілігі"],
                correct: 0
            },
            {
                q: "Жергілікті деректерді қорғауға мысал?",
                options: ["Google Drive", "Желі ішіндегі NAS", "Dropbox", "Amazon S3", "SSH-туннель"],
                correct: 1
            },
            {
                q: "Бұлттық сақтау артықшылығы?",
                options: ["Геотаралу және істен шығуға төзімділік", "Минималды көлем", "Қолжеткізу уақыты төмен", "Интернетке тәуелсіздік", "ОЖ-ны бұлтта тікелей іске қосу мүмкіндігі"],
                correct: 0
            },
            {
                q: "Гибрид бэкап стратегиясы дегеніміз не?",
                options: ["Тек инкременттік көшірмелер", "Тек RAID көшірмелері", "Тек логтарды архивтеу", "Жергілікті + бұлттық көшірмелер", "Тек 'ыстық' көшірмелерді қолдану"],
                correct: 3
            },
            {
                q: "Бұлттық бэкап артықшылығы ЕМЕС?",
                options: ["Масштабталуы", "Автоматтандыру", "Қолжетімділік", "Жергілікті қалпына келтіру жылдамдығы төмен", "Желі картасыз жұмыс істеу мүмкіндігі"],
                correct: 3
            },
            {
                q: "Linux-та бэкаптар CLI арқылы неге жиі жасалады?",
                options: ["CLI автоматтандыру және сценарий жазуға мүмкіндік береді", "Linux GUI қолдамайды", "CLI root талап етпейді", "CLI әрқашан жылдам", "CLI мәліметтерді автоматты түрде шифрлайды"],
                correct: 0
            },
            {
                q: "Бэкап алдында нені тексеру қажет?",
                options: ["DNS қолжетімділігі", "CPU температурасы", "Видео драйвер нұсқасы", "Деректер мен транзакциялар журналының сәйкестігі", "Салқындатқыш айналу жылдамдығы"],
                correct: 3
            },
            {
                q: "Көпшілік ОЖ-да кездесетін негізгі резервтеу механизмі?",
                options: ["Файлдарды басқа тасымалдаушыға көшіру", "Температура мониторингі", "Лог жүргізу", "Қуатты өшіру", "Әр бэкаптан бұрын жүйені қайта қосу"],
                correct: 0
            },
            {
                q: "Бэкап аяқталғаннан кейін не міндетті?",
                options: ["Бақылау сомасын немесе тұтастығын тексеру", "ОЖ қайта жүктеу", "Кэшті өшіру", "Себетті тазалау", "Драйвер жаңарту"],
                correct: 0
            },
            {
                q: "Бэкап сапасының негізгі параметрі:",
                options: ["ОЖ нұсқасы", "Деректердің тұтастығы және оқылымдылығы", "Архив форматы", "Көлемі", "Файлдық жүйе түрі"],
                correct: 1
            },
            {
                q: "Ұзақ мерзімді сақтауға арналған сервис:",
                options: ["Discord CDN", "Steam Cloud", "Google Cloud Storage Nearline", "Жергілікті WebDAV", "WhatsApp Backup"],
                correct: 2
            },
            {
                q: "cron не үшін жауап береді?",
                options: ["Автоматты тапсырмаларды жоспарлау", "Firewall баптау", "Жүктемені бақылау", "Ядро логтарын жинау", "Реестр файлдарын басқару"],
                correct: 0
            },
            {
                q: "Windows Task Scheduler не үшін қолданылады?",
                options: ["Реестрмен жұмыс", "Драйверлерді басқару", "Тапсырмаларды автоматтандыру, оның ішінде бэкап", "BIOS баптау", "Windows локализациясын өзгерту"],
                correct: 2
            },
            {
                q: "Резервтеу регламентіне не кіруі керек?",
                options: ["Интерфейс түс схемасы", "Сервер бөлмесінің температурасы", "Қалпына келтіру қадамдары және көшірмелерді сақтау тәртібі", "Қызметкерлердің ПО тізімі", "ПК MAC-адрес кестесі"],
                correct: 2
            },
            {
                q: "“Backup repository” дегеніміз:",
                options: ["Логтар қалтасы", "Кэш қалтасы", "LVM томы", "Бэкап тізбектері және метадеректері сақталатын хранилище", "1GB бос орны бар кез келген папка"],
                correct: 3
            },
            {
                q: "Толық бэкаптың кемшілігі:",
                options: ["Көп уақыт пен көлем талап етеді", "Сенімділігі төмен", "Автоматтандыру жоқ", "Шифрлауды қолдамайды", "RAID контроллері қажет"],
                correct: 0
            },
            {
                q: "Инкременттік әдістің артықшылығы:",
                options: ["Көшірме жасау уақыты аз", "Қалпына келтіру ең жақсы", "Файл саны аз", "Толық бэкапты қажет етпейді", "Тек бұлтта жұмыс істейді"],
                correct: 0
            },
            {
                q: "Дифференциалды көшірменің артықшылығы:",
                options: ["Инкременттікке қарағанда жылдам қалпына келеді", "Файлдары ең кішкентай", "Жоспарлағышты қажет етпейді", "CPU аз пайдаланады", "RAID міндетті"],
                correct: 0
            },
            {
                q: "Дифференциалды әдіс қашан тиімді?",
                options: ["Қалпына келтіру жылдамдығы маңызды болғанда", "RAID жоқ кезде", "Дерек аз болғанда", "Жүйе SSD-де болғанда", "Тек виртуалды машиналарда"],
                correct: 0
            },
            {
                q: "DR-жоспар нені қамтиды?",
                options: ["Ойындар тізімі", "Түс схемасы", "Апат кезіндегі әрекеттер және жауапты тұлғалар", "Чат тарихы", "Сервер температурасы"],
                correct: 2
            },
            {
                q: "DR-жоспарға НЕ кірмейді?",
                options: ["Қалпына келтіру процесі", "Қызметкерлердің демалыс кестесі", "RPO / RTO", "Жауапты тұлғалардың байланыстары", "Интерфейс тақырыптары"],
                correct: 1
            },
            {
                q: "Деректер жоғалу қаупін не төмендетеді?",
                options: ["Тұтастықты және бэкаптарды тұрақты тексеру", "Серверді қайта жүктеу", "Кэшті тазалау", "Бағдарлама жою", "Күн сайын диск дефрагментациясы"],
                correct: 0
            },
            {
                q: "Физикалық қауіп:",
                options: ["Қатынас құқық қатесі", "Жабдықтың жанып немесе қызып кетуі", "SQL-сұрау қатесі", "Құпиясөз өзгерту", "Жаңа драйвер орнату"],
                correct: 1
            },
            {
                q: "Бос орынның жетіспеуі неге қауіпті?",
                options: ["Инкремент тізбегін үзіп, консистентсіздікке әкелуі мүмкін", "FPS төмендетеді", "Қол жеткізу құқықтарын өзгертеді", "Желіні баяулатады", "Барлық cron-тапсырмаларын тоқтатады"],
                correct: 0
            },
            {
                q: "Алдымен қандай деректер көшіріледі?",
                options: ["Уақытша файлдар", "Браузер кэші", "Маңызды жүйелік және жұмыс деректері", "Медиафайлдар", "Видеокарта драйверлері"],
                correct: 2
            },
            {
                q: "Автоматтандырылған бэкапта не маңызды?",
                options: ["Драйверлерді жою", "Шрифт ауыстыру", "Орындалу логтарын тұрақты тексеру", "Журналдауды сөндіру", "Әр бэкап алдында серверді өшіру"],
                correct: 2
            },
            {
                q: "Неге көшірмелерді әртүрлі геолокацияда сақтау керек?",
                options: ["Жүктеуді жеделдету үшін", "RAM үнемдеу үшін", "Latency азайту үшін", "Аймақтық апаттардан қорғау үшін", "Ескі көшірмелерді автоматты жою үшін"],
                correct: 3
            },
            {
                q: "3-2-1 қағидасы нені білдіреді?",
                options: ["3 HDD, 2 SSD, 1 VLAN", "3 бұлт, 2 VLAN, 1 firewall", "3 көшірме, 2 тасымалдаушы, 1 сыртқы сақталым", "3 сервер, 2 VPN, 1 switch", "3 апта, 2 бэкап, 1 ZIP-файл"],
                correct: 2
            },
            {
                q: "Жергілікті сақтаудың артықшылығы:",
                options: ["Желіге тәуелсіз және қол жеткізу жылдам", "Тегін қызмет", "Шексіз кеңістік", "Өрттен қорғалған", "Мониторинг қажет емес"],
                correct: 0
            },
            {
                q: "Бэкаптың жарамсыз болуына не себеп болуы мүмкін?",
                options: ["Мониторды өшіру", "Серверді қайта қосу", "Көшірмелеуді дұрыс аяқтамау немесе блоктардың бұзылуы", "Интерфейс тақырыбын өзгерту", "Экран жарығын азайту"],
                correct: 2
            },
            {
                q: "Нені жүйелі түрде тестілеу керек?",
                options: ["GPU өнімділігі", "Деректерді қалпына келтіру процедуралары", "Downloads папкасы", "Түс схемасы", "Процессор жүктемесі"],
                correct: 1
            },
            {
                q: "Бэкаптарды шифрлау не қамтамасыз етеді?",
                options: ["Тасымалдаушы жоғалғанда деректерді қорғау", "Көлемін азайту", "Қалпына келтіруді жеделдету", "Көшірме санын азайту", "Бүлінген секторларды қалпына келтіру"],
                correct: 0
            },
            {
                q: "Бұлтта сақтаудың минусы:",
                options: ["Автоматтандыру", "Репликация", "Интернет арнасына тәуелділік", "Масштабталу", "VPN қолдану талабы"],
                correct: 2
            },
            {
                q: "Бэкап жасалмаса не істеу керек?",
                options: ["Логтарды, құқықтарды және конфигурацияны тексеру", "Тақырып ауыстыру", "Браузерді қайта қосу", "Елемеу", "Бір апта күтіп қайта көру"],
                correct: 0
            },
            {
                q: "Резервтеу әдісін таңдағанда не ескеру керек?",
                options: ["SLA, деректер көлемі, қалпына келтіру жылдамдығы", "Музыкалық талғам", "ПК корпусының түсі", "GPU қуаты", "Монитор рұқсаты"],
                correct: 0
            },
            {
                q: "Автоматты көшірудің артықшылығы:",
                options: ["Адам қатесін азайтады", "Үнемі бақылауды талап етеді", "Сенімділікті төмендетеді", "Желіні баяулатады", "Міндетті түрде бөлек сервер қажет"],
                correct: 0
            },
            {
                q: "Қалпына келтіру тестінің сәттілігі неден анықталады?",
                options: ["Қалпына келген деректердің дұрыс жұмыс істеуі", "Жүйе өшірілді", "Файл өлшемі өзгерді", "Ескі көшірмелер өшірілді", "Қалпына келтіру уақыты артты"],
                correct: 0
            },
            {
                q: "Бэкапты сақтау бойынша жақсы тәжірибе:",
                options: ["Жұмыс үстелі", "Себет", "Бөлек алаңда немесе қашықтағы хранилище", "Бір диск", "Жүйелік диск ішіндегі кез келген папка"],
                correct: 2
            },
            {
                q: "Көшіру регламентін құжаттау не үшін қажет?",
                options: ["Орын толтыру үшін", "Кез келген қызметкер қалпына келтіруді дұрыс орындауы үшін", "Интерфейсті өзгерту үшін", "Есептер толтыру үшін", "Архив көлемін үлкейту үшін"],
                correct: 1
            }
        ],

        // --- 9-шы Нұсқа ---
        "variant9": [
             {
                q: "Резервтік көшірудің басты мақсаты қандай?",
                options: ["Өнімділікті арттыру", "Желіге түсетін жүктемені азайту", "Ақаудан кейін деректерді қалпына келтіру мүмкіндігі", "Транзакцияларды жылдамдату", "Логтар санын қысқарту"],
                correct: 2
            },
            {
                q: "Қай бэкап түрі жүйенің жағдайын нақты бір күнге дейін қалпына келтіруге мүмкіндік береді?",
                options: ["Ағындық бэкап", "Болжамды бэкап", "Лог архиві", "Мезетке дейін қалпына келтіру (point-in-time)", "Уақытша снапшот"],
                correct: 3
            },
            {
                q: "Жалғыз ғана резервтік көшірмені сақтаудың кемшілігі?",
                options: ["Қол жеткізу жылдамдығының артуы", "RTO-ны күрделендіру", "Тасымалдаушы бүлінсе, деректерді жоғалту қаупі", "Артық архивтеу", "Метадеректер көлемін азайту"],
                correct: 2
            },
            {
                q: "Резервтік көшірмелерді не үшін шифрлайды?",
                options: ["Оқуды жеделдету үшін", "RPO-ны төмендету үшін", "Бэкап көлемін азайту үшін", "Тасымалдаушы компрометацияланған жағдайда деректерді қорғау үшін", "Қалпына келтіруді тездету үшін"],
                correct: 3
            },
            {
                q: "Offsite-сақтауды ұйымдастыру үшін не қажет?",
                options: ["RAID-контроллер", "Сыртқы алаңға немесе бұлтқа қолжетімділік", "Ауаның төмен температурасы", "ОЖ-ны қайта орнату", "Энергия үнемдеу режимі"],
                correct: 1
            },
            {
                q: "Лентаға (ленточные носители) көшірудің артықшылығы қандай?",
                options: ["Кездейсоқ қолжетімділік жылдам", "Лезде репликация", "Ұзақ мерзімде сақтау құны төмен", "ОЖ-ны іске қосу мүмкіндігі", "Каталогтауды қажет етпейді"],
                correct: 2
            },
            {
                q: "Қалпына келтіруді тестілеудің негізгі міндеті…",
                options: ["ОЖ нұсқасын тексеру", "Жабдық температурасын тексеру", "Бэкаптың шынымен қалпына келтіруге жарамды екенін растау", "Дискілік I/O-ны оңтайландыру", "Желі жүктемесін бақылау"],
                correct: 2
            },
            {
                q: "\"Continuous backup\" механизмі не істейді?",
                options: ["Көшірмелерді тек түнде жасайды", "Деректерді әр 24 сағат сайын сақтайды", "Өзгерістерді дерлік нақты уақытқа жақын режімде жазады", "Ескі бэкаптарды автоматты түрде өшіреді", "Серверді сөндіруді талап етеді"],
                correct: 2
            },
            {
                q: "Георепликацияның артықшылығы?",
                options: ["Индексті жеделдету", "Диск кэшін «прозрачное» ету", "Толық бір алаң істен шыққанда да жұмысқа қабілеттілік", "Логтар санын азайту", "BIOS жүктелуін жеделдету"],
                correct: 2
            },
            {
                q: "Авария кезінде RTO-ны азайтуға не көмектеседі?",
                options: ["Алдын ала дайындалған резервтік инфрақұрылымның болуы", "Бэкап файлдарының өлшемін үлкейту", "Серверді күн сайын қайта қосу", "ЖЖҚ (ОЗУ) көлемінің минималды болуы", "Журналдауды өшіру"],
                correct: 0
            },
            {
                q: "\"Бұзылу сәтіне дейін\" қалпына келтіру үшін не қажет?",
                options: ["Толық бэкап", "BIOS-қа қолжетімділік", "Транзакциялық логтар жиыны", "Әкімші құпиясөзін ауыстыру", "Процессор кэшін тазарту"],
                correct: 2
            },
            {
                q: "\"Offsite backup\" нені сипаттайды?",
                options: ["Сол дискінің өзінде сақталады", "Негізгі алаңнан тыс жерде сақталады", "RAM ішінде сақталады", "Әр тәулікте өшіріледі", "Браузер кэшінде сақталады"],
                correct: 1
            },
            {
                q: "Backup rotation не істейді?",
                options: ["Қол жеткізу жылдамдығын арттырады", "Деректерді әртүрлі секторларға ауыстырады", "Ескі көшірмелерді автоматты түрде өшіреді немесе ауыстырады", "Лог архивтеуді сөндіреді", "Жүйені қайта жүктейді"],
                correct: 2
            },
            {
                q: "Қай фактор сәтті қалпына келтіру ықтималдығын азайтады?",
                options: ["Жүйелі тексерістер", "Көшірмелерді offsite сақтау", "Қалпына келтіру тесттерінің болмауы", "Инкременттік тізбектердің болуы", "Жоғары қолжетімді хранилищелерді пайдалану"],
                correct: 2
            },
            {
                q: "DR-тестілеудің мақсаты қандай?",
                options: ["Желі өткізу қабілетін өлшеу", "Видеодрайвер жұмысына тексеріс", "Команданың және қалпына келтіру процедураларының дайын екенін тексеру", "Лог көлемін арттыру", "Сервер температурасын оңтайландыру"],
                correct: 2
            },
            {
                q: "Неліктен деректерді қорғаудың бірнеше деңгейі болуы маңызды?",
                options: ["GPU-ды жеделдету үшін", "DNS жүктемесін азайту үшін", "Түрлі типтегі ақаулардан қорғау үшін", "RPO қолданбау үшін", "Логтауды оңтайландыру үшін"],
                correct: 2
            },
            {
                q: "Тым ұзын инкременттік тізбектің минусы?",
                options: ["Бейне сапасының төмендеуі", "Қалпына келтірудің күрделенуі", "Оқу жылдамдығын арттыру", "RAID қажеттілігі", "Жеделдетілген индексация"],
                correct: 1
            },
            {
                q: "\"Cold backup\" нені сипаттайды?",
                options: ["Жүйе толығымен тоқтатылған кезде орындалады", "Тек белсенді жүйеде орындалады", "Әр 10 секунд сайын іске қосылады", "Сақтауға орын талап етпейді", "Деректерге қолжетімсіз күйде жұмыс істейді"],
                correct: 0
            },
            {
                q: "Неліктен бэкаптарды түпнұсқа деректерден бөлек сақтау маңызды?",
                options: ["Диск көлемін арттыру үшін", "RTO-ны азайту үшін", "Негізгі жүйе бүлінгенде деректер жоғалуын болдырмау үшін", "Желілік адаптерді жеделдету үшін", "CPU жүктемесін азайту үшін"],
                correct: 2
            },
            {
                q: "Көшірмелерді әртүрлі тасымалдаушыларда сақтау не береді?",
                options: ["Графиканы жақсарту", "SQL оңтайландыру", "Түрлі ақауларға қосымша төзімділік", "ОЖ жүктелу уақытын азайту", "Логтар санын азайту"],
                correct: 2
            },
            {
                q: "Ransomware-дан қорғануға не көмектеседі?",
                options: ["Жиі қайта жүктеу", "Жазудан қорғалған бэкаптар (immutable backup)", "Свопинг жиілігін арттыру", "Видеокартаны ауыстыру", "Ескі ОЖ қолдану"],
                correct: 1
            },
            {
                q: "Қалпына келтіру процесінің түсініктілігін не арттырады?",
                options: ["Пернетақта жарығы", "Дисктерді қатаң форматтау", "Қалпына келтіру қадамдарының егжей-тегжейлі құжаттамасы", "Жабдықтың қызып кетуі", "Монитордың жоғары жиілігі"],
                correct: 2
            },
            {
                q: "Неліктен бэкаптарды тексерілген форматта сақтау маңызды?",
                options: ["Оларды сыртқы ПО арқылы ашу үшін", "GPU өнімділігін арттыру үшін", "Қалпына келтірудің үйлесімділігін кепілдеу үшін", "ПК қосылу уақытын азайту үшін", "Қызу болдырмау үшін"],
                correct: 2
            },
            {
                q: "Бэкап сапасын не нашарлатады?",
                options: ["Бақылау сомаларын дұрыс тексеру", "Тек бір көшірменің болуы", "Бірнеше буын (поколение) сақталуы", "Суық орында сақтау", "Түрлі тасымалдаушыларды пайдалану"],
                correct: 1
            },
            {
                q: "\"Incremental forever\" деген не?",
                options: ["Әрдайым тек толық бэкап жасау әдісі", "Бір рет толық бэкап жасап, ары қарай тек инкременттер жасау әдісі", "RAID негізіндегі әдіс", "Логсыз қалпына келтіру әдісі", "Лентада сақтау әдісі"],
                correct: 1
            },
            {
                q: "Резервтеу жүйелерінде дедупликация не үшін қажет?",
                options: ["Желі байланысын жеделдету", "Қайта қалпына келтіру уақытын азайту", "Қайталанатын блоктарды алып тастау арқылы көлемді қысқарту", "Процессор жиілігін арттыру", "Деректерді GPU жадында сақтау"],
                correct: 2
            },
            {
                q: "Адамның қателесу ықтималдығын не азайтады?",
                options: ["Автоматтандырудың толық болмауы", "Автоматтандырылған көшіру процестерінің болуы", "Тек GUI пайдалану", "Конфигурацияны қолмен өңдеу", "Регламенттің болмауы"],
                correct: 1
            },
            {
                q: "Бэкаптарда \"staging area\" не үшін қолданылады?",
                options: ["Деректерді негізгі хранилищеге жібермес бұрын уақытша сақтау үшін", "Логтарды тазарту үшін", "Видеокартаны тестілеу үшін", "Ескі снапшоттарды жою үшін", "BIOS жаңарту үшін"],
                correct: 0
            },
            {
                q: "Бэкап сапасын бақылауға не көмектеседі?",
                options: ["Қалпына келтіру тесттерін жүйелі өткізу", "Барлық көшірмелерді жою", "Тек инкременттерді сақтау", "Терминал тақырыбын ауыстыру", "Метадеректерді жою"],
                correct: 0
            },
            {
                q: "Неліктен бірнеше буын (поколение) бэкаптарды сақтау маңызды?",
                options: ["ОП жүктемесін азайту үшін", "Алдыңғы, ертеректегі күйлерге қайту мүмкіндігі үшін", "RAID жылдамдату үшін", "Архив өлшемін азайту үшін", "Тест уақыты аз болу үшін"],
                correct: 1
            },
            {
                q: "Деректерді қалпына келтіру мүмкін еместігіне не әкелуі мүмкін?",
                options: ["Бірнеше көшірменің болуы", "Бэкап метадеректерінің бүлінуі", "Сенімді тасымалдаушы қолдану", "Қалпына келтіру тесттері", "Тексерілген сақтау схемаларын пайдалану"],
                correct: 1
            },
            {
                q: "\"Retention policy\" деген не?",
                options: ["Ақаулы құрылғылар тізімі", "Ескі бэкаптарды сақтау және жою саясаты", "Барлық пайдаланушылар сипаттамасы", "Жүйе драйверлері тізімі", "Файлдарды сұрыптау алгоритмі"],
                correct: 1
            },
            {
                q: "Үлкен деректерді қалпына келтіру жылдамдығын не арттырады?",
                options: ["Баяу тасымалдаушыларды пайдалану", "Көпдеңгейлі сақтау (tiered storage)", "Тесттердің болмауы", "Көшірмелер санын азайту", "Серверді тоқтату"],
                correct: 1
            },
            {
                q: "Бэкаптарды жоғалту қаупін не азайтады?",
                options: ["Көшірмелерді операциялар жүріп жатқан сол серверде сақтау", "Барлық функцияға бір диск қолдану", "Репликация және offsite-сақтау", "Снапшоттарды жою", "RAM-да ғана сақтау"],
                correct: 2
            },
            {
                q: "Жұмыс жүйесіне әсерді азайтатын тәсіл қайсы?",
                options: ["Жұмыс уақытында толық бэкап жасау", "Файлдық жүйе снапшоттарын қолдану", "Қолмен көшіру арқылы резервтеу", "Барлық қосымшаларды паузаға қою", "Қуатты ажырату"],
                correct: 1
            },
            {
                q: "Объектілік (object) сақтаудың артықшылығы қандай?",
                options: ["Өнімділігі төмен", "Масштабталуы шектеулі", "Өте үлкен көлемдегі деректерді жоғары сенімділікпен сақтау мүмкіндігі", "RAID-ке тәуелді", "Міндетті түрде жергілікті сервер қажет"],
                correct: 2
            },
            {
                q: "Қалпына келтіру кезіндегі қате қаупін не азайтады?",
                options: ["Нақты, түсінікті құжаттаманың болуы", "Жүйе интерфейсін өзгерту", "Кездейсоқ командаларды қолдану", "Тесттер санын қысқарту", "Нұсқаулықтың мүлдем болмауы"],
                correct: 0
            },
            {
                q: "Резервтік көшірменің бүлінуіне не әкелуі мүмкін?",
                options: ["Хранилищенің дұрыс жұмысы", "Файлдық жүйе қателері", "Бұлтта бэкап жасау", "CRC тексеру", "Бірнеше көшірме қолдану"],
                correct: 1
            },
            {
                q: "Бэкап локациясын таңдағанда нені ескеру маңызды?",
                options: ["Жергілікті ылғалдылық пен температура", "Алаңның қолжетімділігі және істен шығуға төзімділігі", "Сервер корпусының түсі", "USB-порттар саны", "RGB-жарықтың болуы"],
                correct: 1
            },
            {
                q: "Минималды RPO-ға не көмектеседі?",
                options: ["Айына бір рет толық бэкап", "Репликация немесе логтарды жиі көшіру", "Журналдарды сақтауды өшіру", "Жергілікті папкада сақтау", "RAID-0 қолдану"],
                correct: 1
            }
        ]
    },

    // ==============================================
    // 🐍 ПРЕДМЕТ: PYTHON (Русский язык - 9 Вариантов)
    // ==============================================
    "python_ru": {
        
        // --- 1-й Вариант ---
        "variant1": [
            // --- 1-й Вариант (Python + SQL + PyQt5) [ПОЛНЫЙ] ---
            {
                q: "Как называется программа, выполняющая код Python построчно?",
                options: ["Компилятор", "Интерпретатор", "Ассемблер", "Препроцессор", "Диспетчер"],
                correct: 1
            },
            {
                q: "Какой оператор используется для ветвления?",
                options: ["for", "break", "if", "switch", "return"],
                correct: 2
            },
            {
                q: "Какой тип данных является неизменяемым?",
                options: ["list", "dict", "set", "tuple", "bytearray"],
                correct: 3
            },
            {
                q: "Какой символ обозначает комментарий в Python?",
                options: ["//", "/**/", "<!--", "#", "%"],
                correct: 3
            },
            {
                q: "Какой оператор сравнения означает «равно»?",
                options: ["=", "==", "===", "eq", ":="],
                correct: 1
            },
            {
                q: "Как получить длину строки?",
                options: ["size()", "count()", "length()", "len()", "strlen()"],
                correct: 3
            },
            {
                q: "Как называется блок, который выполняется, если условие ложное?",
                options: ["if", "if not", "else", "return", "break"],
                correct: 2
            },
            {
                q: "Какой тип данных подходит для хранения уникальных значений?",
                options: ["list", "dict", "set", "tuple", "string"],
                correct: 2
            },
            {
                q: "Какой из операторов является логическим?",
                options: ["+", "and", "*", "/", "%"],
                correct: 1
            },
            {
                q: "Какой метод используется для разбиения строки?",
                options: ["cut()", "divide()", "split()", "break()", "open()"],
                correct: 2
            },
            {
                q: "Какой синтаксис у lambda-функции?",
                options: ["lambda: x → y", "lambda x: выражение", "lambda(x){ }", "func lambda(x)", "lambda->x"],
                correct: 1
            },
            {
                q: "Что делает функция map()?",
                options: ["Фильтрует значения", "Применяет функцию к каждому элементу", "Объединяет строки", "Возвращает случайное число", "Сортирует список"],
                correct: 1
            },
            {
                q: "Как импортировать модуль random?",
                options: ["include random", "using random", "import random", "attach random", "new random"],
                correct: 2
            },
            {
                q: "Как открыть файл для чтения?",
                options: ["open(\"f.txt\", \"w\")", "open(\"f.txt\", \"r\")", "open(\"f.txt\", \"rw\")", "open(\"f.txt\", \"x\")", "open_read(\"f.txt\")"],
                correct: 1
            },
            {
                q: "Что делает метод read()?",
                options: ["Записывает текст", "Закрывает файл", "Считывает текст", "Удаляет файл", "Конвертирует строку"],
                correct: 2
            },
            {
                q: "Как объявить класс?",
                options: ["new class Example:", "class Example:", "class(Example);", "Example class:", "create class Example"],
                correct: 1
            },
            {
                q: "Какой метод вызывается при создании объекта?",
                options: ["start", "create", "init", "make", "class"],
                correct: 2
            },
            {
                q: "Какой формат имеет JSON-файл?",
                options: ["Список строк", "Двоичный код", "Текст в формате ключ–значение", "Табличные данные", "Только числа"],
                correct: 2
            },
            {
                q: "Что делает функция filter()?",
                options: ["Умножает списки", "Применяет функцию и выбирает элементы по условию", "Удаляет пробелы", "Объединяет строки", "Создает словарь"],
                correct: 1
            },
            {
                q: "Какой модуль работает с датой?",
                options: ["random", "math", "datetime", "string", "datework"],
                correct: 2
            },
            {
                q: "Какая команда создаёт базу в PostgreSQL?",
                options: ["NEW DATABASE name;", "CREATE DB name;", "CREATE DATABASE name;", "MAKE DATABASE name;", "DB CREATE name;"],
                correct: 2
            },
            {
                q: "Как выполнить SQL-запрос в Python?",
                options: ["db.run()", "cursor.execute()", "sql.run()", "execute.sql()", "database.exec()"],
                correct: 1
            },
            {
                q: "Какой тип ошибки возникает при делении на ноль?",
                options: ["TypeError", "ZeroDivisionError", "NameError", "ValueError", "StopError"],
                correct: 1
            },
            {
                q: "Как открыть SQLite-базу?",
                options: ["sqlite.load()", "sqlite.connect()", "sql.open()", "base.open()", "postgres.connect()"],
                correct: 1
            },
            {
                q: "Какая конструкция обрабатывает исключения?",
                options: ["try–except", "check–catch", "error–fix", "protect–handle", "validate–except"],
                correct: 0
            },
            {
                q: "Как выглядит комментарий SQL?",
                options: ["#", "//", "--", "!!", "%%"],
                correct: 2
            },
            {
                q: "Какой оператор выбирает данные?",
                options: ["TAKE", "SELECT", "GET", "CHOOSE", "FETCH"],
                correct: 1
            },
            {
                q: "Какое расширение имеет SQLite-файл?",
                options: [".db", ".sql", ".base", ".sq", ".sqlite3"],
                correct: 4
            },
            {
                q: "Как создать таблицу SQL?",
                options: ["NEW TABLE", "CREATE TABLE", "MAKE TABLE", "TABLE CREATE", "ADD TABLE"],
                correct: 1
            },
            {
                q: "Как выполнить commit?",
                options: ["connect.commit()", "save.commit()", "commit.db()", "db.save()", "sql.end()"],
                correct: 0
            },
            {
                q: "Какой модуль содержит PyQt5?",
                options: ["pywindow", "QtPy", "PyQt5", "gui5", "pyui"],
                correct: 2
            },
            {
                q: "Как создать приложение PyQt?",
                options: ["app = QtApp()", "app = QApplication([])", "app = NewApp()", "app = WindowApp()", "app = CreateApp()"],
                correct: 1
            },
            {
                q: "Какой элемент создаёт кнопку?",
                options: ["QPushButton", "QButton", "QtButton", "PushBtn", "NewButton"],
                correct: 0
            },
            {
                q: "Какой файл создаёт Qt Designer?",
                options: [".design", ".form", ".ui", ".qt", ".window"],
                correct: 2
            },
            {
                q: "Как загрузить .ui файл?",
                options: ["load_ui()", "uic.loadUi()", "import.ui()", "designer.load()", "ui.open()"],
                correct: 1
            },
            {
                q: "Какая функция запускает цикл приложения?",
                options: ["app.run()", "app.start()", "app.exec()", "app.go()", "app.launch()"],
                correct: 2
            },
            {
                q: "Что такое сигнал в PyQt5?",
                options: ["Функция интерфейса", "Команда запуска", "Событие, которое генерирует элемент", "Метод обновления", "Тип данных"],
                correct: 2
            },
            {
                q: "Что такое слот?",
                options: ["Событие", "Обработчик сигнала", "Встроенная переменная", "Компонент окна", "Стиль интерфейса"],
                correct: 1
            },
            {
                q: "Как подключить сигнал к слоту?",
                options: ["signal → slot", "connect(signal, slot)", "signal.connect(slot)", "slot.connect(signal)", "bind(signal, slot)"],
                correct: 2
            },
            {
                q: "Как создать простое окно?",
                options: ["Window()", "QWindow()", "QWidget()", "RootWindow()", "BaseWindow()"],
                correct: 2
            }

        ],

        // --- 2-й Вариант ---
        "variant2": [
            {
                q: "Как называется набор правил, определяющих структуру программы?",
                options: ["Логика", "Синтаксис", "Семантика", "Параметры", "Функционал"],
                correct: 1
            },
            {
                q: "Какой тип данных используется для хранения текста?",
                options: ["int", "float", "str", "list", "tuple"],
                correct: 2
            },
            {
                q: "Какой оператор проверяет неравенство?",
                options: ["=", "==", "!=", ":=", "><"],
                correct: 2
            },
            {
                q: "Какой логический оператор означает «или»?",
                options: ["and", "or", "not", "xor", "nor"],
                correct: 1
            },
            {
                q: "Что делает оператор in?",
                options: ["Проверяет длину", "Проверяет наличие элемента", "Перезапускает цикл", "Умножает значения", "Объявляет переменную"],
                correct: 1
            },
            {
                q: "Какой метод строки удаляет пробелы по краям?",
                options: ["trim()", "clear()", "strip()", "remove()", "space()"],
                correct: 2
            },
            {
                q: "Какой тип данных хранит пары ключ–значение?",
                options: ["list", "dict", "tuple", "set", "string"],
                correct: 1
            },
            {
                q: "Какой цикл выполняется, пока условие истинно?",
                options: ["for", "repeat", "while", "loop", "until"],
                correct: 2
            },
            {
                q: "Какое ключевое слово завершает цикл досрочно?",
                options: ["stop", "quit", "break", "exit", "leave"],
                correct: 2
            },
            {
                q: "Какой метод списка добавляет элемент в конец?",
                options: ["append()", "add()", "insert()", "push()", "extend()"],
                correct: 0
            },
            {
                q: "Как создать лямбда-функцию, удваивающую число?",
                options: ["lambda x: x+x", "lambda(x, x2)", "lambda x => x+2", "lambda: 2x", "lambda(x) x*2"],
                correct: 0
            },
            {
                q: "Что делает функция reduce()?",
                options: ["Умножает строки", "Последовательно сводит элементы к одному значению", "Сортирует элементы", "Удаляет элементы", "Проверяет тип данных"],
                correct: 1
            },
            {
                q: "Как импортировать только sqrt из math?",
                options: ["import math.sqrt", "import sqrt", "from math get sqrt", "from math import sqrt", "include math.sqrt"],
                correct: 3
            },
            {
                q: "Как открыть файл для дозаписи?",
                options: ["open(\"f.txt\", \"a\")", "open(\"f.txt\", \"d\")", "open(\"f.txt\", \"x\")", "open(\"f.txt\", \"r+\")", "open(\"f.txt\", \"!\")"],
                correct: 0
            },
            {
                q: "Какой метод файла закрывает файл?",
                options: ["stop()", "shutdown()", "done()", "close()", "exit()"],
                correct: 3
            },
            {
                q: "Как объявить класс Person?",
                options: ["def Person:", "make class Person:", "class Person:", "Person class():", "new Person:"],
                correct: 2
            },
            {
                q: "Как обратиться к атрибуту объекта?",
                options: ["obj:atr", "obj(atr)", "obj->atr", "obj.atr", "atr.obj"],
                correct: 3
            },
            {
                q: "Какое расширение имеет JSON файл?",
                options: [".dat", ".txt", ".conf", ".json", ".jfile"],
                correct: 3
            },
            {
                q: "Какая функция сериализует данные в JSON?",
                options: ["json.write()", "json.serialize()", "json.dumps()", "json.data()", "json.pack()"],
                correct: 2
            },
            {
                q: "Как загрузить JSON из файла?",
                options: ["json.load()", "json.open()", "json.make()", "json.readjson()", "json.parsefile()"],
                correct: 0
            },
            {
                q: "Какая команда выбирает всё из таблицы SQL?",
                options: ["TAKE * FROM", "GET * FROM", "SELECT * FROM", "FETCH * FROM", "READ * FROM"],
                correct: 2
            },
            {
                q: "Какой оператор SQL удаляет строку?",
                options: ["CUT", "DROP", "REMOVE", "DELETE", "ERASE"],
                correct: 3
            },
            {
                q: "Какой тип ошибки возникает при обращении к несуществующей переменной?",
                options: ["NameError", "TypeError", "ValueError", "IndexError", "ZeroDivisionError"],
                correct: 0
            },
            {
                q: "Как выполнить запрос INSERT?",
                options: ["cursor.add()", "cursor.send()", "cursor.execute()", "cursor.write()", "cursor.sql()"],
                correct: 2
            },
            {
                q: "Как получить все строки результата запроса?",
                options: ["fetchall()", "getall()", "readall()", "take()", "list()"],
                correct: 0
            },
            {
                q: "Какой тип данных хранит булево значение в SQLite?",
                options: ["BOOLEAN", "BOOL", "LOGIC", "LOG", "INTEGER"],
                correct: 4
            },
            {
                q: "Как называется поле с уникальными значениями?",
                options: ["UNIQUE", "IDENTITY", "Special", "PK", "Number"],
                correct: 0
            },
            {
                q: "Какой оператор выбирает только уникальные значения?",
                options: ["ONLY", "DISTINCT", "UNIQUE", "DIFFERENT", "CLEAR"],
                correct: 1
            },
            {
                q: "Какой инструмент создаёт графические интерфейсы в PyQt5?",
                options: ["QtAssembler", "UI Maker", "Qt Designer", "PyWindow", "Interface Lab"],
                correct: 2
            },
            {
                q: "К какому классу относится главное окно?",
                options: ["QWidget", "QMainWindow", "WindowRoot", "QApplication", "RootFrame"],
                correct: 1
            },
            {
                q: "Какая функция создаёт кнопку?",
                options: ["Button()", "MakeButton()", "QPushButton()", "NewButton()", "QButton()"],
                correct: 2
            },
            {
                q: "Что делает метод show()?",
                options: ["Закрывает окно", "Удаляет окно", "Показывает окно", "Обновляет интерфейс", "Создаёт окно"],
                correct: 2
            },
            {
                q: "Как загрузить интерфейс из .ui файла?",
                options: ["load.ui()", "uic.importUi()", "uic.loadUi()", "app.loadUi()", "QtLoader.ui()"],
                correct: 2
            },
            {
                q: "Как подключить событие кнопки к функции?",
                options: ["button.whenClick(func)", "button.do(func)", "button.connect(func)", "button.clicked.connect(func)", "button.push(func)"],
                correct: 3
            },
            {
                q: "Что такое QApplication?",
                options: ["Модуль сигналов", "Главное окно программы", "Обработчик стилей", "Основной объект приложения", "Панель элементов"],
                correct: 3
            },
            {
                q: "Какое событие генерируется при нажатии кнопки?",
                options: ["pressed", "clicked", "run", "invoke", "do"],
                correct: 1
            },
            {
                q: "Что такое слот в PyQt5?",
                options: ["Тип данных", "Метод, обрабатывающий сигнал", "Окно", "Кнопка", "Интерфейс"],
                correct: 1
            },
            {
                q: "Как создать простой виджет?",
                options: ["Widget()", "NewWidget()", "QWidget()", "pyWidget()", "QtWidget()"],
                correct: 2
            },
            {
                q: "Как завершить приложение?",
                options: ["exit.app()", "app.finish()", "close.app()", "app.quit()", "quit.window()"],
                correct: 3
            },
            {
                q: "Какой метод обновляет интерфейс?",
                options: ["update()", "refresh()", "reload()", "recreate()", "reset()"],
                correct: 0
            }
        ],

        // --- 3-й Вариант ---
        "variant3": [
            {
                q: "Как называется значение, передаваемое функции?",
                options: ["объект", "параметр", "ключ", "ссылка", "оператор"],
                correct: 1
            },
            {
                q: "Какой тип данных хранит дробные числа?",
                options: ["int", "float", "str", "bool", "list"],
                correct: 1
            },
            {
                q: "Какой оператор означает «больше или равно»?",
                options: [">>", ">>=", ">=", "=>", "!>="],
                correct: 2
            },
            {
                q: "Какой логический оператор меняет значение на противоположное?",
                options: ["not", "or", "and", "xor", "nor"],
                correct: 0
            },
            {
                q: "Какой метод строки переводит текст в верхний регистр?",
                options: ["big()", "upper()", "uppercase()", "top()", "cap()"],
                correct: 1
            },
            {
                q: "Какой тип данных подходит для хранения упорядоченной изменяемой коллекции?",
                options: ["tuple", "list", "set", "dict", "range"],
                correct: 1
            },
            {
                q: "Какой оператор используется для повторения блока фиксированное количество раз?",
                options: ["repeat", "until", "loop", "for", "do"],
                correct: 3
            },
            {
                q: "Какой оператор прерывает выполнение итерации и переходит к следующей?",
                options: ["break", "stop", "skip", "continue", "exit"],
                correct: 3
            },
            {
                q: "Какой метод списка удаляет элемент по значению?",
                options: ["remove()", "delete()", "erase()", "pop()", "drop()"],
                correct: 0
            },
            {
                q: "Какой метод кортежа существует?",
                options: ["append()", "add()", "insert()", "count()", "remove()"],
                correct: 3
            },
            {
                q: "Что делает функция map()?",
                options: ["Превращает список в строку", "Применяет функцию к каждому элементу", "Сортирует данные", "Объединяет списки", "Удаляет элементы по условию"],
                correct: 1
            },
            {
                q: "Какой синтаксис корректен для lambda?",
                options: ["lambda x => x3", "lambda(x){x3}", "lambda x: x3", "lambda: x3", "lambda->x*3"],
                correct: 2
            },
            {
                q: "Как импортировать модуль datetime целиком?",
                options: ["using datetime", "include datetime", "import datetime", "take datetime", "load datetime"],
                correct: 2
            },
            {
                q: "Как открыть файл только для записи?",
                options: ["open(\"file.txt\", \"r\")", "open(\"file.txt\", \"w\")", "open(\"file.txt\", \"rw\")", "open(\"file.txt\", \"c\")", "open(\"file.txt\", \"d\")"],
                correct: 1
            },
            {
                q: "Какой метод считывает одну строку файла?",
                options: ["read()", "readline()", "readrow()", "readstr()", "read1()"],
                correct: 1
            },
            {
                q: "Как называется функция, вызываемая при создании объекта?",
                options: ["class", "new", "make", "init", "start"],
                correct: 3
            },
            {
                q: "Какой метод возвращает список атрибутов объекта?",
                options: ["vars()", "info()", "about()", "attrs()", "describe()"],
                correct: 0
            },
            {
                q: "Какой формат данных поддерживает pickle?",
                options: ["Только строки", "Только словари", "Двоичный формат", "Только числа", "Только списки"],
                correct: 2
            },
            {
                q: "Какой модуль используется для сериализации в binary?",
                options: ["json", "pickle", "struct", "bin", "serial"],
                correct: 1
            },
            {
                q: "Какое расширение чаще всего у SQLite базы?",
                options: [".txt", ".data", ".sql", ".db", ".lite"],
                correct: 3
            },
            {
                q: "Какая команда создаёт таблицу SQL?",
                options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "TABLE ADD", "TABLE CREATE"],
                correct: 1
            },
            {
                q: "Как выбрать одну запись по условию?",
                options: ["SELECT ONE", "SELECT ROW WHERE", "SELECT * WHERE", "SELECT FROM WHERE", "SELECT WHERE ROW"],
                correct: 2
            },
            {
                q: "Что делает SQL оператор ORDER BY?",
                options: ["Фильтрует строки", "Сортирует строки", "Объединяет строки", "Удаляет строки", "Добавляет строки"],
                correct: 1
            },
            {
                q: "Какой оператор объединяет таблицы?",
                options: ["ADD", "JOIN", "LINK", "MERGE", "FUSE"],
                correct: 1
            },
            {
                q: "Как выполнить SQL команду в Python?",
                options: ["sql.run()", "db.send()", "cursor.execute()", "execute.command()", "run.sql()"],
                correct: 2
            },
            {
                q: "Что делает fetchone()?",
                options: ["Получает все строки", "Получает одну строку", "Удаляет строку", "Обновляет строку", "Перезаписывает строку"],
                correct: 1
            },
            {
                q: "Как подключить PostgreSQL в Python?",
                options: ["sqlite3.connect()", "psycopg2.connect()", "sqldb.connect()", "postgres.open()", "pgsql.start()"],
                correct: 1
            },
            {
                q: "Как завершить транзакцию?",
                options: ["cursor.stop()", "db.end()", "connection.commit()", "write.commit()", "db.complete()"],
                correct: 2
            },
            {
                q: "Какой модуль отвечает за интерфейсы в PyQt5?",
                options: ["PyInterface", "PyWindow", "PyQt5.QtWidgets", "QtMaker", "QtUI"],
                correct: 2
            },
            {
                q: "Как создать виджет?",
                options: ["QWidget()", "Window()", "Root()", "Widget()", "QtWidget()"],
                correct: 0
            },
            {
                q: "Как называется основной цикл приложения?",
                options: ["window.loop()", "run.app()", "app.exec()", "exec.window()", "loop.start()"],
                correct: 2
            },
            {
                q: "Как добавить текст на кнопку?",
                options: ["button.setText()", "button.writeText()", "button.textAdd()", "button.label()", "button.input()"],
                correct: 0
            },
            {
                q: "Какой файл создаёт Qt Designer?",
                options: [".qtd", ".qt", ".ui", ".design", ".form"],
                correct: 2
            },
            {
                q: "Как подключить сигнал нажатия?",
                options: ["button.click(func)", "button.pressed(func)", "button.whenClick(func)", "button.clicked.connect(func)", "button.action(func)"],
                correct: 3
            },
            {
                q: "Какой класс является родительским для всех элементов?",
                options: ["QFrame", "QWidget", "QElement", "QBase", "WindowCore"],
                correct: 1
            },
            {
                q: "Что такое сигнал?",
                options: ["Метод обработки", "Событие интерфейса", "Интерфейс", "Стиль окна", "Тип данных"],
                correct: 1
            },
            {
                q: "Что такое слот?",
                options: ["Обработчик события", "Окно", "Изображение", "Текстовый объект", "Атрибут"],
                correct: 0
            },
            {
                q: "Как задать размер окна?",
                options: ["setDimensions()", "setSize()", "setGeometry()", "size()", "resizeWindow()"],
                correct: 2
            },
            {
                q: "Как завершить приложение из PyQt5?",
                options: ["exit()", "stop()", "app.quit()", "quit.app()", "break()"],
                correct: 2
            },
            {
                q: "Как обновить виджет?",
                options: ["refresh()", "update()", "recreate()", "redraw()", "reload()"],
                correct: 1
            }

        ],

        // --- 4-й Вариант ---
        "variant4": [
            {
                q: "Как называется ошибка, возникающая при попытке использовать переменную до её объявления?",
                options: ["TypeError", "NameError", "IndexError", "ValueError", "SyntaxError"],
                correct: 1
            },
            {
                q: "Что делает оператор not in?",
                options: ["Проверяет тип значения", "Проверяет отсутствие элемента", "Присваивает значение", "Перезапускает цикл", "Делает отрицание числа"],
                correct: 1
            },
            {
                q: "Какой тип данных представляет неизменяемую коллекцию ключ–значение?",
                options: ["list", "tuple", "dict", "frozendict", "staticmap"],
                correct: 3
            },
            {
                q: "Какой метод строки удаляет все вхождения подстроки?",
                options: ["remove()", "strip()", "replace()", "clear()", "delete()"],
                correct: 2
            },
            {
                q: "Какой оператор выполняет логическое исключающее «или» (XOR)?",
                options: ["^^", "xor", "^", "<>", "!=="],
                correct: 2
            },
            {
                q: "Что возвращает функция type()?",
                options: ["Длину объекта", "Формат объекта", "Тип объекта", "Адрес объекта", "Значение объекта"],
                correct: 2
            },
            {
                q: "Какой метод списка возвращает индекс элемента?",
                options: ["index()", "find()", "search()", "detect()", "locate()"],
                correct: 0
            },
            {
                q: "Какой метод множества добавляет элемент?",
                options: ["append()", "add()", "push()", "insert()", "extend()"],
                correct: 1
            },
            {
                q: "Как называется блок, где условия проверяются последовательно после if?",
                options: ["else if", "elif", "elseif", "nextif", "alt"],
                correct: 1
            },
            {
                q: "Какой метод строки проверяет, состоит ли она только из цифр?",
                options: ["isnum()", "isdigit()", "numeric()", "isnumber()", "checkdigit()"],
                correct: 1
            },
            {
                q: "Как создать lambda функцию, возвращающую квадрат числа?",
                options: ["lambda x => x^2", "lambda(x): x**2", "lambda x: x*x", "lam(x){x²}", "lambda: xx"],
                correct: 2
            },
            {
                q: "Какой модуль отвечает за работу со случайными значениями?",
                options: ["random", "rand", "rng", "chance", "generate"],
                correct: 0
            },
            {
                q: "Какой синтаксис правильный?",
                options: ["import math as m", "import as math m", "math import as m", "using math → m", "from math alias m"],
                correct: 0
            },
            {
                q: "Каким методом читают весь JSON из строки?",
                options: ["json.decode()", "json.read()", "json.loads()", "json.open()", "json.try()"],
                correct: 2
            },
            {
                q: "Как записать объект Python в JSON-файл?",
                options: ["json.store()", "json.write()", "json.dump()", "json.push()", "json.save()"],
                correct: 2
            },
            {
                q: "Какой формат имеет pickle-файл?",
                options: ["Текстовый", "Двоичный", "JSON", "XML", "Табличный"],
                correct: 1
            },
            {
                q: "Какой модуль используется для работы с CSV?",
                options: ["csv", "table", "comma", "filecsv", "textcsv"],
                correct: 0
            },
            {
                q: "Какое расширение чаще всего у PostgreSQL дампа?",
                options: [".psql", ".pg", ".dump", ".sql", ".pgdata"],
                correct: 3
            },
            {
                q: "Как выбрать ограниченное количество строк?",
                options: ["SELECT FIRST n", "SELECT n ROWS", "SELECT * LIMIT n", "SELECT LIMIT n", "TAKE n"],
                correct: 2
            },
            {
                q: "Что делает команда UPDATE?",
                options: ["Удаляет данные", "Обновляет данные", "Создаёт таблицу", "Переименовывает таблицу", "Добавляет столбец"],
                correct: 1
            },
            {
                q: "Как удалить таблицу целиком?",
                options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE", "KILL TABLE"],
                correct: 1
            },
            {
                q: "Какая функция генерирует случайное число от 0 до 1?",
                options: ["random.one()", "random.rand()", "random.random()", "random.float()", "random.value()"],
                correct: 2
            },
            {
                q: "Что делает оператор LIKE?",
                options: ["Сравнивает числа", "Ищет по шаблону", "Удаляет строки", "Присваивает значение", "Создаёт таблицу"],
                correct: 1
            },
            {
                q: "Как получить названия столбцов из результата cursor?",
                options: ["cursor.columns", "cursor.keys()", "cursor.fields()", "cursor.meta()", "cursor.colnames()"],
                correct: 1
            },
            {
                q: "Что означает * в SELECT * FROM table?",
                options: ["Выбрать только строки", "Выбрать только столбцы", "Выбрать всё", "Выбрать первые 5 строк", "Выбрать уникальные строки"],
                correct: 2
            },
            {
                q: "Какой модуль отвечает за окно приложения PyQt5?",
                options: ["PyQt5.Core", "PyQt5.UI", "PyQt5.QtWidgets", "PyQt5.Design", "PyQt5.App"],
                correct: 2
            },
            {
                q: "Как создать экземпляр QMainWindow?",
                options: ["win = QMainWindow()", "win = Window()", "win = MainWindow()", "win = QtMain()", "win = WindowMain()"],
                correct: 0
            },
            {
                q: "Как задать заголовок окна?",
                options: ["window.header(\"title\")", "window.rename(\"title\")", "window.caption(\"title\")", "window.setWindowTitle(\"title\")", "window.title(\"title\")"],
                correct: 3
            },
            {
                q: "Как добавить кнопку в окно?",
                options: ["window.add(button)", "button.attach(window)", "button.to(window)", "button.moveTo(window)", "window.push(button)"],
                correct: 0
            },
            {
                q: "Как задать положение кнопки?",
                options: ["button.locate(x, y)", "button.setPosition(x, y)", "button.move(x, y)", "button.go(x, y)", "button.setXY()"],
                correct: 2
            },
            {
                q: "Какой метод используется для отображения окна?",
                options: ["draw()", "show()", "display()", "open()", "window()"],
                correct: 1
            },
            {
                q: "Что такое сигналы и слоты?",
                options: ["Механизм взаимодействия элементов интерфейса", "Файловая структура", "Протоколы обмена данными", "Типы переменных", "Модули импортирования"],
                correct: 0
            },
            {
                q: "Как создать горизонтальный layout?",
                options: ["QHBoxLayout()", "QHorizontal()", "LayoutH()", "HorizontalLayout()", "HLayout()"],
                correct: 0
            },
            {
                q: "Как добавить виджет в layout?",
                options: ["layout.insert(widget)", "layout.put(widget)", "layout.addWidget(widget)", "layout.widgetAdd(widget)", "layout.append(widget)"],
                correct: 2
            },
            {
                q: "Как подключить сигнал нажатия кнопки?",
                options: ["button.press(func)", "button.whenClick(func)", "button.clicked.connect(func)", "button.doClick(func)", "button.call(func)"],
                correct: 2
            },
            {
                q: "Что выполняет resize() в PyQt5?",
                options: ["Делает кнопку активной", "Масштабирует виджет", "Меняет цвет", "Удаляет виджет", "Обновляет текст"],
                correct: 1
            },
            {
                q: "Как получить текст из поля ввода QLineEdit?",
                options: ["field.text()", "field.get()", "field.read()", "field.value()", "field.input()"],
                correct: 0
            },
            {
                q: "Как очистить текстовое поле?",
                options: ["field.clr()", "field.clear()", "field.empty()", "field.delete()", "field.clean()"],
                correct: 1
            },
            {
                q: "Как завершить приложение?",
                options: ["app.stop()", "exit.window()", "app.quit()", "quit()", "end.app()"],
                correct: 2
            },
            {
                q: "Что делает метод repaint()?",
                options: ["Полностью перерисовывает элемент", "Закрывает окно", "Удаляет элемент", "Создаёт новый layout", "Меняет тип виджета"],
                correct: 0
            }

        ],

        // --- 5-й Вариант ---
        "variant5": [
            {
                q: "Как называется последовательность инструкций для решения задачи?",
                options: ["Модель", "Алгоритм", "Структура", "Функция", "Программа"],
                correct: 1
            },
            {
                q: "Какой тип данных хранит только два значения: истина/ложь?",
                options: ["int", "float", "bool", "binary", "flag"],
                correct: 2
            },
            {
                q: "Какой оператор означает «меньше или равно»?",
                options: ["<<", "<=", "=<", "!<", "≤"],
                correct: 1
            },
            {
                q: "Какой метод строки делает первую букву заглавной?",
                options: ["big()", "upper1()", "capitalize()", "head()", "cap()"],
                correct: 2
            },
            {
                q: "Какой оператор объединяет строки?",
                options: ["&", "+", "*", "&&", "join"],
                correct: 1
            },
            {
                q: "Какой метод списка вставляет элемент по индексу?",
                options: ["add()", "set()", "insert()", "push()", "merge()"],
                correct: 2
            },
            {
                q: "Как называется цикл, который выполняет блок хотя бы один раз?",
                options: ["while", "for", "do-while", "repeat-until", "until-for"],
                correct: 2
            },
            {
                q: "Какой оператор используется для получения остатка от деления?",
                options: ["//", "%", "mod", "div", "#"],
                correct: 1
            },
            {
                q: "Какой метод множества удаляет элемент, не вызывая ошибку?",
                options: ["remove()", "pop()", "clear()", "discard()", "erase()"],
                correct: 3
            },
            {
                q: "Какой метод строки ищет подстроку и возвращает индекс?",
                options: ["locate()", "find()", "detect()", "look()", "check()"],
                correct: 1
            },
            {
                q: "Как объявить лямбда-функцию без параметров?",
                options: ["lambda(): 5", "lambda 5", "lambda → 5", "lambda: → 5", "lambda(None)"],
                correct: 3
            },
            {
                q: "Какой модуль предоставляет функции для математики?",
                options: ["mathtools", "numbers", "math", "calc", "numeric"],
                correct: 2
            },
            {
                q: "Как импортировать несколько функций из модуля?",
                options: ["import a,b from module", "from module import a, b", "import (a,b) module", "using module(a,b)", "from module take a b"],
                correct: 1
            },
            {
                q: "Как открыть файл в двоичном режиме?",
                options: ["open(\"f\", \"db\")", "open(\"f\", \"b\")", "open(\"f\", \"rb\")", "open(\"f\", \"binary\")", "open(\"f\", \"bin\")"],
                correct: 2
            },
            {
                q: "Какой метод возвращает список строк файла?",
                options: ["rows()", "lines()", "readlines()", "list()", "readrow()"],
                correct: 2
            },
            {
                q: "Какой метод вызывается перед init при создании объекта?",
                options: ["start", "new", "prepare", "alloc", "class"],
                correct: 1
            },
            {
                q: "Как получить список методов объекта?",
                options: ["listmethods()", "dir()", "get()", "funcs()", "about()"],
                correct: 1
            },
            {
                q: "Какое расширение чаще всего у JSON Lines файла?",
                options: [".jlines", ".jsonl", ".lines", ".jdata", ".jtxt"],
                correct: 1
            },
            {
                q: "Как сериализовать Python-объект в pickle?",
                options: ["pickle.store()", "pickle.dump()", "pickle.save()", "pickle.write()", "pickle.export()"],
                correct: 1
            },
            {
                q: "Как загрузить данные из CSV?",
                options: ["csv.read()", "csv.load()", "csv.reader()", "csv.parse()", "csv.open()"],
                correct: 2
            },
            {
                q: "Как выбрать только определённые столбцы?",
                options: ["SELECT ONLY col1, col2", "SELECT col1 col2", "SELECT (col1, col2)", "SELECT col1, col2", "TAKE col1 col2"],
                correct: 3
            },
            {
                q: "Какой SQL-оператор объединяет строки из таблицы по условию?",
                options: ["MERGE", "JOIN", "GROUP", "LINK", "CONNECT"],
                correct: 1
            },
            {
                q: "Какая команда удаляет таблицу, если она существует?",
                options: ["DROP TABLE IF FOUND", "DROP TABLE IF EXIST", "DELETE TABLE IF EXISTS", "DROP TABLE IF EXISTS", "REMOVE TABLE IF EXISTS"],
                correct: 3
            },
            {
                q: "Как выбрать строки, значение в которых НЕ попадает в диапазон?",
                options: ["NOT BETWEEN", "OUT RANGE", "NOT RANGE", "NOT IN RANGE", "OUTSIDE"],
                correct: 0
            },
            {
                q: "Какая команда изменяет структуру таблицы?",
                options: ["CHANGE TABLE", "MODIFY TABLE", "ALTER TABLE", "UPDATE STRUCT", "RESHAPE TABLE"],
                correct: 2
            },
            {
                q: "Какая библиотека подключается для PostgreSQL в Python?",
                options: ["sqlite3", "postgres", "psql", "psycopg2", "libpg"],
                correct: 3
            },
            {
                q: "Как создать вертикальный layout?",
                options: ["VBox()", "QVLayout()", "LayoutV()", "QVBoxLayout()", "VLayout()"],
                correct: 3
            },
            {
                q: "Как добавить виджет в окно без layout?",
                options: ["window.attach(widget)", "window.insert(widget)", "widget.setParent(window)", "window.addWidget(widget)", "window.include(widget)"],
                correct: 2
            },
            {
                q: "Как создать метку текста?",
                options: ["TextLabel()", "QLabel()", "QText()", "Label()", "QtLabel()"],
                correct: 1
            },
            {
                q: "Как изменить размер шрифта?",
                options: ["font.resize()", "font.setPixelSize()", "font.textSize()", "font.updateSize()", "font.change()"],
                correct: 1
            },
            {
                q: "Как изменить цвет текста QLabel?",
                options: ["label.setColor()", "label.setTextColor()", "label.setStyleSheet()", "label.color()", "label.setStyle()"],
                correct: 2
            },
            {
                q: "Какое событие возникает при изменении текста в QLineEdit?",
                options: ["textChanged", "textInput", "onType", "write", "inputChanged"],
                correct: 0
            },
            {
                q: "Какой метод удаляет виджет?",
                options: ["delete()", "remove()", "destroy()", "close()", "deleteLater()"],
                correct: 4
            },
            {
                q: "Как получить размеры окна?",
                options: ["window.size()", "window.getSize()", "window.dimensions()", "window.measure()", "window.scale()"],
                correct: 0
            },
            {
                q: "Как установить фиксированный размер окна?",
                options: ["window.setFixedSize()", "window.sizeFix()", "window.lockSize()", "window.freezeSize()", "window.setLimit()"],
                correct: 0
            },
            {
                q: "Что делает метод raise_()?",
                options: ["Делает окно полупрозрачным", "Перемещает окно выше других", "Перемещает окно вниз", "Разворачивает окно", "Перезагружает интерфейс"],
                correct: 1
            },
            {
                q: "Как получить координаты курсора?",
                options: ["getCursor()", "QCursor.pos()", "Cursor.get()", "mouse.pos()", "cursor.coord()"],
                correct: 1
            },
            {
                q: "Как установить иконку окна?",
                options: ["window.setIcon()", "window.icon()", "window.setWindowIcon()", "window.loadIcon()", "window.applyIcon()"],
                correct: 2
            },
            {
                q: "Как завершить приложение?",
                options: ["quit.window()", "stop()", "app.quit()", "app.close()", "end()"],
                correct: 2
            },
            {
                q: "Что делает метод repaint()?",
                options: ["Обновляет только текст", "Выполняет полную перерисовку", "Перезагружает приложение", "Обновляет базу данных", "Меняет тип виджета"],
                correct: 1
            }

        ],

        // --- 6-й Вариант ---
        "variant6": [
            {
                q: "Какой элемент языка определяет правила написания программ?",
                options: ["Алгоритм", "Синтаксис", "Типизация", "Семантика", "Интерпретация"],
                correct: 1
            },
            {
                q: "Какой тип данных хранит набор символов?",
                options: ["char", "int", "str", "list", "byte"],
                correct: 2
            },
            {
                q: "Какой оператор означает строгое больше?",
                options: ["=>", ">>", ">", ">=", "<>"],
                correct: 2
            },
            {
                q: "Какой метод строки переводит текст в нижний регистр?",
                options: ["low()", "small()", "down()", "lower()", "tiny()"],
                correct: 3
            },
            {
                q: "Какой метод списка удаляет элемент по индексу?",
                options: ["remove()", "erase()", "delete()", "pop()", "drop()"],
                correct: 3
            },
            {
                q: "Какой оператор повторяет строку n раз?",
                options: ["+", "*", "repeat", "**", "//"],
                correct: 1
            },
            {
                q: "Какому типу данных соответствует упорядоченная неизменяемая коллекция?",
                options: ["list", "tuple", "set", "dict", "array"],
                correct: 1
            },
            {
                q: "Каким оператором проверяют принадлежность?",
                options: ["have", "include", "contains", "in", "exist"],
                correct: 3
            },
            {
                q: "Какой цикл используется с диапазоном значений?",
                options: ["repeat", "for", "iterate", "while", "until"],
                correct: 1
            },
            {
                q: "Какой метод множества удаляет все элементы?",
                options: ["drop()", "popAll()", "clear()", "reset()", "purge()"],
                correct: 2
            },
            {
                q: "Какую задачу решает lambda-функция?",
                options: ["Создание именованных функций", "Объявление глобальных переменных", "Создание коротких анонимных функций", "Создание классов", "Создание модулей"],
                correct: 2
            },
            {
                q: "Какой модуль работает с датой и временем?",
                options: ["timecalc", "datetime", "timer", "clock", "dtime"],
                correct: 1
            },
            {
                q: "Как импортировать модуль с alias?",
                options: ["import math -> m", "from math alias m", "import math as m", "math import m", "math->m"],
                correct: 2
            },
            {
                q: "Какой режим открытия файла позволяет и читать, и писать?",
                options: ["\"rw\"", "\"cr\"", "\"r+\"", "\"w?\"", "\"edit\""],
                correct: 2
            },
            {
                q: "Какой метод файла перемещает указатель?",
                options: ["move()", "set()", "seek()", "goto()", "pointer()"],
                correct: 2
            },
            {
                q: "Какой метод возвращает словарь атрибутов объекта?",
                options: ["attrs()", "getinfo()", "properties()", "dict", "vars()"],
                correct: 3
            },
            {
                q: "Что делает метод json.dumps()?",
                options: ["Читает JSON из файла", "Преобразует объект в JSON-строку", "Конвертирует файл в словарь", "Создаёт JSON-файл", "Объединяет JSON-объекты"],
                correct: 1
            },
            {
                q: "Какой модуль работает с двоичными файлами pickle?",
                options: ["json", "struct", "binary", "pickle", "serialize"],
                correct: 3
            },
            {
                q: "Как открыть CSV-файл для чтения?",
                options: ["csv.open()", "open(file)", "open(file, \"csv\")", "open(file, \"r\")", "open(file, \"c\")"],
                correct: 3
            },
            {
                q: "Что делает оператор GROUP BY?",
                options: ["Соединяет таблицы", "Группирует строки по признаку", "Удаляет строки", "Сортирует строки", "Добавляет столбцы"],
                correct: 1
            },
            {
                q: "Какая команда возвращает количество строк таблицы?",
                options: ["COUNT()", "SUM()", "SIZE()", "AMOUNT()", "LEN(*)"],
                correct: 0
            },
            {
                q: "Как выбрать только уникальные строки?",
                options: ["UNIQUE *", "DISTINCT *", "FILTER UNIQUE", "SINGLE ROWS", "NEW LINES"],
                correct: 1
            },
            {
                q: "Какой оператор выбирает только строки, удовлетворяющие условию?",
                options: ["PICK", "WHERE", "MATCH", "FILTER", "TAKE"],
                correct: 1
            },
            {
                q: "Какой SQL оператор выполняет сортировку по убыванию?",
                options: ["SORT DESC", "ORDER BY ↓", "ORDER BY DESC", "DESCENDING BY", "SORT DOWN"],
                correct: 2
            },
            {
                q: "Какой тип базы является встроенной в файл?",
                options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Oracle"],
                correct: 3
            },
            {
                q: "Какая библиотека нужна для PostgreSQL?",
                options: ["pgpython", "psycopg2", "sqlpg", "postsql", "postpy"],
                correct: 1
            },
            {
                q: "Как создать окно PyQt5?",
                options: ["Window()", "QWidget()", "QAppWindow()", "Main()", "UIWidget()"],
                correct: 1
            },
            {
                q: "Как добавить элемент в QVBoxLayout?",
                options: ["layout.insert(widget)", "layout.push(widget)", "layout.addWidget(widget)", "layout.put(widget)", "layout.widgetAdd(widget)"],
                correct: 2
            },
            {
                q: "Как задать координаты виджета?",
                options: ["widget.coords(x,y)", "widget.move(x,y)", "widget.setXY(x,y)", "widget.locate(x,y)", "widget.place(x,y)"],
                correct: 1
            },
            {
                q: "Как создать кнопку?",
                options: ["Button()", "QBtn()", "QPushButton()", "MakeButton()", "QtButton()"],
                correct: 2
            },
            {
                q: "Как получить текст с QLabel?",
                options: ["label.read()", "label.text()", "label.get()", "label.value()", "label.print()"],
                correct: 1
            },
            {
                q: "Как изменить текст QLabel?",
                options: ["setText()", "changeText()", "updateText()", "renameText()", "writeText()"],
                correct: 0
            },
            {
                q: "Что делает метод hide()?",
                options: ["Удаляет виджет", "Прячет виджет", "Выделяет виджет", "Блокирует виджет", "Перемещает виджет"],
                correct: 1
            },
            {
                q: "Как установить иконку кнопки?",
                options: ["button.icon()", "button.setIcon()", "button.setButtonIcon()", "button.applyIcon()", "button.useIcon()"],
                correct: 1
            },
            {
                q: "Какой объект отвечает за главный цикл?",
                options: ["QLoop", "QApplication", "QMainWindow", "QThread", "QCycle"],
                correct: 1
            },
            {
                q: "Какой метод перерисовывает интерфейс?",
                options: ["reload()", "redraw()", "repaint()", "updateUi()", "reset()"],
                correct: 2
            },
            {
                q: "Как подключить событие двойного клика?",
                options: ["widget.doubleClick.connect()", "widget.dblclicked.connect()", "widget.doubleClicked.connect()", "widget.mouseDoubleClickEvent", "widget.onDoubleClick()"],
                correct: 3
            },
            {
                q: "Какой метод возвращает положение окна?",
                options: ["window.getPos()", "window.position()", "window.pos()", "window.coords()", "window.points()"],
                correct: 2
            },
            {
                q: "Как удалить layout?",
                options: ["layout.delete()", "delete layout", "layout.destroy()", "layout.deleteLater()", "layout.remove()"],
                correct: 3
            },
            {
                q: "Как завершить работу приложения?",
                options: ["exit()", "app.quit()", "window.closeApp()", "shutdown()", "stop()"],
                correct: 1
            }

        ],

        // --- 7-й Вариант ---
        "variant7": [
            {
                q: "Как называется минимальная единица информации в программе?",
                options: ["символ", "оператор", "выражение", "модуль", "токен"],
                correct: 4
            },
            {
                q: "Какой тип данных предназначен для хранения целых чисел?",
                options: ["float", "str", "int", "num", "digit"],
                correct: 2
            },
            {
                q: "Какой оператор означает строгую проверку равенства?",
                options: ["=", ":=", "==", "eq", "==="],
                correct: 2
            },
            {
                q: "Какой метод строки удаляет только правые пробелы?",
                options: ["rtrim()", "strip()", "right()", "rstrip()", "cutright()"],
                correct: 3
            },
            {
                q: "Какой метод списка сортирует элементы на месте?",
                options: ["sort()", "order()", "sorted()", "arrange()", "organize()"],
                correct: 0
            },
            {
                q: "Какой оператор выполняет целочисленное деление?",
                options: ["/", "div", "//", "%", "///"],
                correct: 2
            },
            {
                q: "Какой тип данных хранит уникальные элементы без порядка?",
                options: ["dict", "list", "tuple", "set", "unique"],
                correct: 3
            },
            {
                q: "Какой оператор проверяет отрицание условия?",
                options: ["minus", "no", "!", "not", "invert"],
                correct: 3
            },
            {
                q: "Какой цикл выполняется бесконечно, пока не встретит break?",
                options: ["repeat", "loop", "for", "while", "until"],
                correct: 3
            },
            {
                q: "Какой метод списка удаляет последний элемент?",
                options: ["remove()", "cut()", "pop()", "drop()", "erase()"],
                correct: 2
            },
            {
                q: "Какое выражение создаёт lambda с двумя параметрами?",
                options: ["lambda(x,y){ }", "lambda x,y → x+y", "lambda x,y: x+y", "lambda(x+y)", "lambda: x,y"],
                correct: 2
            },
            {
                q: "Какой модуль работает с системным временем?",
                options: ["clock", "datetime", "timer", "time", "sysclock"],
                correct: 3
            },
            {
                q: "Как импортировать все функции модуля?",
                options: ["import * from module", "from module import *", "module import all", "include module.all", "take module.*"],
                correct: 1
            },
            {
                q: "Каким режимом открытия создаётся новый файл?",
                options: ["\"r\"", "\"x\"", "\"w\"", "\"rw\"", "\"rw+\""],
                correct: 2
            },
            {
                q: "Какая функция считывает весь файл разом?",
                options: ["readall()", "file.readall()", "read()", "getline()", "readfile()"],
                correct: 2
            },
            {
                q: "Какой метод объекта вызывается при удалении объекта?",
                options: ["delete", "free", "destroy", "del", "gc"],
                correct: 3
            },
            {
                q: "Что делает json.load()?",
                options: ["Записывает JSON", "Читает JSON из файла", "Преобразует строку в JSON", "Сериализует объект", "Очищает JSON"],
                correct: 1
            },
            {
                q: "Что возвращает pickle.load()?",
                options: ["JSON-объект", "текстовую строку", "сериализованный Python-объект", "словарь только", "список только"],
                correct: 2
            },
            {
                q: "Как преобразовать объект Python в CSV-строку?",
                options: ["csv.convert()", "csv.dumps()", "csv.write()", "csv.export()", "вручную через join"],
                correct: 4
            },
            {
                q: "Как выбрать данные, удовлетворяющие нескольким условиям?",
                options: ["WHERE A OR B", "WHERE A AND B", "WHERE MATCH A B", "FILTER A+B", "FILTER ALL A B"],
                correct: 1
            },
            {
                q: "Как вычислить сумму столбца?",
                options: ["SUM(column)", "COUNT(column)", "TOTAL(column)", "PLUS(column)", "ADD(column)"],
                correct: 0
            },
            {
                q: "Как выбрать строки, значение которых попадает в диапазон?",
                options: ["INSIDE", "BETWEEN", "RANGE", "LIMIT", "BOUND"],
                correct: 1
            },
            {
                q: "Что делает оператор HAVING?",
                options: ["Фильтрует группы", "Удаляет группы", "Создаёт таблицу", "Добавляет столбцы", "Сортирует строки"],
                correct: 0
            },
            {
                q: "Какая команда удаляет строки по условию?",
                options: ["REMOVE FROM", "DELETE WHERE", "DELETE FROM table WHERE …", "CUT FROM table", "DROP WHERE"],
                correct: 2
            },
            {
                q: "Как выполнить параметризированный SQL-запрос?",
                options: ["cursor.execute(query, params)", "cursor.run(query, params)", "cursor.sql(query, params)", "execute(query%params)", "send(query,params)"],
                correct: 0
            },
            {
                q: "Как подключиться к SQLite?",
                options: ["sqlite.connect()", "sql.connect()", "sqlite3.connect()", "pydb.connect()", "sqllite.connect()"],
                correct: 2
            },
            {
                q: "Как создать главное окно в PyQt5?",
                options: ["BaseWindow()", "QWindow()", "QMainWindow()", "QWidget()", "UIMain()"],
                correct: 2
            },
            {
                q: "Как создать горизонтальный контейнер?",
                options: ["QHorizontal()", "QHBoxLayout()", "HorizontalBox()", "LayoutH()", "BoxH()"],
                correct: 1
            },
            {
                q: "Как привязать действие к кнопке?",
                options: ["button.action = func", "button.call(func)", "button.clicked.connect(func)", "button.press(func)", "button.do(func)"],
                correct: 2
            },
            {
                q: "Как задать шрифт виджета?",
                options: ["setFont()", "widget.font()", "font.set()", "widget.setTextFont()", "style.setFont()"],
                correct: 0
            },
            {
                q: "Как получить ширину окна?",
                options: ["window.width()", "window.getWidth()", "window.xsize()", "window.x()", "window.size()[0]"],
                correct: 0
            },
            {
                q: "Как задать минимальный размер окна?",
                options: ["window.minSize()", "window.setMinSize()", "window.setMinimumSize()", "window.limitSize()", "window.setSmallestSize()"],
                correct: 2
            },
            {
                q: "Какое событие вызывается при движении мыши?",
                options: ["mouseMove", "onMouse", "mouseMoved", "mouseMoveEvent", "moveMouseEvent"],
                correct: 3
            },
            {
                q: "Как очистить layout?",
                options: ["layout.clear()", "layout.removeAll()", "layout.delete()", "layout.takeAt() в цикле", "layout.flush()"],
                correct: 3
            },
            {
                q: "Как остановить таймер?",
                options: ["timer.stop()", "timer.pause()", "timer.end()", "timer.quit()", "timer.kill()"],
                correct: 0
            },
            {
                q: "Как изменить цвет фона виджета?",
                options: ["widget.color()", "widget.setBackground()", "widget.setStyleSheet()", "widget.styleColor()", "widget.bg()"],
                correct: 2
            },
            {
                q: "Как вывести сообщение в консоль?",
                options: ["echo()", "console.write()", "print()", "output()", "sysout()"],
                correct: 2
            },
            {
                q: "Как получить текст поля QComboBox?",
                options: ["combo.value()", "combo.item()", "combo.currentText()", "combo.get()", "combo.read()"],
                correct: 2
            },
            {
                q: "Как перенести окно в центр экрана?",
                options: ["window.center()", "window.moveCenter()", "window.move() с вычислением центра", "app.center(window)", "ui.center()"],
                correct: 2
            },
            {
                q: "Как перезагрузить интерфейс?",
                options: ["reload()", "refreshUi()", "update()", "recreate()", "restartUi()"],
                correct: 2
            }

        ],

        // --- 8-й Вариант ---
        "variant8": [
            {
                q: "Как называется набор правил, определяющий допустимые формы записи программы?",
                options: ["Логика", "Синтаксис", "Схема", "Алгоритм", "Структура"],
                correct: 1
            },
            {
                q: "Какой тип данных хранит значение True/False?",
                options: ["bit", "boolean", "bool", "flag", "logic"],
                correct: 2
            },
            {
                q: "Какой оператор используется для сравнения «строго меньше»?",
                options: ["<=", "<", "<<", "<==", "≺"],
                correct: 1
            },
            {
                q: "Какой метод возвращает количество вхождений подстроки в строке?",
                options: ["count()", "num()", "occurrences()", "findall()", "total()"],
                correct: 0
            },
            {
                q: "Какой метод списка разворачивает элементы в обратном порядке?",
                options: ["reverse()", "flip()", "invert()", "swap()", "roll()"],
                correct: 0
            },
            {
                q: "Какой оператор выполняет возведение в степень?",
                options: ["^", "pow", "exp", "**", "^^"],
                correct: 3
            },
            {
                q: "Какой тип данных хранит пары вида ключ–значение?",
                options: ["set", "map", "dict", "pair", "tuple"],
                correct: 2
            },
            {
                q: "Какой оператор используется для отрицания логического выражения?",
                options: ["!=", "not", "!", "inverse", "anti"],
                correct: 1
            },
            {
                q: "Какой цикл выполняется пока условие истинно?",
                options: ["loop", "for", "repeat", "while", "do"],
                correct: 3
            },
            {
                q: "Какой метод списка добавляет несколько элементов сразу?",
                options: ["addall()", "pushall()", "extend()", "merge()", "appendall()"],
                correct: 2
            },
            {
                q: "Что делает lambda функция?",
                options: ["Создаёт большие модули", "Создаёт анонимные мини-функции", "Создаёт базы данных", "Создаёт файлы", "Создаёт внешние процессы"],
                correct: 1
            },
            {
                q: "Какой модуль позволяет работать с математическими константами?",
                options: ["matplotlib", "random", "math", "algebra", "numbers"],
                correct: 2
            },
            {
                q: "Как импортировать модуль math частично?",
                options: ["import math(parts)", "take math.partial", "from math import sin", "math import sin", "load math.sin"],
                correct: 2
            },
            {
                q: "Каким параметром открыть файл, чтобы добавлять данные в конец?",
                options: ["\"c\"", "\"a\"", "\"t\"", "\"e\"", "\"add\""],
                correct: 1
            },
            {
                q: "Какой метод файла проверяет, достигнут ли конец файла?",
                options: ["file.end()", "eof()", "file.eof()", "atEnd()", "read.end()"],
                correct: 2
            },
            {
                q: "Как получить имя класса объекта?",
                options: ["type(obj).title", "obj.class.name", "class(obj).name", "typename(obj)", "obj.name"],
                correct: 1
            },
            {
                q: "Что делает json.loads()?",
                options: ["Загружает JSON-файл", "Преобразует JSON-строку в объект", "Создаёт JSON-файл", "Удаляет JSON", "Сохраняет JSON"],
                correct: 1
            },
            {
                q: "Что делает pickle.dumps()?",
                options: ["Преобразует объект в бинарную строку", "Загружает объект из файла", "Удаляет бинарный файл", "Создаёт текстовый формат", "Выводит объект"],
                correct: 0
            },
            {
                q: "Как получить writer для CSV?",
                options: ["csv.getwriter()", "csv.openwriter()", "csv.writer()", "csv.writerline()", "csv.out()"],
                correct: 2
            },
            {
                q: "Как выбрать строки, где значение НЕ равно заданному?",
                options: ["WHERE !=", "WHERE NOT ==", "WHERE NOT VALUE", "WHERE NOTEQ", "WHERE NO MATCH"],
                correct: 0
            },
            {
                q: "Какая команда группирует строки?",
                options: ["GROUP BY", "SORT BY", "ORDER BY", "MERGE BY", "FILTER BY"],
                correct: 0
            },
            {
                q: "Как получить максимальное значение столбца?",
                options: ["PEAK()", "HIGH()", "MAX()", "TOP()", "MOST()"],
                correct: 2
            },
            {
                q: "Что делает INNER JOIN?",
                options: ["Удаляет строки", "Показывает только совпадающие строки", "Показывает все строки", "Создаёт таблицу", "Разделяет таблицы"],
                correct: 1
            },
            {
                q: "Как выбрать только первые N строк?",
                options: ["FIRST N", "ROWS(N)", "LIMIT N", "CUT N", "SELECT N"],
                correct: 2
            },
            {
                q: "Что делает оператор IN?",
                options: ["Сравнивает строки", "Проверяет попадание в список", "Удаляет строки", "Обновляет строки", "Добавляет строки"],
                correct: 1
            },
            {
                q: "Как подключить PostgreSQL?",
                options: ["Postgre.connect()", "DB.connect()", "psycopg2.connect()", "pgsql.open()", "post.connect()"],
                correct: 2
            },
            {
                q: "Как создать виджет-кнопку?",
                options: ["QButton", "MakeButton()", "QPushButton()", "Qt.Btn()", "NewButton()"],
                correct: 2
            },
            {
                q: "Как разместить элементы вертикально?",
                options: ["QVBoxLayout()", "QVertical()", "VerticalLayout()", "LayoutV()", "BoxV()"],
                correct: 0
            },
            {
                q: "Как изменить размер кнопки?",
                options: ["button.size()", "button.setSize()", "button.resize()", "button.changeSize()", "button.setDims()"],
                correct: 2
            },
            {
                q: "Как получить текстовый ввод от пользователя?",
                options: ["QUserInput()", "QLineEdit()", "QTextForm()", "QInput()", "QFormEdit()"],
                correct: 1
            },
            {
                q: "Как скрыть окно?",
                options: ["hideWindow()", "window.hide()", "window.invisible()", "conceal()", "window.remove()"],
                correct: 1
            },
            {
                q: "Как задать цвет текста в QLabel?",
                options: ["label.setTextColor()", "label.color()", "label.setStyleSheet()", "label.setFontColor()", "label.paintColor()"],
                correct: 2
            },
            {
                q: "Какой метод перерисовывает виджет?",
                options: ["reprint()", "repaint()", "redraw()", "drawagain()", "reset()"],
                correct: 1
            },
            {
                q: "Как получить текущие координаты окна?",
                options: ["window.getPosition()", "window.coords()", "window.position()", "window.pos()", "window.loc()"],
                correct: 3
            },
            {
                q: "Как задать стиль кнопки?",
                options: ["button.setButtonStyle()", "button.style()", "button.setStyleSheet()", "button.setCSS()", "button.css()"],
                correct: 2
            },
            {
                q: "Как реализовать двойной клик в PyQt5?",
                options: ["mouseDoubleClickEvent", "doubleClickAction()", "mouseClickDbl()", "eventDouble()", "double()"],
                correct: 0
            },
            {
                q: "Как получить текущий индекс QComboBox?",
                options: ["combo.getIndex()", "combo.index()", "combo.currentIndex()", "combo.row()", "combo.get()"],
                correct: 2
            },
            {
                q: "Как удалить виджет?",
                options: ["widget.remove()", "widget.deleteLater()", "widget.destroy()", "widget.clean()", "widget.kill()"],
                correct: 2
            },
            {
                q: "Как задать иконку окна?",
                options: ["window.icon()", "window.loadIcon()", "window.setWindowIcon()", "window.useIcon()", "window.addIcon()"],
                correct: 2
            },
            {
                q: "Как завершить программу?",
                options: ["finish()", "complete()", "app.quit()", "end()", "exit.window()"],
                correct: 2
            }

        ],

        // --- 9-й Вариант ---
        "variant9": [
            {
                q: "Как называется набор инструкций, объединённых в логический блок?",
                options: ["Модуль", "Оператор", "Функция", "Блок", "Объект"],
                correct: 2
            },
            {
                q: "К какому типу относится значение 3.14?",
                options: ["int", "str", "float", "bool", "number"],
                correct: 2
            },
            {
                q: "Какой оператор означает «строго не равно»?",
                options: ["~=", "===", "!", "!=", "not="],
                correct: 3
            },
            {
                q: "Какой метод строки проверяет, состоит ли она из букв?",
                options: ["onlyletters()", "isalpha()", "letters()", "alpha()", "islet()"],
                correct: 1
            },
            {
                q: "Какой метод списка удаляет элемент по индексу и возвращает его?",
                options: ["delete()", "remove()", "pop()", "cut()", "take()"],
                correct: 2
            },
            {
                q: "Какой оператор используется для конкатенации списка самим собой?",
                options: ["**", "++", "+", "merge", "join"],
                correct: 2
            },
            {
                q: "Какой тип данных является неизменяемым?",
                options: ["list", "dict", "tuple", "set", "array"],
                correct: 2
            },
            {
                q: "Какой оператор означает проверку принадлежности?",
                options: ["check", "have", "contain", "include", "in"],
                correct: 4
            },
            {
                q: "Какой цикл завершится, если условие изначально ложное?",
                options: ["for", "while", "until", "repeat", "loop"],
                correct: 0
            },
            {
                q: "Какой метод списка ищет значение и возвращает индекс?",
                options: ["check()", "find()", "index()", "locate()", "scan()"],
                correct: 2
            },
            {
                q: "Что делает функция lambda x: x-1?",
                options: ["Увеличивает x на 1", "Умножает x на 1", "Вычитает 1 из x", "Делит x", "Возводит x в степень"],
                correct: 2
            },
            {
                q: "Какой модуль работает с паузами и задержками?",
                options: ["datetime", "wait", "sleep", "time", "timer"],
                correct: 3
            },
            {
                q: "Каким оператором импортируется весь модуль?",
                options: ["get module", "from module import all", "import module", "include module", "take module"],
                correct: 2
            },
            {
                q: "Каким режимом открыть файл только для чтения в бинарном виде?",
                options: ["\"rb\"", "\"br\"", "\"r@b\"", "\"b\"", "\"r-b\""],
                correct: 0
            },
            {
                q: "Как прочитать одну строку файла?",
                options: ["read()", "read1()", "readline()", "getline()", "row()"],
                correct: 2
            },
            {
                q: "Какой метод объекта вызывается при представлении его в виде строки?",
                options: ["str", "show", "print", "view", "info"],
                correct: 0
            },
            {
                q: "Как преобразовать Python-словарь в JSON-файл?",
                options: ["json.write()", "json.export()", "json.dump()", "json.save()", "json.push()"],
                correct: 2
            },
            {
                q: "Что делает pickle.load()?",
                options: ["Загружает бинарный объект из файла", "Создаёт бинарный файл", "Преобразует JSON в Python", "Очищает файл", "Сериализует объект"],
                correct: 0
            },
            {
                q: "Как создать объект writer для CSV?",
                options: ["csv.writer()", "csv.write()", "csv.writeline()", "csv.makewriter()", "csv.format()"],
                correct: 0
            },
            {
                q: "Как выбрать строки с условиями И и ИЛИ?",
                options: ["WHERE A AND B OR C", "FILTER A OR B AND C", "MATCH A AND B OR C", "SELECT CONDITION A B C", "ONLY WHERE A B C"],
                correct: 0
            },
            {
                q: "Какая функция вычисляет среднее значение?",
                options: ["MID()", "AVERAGE()", "AVG()", "MEAN()", "BAL()"],
                correct: 2
            },
            {
                q: "Как выбрать строки, где значение начинается с буквы A?",
                options: ["WHERE name = \"A*\"", "WHERE name START \"A\"", "WHERE name LIKE \"A%\"", "WHERE name MATCH \"A\"", "WHERE name BEGIN \"A\""],
                correct: 2
            },
            {
                q: "Что делает FULL JOIN?",
                options: ["Объединяет только совпадающие строки", "Возвращает только уникальные строки", "Объединяет ВСЕ строки обеих таблиц", "Возвращает только отсутствующие строки", "Создаёт таблицу"],
                correct: 2
            },
            {
                q: "Как выбрать строки, где значение NULL?",
                options: ["WHERE x = NULL", "WHERE x IS NULL", "WHERE x == NULL", "WHERE x EQUAL NULL", "WHERE NULL TRUE"],
                correct: 1
            },
            {
                q: "Что делает оператор LIMIT?",
                options: ["Устанавливает формат столбца", "Ограничивает количество строк", "Удаляет строку", "Создаёт таблицу", "Добавляет столбцы"],
                correct: 1
            },
            {
                q: "Как подключиться к PostgreSQL в Python?",
                options: ["import post", "import psql", "psycopg2.connect()", "sqlpg.connect()", "pg.connect()"],
                correct: 2
            },
            {
                q: "Как создать простой виджет?",
                options: ["Widget()", "PyWidget()", "QForm()", "QWidget()", "QtWidget()"],
                correct: 3
            },
            {
                q: "Как создать сеточный layout?",
                options: ["QGridLayout()", "QMatrix()", "QLayoutGrid()", "LayoutGrid()", "QGrid()"],
                correct: 0
            },
            {
                q: "Как установить позицию кнопки на форме?",
                options: ["button.loc()", "button.pos(x,y)", "button.move(x,y)", "button.translate(x,y)", "button.shift(x,y)"],
                correct: 2
            },
            {
                q: "Как передать окно в полноэкранный режим?",
                options: ["window.expand()", "window.full()", "window.showFullScreen()", "window.screen()", "window.max()"],
                correct: 2
            },
            {
                q: "Как задать шрифт окна?",
                options: ["window.setFont()", "window.font()", "window.fontSize()", "window.editFont()", "window.setFontStyle()"],
                correct: 0
            },
            {
                q: "Как изменить текст кнопки?",
                options: ["button.rename()", "button.setLabel()", "button.changeText()", "button.setText()", "button.text()"],
                correct: 3
            },
            {
                q: "Как получить выбранный элемент QComboBox?",
                options: ["combo.read()", "combo.selected()", "combo.get()", "combo.currentText()", "combo.value()"],
                correct: 3
            },
            {
                q: "Как скрыть виджет?",
                options: ["hide()", "widget.hide()", "remove()", "widget.off()", "delete()"],
                correct: 1
            },
            {
                q: "Как обновить интерфейс принудительно?",
                options: ["redraw()", "repaint()", "reprint()", "restyle()", "rebuild()"],
                correct: 1
            },
            {
                q: "Какой метод перемещает окно?",
                options: ["window.setXY()", "move()", "window.position()", "window.go()", "window.translate()"],
                correct: 1
            },
            {
                q: "Как установить заголовок окна?",
                options: ["window.name()", "window.setWindowTitle()", "window.setLabel()", "window.caption()", "window.rename()"],
                correct: 1
            },
            {
                q: "Как создать диалоговое окно сообщения?",
                options: ["QMessage()", "QMsgBox()", "QMessageBox()", "QBoxMessage()", "DialogMessage()"],
                correct: 2
            },
            {
                q: "Как удалить layout корректно?",
                options: ["layout.kill()", "layout.drop()", "layout.deleteLater()", "layout.remove()", "layout.end()"],
                correct: 2
            },
            {
                q: "Как завершить приложение PyQt5?",
                options: ["shutdown()", "quit()", "app.quit()", "end()", "window.end()"],
                correct: 2
            }

        ]
    },

    // ==============================================
    // 🗄️ ПРЕДМЕТ: DATABASE (Русский язык - 9 Вариантов)
    // ==============================================
    "db_ru": {
        "variant1": [
            {
                q: "Как лучше всего описать базу данных?",
                options: ["Набор несвязанных файлов на диске", "Организованная структура данных, доступная по определённым правилам", "Программа для редактирования текстов", "Система для передачи данных по сети", "Набор случайных таблиц без управления"],
                correct: 1
            },
            {
                q: "Какое основное назначение базы данных?",
                options: ["Хранение и управление структурированными данными", "Печать документов", "Архивирование изображений без структуры", "Выполнение только математических вычислений", "Ускорение работы операционной системы"],
                correct: 0
            },
            {
                q: "Что такое таблица в базе данных?",
                options: ["Отдельный файл операционной системы", "Электронная схема связей данных", "Только список столбцов без данных", "Только список строк без структуры", "Структура, состоящая из строк и столбцов, где хранятся данные"],
                correct: 4
            },
            {
                q: "Как называется строка в таблице базы данных?",
                options: ["Поле", "Индекс", "Запись", "Ключ", "Секция"],
                correct: 2
            },
            {
                q: "Как называется столбец в таблице базы данных?",
                options: ["Поле", "Индекс", "Запись", "Связь", "Атрибут связи"],
                correct: 0
            },
            {
                q: "Какое из перечисленных является типом базы данных?",
                options: ["Табличная и листовая", "Реляционная и документная", "Отчётная и графическая", "Сеточная и файловая только", "Плоская и структурная"],
                correct: 1
            },
            {
                q: "Что характеризует реляционную базу данных?",
                options: ["Хранение данных только в виде графиков", "Отсутствие связей между данными", "Хранение только бинарных файлов", "Хранение данных в виде таблиц с отношениями между ними", "Хранение данных только в одном файле"],
                correct: 3
            },
            {
                q: "Что относится к основным понятиям базы данных?",
                options: ["Папка, окно, принтер", "Тема, шрифт, стиль", "Таблица, запись, поле", "Блокнот, файл, корзина", "Лист, окно, ячейка"],
                correct: 2
            },
            {
                q: "Какое утверждение о СУБД верно?",
                options: ["Это только устройство для ввода данных", "Это средство для хранения изображений", "Это вид файла с расширением .db", "Это только язык программирования", "Это программа для управления базами данных"],
                correct: 4
            },
            {
                q: "Какую роль выполняет СУБД?",
                options: ["Только рисует диаграммы", "Обеспечивает создание, хранение и обработку данных в базе", "Только выводит отчёты на печать", "Только создаёт резервные копии", "Только управляет пользователями"],
                correct: 1
            },
            {
                q: "Что такое SQL?",
                options: ["Операционная система", "Язык структурированных запросов к реляционным БД", "Графический редактор", "Язык разметки веб-страниц", "Программа для создания таблиц"],
                correct: 1
            },
            {
                q: "Какой тип баз данных типично используют SQL?",
                options: ["Реляционные", "Файловые", "Документные", "Графовые", "Нейронные"],
                correct: 0
            },
            {
                q: "Что верно о NoSQL базах данных?",
                options: ["Они используют только таблицы", "Они работают только офлайн", "Это устаревшая версия SQL", "Они не подходят для больших данных", "Это семейство нереляционных систем для гибкой работы с данными"],
                correct: 4
            },
            {
                q: "В чём ключевое отличие SQL и NoSQL?",
                options: ["SQL работает без сети, NoSQL только в сети", "SQL хранит только числа, NoSQL только строки", "SQL — строгие таблицы и схемы, NoSQL — гибкие модели данных", "Отличий нет", "SQL не поддерживает операции обновления"],
                correct: 2
            },
            {
                q: "Что описывает структура базы данных?",
                options: ["Только число пользователей", "Размер оперативной памяти", "Формат печати отчётов", "Набор таблиц, их поля и связи между ними", "Права доступа всех пользователей"],
                correct: 3
            },
            {
                q: "Какая команда создаёт новую базу данных?",
                options: ["NEW DATABASE", "MAKE DATABASE", "CREATE DATABASE", "ADD DATABASE", "BUILD DATABASE"],
                correct: 2
            },
            {
                q: "Какая команда создаёт новую таблицу?",
                options: ["CREATE TABLE", "NEW TABLE", "INSERT TABLE", "BUILD TABLE", "MAKE TABLE"],
                correct: 0
            },
            {
                q: "Что задаётся при создании таблицы?",
                options: ["Только режим доступа", "Название таблицы, имена полей и типы данных", "Только имена пользователей", "Только индексы", "Только связи"],
                correct: 1
            },
            {
                q: "Что лучше всего описывает структуру базы данных?",
                options: ["Случайный набор таблиц", "Логически организованный набор связанных таблиц", "Только одна таблица", "Набор несвязанных файлов", "Набор папок с документами"],
                correct: 1
            },
            {
                q: "Для чего указывать тип данных поля?",
                options: ["Чтобы изменить интерфейс", "Чтобы запретить сортировку", "Чтобы ускорить печать", "Чтобы ограничить число пользователей", "Чтобы определить допустимые значения и операции"],
                correct: 4
            },
            {
                q: "Что делает INSERT?",
                options: ["Создаёт таблицу", "Добавляет новые строки", "Удаляет таблицу", "Изменяет столбцы", "Сортирует данные"],
                correct: 1
            },
            {
                q: "Что выполняет команда UPDATE?",
                options: ["Выборку данных", "Удаление таблицы", "Обновление существующих записей", "Создание индекса", "Очистку БД"],
                correct: 2
            },
            {
                q: "Для чего используется DELETE?",
                options: ["Удаление БД", "Удаление индексов", "Удаление столбцов", "Удаление выбранных строк", "Удаление схемы БД"],
                correct: 3
            },
            {
                q: "Что делает SELECT?",
                options: ["Создаёт БД", "Выполняет выборку данных", "Удаляет данные", "Изменяет структуру", "Архивирует таблицу"],
                correct: 1
            },
            {
                q: "Какой оператор фильтрует строки?",
                options: ["WHERE", "ORDER BY", "GROUP BY", "LIMIT", "FILTER"],
                correct: 0
            },
            {
                q: "Какой оператор задаёт сортировку?",
                options: ["SELECT", "ORDER BY", "FILTER BY", "GROUP BY", "SET ORDER"],
                correct: 1
            },
            {
                q: "Для чего используют ORDER BY?",
                options: ["Выбор таблицы", "Удаление строк", "Сортировка строк", "Объединение таблиц", "Создание индекса"],
                correct: 2
            },
            {
                q: "Ограничение количества строк делается через:",
                options: ["LIMIT", "STOP", "END", "CUT", "SHORT"],
                correct: 0
            },
            {
                q: "Что означает SELECT * FROM table?",
                options: ["Выбор одной строки", "Выбор всех БД", "Удаление таблицы", "Создание таблицы", "Выбор всех столбцов из таблицы"],
                correct: 4
            },
            {
                q: "Что верно о WHERE?",
                options: ["Задает структуру", "Отбирает строки по условию", "Применяется только для чисел", "Только для строк", "Только для первичных ключей"],
                correct: 1
            },
            {
                q: "Что такое объект в проектировании БД?",
                options: ["Физический сервер", "Индекс", "Пользователь", "Сущность предметной области", "Запрос"],
                correct: 3
            },
            {
                q: "Что такое атрибут?",
                options: ["Связь", "Свойство сущности", "Имя базы", "Набор пользователей", "Имя индекса"],
                correct: 1
            },
            {
                q: "Что такое связь (relationship)?",
                options: ["Любой столбец", "Отношение между сущностями", "Имя поля", "Признак сортировки", "Роль пользователя"],
                correct: 1
            },
            {
                q: "Что называется кардинальностью связи?",
                options: ["Тип отношения между сущностями по количеству экземпляров", "Сколько строк в таблице", "Максимум столбцов", "Максимум пользователей", "Максимум индексов"],
                correct: 0
            },
            {
                q: "Пример связи «один ко многим»:",
                options: ["Один студент — много групп", "Один вуз — один студент", "Один студент — один документ", "Много студентов — много вузов", "Одна группа — много студентов"],
                correct: 4
            },
            {
                q: "ER-диаграмма описывает:",
                options: ["Настройки сервера", "Только права пользователей", "Объекты, атрибуты и связи", "Только индексы", "Цвет интерфейса"],
                correct: 2
            },
            {
                q: "Сущности и атрибуты определяют на этапе:",
                options: ["Физической печати", "Логического проектирования", "Резервного копирования", "Установки СУБД", "Настройки сети"],
                correct: 1
            },
            {
                q: "Цель логического проектирования:",
                options: ["Модель данных в виде таблиц и связей", "Формат резервных копий", "Установка ОС", "Настройка портов", "Выбор шрифта интерфейса"],
                correct: 0
            },
            {
                q: "Для чего нужна нормализация?",
                options: ["Ускорения печати", "Удаления таблиц", "Увеличения количества индексов", "Шифрования данных", "Уменьшения избыточности и аномалий"],
                correct: 4
            },
            {
                q: "Что верно о реляционной модели?",
                options: ["Данные — графики", "Данные хранятся только в одной таблице", "Связи только через файлы", "Таблицы не могут быть связаны", "Данные — таблицы с отношениями"],
                correct: 4
            },
        ],
        "variant2": [
            {
                q: "Что такое первичный ключ?",
                options: ["Любой столбец", "Уникальный идентификатор записи", "Пароль", "Имя БД", "Имя пользователя"],
                correct: 1
            },
            {
                q: "Главное свойство первичного ключа:",
                options: ["Значения могут повторяться", "Только текст", "Все значения NULL", "Уникальность и NOT NULL", "Только числа"],
                correct: 3
            },
            {
                q: "Что такое внешний ключ?",
                options: ["Поле без связей", "Поле, ссылающееся на PK другой таблицы", "Имя БД", "Имя пользователя", "Поле для сортировки"],
                correct: 1
            },
            {
                q: "Для чего используют внешний ключ?",
                options: ["Печать отчётов", "Сортировка", "Ссылочная целостность", "Шифрование", "Удаление индексов"],
                correct: 2
            },
            {
                q: "Что такое индекс?",
                options: ["Отчёт сервера", "Имя пользователя", "Структура для ускорения поиска", "Архив", "Папка в БД"],
                correct: 2
            },
            {
                q: "Как индекс влияет на производительность?",
                options: ["Всегда замедляет чтение", "Ускоряет поиск, замедляет запись", "Не влияет", "Ускоряет вставку", "Ускоряет удаление"],
                correct: 1
            },
            {
                q: "Как задаётся первичный ключ?",
                options: ["PRIMARY KEY", "MAIN KEY", "CREATE INDEX", "CREATE PK", "ROOT KEY"],
                correct: 0
            },
            {
                q: "Как задаётся внешний ключ?",
                options: ["FOREIGN KEY ... REFERENCES ...", "ONLY KEY", "MAIN FOREIGN", "PRIMARY FOREIGN", "OUTER KEY"],
                correct: 0
            },
            {
                q: "Что обеспечивает ссылочная целостность?",
                options: ["Удаление любых данных", "Согласованность связанных таблиц", "Быстрое копирование", "Сортировку", "Разделение по пользователям"],
                correct: 1
            },
            {
                q: "Что верно об индексе?",
                options: ["Всегда создаётся автоматически", "Создается только на PK", "Это имя таблицы", "Запрещает поиск", "Может быть создан на одном или нескольких столбцах"],
                correct: 4
            },
            {
                q: "Назначение SELECT:",
                options: ["Выборка данных", "Создание таблицы", "Удаление таблицы", "Создание индекса", "Сброс значений"],
                correct: 0
            },
            {
                q: "WHERE в практике нужен для:",
                options: ["Описания структуры", "Фильтрации строк", "Создания БД", "Удаления индексов", "Генерации отчёта"],
                correct: 1
            },
            {
                q: "Оператор сортировки:",
                options: ["SORT", "ORDER BY", "GROUP", "FILTER", "SORT BY"],
                correct: 1
            },
            {
                q: "Как указать сортировку по убыванию?",
                options: ["ORDER BY field UP", "ORDER BY field DESC", "ORDER BY field MINUS", "ORDER BY field DOWN", "ORDER BY field NEG"],
                correct: 1
            },
            {
                q: "Что делает INSERT?",
                options: ["Удаляет строку", "Создаёт пользователя", "Меняет структуру", "Создаёт базу", "Добавляет запись"],
                correct: 4
            },
            {
                q: "UPDATE используется для:",
                options: ["Сортировки", "Добавления индекса", "Создания таблиц", "Удаления базы", "Изменения значений"],
                correct: 4
            },
            {
                q: "Что делает DELETE?",
                options: ["Удаляет выбранные строки", "Удаляет столбцы", "Удаляет всю базу", "Меняет тип данных", "Сбрасывает ключи"],
                correct: 0
            },
            {
                q: "Что верно о реляционной модели?",
                options: ["Нет ключей", "Таблицы связаны ключами", "Все данные в одной строке", "Связи только в текстовом описании", "Таблицы несвязанные"],
                correct: 1
            },
            {
                q: "Что значит “комплексные запросы”?",
                options: ["Одна таблица", "Несколько операторов и таблиц вместе", "Запросы без условий", "Только DELETE", "Только UPDATE"],
                correct: 1
            },
            {
                q: "Что чаще входит в комплексные запросы?",
                options: ["PRINT, EXIT", "SELECT, WHERE, JOIN, ORDER BY", "CREATE, DROP", "BACKUP, RESTORE", "IMPORT, EXPORT"],
                correct: 1
            },
            {
                q: "Назначение ER-диаграмм:",
                options: ["Для декора", "Создание отчётов", "Заменяют физическую модель", "Настройка сервера", "Визуальное отражение структуры БД"],
                correct: 4
            },
            {
                q: "Результат качественного логического проектирования:",
                options: ["Несвязанные таблицы", "Нормализованные таблицы и корректные связи", "Список пользователей", "Набор отчётов", "Только индексы"],
                correct: 1
            },
            {
                q: "Что верно о типах данных?",
                options: ["Неверный тип вызывает ошибки", "Можно не указывать", "Не влияет на производительность", "Нужен только для ключей", "Используется только в SQL"],
                correct: 0
            },
            {
                q: "CREATE TABLE делает:",
                options: ["Создает таблицу с полями и атрибутами", "Удаляет таблицу", "Обновляет строки", "Сортирует строки", "Создаёт отчёт"],
                correct: 0
            },
            {
                q: "Как указать PK?",
                options: ["column MAIN KEY", "column PRIMARY KEY", "column ONLY KEY", "column UNIQUE ONLY", "column FIRST KEY"],
                correct: 1
            },
            {
                q: "Как указать внешний ключ?",
                options: ["FOREIGN KEY (field) REFERENCES table(field)", "OUT KEY", "EXTERNAL KEY", "LINK KEY", "CHILD KEY"],
                correct: 0
            },
            {
                q: "Что дают индексы между таблицами?",
                options: ["Уменьшают доступность", "Ускоряют поиск и соединения", "Запрещают обновление", "Отключают связи", "Изменяют типы данных"],
                correct: 1
            },
            {
                q: "Зачем понимать структуру БД?",
                options: ["Чтобы считать записи", "Чтобы упростить бэкап", "Чтобы отключить проверки", "Чтобы грамотно спроектировать связи", "Чтобы добавить индексы"],
                correct: 3
            },
            {
                q: "Роль СУБД:",
                options: ["Только хранит файлы", "Управляет данными, доступом и целостностью", "Только печатает отчёты", "Не влияет на безопасность", "Только создаёт таблицы"],
                correct: 1
            },
            {
                q: "Зачем студенту понимать «таблица-запись-поле»?",
                options: ["Чтобы использовать нестандартные обозначения", "Чтобы уменьшить размер БД", "Чтобы заменить документацию", "Чтобы ускорить сеть", "Чтобы правильно моделировать структуру данных"],
                correct: 4
            },
            {
                q: "Что такое схема базы данных?",
                options: ["Описание интерфейса пользователя", "Физическая раскладка таблиц в памяти", "Структурное описание таблиц, полей и связей", "Список всех SQL-запросов", "Графическое изображение пользовательского окна"],
                correct: 2
            },
            {
                q: "Что такое уникальный индекс?",
                options: ["Индекс, запрещающий обновления", "Индекс, который может содержать повторяющиеся значения", "Индекс, обеспечивающий уникальность значений в столбце", "Индекс, создаваемый только для внешних ключей", "Индекс, ускоряющий только сортировку"],
                correct: 2
            },
            {
                q: "Какой тип ключа обеспечивает уникальность каждой строки?",
                options: ["Secondary key", "Foreign key", "Composite index", "Primary key", "Logical key"],
                correct: 3
            },
            {
                q: "Для чего нужен FOREIGN KEY?",
                options: ["Для обеспечения ссылочной целостности между таблицами", "Для ускорения сортировки", "Для хранения временных данных", "Для автоматического создания отчётов", "Для удаления дубликатов"],
                correct: 0
            },
            {
                q: "Какой тип данных подходит для хранения дат?",
                options: ["VARCHAR", "BOOLEAN", "DATE", "CHAR", "TIMEONLY"],
                correct: 2
            },
            {
                q: "Что делает оператор LIMIT в SQL?",
                options: ["Ограничивает размер таблицы", "Удаляет ограниченное количество строк", "Ограничивает количество столбцов", "Ограничивает доступ пользователей", "Ограничивает количество возвращаемых строк"],
                correct: 4
            },
            {
                q: "Что означает кардинальность связи «1 ко многим»?",
                options: ["Одна таблица содержит только одну запись", "Каждая запись связана только с одной записью", "Таблицы не имеют связей", "Одна запись таблицы связана с несколькими записями другой таблицы", "Записи связаны циклически"],
                correct: 3
            },
            {
                q: "Что делает SQL ORDER BY?",
                options: ["Группирует данные", "Сортирует данные", "Удаляет данные", "Создаёт внешние ключи", "Проверяет типы данных"],
                correct: 1
            },
            {
                q: "Какой тип данных обычно используется для хранения текстовых значений?",
                options: ["INT", "CHAR/VARCHAR", "FLOAT", "BOOLEAN", "BLOB"],
                correct: 1
            },
            {
                q: "Что из перечисленного относится к NoSQL БД?",
                options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "MariaDB"],
                correct: 2
            },
        ],
        "variant3": [
            {
                q: "Какой SQL-оператор используется для добавления строки в таблицу?",
                options: ["PUSH", "INSERT INTO", "ADD ROW", "WRITE", "ROW CREATE"],
                correct: 1
            },
            {
                q: "Что такое ER-диаграмма?",
                options: ["Диаграмма распределения нагрузки сервера", "График использования памяти", "Модель объектов, атрибутов и связей между ними", "Чертёж структуры приложения", "План транзакций БД"],
                correct: 2
            },
            {
                q: "Какой элемент ER-диаграммы обозначает объект?",
                options: ["Эллипс", "Ромб", "Треугольник", "Прямоугольник", "Линия связи"],
                correct: 3
            },
            {
                q: "Какой оператор используется для удаления записи из таблицы?",
                options: ["REMOVE", "DROP", "ERASE", "DELETE", "CLEAR"],
                correct: 3
            },
            {
                q: "Что делает SQL оператор DROP TABLE?",
                options: ["Удаляет все строки, но оставляет таблицу", "Удаляет только индексы", "Полностью удаляет таблицу из базы данных", "Очищает таблицу, оставляя структуру", "Удаляет только связи"],
                correct: 2
            },
            {
                q: "Что такое индекс в БД?",
                options: ["Структура для ускорения поиска данных", "Способ хранения резервных копий", "Графическое представление таблицы", "Система контроля доступа", "Таблица ошибок"],
                correct: 0
            },
            {
                q: "Что означает термин «атрибут» в ER-диаграмме?",
                options: ["Вид связи между таблицами", "Свойство объекта", "Уникальный ключ", "Первичная запись", "Ограничение на тип данных"],
                correct: 1
            },
            {
                q: "Что такое DML-команды?",
                options: ["Команды для создания структуры БД", "Команды для управления пользователями", "Команды для работы с данными (INSERT, UPDATE, DELETE)", "Команды для настройки сервера", "Команды для создания резервных копий"],
                correct: 2
            },
            {
                q: "Что означает SQL DISTINCT?",
                options: ["Сортировка данных", "Фильтрация по условию", "Изменение структуры таблицы", "Объединение таблиц", "Выбор только уникальных значений"],
                correct: 4
            },
            {
                q: "Что такое нормализация базы данных?",
                options: ["Объединение таблиц для ускорения работы", "Создание дополнительных индексов", "Процесс устранения избыточности данных", "Добавление новых типов данных", "Перенос БД на другой сервер"],
                correct: 2
            },
            {
                q: "Что делает агрегатная функция?",
                options: ["Изменяет таблицу", "Выполняет вычисления над набором строк", "Создаёт индекс", "Удаляет строки", "Преобразует текст в JSON"],
                correct: 1
            },
            {
                q: "Какая функция вычисляет сумму значений?",
                options: ["AVG", "COUNT", "SUM", "MIN", "TOTAL"],
                correct: 2
            },
            {
                q: "Какая функция возвращает максимальное и минимальное значение?",
                options: ["MIN, MAX", "MAX, SUM", "МИНИМУМ,МАКСИМУМ", "AVG, SUM", "HIGH, LOW"],
                correct: 0
            },
            {
                q: "Какая функция считает количество строк?",
                options: ["COUNT", "SUM", "MIN", "AVG", "NUMBER"],
                correct: 0
            },
            {
                q: "Какой оператор используется для группировки строк?",
                options: ["ORDER BY", "GROUP BY", "LIMIT", "WHERE", "GROUPING"],
                correct: 1
            },
            {
                q: "Для фильтрации групп используется:",
                options: ["WHERE", "HAVING", "ORDER BY", "LIMIT", "FILTER GROUP"],
                correct: 1
            },
            {
                q: "Что произойдёт, если в SELECT есть столбец, не входящий в GROUP BY и не агрегатный?",
                options: ["SQL сам сгруппирует", "Пропустит", "Значение станет NULL", "Ошибка", "Автоматически станет агрегатом"],
                correct: 3
            },
            {
                q: "Какая функция вычисляет среднее?",
                options: ["SUM", "COUNT", "AVG", "MIN", "MEAN"],
                correct: 2
            },
            {
                q: "Чем оконная функция отличается от агрегатной?",
                options: ["Удаляет строки", "Требует только GROUP BY", "Меняет тип данных", "Не объединяет строки в одну", "Работает только с текстом"],
                correct: 3
            },
            {
                q: "Что делает OVER()?",
                options: ["Сортирует таблицу", "Определяет окно для вычислений", "Фильтрует строки", "Удаляет дубли", "Создаёт новую таблицу"],
                correct: 1
            },
            {
                q: "PARTITION BY … в OVER() означает:",
                options: ["Фильтрация", "Сортировку", "Создание временной таблицы", "Разделение окна на группы", "Удаление столбцов"],
                correct: 3
            },
            {
                q: "Какая конструкция является оконной?",
                options: ["SUM(sales) OVER()", "SELECT OVER()", "LIMIT OVER()", "DELETE OVER()", "WINDOW SUM()"],
                correct: 0
            },
            {
                q: "ROW_NUMBER() OVER() делает:",
                options: ["Суммирует значения", "Нумерует строки", "Фильтрует строки", "Удаляет NULL", "Создаёт индексы"],
                correct: 1
            },
            {
                q: "ORDER BY внутри OVER():",
                options: ["Фильтрует", "Группирует", "Определяет порядок в окне", "Удаляет дубли", "Обнуляет значения"],
                correct: 2
            },
            {
                q: "SUM(value) OVER() вернёт:",
                options: ["Среднее", "Общую сумму на каждой строке", "Минимум", "NULL", "Разницу между строками"],
                correct: 1
            },
            {
                q: "Если отсутствует PARTITION BY, окно является:",
                options: ["Общим для всех строк", "Ошибочным", "Нулевым", "Локальным", "Случайным"],
                correct: 0
            },
            {
                q: "Что делает INNER JOIN?",
                options: ["Возвращает все строки обеих таблиц", "Возвращает совпадающие строки", "Только левую таблицу", "Только правую", "Дублирует строки"],
                correct: 1
            },
            {
                q: "LEFT JOIN возвращает:",
                options: ["Только совпадающие", "Все строки правой", "Все строки левой + совпадающие справа", "Декартово произведение", "Только строки без совпадений"],
                correct: 2
            },
            {
                q: "FULL JOIN возвращает:",
                options: ["Только совпадающие", "Только левые", "Только правые", "Все строки обеих таблиц", "Только NULL значения"],
                correct: 3
            },
            {
                q: "CROSS JOIN делает:",
                options: ["Соединение по ключу", "Удаление дубликатов", "Декартово произведение", "Фильтрацию", "Сортировку"],
                correct: 2
            },
            {
                q: "NATURAL JOIN соединяет:",
                options: ["По столбцам с одинаковыми именами", "Только по первичному ключу", "Только текстовые столбцы", "Только числовые", "По первой найденной колонке"],
                correct: 0
            },
            {
                q: "SELF JOIN — это:",
                options: ["Соединение двух разных таблиц", "Соединение таблицы с самой собой", "Тип подзапроса", "Тип временной таблицы", "Соединение с внешней БД"],
                correct: 1
            },
            {
                q: "Для JOIN необходим оператор:",
                options: ["ON или USING", "HAVING", "GROUP BY", "LIMIT", "ORDER BY"],
                correct: 0
            },
            {
                q: "RIGHT JOIN возвращает:",
                options: ["Только совпадающие", "Только левые", "Все строки правой + совпадающие слева", "Все строки", "Только строки без совпадений"],
                correct: 2
            },
            {
                q: "Самый распространённый JOIN:",
                options: ["FULL", "CROSS", "NATURAL", "INNER", "RIGHT"],
                correct: 3
            },
            {
                q: "Можно ли объединять более двух таблиц в JOIN?",
                options: ["Да", "Нет", "Только с подзапросом", "Только с NATURAL JOIN", "Только в SELECT *"],
                correct: 0
            },
            {
                q: "Подзапрос — это:",
                options: ["Тип JOIN", "Запрос внутри другого запроса", "Ограничение", "Функция", "Индекс"],
                correct: 1
            },
            {
                q: "Коррелированный подзапрос — это подзапрос:",
                options: ["Независимый", "Зависящий от внешней строки", "Только в SELECT", "Только в HAVING", "Только в JOIN"],
                correct: 1
            },
            {
                q: "Оператор, часто используемый с подзапросом в WHERE:",
                options: ["IN", "LIMIT", "JOIN", "TOP", "NEXT"],
                correct: 0
            },
            {
                q: "EXISTS проверяет:",
                options: ["Тип данных", "Наличие хотя бы одной строки в подзапросе", "Уникальность", "Соединения", "Размер таблицы"],
                correct: 1
            }
        ],
        "variant4": [
            {
                q: "Что возвращает функция COUNT(*)?",
                options: ["Количество ненулевых значений", "Количество строк", "Количество уникальных значений", "Количество столбцов", "Количество таблиц"],
                correct: 1
            },
            {
                q: "Что делает оператор GROUP BY в SQL?",
                options: ["Сортирует строки", "Объединяет строки по условию", "Делит строки на группы для агрегирования", "Фильтрует по условию", "Удаляет дубликаты"],
                correct: 2
            },
            {
                q: "Какая функция вернёт количество уникальных значений?",
                options: ["COUNT", "COUNT(DISTINCT col)", "UNIQUE", "MIN", "GROUP_COUNT"],
                correct: 1
            },
            {
                q: "Что делает агрегатная функция MAX()?",
                options: ["Находит минимальное значение", "Находит сумму", "Находит максимальное значение", "Находит среднее", "Находит NULL"],
                correct: 2
            },
            {
                q: "Почему нельзя использовать столбец в SELECT без GROUP BY, если он не агрегатный?",
                options: ["SQL не умеет их обрабатывать", "Возникает неоднозначность", "Запрос выполняется медленно", "Значения превращаются в NULL", "Таблица блокируется"],
                correct: 1
            },
            {
                q: "Для чего используется HAVING?",
                options: ["Для сортировки", "Для фильтрации строк", "Для фильтрации групп", "Для удаления столбцов", "Для создания индексов"],
                correct: 2
            },
            {
                q: "Что возвращает AVG() OVER()?",
                options: ["Среднее по всей таблице", "Среднее по строкам без объединения", "Количество строк", "Максимум по группе", "Функцию сортировки"],
                correct: 0
            },
            {
                q: "Какое окно будет использоваться, если не указать PARTITION BY и ORDER BY?",
                options: ["Несуществующее", "Случайное", "Всё множество строк", "Только первая строка", "Только последняя строка"],
                correct: 2
            },
            {
                q: "Что делает оконная функция SUM(value) OVER(PARTITION BY category)?",
                options: ["Возвращает сумму по всей таблице", "Возвращает сумму предыдущей строки", "Считает сумму по каждой категории", "Считает сумму уникальных значений", "Делает JOIN с другой таблицей"],
                correct: 2
            },
            {
                q: "Функция RANK() отличается от ROW_NUMBER() тем, что:",
                options: ["Пропускает позиции при одинаковых значениях", "Сортирует только строки", "Удаляет дубли", "Объединяет группы", "Ускоряет сортировку"],
                correct: 0
            },
            {
                q: "Что делает DENSE_RANK()?",
                options: ["Нумерует строки без пропусков рангов", "Всегда возвращает 1", "Удаляет строки", "Создаёт группы", "Объединяет данные"],
                correct: 0
            },
            {
                q: "Какой JOIN возвращает только совпадающие строки?",
                options: ["RIGHT JOIN", "LEFT JOIN", "FULL JOIN", "INNER JOIN", "CROSS JOIN"],
                correct: 3
            },
            {
                q: "Что делает FULL OUTER JOIN?",
                options: ["Соединяет по ключу только совпадающие", "Возвращает только строки без совпадений", "Возвращает все строки обеих таблиц", "Возвращает только левую таблицу", "Возвращает только правую таблицу"],
                correct: 2
            },
            {
                q: "Для чего используется CROSS JOIN?",
                options: ["Для соединения по ключам", "Для удаления дубликатов", "Для декартового произведения", "Для фильтрации", "Для индексации"],
                correct: 2
            },
            {
                q: "Какой JOIN соединяет таблицу с самой собой?",
                options: ["NATURAL JOIN", "SELF JOIN", "RIGHT JOIN", "CROSS JOIN", "UNION JOIN"],
                correct: 1
            },
            {
                q: "NATURAL JOIN использует:",
                options: ["Одноимённые столбцы", "Первичные ключи", "Только числовые поля", "Только текстовые поля", "Случайное поле"],
                correct: 0
            },
            {
                q: "Что делает USING вместо ON?",
                options: ["Удаляет столбец", "Объединяет таблицы по одинаковым столбцам", "Создаёт индекс", "Фильтрует строки", "Сортирует строки"],
                correct: 1
            },
            {
                q: "Что делает подзапрос в SELECT?",
                options: ["Создаёт новую таблицу", "Возвращает значение для каждой строки", "Меняет структуру таблицы", "Удаляет строки", "Преобразует типы данных"],
                correct: 1
            },
            {
                q: "Что такое коррелированный подзапрос?",
                options: ["Подзапрос без связи с основной таблицей", "Подзапрос, зависящий от текущей строки внешнего запроса", "Подзапрос только в HAVING", "Только в SELECT", "Только в JOIN"],
                correct: 1
            },
            {
                q: "Какой оператор часто используется с подзапросом в WHERE?",
                options: ["INTO", "LIKE", "IN", "DROP", "JOIN"],
                correct: 2
            },
            {
                q: "Что делает EXISTS?",
                options: ["Проверяет тип данных", "Проверяет наличие хотя бы одной строки", "Считает строки", "Объединяет таблицы", "Удаляет NULL"],
                correct: 1
            },
            {
                q: "Что делает ANY?",
                options: ["Возвращает TRUE, если условие выполняется для любого значения подзапроса", "Возвращает сумму", "Выполняет соединение", "Удаляет значения", "Фильтрует NULL"],
                correct: 0
            },
            {
                q: "Что делает ALL?",
                options: ["Сравнивает значение с каждым значением подзапроса", "Удаляет строки", "Объединяет таблицы", "Считает строки", "Находит максимум"],
                correct: 0
            },
            {
                q: "Можно ли использовать подзапрос в FROM?",
                options: ["Да", "Нет", "Только в PostgreSQL", "Только с JOIN", "Только с агрегатами"],
                correct: 0
            },
            {
                q: "Что делает UNION?",
                options: ["Добавляет строки без удаления дубликатов", "Объединяет строки и удаляет дубликаты", "Создаёт сортировку", "Проводит фильтрацию", "Делает JOIN"],
                correct: 1
            },
            {
                q: "Что делает UNION ALL?",
                options: ["Удаляет дубликаты", "Объединяет строки и оставляет дубликаты", "Сортирует строки", "Фильтрует строки", "Меняет тип данных"],
                correct: 1
            },
            {
                q: "INTERSECT возвращает:",
                options: ["Уникальные строки из обоих наборов", "Общие строки двух запросов", "Декартово произведение", "Строки с NULL", "Первую таблицу"],
                correct: 1
            },
            {
                q: "EXCEPT возвращает:",
                options: ["Все строки", "Строки из первого набора, которых нет во втором", "Строки из второго набора", "Декартово произведение", "Дубли"],
                correct: 1
            },
            {
                q: "Что такое CTE (WITH)?",
                options: ["Временный результат запроса", "Столбец", "Индекс", "JOIN", "Условие"],
                correct: 0
            },
            {
                q: "Что делает оконная рамка ROWS BETWEEN 1 PRECEDING AND CURRENT ROW?",
                options: ["Считает только текущую строку", "Считает предыдущую и текущую строку", "Считает все строки", "Считает строки следующего раздела", "Считает только NULL"],
                correct: 1
            },
            {
                q: "Что делает LAG()?",
                options: ["Возвращает следующее значение", "Возвращает предыдущее значение", "Возвращает сумму", "Удаляет строки", "Объединяет группы"],
                correct: 1
            },
            {
                q: "Что делает LEAD()?",
                options: ["Возвращает предыдущее значение", "Возвращает следующее значение", "Возвращает максимум", "Удаляет дубликаты", "Преобразует данные"],
                correct: 1
            },
            {
                q: "Что делает агрегатная функция STRING_AGG()?",
                options: ["Суммирует числа", "Объединяет строки в текст", "Удаляет пробелы", "Сортирует строки", "Возвращает NULL"],
                correct: 1
            },
            {
                q: "Какая функция позволяет получать накопительные суммы?",
                options: ["SUM()", "SUM() OVER(ORDER BY col)", "COUNT()", "MIN()", "SUM(DISTINCT)"],
                correct: 1
            },
            {
                q: "Какой JOIN может вернуть больше строк, чем каждая из таблиц?",
                options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "CROSS JOIN"],
                correct: 4
            },
            {
                q: "Что делает SELF JOIN?",
                options: ["Делит таблицу", "Соединяет таблицу с самой собой", "Удаляет строки", "Выполняет сортировку", "Делает агрегирование"],
                correct: 1
            },
            {
                q: "Что делает USING(a, b)?",
                options: ["Соединяет таблицы по двум одинаковым столбцам", "Сортирует данные", "Удаляет NULL", "Создаёт подзапрос", "Объединяет строки"],
                correct: 0
            },
            {
                q: "Что делает подзапрос в HAVING?",
                options: ["Фильтрует строки внутри групп", "Сортирует данные", "Создаёт новую таблицу", "Удаляет дубликаты", "Создаёт индексы"],
                correct: 0
            },
            {
                q: "Какой запрос вернёт сотрудников, чья зарплата выше средней по отделу?",
                options: ["salary > AVG(salary)", "salary > (SELECT AVG(salary) FROM employees GROUP BY dept)", "salary > ALL employees", "salary > SUM(salary)", "salary > MIN(salary)"],
                correct: 1
            },
            {
                q: "Что делает оконная функция COUNT() OVER(PARTITION BY dept)?",
                options: ["Считает количество всех сотрудников", "Считает сотрудников в каждом отделе", "Считает только уникальных сотрудников", "Считает только NULL", "Объединяет отделы"],
                correct: 1
            }
        ],
        "variant5": [
            {
                q: "ANY — это:",
                options: ["Сравнение с любым из значений подзапроса", "Ограничение", "Функция", "Тип JOIN", "Тип сортировки"],
                correct: 0
            },
            {
                q: "Что вернёт запрос с оконным AVG()?",
                options: ["Среднюю зарплату по всему отделу", "Среднюю зарплату среди всех сотрудников", "Накопленное среднее по зарплате в отделе, отсортированное по дате найма", "Среднюю зарплату из подзапроса", "Минимальную зарплату"],
                correct: 2
            },
            {
                q: "UNION ALL:",
                options: ["Объединяет без удаления дубликатов", "Удаляет дубли", "Объединяет только уникальные", "Создаёт подзапрос", "Запрещает повторения"],
                correct: 0
            },
            {
                q: "Результат запроса с ALL:",
                options: ["Всех сотрудников всех отделов", "Сотрудников с минимальной зарплатой", "Сотрудников отдела 3", "Сотрудников, у которых зарплата выше всех зарплат сотрудников отдела", "Сотрудников с одинаковыми зарплатами"],
                correct: 3
            },
            {
                q: "Результат запроса с UNION:",
                options: ["Только города VIP-клиентов", "Только города, которых нет среди складов", "Города VIP-клиентов + города, отсутствующие среди складов", "Общие города между клиентами и складами", "Только города складов"],
                correct: 2
            },
            {
                q: "INTERSECT возвращает:",
                options: ["Все строки", "Общие строки двух наборов", "Декартово произведение", "NULL", "Только первые строки"],
                correct: 1
            },
            {
                q: "EXCEPT выполняет:",
                options: ["Объединение", "Пересечение", "Вычитание второго набора из первого", "Сортировку", "Дублирование"],
                correct: 2
            },
            {
                q: "Требование к запросам в UNION:",
                options: ["Одинаковое число столбцов", "Одинаковые таблицы", "Один JOIN", "Только текстовые столбцы", "Наличие ORDER BY"],
                correct: 0
            },
            {
                q: "Можно ли использовать JOIN вместе с UNION?",
                options: ["Да", "Нет", "Только внутри CTE", "Только с INTERSECT", "Только с подзапросами"],
                correct: 0
            },
            {
                q: "ORDER BY при UNION применяется:",
                options: ["К каждому запросу", "Только один раз — в конце", "Только в первом", "Только во втором", "Никогда"],
                correct: 1
            },
            {
                q: "Типы данных в UNION должны быть:",
                options: ["Одинаковыми", "Только числовыми", "Совместимыми по типу", "Только текстовыми", "С одинаковыми именами"],
                correct: 2
            },
            {
                q: "Итог запроса с HAVING и подзапросом:",
                options: ["Все продукты", "Продукты с минимальными продажами", "Продукты, сумма продаж которых выше среднего уровня продаж по всем продуктам", "Только продукты со значением NULL", "Только продукты с нулевыми продажами"],
                correct: 2
            },
            {
                q: "Что делает запрос с RANK()?",
                options: ["Выводит заказы всех клиентов", "Сортирует заказы без ранжирования", "Выводит заказы клиентов, у которых ≥5 заказов, и присваивает ранг по сумме", "Возвращает только клиентов, а не заказы", "Сортирует клиентов по имени"],
                correct: 2
            },
            {
                q: "Что вернёт UNION двух пустых наборов?",
                options: ["NULL", "Ошибку", "Пустой набор", "Один NULL", "Набор из одной пустой строки"],
                correct: 2
            },
            {
                q: "Что вернёт чистый UNION без ALL?",
                options: ["Уникальные строки из обоих наборов", "Декартово произведение", "Все строки", "Дубли", "Только строки первого набора"],
                correct: 0
            },
            {
                q: "Что вернёт запрос с HAVING SUM(salary) > 50000?",
                options: ["Все департаменты", "Департаменты, где суммарная зарплата > 50000", "Только один департамент", "Ошибку", "Департаменты с NULL значениями"],
                correct: 1
            },
            {
                q: "Что делает SUM() OVER(PARTITION BY region)?",
                options: ["Сумму продаж по каждому продавцу", "Общую сумму продаж", "Минимальную сумму", "Сумму продаж по каждому региону для каждой строки", "Сумму продаж за весь год"],
                correct: 3
            },
            {
                q: "LEFT JOIN + WHERE B.id IS NULL вернёт:",
                options: ["Совпадающие строки", "Строки из A без совпадений в B", "Декартово произведение", "Ошибку", "Все строки из B"],
                correct: 1
            },
            {
                q: "Подзапрос salary > AVG(salary):",
                options: ["Находит самых высокооплачиваемых сотрудников", "Находит сотрудников с зарплатой выше средней", "Находит сотрудников с максимальной зарплатой", "Удаляет сотрудников", "Находит сотрудников с минимальной зарплатой"],
                correct: 1
            },
            {
                q: "Результат INTERSECT:",
                options: ["Все города", "Города клиентов", "Города, которые есть и среди клиентов, и среди поставщиков", "Города, которых нет среди поставщиков", "Города только поставщиков"],
                correct: 2
            },
            {
                q: "Что такое индекс в PostgreSQL?",
                options: ["Копия таблицы", "Структура, ускоряющая поиск", "Тип транзакции", "Таблица настроек", "Средство резервного копирования"],
                correct: 1
            },
            {
                q: "Какой индекс подходит для поиска LIKE 'abc%'?",
                options: ["Hash", "GIN", "B-tree", "BRIN", "GiST"],
                correct: 2
            },
            {
                q: "Почему большое количество индексов может замедлять вставку?",
                options: ["Индексы увеличивают RAM", "Индексы блокируют SELECT", "Индексы обновляются при каждом INSERT", "Индексы удаляют старые данные", "Индексы ускоряют VACUUM"],
                correct: 2
            },
            {
                q: "Когда индекс может замедлить обновления?",
                options: ["Когда таблица пустая", "Когда много индексов", "Когда таблица временная", "Когда SELECT слишком быстрый", "Когда есть материализованные VIEW"],
                correct: 1
            },
            {
                q: "Какая команда показывает план выполнения?",
                options: ["SHOW PLAN", "PLAN VIEW", "EXPLAIN", "LOOK PLAN", "DESCRIBE PLAN"],
                correct: 2
            },
            {
                q: "Что показывает EXPLAIN ANALYZE?",
                options: ["Любые ошибки", "Фактическое время выполнения запроса", "Количество индексов", "Логи транзакций", "Размер таблицы"],
                correct: 1
            },
            {
                q: "Почему вредно использовать SELECT *?",
                options: ["Запрещено PostgreSQL", "Загружает лишние данные", "Удаляет индексы", "Замедляет VACUUM", "Нарушает права доступа"],
                correct: 1
            },
            {
                q: "Может ли оператор IN использовать индекс?",
                options: ["Нет", "Да", "Только на числах", "Только на строках", "Только на NULL"],
                correct: 1
            },
            {
                q: "Когда LIKE не использует индекс?",
                options: ["Когда строка длинная", "Когда шаблон начинается с %", "Когда столбец текстовый", "Когда индекс B-tree", "Когда используется COLLATE"],
                correct: 1
            },
            {
                q: "Почему выражение column + 1 = 10 может не использовать индекс?",
                options: ["Индексы работают только со строками", "Индекс отключается при арифметике", "Функциональные выражения требуют полного сканирования", "Индекс нужно обновлять вручную", "Только уникальные индексы используются"],
                correct: 1
            },
            {
                q: "Для чего используются VIEW?",
                options: ["Хранить копии данных", "Упрощать сложные запросы", "Ускорять VACUUM", "Создавать индексы", "Хранить логи"],
                correct: 1
            },
            {
                q: "Можно ли использовать JOIN во VIEW?",
                options: ["Нет", "Только один", "Да", "Только INNER", "Только LEFT"],
                correct: 2
            },
            {
                q: "Отличие MATERIALIZED VIEW?",
                options: ["Не поддерживает SELECT", "Хранит данные физически", "Автообновляется каждую секунду", "Не может содержать JOIN", "Не требует индексов"],
                correct: 1
            },
            {
                q: "Что делает REFRESH MATERIALIZED VIEW?",
                options: ["Пересчитывает данные", "Удаляет таблицу", "Создаёт индексы", "Перезапускает БД", "Удаляет старые данные"],
                correct: 0
            },
            {
                q: "Можно ли вставлять данные в VIEW?",
                options: ["Всегда", "Никогда", "Иногда, если структура простая", "Только суперпользователь", "Только при наличии индексов"],
                correct: 2
            },
            {
                q: "Зачем ограничивать доступ к VIEW?",
                options: ["Чтобы уменьшить размер БД", "Чтобы скрыть конфиденциальные поля", "Чтобы ускорить индексацию", "Чтобы отключить транзакции", "Чтобы увеличить скорость SELECT"],
                correct: 1
            },
            {
                q: "Может ли VIEW скрывать технические поля?",
                options: ["Нет", "Только временные", "Да", "Только админу", "Только через GRANT"],
                correct: 2
            },
            {
                q: "Когда MATERIALIZED VIEW предпочтительнее?",
                options: ["Когда данные часто меняются", "Для быстрого чтения заранее рассчитанных данных", "Когда таблица маленькая", "Когда нет индексов", "Когда нужен внешний ключ"],
                correct: 1
            },
            {
                q: "Что такое партиционирование?",
                options: ["Архивация данных", "Деление таблицы на части", "Индексация", "Репликация", "Создание VIEW"],
                correct: 1
            },
            {
                q: "Что ускоряет партиционирование?",
                options: ["UPDATE", "SELECT по диапазону", "VACUUM", "JOIN", "INSERT"],
                correct: 1
            }
        ],
        "variant6": [
            {
                q: "Типы партиционирования:",
                options: ["Только LIST", "Только RANGE", "RANGE, LIST, HASH", "Только HASH", "Только B-tree"],
                correct: 2
            },
            {
                q: "Для чего нужна родительская таблица?",
                options: ["Хранит все данные", "Хранит структуру и правила разбиения", "Хранит индексы", "Хранит настройки логов", "Хранит VIEW"],
                correct: 1
            },
            {
                q: "Что делает PARTITION BY?",
                options: ["Удаляет партиции", "Создаёт таблицу", "Определяет способ разбиения", "Обновляет статистику", "Пересоздаёт индекс"],
                correct: 2
            },
            {
                q: "Основной критерий выбора RANGE-партиции?",
                options: ["Раздел по алфавиту", "Формат PK", "Значения даты или диапазона чисел", "Тип индекса", "Название таблицы"],
                correct: 2
            },
            {
                q: "Почему важно правильно выбирать ключ партиционирования?",
                options: ["Определяет размер бэкапа", "Определяет используемые партиции в запросах", "Указывает роль пользователя", "Ускоряет EXPLAIN", "Повышает скорость VACUUM"],
                correct: 1
            },
            {
                q: "Могут ли партиции иметь свои индексы?",
                options: ["Нет", "Только LIST", "Да", "Только HASH", "Только уникальные ключи"],
                correct: 2
            },
            {
                q: "Что будет, если данные не подходят ни под одну партицию?",
                options: ["PostgreSQL создаст новую", "Ошибка", "Сохранит в родителя", "Запишет в лог", "Перенесёт в MATERIALIZED VIEW"],
                correct: 1
            },
            {
                q: "Можно ли добавить партиции позже?",
                options: ["Нет", "Только до вставки данных", "Да", "Только суперпользователь", "Только при VACUUM"],
                correct: 2
            },
            {
                q: "Что такое constraint?",
                options: ["Тип индекса", "Ограничение целостности данных", "Тип триггера", "Режим транзакций", "Планировщик задач"],
                correct: 1
            },
            {
                q: "Для чего нужен CHECK?",
                options: ["Для настройки прав", "Для проверки значений по правилам", "Для логирования", "Для архивации", "Для индексации"],
                correct: 1
            },
            {
                q: "PRIMARY KEY отличается от UNIQUE тем, что:",
                options: ["PRIMARY KEY допускает NULL", "UNIQUE всегда быстрее", "PRIMARY KEY запрещает NULL", "Они одинаковые", "PRIMARY KEY хранится только в памяти"],
                correct: 2
            },
            {
                q: "Зачем делить роли?",
                options: ["Для экономии памяти", "Для безопасности", "Чтобы ускорить UPDATE", "Чтобы отключить WAL", "Чтобы ускорить SELECT"],
                correct: 1
            },
            {
                q: "Что делает GRANT?",
                options: ["Удаляет таблицу", "Выдаёт права", "Форматирует БД", "Обновляет индексы", "Создаёт резервную копию"],
                correct: 1
            },
            {
                q: "Что делает REVOKE?",
                options: ["Забирает ранее выданные права", "Запускает ANALYZE", "Создаёт нового пользователя", "Пересоздаёт таблицу", "Создаёт VIEW"],
                correct: 0
            },
            {
                q: "Можно ли выдать права только к одной таблице?",
                options: ["Нет", "Да", "Только суперпользователь", "Только к VIEW", "Только к партиции"],
                correct: 1
            },
            {
                q: "Отличие шифрования от хеширования?",
                options: ["Хеширование можно расшифровать", "Хеширование необратимо", "Шифрование всегда медленнее", "Отличий нет", "Шифрование нельзя использовать в VIEW"],
                correct: 1
            },
            {
                q: "Можно ли скрыть часть колонок от пользователя?",
                options: ["Нет", "Да, через VIEW", "Только через триггеры", "Только через VACUUM", "Только через партицию"],
                correct: 1
            },
            {
                q: "Для чего нужен pg_dump?",
                options: ["Для анализа логов", "Для резервного копирования", "Для VACUUM", "Для индексации", "Для мониторинга"],
                correct: 1
            },
            {
                q: "Что делает pg_restore?",
                options: ["Создаёт бэкап", "Восстанавливает данные", "Удаляет дамп", "Сравнивает таблицы", "Ускоряет SELECT"],
                correct: 1
            },
            {
                q: "Отличие форматов plain и custom:",
                options: ["Plain — бинарный", "Custom — текстовый", "Plain — SQL, custom — архивированный формат", "Они одинаковы", "Plain — только таблицы, custom — только схемы"],
                correct: 2
            },
            {
                q: "Можно ли сделать дамп одной таблицы?",
                options: ["Нет", "Только через pgAdmin", "Да", "Только суперпользователь", "Только с индексами"],
                correct: 2
            },
            {
                q: "Как восстановить базу из дампа?",
                options: ["DELETE + INSERT", "Через pg_restore или psql", "Через VACUUM", "Через ANALYZE", "Через REFRESH MATERIALIZED VIEW"],
                correct: 1
            },
            {
                q: "Как проверить корректность восстановления?",
                options: ["Перезагрузить БД", "Сравнить данные до и после", "Обновить индексы", "Очистить журналы", "Сделать EXPLAIN ANALYZE"],
                correct: 1
            },
            {
                q: "Можно ли восстановить поверх существующей базы?",
                options: ["Нет", "Да, если структура совпадает", "Только plain", "Только admin", "Только если база пустая"],
                correct: 1
            },
            {
                q: "Что делает CRON?",
                options: ["Планировщик задач в Linux", "Оптимизатор селектов", "Архиватор", "Менеджер транзакций", "Планировщик VACUUM"],
                correct: 0
            },
            {
                q: "Можно ли выполнять SQL через CRON?",
                options: ["Нет", "Да, через psql", "Только через GUI", "Только на Windows", "Только через pgAgent"],
                correct: 1
            },
            {
                q: "pgAgent используется для:",
                options: ["Анализа логов", "Планирования SQL-заданий", "Создания партиций", "Настройки WAL", "Мониторинга таблиц"],
                correct: 1
            },
            {
                q: "Где смотреть ошибки pgAgent?",
                options: ["В статистике таблиц", "В логах pgAgent", "В VIEW", "В системных ролях", "В партициях"],
                correct: 1
            },
            {
                q: "Какие уровни логов есть в PostgreSQL?",
                options: ["LOW, MED, HIGH", "RED, YELLOW, GREEN", "ERROR, WARNING, INFO", "START, STOP, RELOAD", "DEBUG, TRACE"],
                correct: 2
            },
            {
                q: "Зачем включают логирование долгих запросов?",
                options: ["Чтобы выключить индексы", "Чтобы находить медленные запросы", "Чтобы уменьшить нагрузку", "Чтобы ускорить INSERT", "Чтобы ускорить UPDATE"],
                correct: 1
            },
            {
                q: "Что такое VACUUM в PostgreSQL?",
                options: ["Создание резервной копии", "Удаление неиспользуемых строк", "Индексация таблиц", "Разбиение на партиции", "Обновление ролей"],
                correct: 1
            },
            {
                q: "Для чего используется ANALYZE?",
                options: ["Обновление статистики таблицы", "Создание индексов", "Резервное копирование", "Планирование CRON задач", "Шифрование данных"],
                correct: 0
            },
            {
                q: "Что делает EXPLAIN без ANALYZE?",
                options: ["Показывает фактическое время выполнения", "Показывает план выполнения запроса", "Выполняет VACUUM", "Пересоздаёт индексы", "Сравнивает дампы"],
                correct: 1
            },
            {
                q: "Что такое B-tree индекс?",
                options: ["Индекс для текстовых поисков", "Индекс по диапазону и равенству", "Индекс только для чисел", "Индекс для JSON", "Индекс для функций"],
                correct: 1
            },
            {
                q: "Что такое GIN индекс?",
                options: ["Быстрый поиск по диапазону", "Полнотекстовый поиск и массивы", "Индекс только для чисел", "Индекс только для строк", "Резервное копирование таблицы"],
                correct: 1
            },
            {
                q: "Что такое BRIN индекс?",
                options: ["Индекс для маленьких таблиц", "Индекс для больших таблиц с последовательными значениями", "Индекс для JSON", "Индекс для текстов", "Индекс для партиций"],
                correct: 1
            },
            {
                q: "Для чего нужен UNIQUE constraint?",
                options: ["Для ускорения SELECT", "Для уникальности значений в столбце", "Для шифрования данных", "Для резервного копирования", "Для планирования задач"],
                correct: 1
            },
            {
                q: "Для чего используется FOREIGN KEY?",
                options: ["Для резервного копирования", "Для связывания таблиц и поддержания целостности", "Для ускорения VACUUM", "Для шифрования данных", "Для разделения ролей"],
                correct: 1
            },
            {
                q: "Что такое NOT NULL constraint?",
                options: ["Ограничение на уникальность", "Ограничение на обязательное заполнение столбца", "Ограничение на тип данных", "Ограничение на индексы", "Ограничение на VIEW"],
                correct: 1
            },
            {
                q: "Что делает pg_hba.conf?",
                options: ["Настройка индексов", "Настройка аутентификации и доступа", "Настройка CRON задач", "Настройка журналов", "Настройка партиций"],
                correct: 1
            }
        ],
        "variant7": [
            {
                q: "Что такое шифрование данных в PostgreSQL?",
                options: ["Хранение данных в бинарном виде", "Преобразование данных в защищённый формат", "Ограничение доступа", "Планирование задач", "Создание VIEW"],
                correct: 1
            },
            {
                q: "Что такое хеширование пароля?",
                options: ["Преобразование пароля в безопасное значение", "Сравнение пароля с базой", "Шифрование таблицы", "Создание индекса", "Создание резервной копии"],
                correct: 0
            },
            {
                q: "Что такое ROLE в PostgreSQL?",
                options: ["Тип индекса", "Пользователь или группа пользователей", "Тип партиции", "Планировщик задач", "Ограничение целостности"],
                correct: 1
            },
            {
                q: "Для чего используется GRANT OPTION?",
                options: ["Для создания индексов", "Для передачи права выдачи привилегий", "Для шифрования данных", "Для резервного копирования", "Для мониторинга запросов"],
                correct: 1
            },
            {
                q: "Что делает pg_stat_activity?",
                options: ["Отображает активные сессии", "Создаёт резервную копию", "Индексирует таблицы", "Планирует задачи CRON", "Шифрует данные"],
                correct: 0
            },
            {
                q: "Для чего используется REFRESH MATERIALIZED VIEW CONCURRENTLY?",
                options: ["Удаляет старые данные", "Обновляет материализованное представление без блокировки", "Создаёт новый VIEW", "Пересоздаёт индекс", "Запускает VACUUM"],
                correct: 1
            },
            {
                q: "Что такое pruning в партиционировании?",
                options: ["Удаление старых таблиц", "Чтение только нужных партиций", "Создание новых индексов", "Шифрование данных", "Проверка constraint"],
                correct: 1
            },
            {
                q: "Когда лучше использовать HASH-партиционирование?",
                options: ["Для диапазонов дат", "Для равномерного распределения данных по партициям", "Для текстовых данных", "Для больших индексов", "Для резервного копирования"],
                correct: 1
            },
            {
                q: "Как проверить выполнение задания pgAgent?",
                options: ["Через EXPLAIN", "Через логи pgAgent", "Через VACUUM", "Через REFRESH MATERIALIZED VIEW", "Через ANALYZE"],
                correct: 1
            },
            {
                q: "Для чего нужен уровень логов WARNING?",
                options: ["Для критических ошибок", "Для предупреждений и потенциальных проблем", "Для информации о SELECT", "Для резервного копирования", "Для создания партиций"],
                correct: 1
            },
            {
                q: "Что делает лог ERROR?",
                options: ["Указывает на успешные запросы", "Указывает на критические ошибки", "Указывает на предупреждения", "Указывает на медленные запросы", "Указывает на партиции"],
                correct: 1
            },
            {
                q: "Что такое long query logging?",
                options: ["Логирование всех SELECT", "Логирование долгих запросов", "Логирование ошибок", "Логирование партиций", "Логирование индексов"],
                correct: 1
            },
            {
                q: "Что показывает pg_stat_user_tables?",
                options: ["Состояние пользователей", "Статистику таблиц", "Логи ошибок", "Список индексов", "Настройки CRON"],
                correct: 1
            },
            {
                q: "Что делает pgAdmin?",
                options: ["Администрирование PostgreSQL", "Шифрование данных", "Планирование CRON", "Создание VIEW", "Индексация таблиц"],
                correct: 0
            },
            {
                q: "Как настроить автоматический бэкап в Linux?",
                options: ["Через EXPLAIN", "Через CRON", "Через VACUUM", "Через pg_stat_activity", "Через REFRESH MATERIALIZED VIEW"],
                correct: 1
            },
            {
                q: "Что такое WAL?",
                options: ["Журнал предстоящих изменений базы", "Тип партиции", "Тип индекса", "Планировщик задач", "Ограничение целостности"],
                correct: 0
            },
            {
                q: "Что делает pg_basebackup?",
                options: ["Полное резервное копирование базы", "Создание индексов", "Планирование CRON", "Создание VIEW", "Проверка constraint"],
                correct: 0
            },
            {
                q: "Что такое ROLLBACK?",
                options: ["Подтверждение транзакции", "Отмена транзакции", "Создание индекса", "Резервное копирование", "Создание VIEW"],
                correct: 1
            },
            {
                q: "Что делает COMMIT?",
                options: ["Отмена транзакции", "Подтверждение транзакции", "Создание индекса", "Создание VIEW", "Создание партиции"],
                correct: 1
            },
            {
                q: "Что такое SERIAL в PostgreSQL?",
                options: ["Тип текста", "Автоинкрементное целое", "Тип даты", "Тип массива", "Тип партиции"],
                correct: 1
            },
            {
                q: "Что такое REINDEX?",
                options: ["Создание новой таблицы", "Пересоздание индекса", "Обновление constraint", "Создание партиции", "Создание VIEW"],
                correct: 1
            },
            {
                q: "Что делает pg_stat_replication?",
                options: ["Показывает статистику репликации", "Создаёт резервные копии", "Создаёт индексы", "Планирует CRON задачи", "Управляет VIEW"],
                correct: 0
            },
            {
                q: "Что такое TRUNCATE?",
                options: ["Удаление данных из таблицы без журналирования", "Полное удаление базы", "Создание резервной копии", "Создание индекса", "Создание партиции"],
                correct: 0
            },
            {
                q: "Что такое TEMPORARY таблица?",
                options: ["Таблица, которая сохраняется всегда", "Таблица, существующая только в сессии", "Таблица с ограничениями", "Таблица с VIEW", "Таблица для бэкапов"],
                correct: 1
            },
            {
                q: "Для чего используется pg_stat_activity.wait_event?",
                options: ["Для анализа активных сессий и блокировок", "Для создания индексов", "Для резервного копирования", "Для шифрования данных", "Для REFRESH MATERIALIZED VIEW"],
                correct: 0
            },
            {
                q: "Что делает CREATE ROLE с LOGIN?",
                options: ["Создаёт роль без возможности входа", "Создаёт пользователя с правом входа", "Создаёт VIEW", "Создаёт партицию", "Создаёт индекс"],
                correct: 1
            },
            {
                q: "Что такое SERIALIZABLE уровень изоляции?",
                options: ["Минимальный уровень изоляции", "Максимальный уровень изоляции, предотвращающий аномалии", "Уровень для индексов", "Уровень для VIEW", "Уровень для CRON"],
                correct: 1
            },
            {
                q: "Что делает ALTER TABLE … ADD CONSTRAINT?",
                options: ["Создаёт таблицу", "Добавляет ограничение целостности", "Создаёт индекс", "Создаёт VIEW", "Создаёт партицию"],
                correct: 1
            },
            {
                q: "Что делает pg_ctl?",
                options: ["Управляет сервером PostgreSQL", "Создаёт индексы", "Создаёт бэкап", "Создаёт VIEW", "Создаёт CRON задачи"],
                correct: 0
            },
            {
                q: "Что такое EXCLUDE constraint?",
                options: ["Ограничение уникальности", "Ограничение, запрещающее пересечение значений по правилам", "Ограничение на NULL", "Ограничение на VIEW", "Ограничение на партицию"],
                correct: 1
            },
            {
                q: "Какой подход к резервному копированию лучше всего уменьшает окно недоступности системы?",
                options: ["Cold storage", "Hot-backup", "Offline-backup", "Архивирование логов", "Фрагментация дисков перед копированием"],
                correct: 1
            },
            {
                q: "Какая причина чаще всего приводит к логическим повреждениям данных?",
                options: ["Ошибки приложения", "Ошибка RAM", "Перегрев CPU", "Блокировка порта", "Некорректное освещение серверной"],
                correct: 0
            },
            {
                q: "Что является обязательным при создании консистентного бэкапа базы данных?",
                options: ["Перезапуск службы сети", "Очистка временной директории", "Снимок состояния транзакций (checkpoint)", "Установка антивируса", "Переключение системного времени"],
                correct: 2
            },
            {
                q: "Что является основной угрозой при использовании RAID как единственного способа защиты данных?",
                options: ["RAID не защищает от логической порчи данных или удаления", "Медленная скорость", "Большой объём", "Зависимость от BIOS", "Требует обязательного Интернета"],
                correct: 0
            },
            {
                q: "Что отличается полным копированием от snapshot-а?",
                options: ["Snapshot фиксирует состояние блока в конкретный момент", "Полный бэкап требует LVM", "Snapshot содержит только новые данные", "Snapshot всегда быстрее восстанавливается", "Snapshot выполняется только при выключенной системе"],
                correct: 0
            },
            {
                q: "При дифференциальном копировании данные сохраняются относительно…",
                options: ["Последнего полного бэкапа", "Последнего snapshot", "Предыдущего инкрементного бэкапа", "Последней транзакции", "Первого бэкапа в цепочке"],
                correct: 0
            },
            {
                q: "Что является минусом инкрементной цепочки?",
                options: ["Не подходит для больших данных", "Использует RAID", "Большой размер", "Сложность восстановления при длинной цепочке", "Требует отключения основного сервера"],
                correct: 3
            },
            {
                q: "Какой метод восстановления быстрее всего при сильной фрагментации данных?",
                options: ["Incremental chain", "Differential restore", "Copy rollback", "Full restore", "Parallel merge метод"],
                correct: 3
            },
            {
                q: "Что такое \"consistent backup\" для СУБД?",
                options: ["Применён RAID-1", "Бэкап создаётся только ночью", "Защита данных шифрованием", "Сохранены состояния транзакций, исключено частичное копирование", "Данные хранятся только в одном файле"],
                correct: 3
            },
            {
                q: "Что такое «business continuity» в контексте инфраструктуры БД?",
                options: ["Непрерывная доступность критичных сервисов даже при аварии", "Наличие большого количества серверов", "Возможность изменить схему БД", "Хранение бэкапов в облаке", "Регулярное обновление интерфейса"],
                correct: 0
            }
        ],
        "variant8": [
            {
                q: "Что определяет RPO?",
                options: ["Максимальное время отката данных", "Длительность простоя", "Стоимость хранения", "Объём логов", "Максимальное число копий в сутки"],
                correct: 0
            },
            {
                q: "Что определяет RTO?",
                options: ["Максимальное допустимое время восстановления", "Количество копий", "Скорость роста данных", "Объём метаданных", "Частоту обновления ПО"],
                correct: 0
            },
            {
                q: "Что является примером локальной защиты данных?",
                options: ["Google Drive", "NAS внутри сети", "Dropbox", "Amazon S3", "SSH-туннель"],
                correct: 1
            },
            {
                q: "Что является преимуществом облачного хранилища?",
                options: ["Геораспределённость и отказоустойчивость", "Минимальный объём", "Низкое время доступа", "Отсутствие зависимости от интернета", "Возможность запускать ОС прямо в облаке"],
                correct: 0
            },
            {
                q: "Что означает гибридная стратегия бэкапа?",
                options: ["Только инкрементные копии", "Только RAID-копии", "Архивирование только логов", "Локальные + облачные копии", "Использование исключительно горячих копий"],
                correct: 3
            },
            {
                q: "Что НЕ является преимуществом облачного бэкапа?",
                options: ["Масштабируемость", "Автоматизация", "Доступность", "Низкая локальная скорость восстановления", "Возможность работать без сетевой карты"],
                correct: 3
            },
            {
                q: "Почему в Linux бэкапы часто делают через CLI-инструменты?",
                options: ["CLI обеспечивает автоматизацию и сценарии", "Linux не поддерживает GUI", "CLI не требует root", "CLI всегда быстрее", "CLI автоматически шифрует данные"],
                correct: 0
            },
            {
                q: "Что нужно проверить перед созданием бэкапа БД?",
                options: ["Доступность DNS", "Температуру CPU", "Версию видеодрайвера", "Согласованность данных и журналов транзакций", "Скорость вращения кулеров"],
                correct: 3
            },
            {
                q: "Какой базовый механизм резервирования существует почти во всех ОС?",
                options: ["Копирование файлов на другой носитель", "Мониторинг температуры", "Логирование", "Отключение питания", "Перезагрузка перед каждым бэкапом"],
                correct: 0
            },
            {
                q: "Что обязательно делать после завершения бэкапа?",
                options: ["Проверить контрольную сумму или целостность", "Перезагрузить ОС", "Удалить кэш", "Очистить корзину", "Установить обновления драйверов"],
                correct: 0
            },
            {
                q: "Ключевой параметр качества бэкапа – это:",
                options: ["Версия ОС", "Целостность и читаемость данных", "Формат архива", "Объём", "Тип файловой системы"],
                correct: 1
            },
            {
                q: "Какие сервисы подходят для долговременного хранения?",
                options: ["Discord CDN", "Steam Cloud", "Google Cloud Storage Nearline", "WebDAV локально", "WhatsApp Backup"],
                correct: 2
            },
            {
                q: "За что отвечает cron?",
                options: ["Планирование автоматических задач", "Настройку firewall", "Мониторинг нагрузки", "Сбор логов ядра", "Управление файлами реестра"],
                correct: 0
            },
            {
                q: "Для чего используется Windows Task Scheduler?",
                options: ["Работа с реестром", "Управление драйверами", "Автоматизация выполнения задач, включая бэкапы", "Настройка BIOS", "Изменение локализации Windows"],
                correct: 2
            },
            {
                q: "Что должно быть включено в регламент резервирования?",
                options: ["Цветовая схема интерфейса", "Температура серверной", "Пошаговые процедуры восстановления и хранение копий", "Список ПО сотрудников", "Таблица с MAC-адресами всех ПК"],
                correct: 2
            },
            {
                q: "Что такое “backup repository”?",
                options: ["Папка для логов", "Папка кэша", "LVM-том", "Хранилище бэкап-цепочек с metadata", "Любая папка, где есть 1 GB свободного места"],
                correct: 3
            },
            {
                q: "Недостаток полного бэкапа:",
                options: ["Высокие требования к месту и времени создания", "Низкая надёжность", "Нет автоматизации", "Не поддерживает шифрование", "Требует отдельного RAID-контроллера"],
                correct: 0
            },
            {
                q: "Преимущество инкрементного метода:",
                options: ["Наименьшее время создания копии", "Лучшее восстановление", "Наименьшее число файлов", "Не требует полного бэкапа", "Работает только в облаке"],
                correct: 0
            },
            {
                q: "Преимущество дифференциальных копий:",
                options: ["Быстрее восстанавливаются, чем инкрементные", "Самые маленькие файлы", "Не требуют планировщика", "Используют меньше CPU", "Требуют обязательного RAID"],
                correct: 0
            },
            {
                q: "Использование дифференциального метода оправдано, когда:",
                options: ["Важна скорость восстановления", "Нет RAID", "Минимальный объём данных", "Система работает на SSD", "Используются только виртуальные машины"],
                correct: 0
            },
            {
                q: "Что обязательно содержит DR-план?",
                options: ["Список игр", "Цветовая схема", "Действия при аварии и ответственные лица", "История чатов", "Температура серверной"],
                correct: 2
            },
            {
                q: "Что НЕ входит в DR-план?",
                options: ["Процесс восстановления", "Список отпусков сотрудников", "RPO / RTO", "Контакты ответственных", "Список тем для интерфейса"],
                correct: 1
            },
            {
                q: "Что снижает риск потери данных?",
                options: ["Регулярная проверка целостности и бэкапов", "Перезагрузка сервера", "Чистка кэша", "Удаление программ", "Ежедневный дефрагмент диска"],
                correct: 0
            },
            {
                q: "Физическая угроза – это:",
                options: ["Ошибка прав доступа", "Пожар или перегрев оборудования", "Ошибка SQL-запроса", "Смена пароля", "Установка новых драйверов"],
                correct: 1
            },
            {
                q: "Почему недостаток свободного места опасен?",
                options: ["Может прервать цепочку инкрементов и привести к неконсистентности", "Уменьшает FPS", "Меняет права доступа", "Снижает скорость сети", "Останавливает работу всех cron-задач"],
                correct: 0
            },
            {
                q: "Какие данные копируются в первую очередь?",
                options: ["Временные файлы", "Кэш браузера", "Критически важные системные и рабочие данные", "Медиафайлы", "Драйвера видеокарты"],
                correct: 2
            },
            {
                q: "Что важно делать при автоматизированных бэкапах?",
                options: ["Удалять драйвера", "Менять шрифты", "Регулярно проверять логи выполнения", "Отключить журналирование", "Отключать сервер перед каждым бэкапом"],
                correct: 2
            },
            {
                q: "Зачем сохранять копии в разных геолокациях?",
                options: ["Для ускорения загрузки", "Для экономии RAM", "Для уменьшения latency", "Для защиты от региональных аварий и катастроф", "Для удаления старых копий автоматически"],
                correct: 3
            },
            {
                q: "Что означает правило 3-2-1?",
                options: ["3 HDD, 2 SSD, 1 VLAN", "3 облака, 2 VLAN, 1 firewall", "3 копии, 2 носителя, 1 копия вне площадки", "3 сервера, 2 VPN, 1 switch", "3 недели, 2 бэкапа, 1 ZIP-файл"],
                correct: 2
            },
            {
                q: "Преимущество локального хранения:",
                options: ["Нет зависимости от сети, высокая скорость доступа", "Бесплатное обслуживание", "Неограниченное пространство", "Защищённость от пожара", "Не требует мониторинга"],
                correct: 0
            },
            {
                q: "Что может сделать бэкап непригодным к восстановлению?",
                options: ["Отключение монитора", "Перезагрузка сервера", "Некорректное завершение копирования или повреждение блоков", "Изменение темы интерфейса", "Низкая яркость экрана"],
                correct: 2
            },
            {
                q: "Что необходимо регулярно тестировать?",
                options: ["Производительность GPU", "Процедуры восстановления данных", "Папку Downloads", "Цветовую схему", "Нагрузку на процессор"],
                correct: 1
            },
            {
                q: "Что обеспечивает шифрование бэкапов?",
                options: ["Защиту данных при утечке носителя", "Уменьшение размера", "Ускорение восстановления", "Уменьшение количества копий", "Возможность восстановить повреждённые сектора"],
                correct: 0
            },
            {
                q: "Минус облачного хранения:",
                options: ["Автоматизация", "Репликация", "Зависимость от интернет-канала", "Масштабируемость", "Требование использовать VPN"],
                correct: 2
            },
            {
                q: "Если бэкап не создался, что делать?",
                options: ["Проверить логи, права и конфигурацию задания", "Сменить тему", "Перезагрузить браузер", "Игнорировать", "Подождать неделю и попробовать снова"],
                correct: 0
            },
            {
                q: "Что учитывать при выборе метода резервирования?",
                options: ["SLA, объём данных, скорость восстановления", "Музыкальные предпочтения", "Цвет корпуса ПК", "Мощность GPU", "Разрешение монитора"],
                correct: 0
            },
            {
                q: "Преимущество автоматического копирования:",
                options: ["Минимизирует человеческие ошибки", "Требует постоянного контроля", "Снижает надёжность", "Уменьшает скорость сети", "Всегда требует отдельного сервера"],
                correct: 0
            },
            {
                q: "Успешность теста восстановления определяется тем, что…",
                options: ["Восстановленные данные корректно работают", "Система выключилась", "Изменился размер файла", "Удалились старые копии", "Время восстановления стало больше"],
                correct: 0
            },
            {
                q: "Хорошая практика хранения бэкапов:",
                options: ["Рабочий стол", "Хранение в корзине", "Отдельная площадка или удалённое хранилище", "Один диск", "Любая папка на системном диске"],
                correct: 2
            },
            {
                q: "Зачем документировать регламент копирования?",
                options: ["Чтобы занять место", "Чтобы любой сотрудник мог правильно выполнить процедуру восстановления", "Чтобы изменить интерфейс", "Чтобы заполнять отчёты", "Чтобы увеличить размер архива"],
                correct: 1
            }
        ],
        "variant9": [
            {
                q: "Что является главной целью резервного копирования?",
                options: ["Увеличение производительности", "Снижение нагрузки на сеть", "Возможность восстановления данных после сбоя", "Ускорение транзакций", "Сокращение количества логов"],
                correct: 2
            },
            {
                q: "Какой тип бэкапа позволяет восстановить состояние системы за конкретный день?",
                options: ["Потоковый бэкап", "Прогнозируемый бэкап", "Архив логов", "Точечное восстановление (point-in-time)", "Временный снапшот"],
                correct: 3
            },
            {
                q: "Что является недостатком хранения единственной резервной копии?",
                options: ["Увеличение скорости доступа", "Усложнение RTO", "Риск потери данных при повреждении носителя", "Избыточное архивирование", "Снижение размера метаданных"],
                correct: 2
            },
            {
                q: "Зачем выполнять шифрование резервных копий?",
                options: ["Для ускорения чтения", "Для снижения RPO", "Для уменьшения размера бэкапа", "Для защиты данных при компрометации носителя", "Чтобы восстановление было быстрее"],
                correct: 3
            },
            {
                q: "Что требуется для организации оффсайт-хранения?",
                options: ["RAID-контроллер", "Доступ к внешней площадке или облаку", "Низкая температура воздуха", "Переустановка ОС", "Режим энергосбережения"],
                correct: 1
            },
            {
                q: "Какое преимущество имеет копирование на ленточные носители?",
                options: ["Высокая скорость случайного доступа", "Мгновенная репликация", "Низкая стоимость хранения в долгосрочной перспективе", "Возможность запуска ОС", "Отсутствие необходимости в каталогизации"],
                correct: 2
            },
            {
                q: "Основная задача тестирования восстановления — это…",
                options: ["Проверка версии ОС", "Проверка температуры оборудования", "Подтверждение, что бэкап действительно пригоден к восстановлению", "Оптимизация дискового ввода-вывода", "Мониторинг нагрузки на сеть"],
                correct: 2
            },
            {
                q: "Что делает механизм \"continuous backup\"?",
                options: ["Создаёт копии только ночью", "Сохраняет данные каждые 24 часа", "Записывает изменения почти в реальном времени", "Удаляет старые бэкапы автоматически", "Требует выключения сервера"],
                correct: 2
            },
            {
                q: "Что является преимуществом георепликации?",
                options: ["Ускоренное индексирование", "Прозрачное кэширование диска", "Устойчивость к сбоям целой площадки", "Уменьшение количества логов", "Ускорение загрузки BIOS"],
                correct: 2
            },
            {
                q: "Что помогает сократить RTO при аварии?",
                options: ["Наличие заранее подготовленной резервной инфраструктуры", "Увеличение размера файлов бэкапа", "Ежедневная перезагрузка сервера", "Минимальный объём ОЗУ", "Отключение журналирования"],
                correct: 0
            },
            {
                q: "Что необходимо для восстановления \"до момента сбоя\"?",
                options: ["Полный бэкап", "Доступ к BIOS", "Набор транзакционных логов", "Смена пароля администратора", "Очистка кэша процессора"],
                correct: 2
            },
            {
                q: "Что характеризует \"offsite backup\"?",
                options: ["Хранится на том же диске", "Хранится вне основной площадки", "Хранится в RAM", "Удаляется каждые сутки", "Хранится в кеше браузера"],
                correct: 1
            },
            {
                q: "Что делает backup rotation?",
                options: ["Увеличивает скорость доступа", "Перемещает данные в разные сектора", "Автоматически удаляет или заменяет старые копии", "Отключает архивирование логов", "Перезапускает систему"],
                correct: 2
            },
            {
                q: "Какой фактор уменьшает вероятность успешного восстановления?",
                options: ["Регулярные проверки", "Хранение копий вне площадки", "Отсутствие тестов восстановления", "Наличие инкрементных цепочек", "Использование хранилищ высокой доступности"],
                correct: 2
            },
            {
                q: "Что является целью DR-тестирования?",
                options: ["Измерение пропускной способности сети", "Проверка работы видеодрайверов", "Проверка готовности команды и процедур восстановления", "Увеличение размера логов", "Оптимизация температуры сервера"],
                correct: 2
            },
            {
                q: "Почему важно иметь несколько уровней защиты данных?",
                options: ["Для ускорения GPU", "Чтобы уменьшить нагрузку на DNS", "Для защиты от разных типов отказов", "Чтобы не использовать RPO", "Для оптимизации логирования"],
                correct: 2
            },
            {
                q: "Что является минусом слишком длинной цепочки инкрементов?",
                options: ["Снижение качества изображений", "Сложность восстановления", "Увеличение скорости чтения", "Необходимость RAID", "Ускоренная индексация"],
                correct: 1
            },
            {
                q: "Что характеризует \"cold backup\"?",
                options: ["Выполняется при полностью остановленной системе", "Выполняется только при активной системе", "Запускается каждые 10 секунд", "Не требует места хранения", "Работает без доступа к данным"],
                correct: 0
            },
            {
                q: "Почему важно разделять бэкапы и оригинальные данные?",
                options: ["Чтобы увеличить размер диска", "Чтобы уменьшить RTO", "Чтобы исключить потерю данных при повреждении основной системы", "Чтобы ускорить сетевой адаптер", "Чтобы уменьшить нагрузку на CPU"],
                correct: 2
            },
            {
                q: "Что обеспечивает хранение копий на разных типах носителей?",
                options: ["Улучшение графики", "Оптимизация SQL", "Дополнительную устойчивость к различным отказам", "Снижение времени загрузки ОС", "Уменьшение логов"],
                correct: 2
            },
            {
                q: "Что помогает защититься от заражения ransomware?",
                options: ["Регулярные перезагрузки", "Бэкапы, которые недоступны для записи (immutable backup)", "Повышенная частота свопинга", "Смена видеокарты", "Использование устаревшей ОС"],
                correct: 1
            },
            {
                q: "Что улучшает читаемость процесса восстановления?",
                options: ["Подсветка клавиатуры", "Жёсткое форматирование дисков", "Подробная документация шагов восстановления", "Перегрев оборудования", "Высокая частота монитора"],
                correct: 2
            },
            {
                q: "Почему важно хранить бэкапы в проверенном формате?",
                options: ["Чтобы их можно было открыть сторонним ПО", "Чтобы улучшить производительность GPU", "Чтобы гарантировать совместимость восстановления", "Чтобы уменьшить время включения ПК", "Чтобы избежать перегрева"],
                correct: 2
            },
            {
                q: "Что ухудшает качество бэкапа?",
                options: ["Корректная проверка контрольных сумм", "Хранение только одной копии", "Наличие нескольких поколений", "Хранение в холодном помещении", "Использование разных носителей"],
                correct: 1
            },
            {
                q: "Что такое \"incremental forever\"?",
                options: ["Метод, где всегда делаются только полные копии", "Метод, при котором делается один полный бэкап и далее только инкременты", "Метод, основанный на RAID", "Метод восстановления БЕЗ логов", "Метод хранения на ленте"],
                correct: 1
            },
            {
                q: "Зачем нужна дедупликация в системах резервирования?",
                options: ["Ускоряет сетевое соединение", "Уменьшает время обратного восстановления", "Сокращает занимаемое место, устраняя повторяющиеся блоки", "Увеличивает частоту процессора", "Переносит данные в GPU-память"],
                correct: 2
            },
            {
                q: "Что помогает снизить вероятность человеческой ошибки?",
                options: ["Полное отсутствие автоматизации", "Наличие автоматизированных процессов копирования", "Использование только GUI", "Ручное редактирование конфигурации", "Отсутствие регламента"],
                correct: 1
            },
            {
                q: "Для чего используется \"staging area\" при бэкапах?",
                options: ["Для временного хранения данных перед отправкой в основное хранилище", "Для очистки логов", "Для тестирования видеокарты", "Для удаления старых снапшотов", "Для обновления BIOS"],
                correct: 0
            },
            {
                q: "Что помогает контролировать качество бэкапов?",
                options: ["Регулярные тесты восстановления", "Удаление всех копий", "Хранение только инкрементов", "Смена темы терминала", "Удаление метаданных"],
                correct: 0
            },
            {
                q: "Почему важно хранить несколько поколений резервных копий?",
                options: ["Чтобы уменьшить нагрузку на ЦП", "Чтобы можно было откатиться на более ранние состояния", "Чтобы ускорить RAID", "Чтобы снизить размер архивов", "Чтобы уменьшить время тестирования"],
                correct: 1
            },
            {
                q: "Что может привести к невозможности восстановить данные?",
                options: ["Наличие нескольких копий", "Повреждение метаданных бэкапа", "Использование надёжного носителя", "Тестирование восстановления", "Использование проверенных схем хранения"],
                correct: 1
            },
            {
                q: "Что такое \"retention policy\"?",
                options: ["Список неисправных устройств", "Политика хранения и удаления старых бэкапов", "Описание всех пользователей", "Список драйверов системы", "Алгоритм сортировки файлов"],
                correct: 1
            },
            {
                q: "Что улучшает скорость восстановления больших данных?",
                options: ["Использование медленных носителей", "Многоуровневое хранение (tiered storage)", "Отсутствие тестов", "Уменьшение количества копий", "Остановка сервера"],
                correct: 1
            },
            {
                q: "Что уменьшает риск потери бэкапов?",
                options: ["Хранение копий на сервере, где выполняются операции", "Использование одного диска для всех функций", "Репликация и оффсайт-хранение", "Удаление снапшотов", "Хранение в RAM"],
                correct: 2
            },
            {
                q: "Какой подход снижает влияние на рабочую систему?",
                options: ["Бэкап в рабочее время через полное копирование", "Использование снапшотов файловой системы", "Ре резервирование через ручное копирование", "Пауза всех приложений", "Отключение питания"],
                correct: 1
            },
            {
                q: "Что является преимуществом объектного хранения?",
                options: ["Низкая производительность", "Ограниченная масштабируемость", "Возможность хранить огромные объемы данных с высокой надёжностью", "Зависимость от RAID", "Необходимость локального сервера"],
                correct: 2
            },
            {
                q: "Что снижает риск ошибки при восстановлении?",
                options: ["Наличие чёткой документации", "Изменение интерфейса системы", "Использование случайных команд", "Сокращение числа тестов", "Полное отсутствие инструкций"],
                correct: 0
            },
            {
                q: "Что может привести к повреждению резервной копии?",
                options: ["Корректная работа хранилища", "Ошибки файловой системы", "Резервирование в облаке", "Проверка CRC", "Использование нескольких копий"],
                correct: 1
            },
            {
                q: "Что важно учитывать при выборе локации для бэкапов?",
                options: ["Местную влажность и температуру", "Доступность и отказоустойчивость площадки", "Цвет корпуса сервера", "Количество USB-портов", "Наличие RGB-подсветки"],
                correct: 1
            },
            {
                q: "Что помогает добиться минимального RPO?",
                options: ["Полный бэкап раз в месяц", "Репликация или частое копирование логов", "Отключение хранения журналов", "Хранение в локальной папке", "Использование RAID-0"],
                correct: 1
            }
        ]
    }
};
