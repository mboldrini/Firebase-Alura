import { auth } from "./firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  AuthErrorCodes 
} from "firebase/auth";



export async function logar(email, senha) {
  const resultado = await signInWithEmailAndPassword(auth, email, senha)
  .then((dadosDoUsuario) => {
    console.log(dadosDoUsuario)
    return "sucesso"
  })
  .catch((error) => {
    console.log(error);
    return "erro"
  });
  return resultado
}