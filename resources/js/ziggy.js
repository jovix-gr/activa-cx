const Ziggy = {"url":"http:\/\/activa-cx.test","port":null,"defaults":{},"routes":{"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"projects.index":{"uri":"projects","methods":["GET","HEAD"]},"projects.create":{"uri":"projects\/create","methods":["GET","HEAD"]},"projects.store":{"uri":"projects","methods":["POST"]},"projects.edit":{"uri":"projects\/{project}\/edit","methods":["GET","HEAD"]},"projects.update":{"uri":"projects\/{project}","methods":["PUT","PATCH"]},"projects.destroy":{"uri":"projects\/{project}","methods":["DELETE"]},"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"]},"password.email":{"uri":"password\/email","methods":["POST"]},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"]},"password.update":{"uri":"password\/reset","methods":["POST"]},"password.confirm":{"uri":"password\/confirm","methods":["GET","HEAD"]},"home":{"uri":"home","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
