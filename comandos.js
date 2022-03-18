//video de referencias muy bueno
https: //www.youtube.com/watch?v=iT4UOkyI09k

    token personal: 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

//VERSION DE GIT ESTO ESTA EN LA RAMA V3
git--version

//git init --  para crear el contenido que necesita git para trabajar
gig init

// git add. -- prepara los archivos para nuestro commit
git add.

// git reset --  revierte el git add
git reset.

//git commit -m  -- es como crear una veersión o tomar una fotografia
git commit - m "TEXTO REFERENTE"

// git checkout -- . -- restablece ultimo commit realizado recostruye
git checkout--.

//git log para ver los comits
git log
// parra arreglas el nombre del ultimo commit
git commit--amend

// para escribir  -- i.     w = write q = salir ! = para realizarlo
// para salir tecla_escape + :wq! para que lo cambie

//sirve para ver todas las ramas
git branch

//sirve para ver las ramas con detalle
git - show branch

//CREAMOS UNA NUEVA RAMA EL NOMBRE VA SIN COMILLAS
git checkout - b "rama-v3"

// para cambiarse de rama  "rama" es la rama a donde voy a ir
git checkout rama

//unir ramas por ejemplo estoy en la rama-v2 y le uno la rama-v3

git merge rama - v3

//borrar la rama "rama-v3" es el nombre de la rama que voy a borrar.
git branch - d rama - v3

//git pull
git pull

//git push sirve para subir a gitub
git push

//sirve para subir una rama en github
git push - u origin experimental

//sirve para subir la rama a github cuando no existe en github si ya existe solo con git push sube
git push--set - upstream origin v3

//si el archivo ya existe pero solo vamos a grabar cambios
// a = agregar 0 add + m = mensaje
git commit - am "agregado"


//bajar proyecto de github
git clone git @github.com: Intelego - Nexxo / nexxo - webapp.git

git remote add origin "NOMBRE DEL REPOSITORIO SIN COMILLAS"
git branch - M main
git push - u origin main

git remote - vv
git push - u origin

//copiar de otro repositorio con la clave en la liga
git clone https: //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:x-oauth-basic@github.com/intelego-nexxo/prueba.git 

    //git@github.com:intelego-nexxo/nexxo-webapp.git
    //git@github.com:intelego-nexxo/nexxo-backend.git

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

    Git branch
    //El comando git branch es el que usaremos principalmente para trabajar con la creación de ramas, borrado de ramas y demás. Sin embargo, no es el único comando para la operativa que veremos en este artículo, ya que existen otros subcomandos de Git útiles y necesarios para trabajar con ramas, como checkout para moverse entre ramas o merge para fusionar ramas.
    //Puedes comenzar tu primera práctica para trabajar con ramas. Haremos algo tan sencillo como lanzar el comando "git branch" a secas. Esto nos dará el listado de ramas que tengamos en un proyecto. Pero hay que advertir que las ramas de un repositorio local pueden ser distintas de las ramas de un repositorio remoto. Por ejemplo, cuando clonas un repositorio de GitHub generalmente estás clonando únicamente la rama master y no todas las ramas que se hayan creado a lo largo del tiempo. Otro ejemplo es cuando creas una rama en tu repositorio local. En este caso la rama la tendrás simplemente en tu proyecto local y no se subirá al repositorio remoto hasta que no lo especifiques. Ovbiamente, todas estas cosas, y otras, son las que vamos a ver en este artículo.
    //Es importante mencionar aquí que actualmente al escribir "<code>git branch</code>" se nos muestra un listado de ramas y se mantiene el terminal mostrando ese listado, como parado, sin la posibilidad de lanzar otros comandos. Puede que no ocurra en tu caso y que el comando simplemente muestre las ramas y permita luego escribir otros comandos de sistema. En todo caso, si te muestra las ramas pero te bloquea el terminal, algo que hace Git para facilitar la lectura de las ramas en proyectos donde tengas muchas creadas, puedes salir de ese listado de ramas tocando la tecla "q".

//La rama master
//Cuando inicializamos un proyecto con Git automáticamente nos encontramos en una rama a la que se denomina "master".
//En GitHub actualmente se está promoviendo la rama "main" como rama principal de los proyectos, de modo que, en vuestro caso quizás tengáis la rama "main" en vez de la rama "master" que mencionamos en este artículo. Es simplemente un cambio de nombre, pero realmente no va más allá. Es decir, tengas "master" como nombre de la rama principal o "main", todo lo relatado en este artículo es exactamente igual.
//Puedes ver las rama en la que te encuentras en cada instante con el comando:

