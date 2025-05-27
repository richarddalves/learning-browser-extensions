1) Em chrome.runtime.onInstalled.addListener() por que tem que ter esse onInstalled,  sendo que se o script tá sendo executado, é obvio que está instalado. Algumas funções não têm isso, então não entendo a necessidade (ex.: chrome.action.onClicked não é chrome.action.onInstalled.onClicked)

2) Por que preciso sempre usar chrome. (como chrome.action.) alguma coisa no meu código, sendo que fica muito grande a chamada da função. Quais outros tipos de chrome. existem? Existe possibildiade de não usar esse chrome.?

3) Não entendi a sintaxe do background.js, sou iniciante em javascript.
O que significa async nas funções, o que aconteceria se não usasse e qual a diferença se tivesse "await"? O que é esse await também? Por que usou em vários lugares? E se eu não usasse eles?

4) Por que usou "tab" em chrome.action.onClicked.addListener()?

5) Tem muitos objetos que não faço a ideia do motivo de serem como são, de onde vieram ou sequer como eu saberia que tenho que usar eles se você não me dissesse (ex.: tab.id). É suposto ser bem mais didático.

6) Por que await chrome.action.setBadgeBackgroundColor({
    tabId: tab.id,
    color: next === "ON" ? "#4caf50" : "#777"
  }); aqui você usou tabId e em chrome.action.setBadgeBackgroundColor({ color: "#777" }); não?

7) O CSS também é muito complexo, quero que você me explique ele. Sou iniciante em CSS. me explique cada coisa, inclusive o !important

8) Não entendi por que você colocou uma outra descrição no manifest. No topo você coloca "description": "Toggle a comfortable night theme on any page.", mas depois você colocou "description": "Toggle Night-Guide"
