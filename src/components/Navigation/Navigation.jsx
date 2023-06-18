import { useAuth } from "hooks/useAuth"
import { LinkStyle } from "./Navigation.styled";



export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkStyle to='/'>Home</LinkStyle> 
      {isLoggedIn && <LinkStyle to='/contacts'>Contacts</LinkStyle>}

    </nav>
  )

}