git branch
//Esta rama es la principal de tu proyecto y a partir de la que podrás crear nuevas ramas cuando lo necesites.
//Si has hecho algún commit en tu repositorio observarás que después de lanzar el comando "git branch" nos informa el nombre de la rama como "master".

//Nota: Si no has hecho un commit en tu proyecto observarás que no se ha creado todavía ninguna rama y que el comando branch no produce ninguna salida.
//Crear una rama nueva
//El procedimiento para crear una nueva rama es bien simple. Usando el comando branch, seguido del nombre de la rama que queremos crear.

git branch experimental
//Este comando en sí no produce ninguna salida, pero podrías ver las "branches" de un proyecto con el comando "git branch", u obtener una descripción más detallada de las ramas con este otro comando:

git show-branch
    //Esto nos muestra todas las ramas del proyecto con sus commits realizados. La salida sería como la de la siguiente imagen.

//Pasar de una rama a otra
//Para moverse entre ramas usamos el comando "git checkout" seguido del nombre de la rama que queremos que sea la activa.

git checkout experimental
//esta sencilla operación tiene mucha potencia, porque nos cambiará automáticamente todos los archivos de nuestro proyecto, los de todas las carpetas, para que tengan el contenido en el que se encuentren en la correspondiente rama
//De momento en nuestro ejemplo las dos ramas tenían exactamente el mismo contenido, pero ahora podríamos empezar a hacer cambios en el proyecto experimental y sus correspondientes commit y entonces los archivos tendrán códigos diferentes, de modo que puedas ver que al pasar de una rama a otra hay cambios en los archivos.
//Si estando en la rama experimental haces un par de commit, observarás que al hacer el show-branches te mostrará nuevos datos:
//El comando checkout tiene la posibilidad de permitirte crear una rama nueva y moverte a ella en un único paso. Para crear una nueva rama y situarte sobre ella tendrás que darle un nombre y usar el parámetro -b.

git checkout - b otrarama
    //Como salida obtendrás el mensaje Switched to a new branch 'otrarama'. Eso quiere decir que, además de crear la rama, nuestra cabecera está apuntando hacia esta nueva branch.
    //Si te dedicas a editar tus ficheros, crear nuevos archivos y demás en las distintas ramas entonces podrás observar que al moverte de una a otra con checkout el proyecto cambia automáticamente en tu editor, mostrando el estado actual en cada una de las ramas donde te estás situando. Es algo divertido y, si eres nuevo en Git verás que es una magia que resulta bastante sorprendente.
    //Como estás entendiendo, el proyecto puede tener varios estados en un momento dado y tú podrás moverte de uno a otro con total libertad y sin tener que cambiar de carpeta ni nada parecido. Si usas un programa de interfaz gráfica de Git, como SourceTree o cualquier otro, podrás ver las ramas en un esquema gráfico más entendible que en la consola de comandos.


//Fusionar ramas
//A medida que crees ramas y cambies el estado del las carpetas o archivos tu proyecto empezará a divergir de una rama a otra. Llegará el momento en el que te interese fusionar ramas para poder incorporar el trabajo realizado a la rama master.
//El proceso de fusionado se conoce como "merge" y puede llegar a ser muy simple o más complejo si se encuentran cambios que Git no pueda procesar de manera automática. Git para procesar los merge usa un antecesor común y comprueba los cambios que se han introducido al proyecto desde entonces, combinando el código de ambas ramas.
//Para hacer un merge nos situamos en una rama, en este caso la "master", y decimos con qué otra rama se debe fusionar el código.
//El siguiente comando, lanzado desde la rama "master", permite fusionarla con la rama "experimental".

git merge experimental
//Un merge necesita un mensaje, igual que ocurre con los commit, por lo que al realizar ese comando se abrirá "Vim" (o cualquioer otro editor de consola que tengas configurado) para que introduzcas los comentarios que juzgues oportuno. Salir de Vim lo consigues pulsando la tecla ESC y luego escribiendo ":q" y pulsando enter para aceptar ese comando. Esta operativa de indicar el mensaje se puede resumir con el comando:

git merge experimental - m 'Esto es un merge con mensaje'
    //En la siguiente imagen puedes ver una secuencia de comandos y su salida. Primero el cambio a la rama master "git checkout master", luego el "git branch" para confirmar en qué rama nos encontramos y por último el merge para fusionarla con la rama experimental.


//Luego podremos comprobar que nuestra rama master tiene todo el código nuevo de la rama experimental y podremos hacer nuevos commits en master para seguir el desarrollo de nuestro proyecto ya con la rama principal, si es nuestro deseo.
//Si tenemos un programa de Git por interfaz gráfica podremos ver el diagrama con el combinado de las ramas.

