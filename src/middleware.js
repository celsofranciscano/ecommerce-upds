export { default } from "next-auth/middleware";

// export const config = { matcher: ["/dashboard"] }
export const config = { matcher: ["/dashboard/:path*","/perfil/:path*"] } //ESTO PROTEGE TODA LAS RUTAS DEBAJO

 