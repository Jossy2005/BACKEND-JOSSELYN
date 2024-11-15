# Instalación 

 npm i --save @nestjs/jwt passport-jwt bcrypt
 npm i --save-dev  @types/passport-jwt 

# Arrancamos proyecto

 npm run start:dev        

# Modules & Resource 
 nest g mo modules/auth
 nest g mo modules/users

# Controllers & services 
 nest g co modules/auth
 nest g s  modules/auth