//Fusionar los cambios de master en la rama en desarrollo
//Durante tu trabajo en el desarrollo del proyecto gestionado con Git también puede ser normal que se vayan haciendo cambios en la rama master, o en otras ramas en desarrollo, y quieras traerlos para tu rama actual. Por ejemplo, la rama experimental está tardando varios días o semanas en completarse y mientras tanto han agregado nuevas features que quieras que esté disponibles también en la rama experimental.

//Entonces seguramente querrás traerte los cambios de la rama master. Para ello, estando en la rama experimental, puedes lanzar el siguiente comando.

git merge master - m 'Un mensaje del merge de master en el branch experimental'
    //Ya lo tienes! ahora tu rama está actualizada con todos los cambios en master. Puedes seguir desarrollando tu rama experimental sabiendo que tienes el proyecto actualizado.

//Subir una rama al repositorio remoto (Github o similares)
//Como habíamos dicho anteriormente, por mucho que hagas la operativa descrita para crear ramas en tu ordenador, y las puedas ver en tu repositorio local con git branch, las ramas no se publicarán en Github o cualquier otro hosting de repositorios remoto. Para que esto ocurra tienes que realizar específicamente la acción de subir una rama determinada.

//La operativa de publicar una rama en remoto la haces mediante el comando push, indicando la opción "-u" y el nombre de la rama que deseas subir. Por ejemplo de esta manera:

git push - u origin experimental
    //Así estamos haciendo un push, empujando hacia origin (que es el nombre que se suele dar al repositorio remoto), la rama con nombre "experimental".

//Por cierto, si subimos el proyecto a Github podremos ver también un diagrama de las ramas que hemos ido creando y fusionando a master, en la sección Graps / Network.

//Borrar una rama
//En ocasione puede ser necesario eliminar una rama del repositorio, por ejemplo porque nos hayamos equivocado en el nombre al crearla. Aquí la operativa puede ser diferente, dependiendo de si hemos subido ya esa rama a remoto o si todavía solamente está en local.

//Borrado de la rama en local
//Esto lo conseguimos con el comando git branch, solamente que ahora usamos la opción "-d" para indicar que esa rama queremos borrarla.

git branch - d rama_a_borrar

//Sin embargo, puede que esta acción no nos funcione porque hayamos hecho cambios que no se hayan salvado en el repositorio remoto, o no se hayan fusionado con otras ramas. En el caso que queramos forzar el borrado de la rama, para eliminarla independientemente de si se ha hecho el push o el merge, tendrás que usar la opción "-D".

git branch - D rama_a_borrar
    //Debes prestar especial atención a esta opción "-D", ya que al eliminar de este modo pueden haber cambios que ya no se puedan recuperar. Como puedes apreciar, es bastante fácil de confundir con "-d", opción más segura, ya que no permite borrado de ramas en situaciones donde se pueda perder código.

//Eliminar un branch en remoto
//Si la rama que queremos eliminar está en el repositorio remoto, la operativa es un poco diferente. Tenemos que hacer un push, indicando la opción --delete, seguida de la rama que se desea borrar.

git push origin--delete rama_a_borrar

//Descargar una rama de remoto
//A veces ocurre que se generan ramas en remoto, por ejemplo cuando han sido creadas por otros usuarios y subidas al hosting de repositorios, como GitHub o similares, y necesitamos acceder a ellas en local para verificar los cambios o continuar el trabajo. En principio esas ramas en remoto creadas por otros usuarios no están disponibles para nosotros en local, pero las podemos descargar.
//El proceso para obtener una rama del repositorio remoto es bien sencillo. Lo conseguimos con el comando fetch.
git fetch

//Lanzado ese comando hemos podido descargar la rama git de remoto. Ahora podemos acceder a ella con los comandos que ya conoces.

git checkout mi_rama_remota_descargada


git remote add origin https: //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@github.com:kimerapb/bikestote-luisRdz.git     
    git branch - M main
git push - u origin main

git remote set - url origin https: //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@github.com:kimerapb/bikestote-luisRdz.git

    git push https: //<GITHUB_ACCESS_TOKEN>@github.com/<GITHUB_USERNAME>/<REPOSITORY_NAME>.git

    //REPOSITORIO
    git push https://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@github.com/intelego-nexxo/nexxo-webapp.git

    git clone https://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@github.com/intelego-nexxo/nexxo-webapp.git

    //iguala mi git con github
    git pull https://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@github.com/intelego-nexxo/nexxo-webapp.git

    //nose para qyue es
    git fetch https://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@github.com/intelego-nexxo/nexxo-webapp.git

    //git@github.com:intelego-nexxo/nexxo-webapp.git
    //git@github.com:intelego-nexxo/nexxo-backend.git




