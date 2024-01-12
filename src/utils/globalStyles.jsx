import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@media(max-width:${({ theme }) => theme.media.mobile}){
.main_container{
    padding-inline:100px;
}
.headerTextStyle{
    color:'red';
}
}
`;