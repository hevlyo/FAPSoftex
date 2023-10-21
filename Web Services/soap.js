const http = require('http');
const soap = require('soap');

const service = {
  MyService: {
    MyPort: {
      MyFunction: function (args) {
        return {
          name: args.name,
          address: args.address,
          phoneNumber: args.phoneNumber
        };
      }
    }
  }
};

const xml = require('fs').readFileSync('myservice.wsdl', 'utf8');
const server = http.createServer(function (request, response) {
  response.end("404: Not Found: " + request.url);
});

server.listen(8000);
soap.listen(server, '/wsdl', service, xml);
