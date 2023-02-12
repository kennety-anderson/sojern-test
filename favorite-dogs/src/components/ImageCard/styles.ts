import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 20px;
  width: 350px;
  height: 400px
  transition: all 0.3s ease-out;
`;

const Img = styled.img`
  width: 300px;
  height: 350px;
  margin-bottom: 15px;
`;

export { Card, Img };
