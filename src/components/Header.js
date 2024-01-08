import styled from "styled-components";

export default function Header(props) {
  const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
  `;
  const { changeHandler, search } = props;
  return (
    <div>
      <StyledHeader>
        <h1>Star Wars</h1>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={changeHandler}
          name="Search"
        ></input>
      </StyledHeader>
    </div>
  );
}
