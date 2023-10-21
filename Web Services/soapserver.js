const http = require('http');
const soap = require('soap');

// Definição dos métodos para os endpoints
const services = {
  MyService: {
    MyPort: {
      // Método de exemplo 1
      add(args) {
        return { result: args.a + args.b };
      },
      // Método de exemplo 2
      subtract(args) {
        return { result: args.a - args.b };
      },
      // Método de exemplo 3
      multiply(args) {
        return { result: args.a * args.b };
      },
      // Método de exemplo 4
      divide(args) {
        if (args.b === 0) {
          throw new Error('Divisão por zero não é permitida');
        }
        return { result: args.a / args.b };
      }
    }
  }
};

// Carregando o servidor SOAP
const xml = require('fs').readFileSync('myservice.wsdl', 'utf8');
const server = http.createServer(function (request, response) {
  response.end('404: Not Found: ' + request.url);
});

// Ligando o serviço SOAP ao servidor
server.listen(8080);
soap.listen(server, '/wsdl', services, xml);
