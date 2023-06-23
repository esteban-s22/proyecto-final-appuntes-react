const BACKEND = 'http://localhost:8000'

const Strings = {
  'goToHomePage': {
    ru: 'Вернуться на главную страницу',
    en: 'Ir al inicio',
    jp: 'ホームページへ'
  },
  'error404PageNotFound': {
    ru: 'Ошибка 404. Страница не найдена',
    en: 'Error 404. Pagina no encontrada',
    jp: 'エラー404ページが見つかりません'
  },
  'home': {
    ru: 'Главная',
    en: 'Inicio',
    jp: 'ホームページ'
  },
  'notFound': {
    ru: 'Не найдено',
    en: 'No encontrado',
    jp: '見つかりません'
  },
  'youAreBanned': {
    ru: 'Вы забанены',
    en: 'Fuiste baneado',
    jp: 'あなたは禁止されています'
  },
  'users': {
    ru: 'Пользователи',
    en: 'Usuarios',
    jp: 'ユーザー'
  },
  'newest': {
    ru: 'Новые',
    en: 'Lo más nuevo',
    jp: '最新'
  },
  'oldest': {
    ru: 'Старые',
    en: 'Lo más antiguo',
    jp: '最古'
  },
  'online': {
    ru: 'Онлайн',
    en: 'En linea',
    jp: 'オンライン'
  },
  'noUsersYet': {
    ru: 'Пока нет пользователей',
    en: 'Sin usuarios aún',
    jp: 'まだユーザーはいません'
  },
  'noAdminsYet': {
    ru: 'Пока нет админов',
    en: 'Sin administradores aún',
    jp: 'まだ管理者はいません'
  },
  'unableToDisplayUsers': {
    ru: 'Невозможно отобразить пользователей',
    en: 'No se pueden mostrar los usuarios',
    jp: 'ユーザーを表示できません'
  },
  'profile': {
    ru: 'Профиль',
    en: 'Perfil',
    jp: 'プロフィール'
  },
  'lastSeen': {
    ru: 'Был онлайн',
    en: 'Vistos ultimamente',
    jp: '最後に見た'
  },
  'settings': {
    ru: 'Настройки',
    en: 'Configuracion',
    jp: '設定'
  },
  'unableToDisplayUserProfile': {
    ru: 'Невозможно отобразить профиль',
    en: 'No se pueden mostrar perfiles',
    jp: 'ユーザープロフィールを表示できません'
  },
  'profileSettings': {
    ru: 'Настройки профиля',
    en: 'Configuracion de perfil',
    jp: 'プロフィール設定'
  },
  'uploadProfilePicture': {
    ru: 'Загрузка изображения профиля',
    en: 'Subir foto de perfil',
    jp: 'プロフィール画像'
  },
  'accepted': {
    ru: 'Разрешены',
    en: 'Aceptado',
    jp: '承認済み'
  },
  'maxFilesCount': {
    ru: 'Максимальное количество файлов',
    en: 'Numero maximo de archivos',
    jp: '最大ファイル数'
  },
  'maxSize': {
    ru: 'Максимальный размер',
    en: 'Tamaño maximo',
    jp: '最大サイズ'
  },
  'upload': {
    ru: 'Загрузка',
    en: 'Subir',
    jp: 'アップロード'
  },
  'popularBoards': {
    ru: 'Популярные доски',
    en: 'Tablones de anuncios populares',
    jp: '人気のボード'
  },
  'all': {
    ru: 'Все',
    en: 'Todo',
    jp: 'すべて'
  },
  'recentlyThreads': {
    ru: 'Недавние треды',
    en: 'Publicaciones recientes',
    jp: '最近のスレッド'
  },
  'noThreadsYet': {
    ru: 'Пока нет тредов',
    en: 'Ninguna publicacion aún',
    jp: 'スレッドはまだありません'
  },
  'filesUploads': {
    ru: 'Файлы/Загрузки',
    en: 'Archivos/Subidas',
    jp: 'ファイル/アップロード'
  },
  'noUploadsYet': {
    ru: 'Пока нет загрузок',
    en: 'Sin subidas aún',
    jp: 'まだアップロードはありません'
  },
  'thread': {
    ru: 'Тред',
    en: 'Publicaciones',
    jp: 'スレッド'
  },
  'allBoards': {
    ru: 'Все доски',
    en: 'Facultades',
    jp: 'すべてのボード'
  },
  'error': {
    ru: 'Ошибка',
    en: 'Error',
    jp: 'エラー'
  },
  'threadNotFound': {
    ru: 'Тред не найден',
    en: 'Publicacion no encontrado',
    jp: 'スレッドが見つかりません'
  },
  'noAnswersYet': {
    ru: 'Пока нет ответов',
    en: 'Sin respuestas aún',
    jp: 'まだ答えはありません'
  },
  'boards': {
    ru: 'Доски',
    en: 'Tablones de anuncios',
    jp: 'ボード'
  },
  'default': {
    ru: 'По умолчанию',
    en: 'Por defecto',
    jp: 'デフォルトでは'
  },
  'popular': {
    ru: 'Популярные',
    en: 'Popular',
    jp: '人気'
  },
  'recentlyAnswered': {
    ru: 'Недавно отвеченные',
    en: 'Respondidos recientemente',
    jp: '最近答えした'
  },
  'byNewest': {
    ru: 'По новизне',
    en: 'Por el más nuevo',
    jp: '最新のもの'
  },
  'byAnswersCount': {
    ru: 'По числу ответов',
    en: 'Por recuento de respuestas',
    jp: '答え数で'
  },
  'noBoardsYet': {
    ru: 'Пока нет досок',
    en: 'Sin tablones aún',
    jp: 'ボードはまだありません'
  },
  'unableToDisplayBoards': {
    ru: 'Невозможно отобразить доски',
    en: 'No se pueden mostrar los tablones',
    jp: 'ボードを表示できません'
  },
  'board': {
    ru: 'Доска',
    en: 'Tablon',
    jp: 'ボード'
  },
  'unableToDisplayBoard': {
    ru: 'Невозможно отобразить доску',
    en: 'No se puede mostrar el tablon',
    jp: 'ボードを表示できません'
  },
  'unableToDisplayThreads': {
    ru: 'Невозможно отобразить треды',
    en: 'No se puede mostrar las publicaciones',
    jp: 'スレッドを表示できません'
  },
  'unableToDisplayAnswers': {
    ru: 'Невозможно отобразить ответы',
    en: 'No se puede mostrar respuestas',
    jp: '答えを表示できません'
  },
  'adminDashboard': {
    ru: 'Панель администратора',
    en: 'Panel de administracion',
    jp: '管理ダッシュボード'
  },
  'dashboard': {
    ru: 'Панель управления',
    en: 'Panel',
    jp: 'ダッシュボード'
  },
  'admins': {
    ru: 'Администраторы',
    en: 'Admins',
    jp: '管理者'
  },
  'reports': {
    ru: 'Жалобы',
    en: 'Reportes',
    jp: '苦情'
  },
  'bans': {
    ru: 'Баны',
    en: 'Bans',
    jp: '禁止'
  },
  'manageBoards': {
    ru: 'Управление досками',
    en: 'Gestion de Tablones',
    jp: 'ボードを管理する'
  },
  'createNewBoard': {
    ru: 'Создать новую доску',
    en: 'Crear un nuevo tablon',
    jp: '新しいボードを作成する'
  },
  'enterShortName': {
    ru: 'Введите короткое имя',
    en: 'Insertar nombre corto',
    jp: '短い名前を入力してください'
  },
  'enterTitle': {
    ru: 'Введите название',
    en: 'Insertar titulo',
    jp: 'タイトルを入力してください'
  },
  'enterPosition': {
    ru: 'Введите позицию',
    en: 'Insertar posición',
    jp: '位置を入力してください'
  },
  'thread1': {
    ru: 'тред',
    en: 'publicacion',
    jp: 'スレッド'
  },
  'thread2': {
    ru: 'треда',
    en: 'publicacion',
    jp: 'スレッド'
  },
  'thread3': {
    ru: 'тредов',
    en: 'publicacion',
    jp: 'スレッド'
  },
  'answer1': {
    ru: 'ответ',
    en: 'respuesta',
    jp: '答え'
  },
  'answer2': {
    ru: 'ответа',
    en: 'respuestas',
    jp: '答え'
  },
  'answer3': {
    ru: 'ответов',
    en: 'respuestas',
    jp: '答え'
  },
  'boardShortName': {
    ru: 'Короткое имя доски',
    en: 'Nombre corto del tablon',
    jp: 'ボードの短縮名'
  },
  'boardTitle': {
    ru: 'Название доски',
    en: 'Titulo del tablon',
    jp: 'ボードタイトル'
  },
  'boardDescription': {
    ru: 'Описание доски',
    en: 'Descripcion del tablon',
    jp: 'ボードの説明'
  },
  'enterDescription': {
    ru: 'Ведите описание',
    en: 'Insertar descripcion',
    jp: '説明を入力してください'
  },
  'boardPosition': {
    ru: 'Позиция доски',
    en: 'Posicion del tablon',
    jp: 'ボードの位置'
  },
  'save': {
    ru: 'Сохранить',
    en: 'Guardar',
    jp: 'セーブ'
  },
  'create': {
    ru: 'Создать',
    en: 'Crear',
    jp: '作成する'
  },
  'cancel': {
    ru: 'Отменить',
    en: 'Cancelar',
    jp: 'キャンセル'
  },
  'noBansYet': {
    ru: 'Пока нет банов',
    en: 'Sin bans aún',
    jp: 'まだ禁止はありません'
  },
  'unableToDisplayBans': {
    ru: 'Невозможно отобразить баны',
    en: 'No se pueden mostrar los bans',
    jp: '禁止を表示できません'
  },
  'signIn': {
    ru: 'Войти',
    en: 'Iniciar Sesion',
    jp: 'ログイン'
  },
  'enterYourName': {
    ru: 'Введите свой логин',
    en: 'Inserte su nombre de usuario',
    jp: 'ユーザー名を入力して下さい'
  },
  'enterPassword': {
    ru: 'Введите пароль',
    en: 'Inserte su contraseña',
    jp: 'パスワードを入力する'
  },
  'logInAccount': {
    ru: 'Войти в аккаунт',
    en: 'Iniciar Sesion',
    jp: 'ログインアカウント'
  },
  'username': {
    ru: 'Логин',
    en: 'Nombre de usuario',
    jp: 'ユーザー名'
  },
  'password': {
    ru: 'Пароль',
    en: 'Contraseña',
    jp: 'パスワード'
  },
  'or': {
    ru: 'Или',
    en: 'o',
    jp: 'または'
  },
  'ifYouDontHaveAnAccount': {
    ru: 'если у вас нет аккаунта',
    en: 'si aún no tienes una cuenta',
    jp: 'アカウントをお持ちでない場合'
  },
  'signUp': {
    ru: 'Регистрация',
    en: 'Registrarse',
    jp: '登録'
  },
  'enterEmail': {
    ru: 'Введите email',
    en: 'Inserte su email',
    jp: 'メールアドレスを入力して'
  },
  'passwordsNotMatch': {
    ru: 'пароли не совпадают',
    en: 'Las contraseñas no coinciden',
    jp: 'パスワードが一致しません'
  },
  'createYourAccount': {
    ru: 'Создать учетную запись',
    en: 'Crear tu cuenta',
    jp: 'アカウントを作成'
  },
  'emailAddress': {
    ru: 'Адрес электронной почты',
    en: 'Direccion de Email',
    jp: 'メールアドレス'
  },
  'confirmPassword': {
    ru: 'Подтверждение пароля',
    en: 'Confirmar contraseña',
    jp: 'パスワードの確認'
  },
  'createAccount': {
    ru: 'Зарегистрироваться',
    en: 'Crear cuenta',
    jp: 'アカウントを作成する'
  },
  'ifYouAlreadyHaveAnAccount': {
    ru: 'если у вас уже есть аккаунт',
    en: 'si ya tienes una cuenta',
    jp: 'すでにアカウントをお持ちの場合'
  },
  'enterThreadTitle': {
    ru: 'Введите название треда',
    en: 'Insertar titulo de la publicacion',
    jp: 'スレッドのタイトルを入力してください'
  },
  'enterContent': {
    ru: 'Введите содержание',
    en: 'Insertar contenido',
    jp: 'コンテンツを入力してください'
  },
  'chooseFromList': {
    ru: 'Выберите из списка',
    en: 'Elegir de la lista',
    jp: 'リストから選択'
  },
  'boardsNotLoaded': {
    ru: 'Доски не загружены',
    en: 'Tablones no cargados',
    jp: 'ボードがロードされていません'
  },
  'enterReason': {
    ru: 'Введите причину',
    en: 'Insertar razon',
    jp: '理由を入力してください'
  },
  'enterDate': {
    ru: 'Введите дату',
    en: 'Insertar fecha',
    jp: '日付を入力してください'
  },
  'newThread': {
    ru: 'Новый тред',
    en: 'Nueva Publicacion',
    jp: '新しいスレッド'
  },
  "threadTitle": {
    ru: 'Заголовок треда',
    en: 'Título de la publicacion',
    jp: 'スレッドタイトル',
  },
  "content": {
    ru: 'Содержание',
    en: 'Contenido',
    jp: 'コンテンツ',
  },
  "chooseABoard": {
    ru: 'Выберите доску',
    en: 'Selecciona una categoría',
    jp: 'ボードを選択してください',
  },
  "select": {
    ru: 'Выберите',
    en: 'Seleccionar',
    jp: '選び出す',
  },
  "loading": {
    ru: 'Загрузка',
    en: 'Cargando',
    jp: '荷積',
  },
  "createThread": {
    ru: 'Создать тред',
    en: 'Crear publicacion',
    jp: 'スレッドを作成する',
  },
  "answerInThread": {
    ru: 'Ответить в тред',
    en: 'Responder en la publicacion',
    jp: 'スレッドに答え',
  },
  "answer": {
    ru: 'Ответить',
    en: 'Responder',
    jp: '答え',
  },
  "editAnswer": {
    ru: 'Редактировать ответ',
    en: 'Editar respuesta',
    jp: '答えを編集する',
  },
  "edit": {
    ru: 'Редактировать',
    en: 'Editar',
    jp: '編集',
  },
  "editThread": {
    ru: 'Редактировать тред',
    en: 'Editar publicacion',
    jp: 'スレッド編集',
  },
  "banUser": {
    ru: 'Забанить',
    en: 'Bloquear usuario',
    jp: '禁止',
  },
  "reason": {
    ru: 'Причина',
    en: 'Motivo',
    jp: '理由',
  },
  "banDuration": {
    ru: 'Продолжительность бана',
    en: 'Duración del bloqueo',
    jp: '禁止期間',
  },
  "ban": {
    ru: 'Забанить',
    en: 'Bloquear',
    jp: '禁止',
  },
  "createNew": {
    ru: 'Создать тред',
    en: 'Crear nuevo',
    jp: '新しく作る',
  },
  "messages": {
    ru: 'Сообщения',
    en: 'Mensajes',
    jp: 'メッセージ',
  },
  "rules": {
    ru: 'Правила',
    en: 'Reglas',
    jp: 'ルール',
  },
  "enterForSearch": {
    ru: 'Введите для поиска',
    en: 'Ingresa para buscar',
    jp: '検索',
  },
  "noNotificationYet": {
    ru: 'Уведомлений пока нет',
    en: 'Aún no hay notificaciones',
    jp: 'まだ通知はありません',
  },
  "deleteAllNotifications": {
    ru: 'Удалить все уведомления',
    en: 'Borrar todas las notificaciones',
    jp: 'すべての通知を削除します',
  },
  "unableToDisplayNotifications": {
    ru: 'Невозможно отобразить уведомления',
    en: 'No se pueden mostrar las notificaciones',
    jp: '通知を表示できません',
  },
  "openProfile": {
    ru: 'Открыть профиль',
    en: 'Abrir perfil',
    jp: 'プロフィールを開く',
  },
  "language": {
    ru: 'Язык',
    en: 'Idioma',
    jp: '言語',
  },
  "toggleTheme": {
    ru: 'Переключить тему',
    en: 'Cambiar tema',
    jp: 'テーマを切り替える',
  },
  "logout": {
    ru: 'Выйти',
    en: 'Cerrar sesión',
    jp: 'ログアウト',
  },
  "chooseAFile": {
    ru: 'Выберите файл',
    en: 'Selecciona un archivo',
    jp: 'ファイルを選択してください',
  },
  "choose": {
    ru: 'Выбрать',
    en: 'Seleccionar',
    jp: '選びとる',
  },
  "fileNotSelected": {
    ru: 'Файл не выбран',
    en: 'Archivo no seleccionado',
    jp: 'ファイルが選択されていません',
  },
  "attachFile": {
    ru: 'Прикрепить файл',
    en: 'Adjuntar archivo',
    jp: 'ファイルを添付する',
  },
  "perFile": {
    ru: 'на файл',
    en: 'por archivo',
    jp: 'ファイルごと',
  },
  "textFieldSupportsMarkdown": {
    ru: 'Текстовое поле поддерживает Markdown',
    en: 'El campo de texto admite Markdown',
    jp: 'テキストフィールドはMarkdownをサポートします',
  },
  "pin": {
    ru: 'Закрепить',
    en: 'Fijar',
    jp: 'ピン',
  },
  "unpin": {
    ru: 'Открепить',
    en: 'Desafijar',
    jp: '固定を解除する',
  },
  "open": {
    ru: 'Открыть',
    en: 'Abrir',
    jp: '開いた',
  },
  "close": {
    ru: 'Закрыть',
    en: 'Cerrar',
    jp: '閉じる',
  },
  "delete": {
    ru: 'Удалить',
    en: 'Eliminar',
    jp: 'デリート',
  },
  'deleteAll': {
    ru: 'Удалить все',
    en: 'Eliminar todo',
    jp: 'すべて削除'
  },
  'unbanUser': {
    ru: 'Разбанить',
    en: 'Desbanear usuario',
    jp: '禁止を解除する'
  },
  'report': {
    ru: 'Пожаловаться',
    en: 'Reportar',
    jp: '不平を言う'
  },
  'like1': {
    ru: 'лайк',
    en: 'Me gusta',
    jp: 'いいね'
  },
  'like2': {
    ru: 'лайка',
    en: 'Me gustas',
    jp: 'いいね'
  },
  'like3': {
    ru: 'лайков',
    en: 'Me gustas',
    jp: 'いいね'
  },
  'banExpires': {
    ru: 'Бан истекает',
    en: 'Ban expira',
    jp: '禁止期間が終了します'
  },
  'userBanned': {
    ru: 'Пользователь забанен',
    en: 'Usuario baneado',
    jp: 'ユーザー禁止'
  },
  'unread': {
    ru: 'Непрочитанные',
    en: 'No leido',
    jp: 'すでに読んだ'
  },
  'read': {
    ru: 'Прочитанные',
    en: 'Leer',
    jp: '読む'
  },
  'noReportsYet': {
    ru: 'Пока нет жалоб',
    en: 'Sin reportes aun',
    jp: 'まだ苦情はありません'
  },
  'unableToDisplayReports': {
    ru: 'Невозможно отобразить жалобы',
    en: 'No se pueden mostrar los reportes',
    jp: '苦情を表示できません'
  },
  'reportSent': {
    ru: 'Жалоба отправлена',
    en: 'Reporte enviado',
    jp: '苦情が送信されました'
  },
  'search': {
    ru: 'Поиск',
    en: 'Buscar',
    jp: '検索'
  },
  'searchResults': {
    ru: 'Результаты поиска',
    en: 'Resultados de busqueda',
    jp: 'の検索結果'
  },
  'enterYourSearchTerm': {
    ru: 'Введите запрос для поиска',
    en: 'Ingresa tu término de búsqueda',
    jp: '検索語を入力してください',
  },
  'noResults': {
    ru: 'Нет результатов',
    en: 'Sin resultados',
    jp: '結果がありません',
  },
  'unableToDisplaySearchResults': {
    ru: 'Невозможно отобразить результаты поиска',
    en: 'No se pueden mostrar los resultados de búsqueda',
    jp: '検索結果を表示できません',
  },
  'showMore': {
    ru: 'Показать больше',
    en: 'Mostrar más',
    jp: 'さらに表示',
  },
  'showLess': {
    ru: 'Свернуть',
    en: 'Mostrar menos',
    jp: '表示を減らす',
  },
  'threads': {
    ru: 'Треды',
    en: 'Publicaciones',
    jp: 'スレッド',
  },
  'answers': {
    ru: 'Ответы',
    en: 'Respuestas',
    jp: '答え',
  },
  'folder': {
    ru: 'Папка',
    en: 'Carpeta',
    jp: 'フォルダ',
  },
  'uploadsFolders': {
    ru: 'Папки загрузок',
    en: 'Carpetas de carga',
    jp: 'アップロードフォルダ',
  },
  'manageUploadsFolders': {
    ru: 'Управление папками загрузок',
    en: 'Administrar carpetas de carga',
    jp: 'アップロードフォルダの管理',
  },
  'createNewFolder': {
    ru: 'Создать новую папку',
    en: 'Crear nueva carpeta',
    jp: '新しいフォルダを作成',
  },
  'file1': {
    ru: 'файл',
    en: 'archivo',
    jp: 'ファイル',
  },
  'file2': {
    ru: 'файла',
    en: 'archivos',
    jp: 'ファイル',
  },
  'file3': {
    ru: 'файлов',
    en: 'archivos',
    jp: 'ファイル',
  },
  'folderShortName': {
    ru: 'Короткое имя папки',
    en: 'Nombre corto de la carpeta',
    jp: 'フォルダの短縮名',
  },
  'folderTitle': {
    ru: 'Название папки',
    en: 'Título de la carpeta',
    jp: 'フォルダのタイトル',
  },
  'folderDescription': {
    ru: 'Описание папки',
    en: 'Descripción de la carpeta',
    jp: 'フォルダの説明',
  },
  'folderPosition': {
    ru: 'Позиция папки',
    en: 'Posición de la carpeta',
    jp: 'フォルダの位置',
  },
  'noFoldersYet': {
    ru: 'Пока нет папок',
    en: 'Aún no hay carpetas',
    jp: 'まだフォルダはありません',
  },
  'unableToDisplayFolders': {
    ru: 'Невозможно отобразить папки',
    en: 'No se pueden mostrar las carpetas',
    jp: 'フォルダを表示できません',
  },
  'unableToDisplayFolder': {
    ru: 'Невозможно отобразить папку',
    en: 'No se puede mostrar la carpeta',
    jp: 'フォルダを表示できません',
  },
  'newFile': {
    ru: 'Новый файл',
    en: 'Nuevo archivo',
    jp: '新しいファイル',
  },
  'noFilesYet': {
    ru: 'Пока нет файлов',
    en: 'Aún no hay archivos',
    jp: 'まだファイルはありません',
  },
  'unableToDisplayFiles': {
    ru: 'Невозможно отобразить файлы',
    en: 'No se pueden mostrar los archivos',
    jp: 'ファイルを表示できません',
  },
  'download1': {
    ru: 'скачивание',
    en: 'descarga',
    jp: 'ダウンロード',
  },
  'download2': {
    ru: 'скачивания',
    en: 'descargas',
    jp: 'ダウンロード',
  },
  'download3': {
    ru: 'скачиваний',
    en: 'descargas',
    jp: 'ダウンロード',
  },
  'fileTitle': {
    ru: 'Заголовок файла',
    en: 'Título del archivo',
    jp: 'ファイルのタイトル',
  },
  'chooseAFolder': {
    ru: 'Выберите папку',
    en: 'Elige una carpeta',
    jp: 'フォルダを選択してください',
  },
  'yourFile': {
    ru: 'Ваш файл',
    en: 'Tu archivo',
    jp: 'あなたのファイル',
  },
  'uploadFile': {
    ru: 'Загрузить файл',
    en: 'Subir archivo',
    jp: 'ファイルをアップロードする',
  },
  'foldersNotLoaded': {
    ru: 'Папки не загружены',
    en: 'Carpetas no cargadas',
    jp: 'フォルダーがロードされていません',
  },
  'moderateFiles': {
    ru: 'Модерировать файлы',
    en: 'Moderar archivos',
    jp: '中程度のファイル',
  },
  'needToModerate': {
    ru: 'Нужно модерировать',
    en: 'Necesita moderación',
    jp: 'モデレートする必要があります',
  },
  'download': {
    ru: 'Скачать',
    en: 'Descargar',
    jp: 'ダウンロード',
  },
  'publish': {
    ru: 'Опубликовать',
    en: 'Publicar',
    jp: '公開する',
  },
  'onModeration': {
    ru: 'На модерации',
    en: 'En moderación',
    jp: '節度について',
  },
  'theFileWillBePublishedAfterModeration': {
    ru: 'Файл будет опубликован после модерации',
    en: 'El archivo se publicará después de la moderación',
    jp: 'ファイルはモデレート後に公開されます',
  },
  'fileNotFound': {
    ru: 'Файл не найден',
    en: 'Archivo no encontrado',
    jp: 'ファイルが見つかりません',
  },
  'file': {
    ru: 'Файл',
    en: 'Archivo',
    jp: 'ファイル',
  },
  'fileDeleted': {
    ru: 'Файл удален',
    en: 'Archivo eliminado',
    jp: 'ファイルが削除されました',
  },
  'editFile': {
    ru: 'Редактировать файл',
    en: 'Editar archivo',
    jp: 'ファイル編集',
  },
  'copyFileLink': {
    ru: 'Копировать ссылку на файл',
    en: 'Copiar enlace del archivo',
    jp: 'ファイルリンクのコピー',
  },
  'linkCopied': {
    ru: 'Ссылка скопирована',
    en: 'Enlace copiado',
    jp: 'リンクがコピーされました',
  },
  'failedToCopyLink': {
    ru: 'Ссылка скопирована',
    en: 'Fallo al copiar el enlace',
    jp: 'リンクのコピーに失敗しました',
  },
  'extension': {
    ru: 'Расширение',
    en: 'Extensión',
    jp: '拡張子',
  },
  'fileSize': {
    ru: 'Размер файла',
    en: 'Tamaño del archivo',
    jp: 'ファイルサイズ',
  },
  'comments': {
    ru: 'Комментарии',
    en: 'Comentarios',
    jp: 'コメント',
  },
  'noCommentsYet': {
    ru: 'Пока нет комментариев',
    en: 'Aún no hay comentarios',
    jp: 'コメントはまだありません',
  },
  'enterYourComment': {
    ru: 'Введите комментарий',
    en: 'Ingresa tu comentario',
    jp: 'コメントを入力してください',
  },
  'appointAsAModerator': {
    ru: 'Назначить модератором',
    en: 'Nombrar como moderador',
    jp: 'モデレーターに任命する',
  },
  'removeModerator': {
    ru: 'Снять модератора',
    en: 'Eliminar moderador',
    jp: 'モデレーターを削除する',
  },
  'unableToDisplayProfileInfo': {
    ru: 'Невозможно отобразить информацию профиля',
    en: 'No se puede mostrar la información del perfil',
    jp: 'プロファイル情報を表示できません',
  },
  'noMessagesYet': {
    ru: 'Пока нет сообщений',
    en: 'Aún no hay mensajes',
    jp: 'まだメッセージはありません',
  },
  'unableToDisplayMessages': {
    ru: 'Невозможно отобразить сообщения',
    en: 'No se pueden mostrar los mensajes',
    jp: 'メッセージを表示できません',
  },
  'message': {
    ru: 'Сообщение',
    en: 'Mensaje',
    jp: 'メッセージ',
  },
  'you': {
    ru: 'Вы',
    en: 'Tú',
    jp: '君は',
  },
  'dialogueWith': {
    ru: 'Диалог с',
    en: 'Diálogo con',
    jp: 'との対話',
  },
  'enterYourMessage': {
    ru: 'Введите сообщение',
    en: 'Ingresa tu mensaje',
    jp: 'メッセージを入力してください',
  },
  'isTyping': {
    ru: 'печатает',
    en: 'está escribiendo',
    jp: '入力中',
  },
  'noInternetConnection': {
    ru: 'Нет подключения к интернету',
    en: 'Sin conexión a internet',
    jp: 'インターネットに接続できません',
  },
  'karma': {
    ru: 'Карма',
    en: 'Prestigio',
    jp: 'カルマ',
  },
  'passwordChange': {
    ru: 'Смена пароля',
    en: 'Cambio de contraseña',
    jp: 'パスワードの変更',
  },
  'changePassword': {
    ru: 'Изменить пароль',
    en: 'Cambiar contraseña',
    jp: 'パスワードを変更する',
  },
  'newPassword': {
    ru: 'Новый пароль',
    en: 'Nueva contraseña',
    jp: '新しいパスワード',
  },
  'enterNewPassword': {
    ru: 'Введите новый пароль',
    en: 'Ingresa la nueva contraseña',
    jp: '新しいパスワードを入力してください',
  },
  'searchIn': {
    ru: 'Искать в',
    en: 'Buscar en',
    jp: 'で検索',
  },
  'authorizationsHistory': {
    ru: 'История авторизаций',
    en: 'Historial de autorizaciones',
    jp: '承認履歴',
  },
  'userHasNotLoggedInYet': {
    ru: 'Пользователь еще не авторизовывался',
    en: 'El usuario aún no ha iniciado sesión',
    jp: 'ユーザーはまだログインしていません',
  },
  'unableToDisplayAuthorizationsHistory': {
    ru: 'Невозможно отобразить историю авторизаций',
    en: 'No se puede mostrar el historial de autorizaciones',
    jp: '承認履歴を表示できません',
  },
  'deleteAllAnswers': {
    ru: 'Удалить все ответы',
    en: 'Eliminar todas las respuestas',
    jp: 'すべての回答を削除する',
  },
  'isViewing': {
    ru: 'в треде',
    en: 'está viendo',
    jp: 'ウォッチング',
  },
}

const imageTypes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif', 'image/webp', 'image/vnd.microsoft.icon']
const videoTypes = ['video/mp4', 'video/webm', 'video/avi', 'video/msvideo', 'video/x-msvideo', 'video/mpeg', 'video/3gpp', 'video/quicktime']
const fileExt = /(?:\.([^.]+))?$/

export { BACKEND, Strings, imageTypes, videoTypes, fileExt };
