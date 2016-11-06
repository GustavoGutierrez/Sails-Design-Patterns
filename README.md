# Sails JS Design Patterns

Implementation of design patterns based in:

[Books](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

[Node Patterns](https://github.com/azat-co/node-patterns)

## Patterns
- Decortators
- Observers
- Extends (es5)

## Globalized:
To load global was created in the config file to extend the application.js globally and have global available:

- config/application.js
- /api/base/
- /api/decorators/
- /api/observers/

## Load Decorator and Base in global
Objects and exported to global functions to extend and use globally

## Dependencies
- es5-decorator
> npm i -S es5-decorator

- sails-hook-dotenv
  https://github.com/Taiters/sails-hook-dotenv
> npm i -S sails-hook-dotenv

## Dev Dependencies

- Sails Generator Hook
> npm install sails-generate-hook -D

