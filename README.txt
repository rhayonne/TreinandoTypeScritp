
Installer typescript

    --- > Installer le node.JS
    sudo apt install node
    --- > Installer Type Script
        --> intaller npm
            sudo apt install npm
    npm install -g typescript (installarion globale)


CFG typescript
Il faut l'archive tsconfig pour configurer le TS, pour generer l'archive il suffit utiliser les commandes (sure terminal) dendans le dossier du projet.
    Generer tsconfig.json
        tsc --init


executer le command tsc pour generer l'archive .js qui correspond l'archive ts crée  
    tsc 
Pour que le Node crée ou faisse de mis à jour automatique (n'est plus necessaire executer le commande tsc)
    tsc -w