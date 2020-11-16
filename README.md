Softlaw - App para agendamento e consulta de audiências por usuário desenvolvido em Angular 10 e Ionic 4.

Projeto integrador - Segundo semestre TADS.

Para executar o projeto siga os seguintes passos: 

1 - Atualize o ipv4 presente em alguns arquivos pelo seu ipv4, isso permite tornar o nosso backend acessível a quem 
    estiver conectado em sua rede.
    Para descobrir seu ipv4 digite o comando "ipconfig" no seu cmg.
    Altere o ipv4 nos seguintes arquivos.
    - backend\package.json\linha 7.
    - frontend\resources\android\xml\network_security_config.xml\linhas 6 e 7.
    - frontend\src\app\services\courtHearings\court-hearings.service.ts\linha 12.
    - frontend\src\app\services\login\login.service.ts\linha 12.
2 - Após fazer as atualizações acesse a pasta "backend" pelo cmd e inicie o backend digitando o comando "npm start".
    - Caso tenha seguido os passos corretamente aparecerá "\{^_^}/ hi!" seguido de outras informações no console.
3 - Abra outro terminal (é importante ser outro para que seu backend permaneça rodando), e acesse a pasta "frontend",
    conecte o seu dispositivo pelo cabo em sua máquina e execute o comando "ionic cordova run android --device".
    - Caso tenha seguido os passos, o aplicativo ira iniciar automáticamente em seu dispositivo.